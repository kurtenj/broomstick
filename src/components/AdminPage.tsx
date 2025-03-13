import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { addUserToWhitelist, isUserAdmin } from '@/contexts/AuthContext';

interface AuthorizedUser {
  email: string;
  role: string;
  invitedBy: string;
  invitedAt: Date;
  status: string;
  lastLogin: Date | null;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

export function AdminPage() {
  const { currentUser } = useAuth();
  const [users, setUsers] = useState<AuthorizedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState('user');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Check if current user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (currentUser?.email) {
        const adminStatus = await isUserAdmin(currentUser.email);
        setIsAdmin(adminStatus);
        
        if (!adminStatus) {
          setError('You do not have admin privileges to access this page.');
        }
      }
      setLoading(false);
    };

    checkAdminStatus();
  }, [currentUser]);

  // Convert Firestore timestamp to Date
  const convertTimestamp = (timestamp: FirestoreTimestamp | null): Date | null => {
    if (!timestamp) return null;
    return new Date(timestamp.seconds * 1000);
  };

  // Load authorized users
  useEffect(() => {
    const fetchUsers = async () => {
      if (!isAdmin) return;
      
      try {
        const usersCollection = collection(db, 'authorizedUsers');
        const userSnapshot = await getDocs(usersCollection);
        const userList: AuthorizedUser[] = [];
        
        userSnapshot.forEach((doc) => {
          const userData = doc.data();
          userList.push({
            email: doc.id,
            role: userData.role || 'user',
            invitedBy: userData.invitedBy || '',
            status: userData.status || 'active',
            invitedAt: convertTimestamp(userData.invitedAt as FirestoreTimestamp) || new Date(),
            lastLogin: convertTimestamp(userData.lastLogin as FirestoreTimestamp)
          });
        });
        
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to load users. Please try again.');
      }
    };

    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  // Add new user to whitelist
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    if (!newUserEmail) {
      setError('Please enter an email address.');
      return;
    }
    
    if (!currentUser?.email) {
      setError('You must be logged in to add users.');
      return;
    }
    
    try {
      const result = await addUserToWhitelist(newUserEmail, newUserRole, currentUser.email);
      
      if (result) {
        setSuccess(`User ${newUserEmail} has been added to the whitelist.`);
        setNewUserEmail('');
        
        // Refresh user list
        const usersCollection = collection(db, 'authorizedUsers');
        const userSnapshot = await getDocs(usersCollection);
        const userList: AuthorizedUser[] = [];
        
        userSnapshot.forEach((doc) => {
          const userData = doc.data();
          userList.push({
            email: doc.id,
            role: userData.role || 'user',
            invitedBy: userData.invitedBy || '',
            status: userData.status || 'active',
            invitedAt: convertTimestamp(userData.invitedAt as FirestoreTimestamp) || new Date(),
            lastLogin: convertTimestamp(userData.lastLogin as FirestoreTimestamp)
          });
        });
        
        setUsers(userList);
      } else {
        setError('Failed to add user. Please try again.');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      setError('An error occurred while adding the user.');
    }
  };

  // Remove user from whitelist
  const handleRemoveUser = async (email: string) => {
    if (!confirm(`Are you sure you want to remove ${email} from the whitelist?`)) {
      return;
    }
    
    try {
      const userRef = doc(db, 'authorizedUsers', email);
      await deleteDoc(userRef);
      
      setUsers(users.filter(user => user.email !== email));
      setSuccess(`User ${email} has been removed from the whitelist.`);
    } catch (error) {
      console.error('Error removing user:', error);
      setError('Failed to remove user. Please try again.');
    }
  };

  // Change user role
  const handleChangeRole = async (email: string, newRole: string) => {
    try {
      const userRef = doc(db, 'authorizedUsers', email);
      await updateDoc(userRef, { role: newRole });
      
      setUsers(users.map(user => 
        user.email === email ? { ...user, role: newRole } : user
      ));
      
      setSuccess(`Role for ${email} has been updated to ${newRole}.`);
    } catch (error) {
      console.error('Error updating user role:', error);
      setError('Failed to update user role. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-700">
            You do not have permission to access the admin panel. Please contact an administrator if you believe this is an error.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      
      {/* Add new user form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        
        <form onSubmit={handleAddUser} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="user@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              id="role"
              value={newUserRole}
              onChange={(e) => setNewUserRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <Button type="submit" className="w-full">
            Add User
          </Button>
        </form>
        
        {error && (
          <div className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        
        {success && (
          <div className="p-4 mt-4 text-sm text-green-700 bg-green-100 rounded-lg">
            {success}
          </div>
        )}
      </div>
      
      {/* User list */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Authorized Users</h2>
        
        {users.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invited By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invited At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <select
                        value={user.role}
                        onChange={(e) => handleChangeRole(user.email, e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.invitedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.invitedAt.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastLogin ? user.lastLogin.toLocaleDateString() : 'Never'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleRemoveUser(user.email)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 