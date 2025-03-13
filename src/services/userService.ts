import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

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