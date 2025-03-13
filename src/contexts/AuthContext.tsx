import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Define the shape of our auth context
interface AuthContextType {
  currentUser: User | null;
  isAuthorized: boolean;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
  error: string | null;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the props for our provider component
interface AuthProviderProps {
  children: ReactNode;
}

// Create a provider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const auth = getAuth();

  // Check if a user is in the whitelist
  const checkUserAuthorization = async (user: User) => {
    try {
      // Check if user exists in the whitelist
      const userRef = doc(db, 'authorizedUsers', user.email || '');
      const userDoc = await getDoc(userRef);

      if (userDoc.exists() && userDoc.data().status === 'active') {
        setIsAuthorized(true);
        // Update last login timestamp
        await setDoc(userRef, {
          lastLogin: new Date(),
          ...userDoc.data()
        }, { merge: true });
        return true;
      } else {
        setIsAuthorized(false);
        setError('You are not authorized to access this application. Please contact an administrator.');
        return false;
      }
    } catch (error) {
      console.error('Error checking user authorization:', error);
      setIsAuthorized(false);
      setError('Error checking authorization status. Please try again later.');
      return false;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Check if user is authorized
      const isUserAuthorized = await checkUserAuthorization(result.user);
      
      if (!isUserAuthorized) {
        // Sign out if not authorized
        await firebaseSignOut(auth);
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  // Sign in with GitHub
  const signInWithGithub = async () => {
    setError(null);
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Check if user is authorized
      const isUserAuthorized = await checkUserAuthorization(result.user);
      
      if (!isUserAuthorized) {
        // Sign out if not authorized
        await firebaseSignOut(auth);
      }
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
      setError('Failed to sign in with GitHub. Please try again.');
    }
  };

  // Sign out
  const signOut = async () => {
    setError(null);
    try {
      await firebaseSignOut(auth);
      setIsAuthorized(false);
    } catch (error) {
      console.error('Error signing out:', error);
      setError('Failed to sign out. Please try again.');
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Check if user is authorized
        await checkUserAuthorization(user);
      } else {
        setIsAuthorized(false);
      }
      
      setIsLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [auth]);

  // Create the value object
  const value = {
    currentUser,
    isAuthorized,
    isLoading,
    signInWithGoogle,
    signInWithGithub,
    signOut,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Helper function to add a user to the whitelist (for admin use)
export async function addUserToWhitelist(email: string, role: string = 'user', invitedBy: string) {
  try {
    const userRef = doc(db, 'authorizedUsers', email);
    await setDoc(userRef, {
      email,
      role,
      invitedBy,
      invitedAt: new Date(),
      status: 'active',
      lastLogin: null
    });
    return true;
  } catch (error) {
    console.error('Error adding user to whitelist:', error);
    return false;
  }
}

// Helper function to check if a user is an admin
export async function isUserAdmin(email: string): Promise<boolean> {
  try {
    const userRef = doc(db, 'authorizedUsers', email);
    const userDoc = await getDoc(userRef);
    
    return userDoc.exists() && userDoc.data().role === 'admin';
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
} 