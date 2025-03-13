import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllSweeps, deleteSweep, createSweep } from '@/services/sweepService';
import { Sweep } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { Trash2, Share2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { getShareLink } from '@/services/sweepService';

export function SweepsPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [sweeps, setSweeps] = useState<Sweep[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [sharing, setSharing] = useState<string | null>(null);

  const fetchSweeps = async () => {
    try {
      setLoading(true);
      setError(null);
      const allSweeps = await getAllSweeps();
      
      // Filter sweeps by current user if available
      const filteredSweeps = currentUser 
        ? allSweeps.filter(sweep => !sweep.createdBy || sweep.createdBy === currentUser.email || sweep.createdBy === currentUser.uid)
        : allSweeps;
        
      setSweeps(filteredSweeps);
      
      // If there are no sweeps, navigate back to the homepage
      if (filteredSweeps.length === 0) {
        navigate('/');
      }
    } catch (err) {
      console.error('Error fetching sweeps:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch sweeps');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSweeps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleCreateNew = async () => {
    try {
      setCreating(true);
      setError(null);
      
      // Create a new sweep with default "Untitled Sweep" title
      const sweepId = await createSweep();
      
      // Navigate directly to the new sweep
      navigate(`/sweep/${sweepId}`);
    } catch (err) {
      console.error('Error creating sweep:', err);
      setError(err instanceof Error ? err.message : 'Failed to create sweep');
      setCreating(false);
    }
  };

  const handleOpenSweep = (id: string) => {
    navigate(`/sweep/${id}`);
  };

  const handleDeleteSweep = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // Prevent card click from triggering
    
    if (window.confirm('Are you sure you want to delete this sweep? This action cannot be undone.')) {
      try {
        setDeleting(id);
        await deleteSweep(id);
        
        // Refresh the list of sweeps
        await fetchSweeps();
      } catch (err) {
        console.error('Error deleting sweep:', err);
        setError(err instanceof Error ? err.message : 'Failed to delete sweep');
      } finally {
        setDeleting(null);
      }
    }
  };

  const handleShareSweep = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // Prevent card click from triggering
    
    try {
      setSharing(id);
      const shareLink = await getShareLink(id);
      
      // Copy to clipboard
      await navigator.clipboard.writeText(shareLink);
      alert('Share link copied to clipboard!');
    } catch (err) {
      console.error('Error sharing sweep:', err);
      setError(err instanceof Error ? err.message : 'Failed to share sweep');
    } finally {
      setSharing(null);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">All Sweeps</h1>
        </div>
        <Button onClick={handleCreateNew} disabled={creating}>
          {creating ? 'Creating...' : 'Create New Sweep'}
        </Button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Loading sweeps...</div>
      ) : sweeps.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No sweeps found</p>
          <Button onClick={handleCreateNew} disabled={creating}>
            {creating ? 'Creating...' : 'Create Your First Sweep'}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sweeps.map((sweep) => (
            <Card key={sweep.id} className="cursor-pointer hover:shadow-md transition-shadow relative" onClick={() => handleOpenSweep(sweep.id)}>
              <CardHeader>
                <CardTitle>{sweep.title || 'Untitled Sweep'}</CardTitle>
                <CardDescription>
                  Created {formatDistanceToNow(sweep.createdAt, { addSuffix: true })}
                  {sweep.createdBy && <div className="text-xs mt-1">by {sweep.createdBy}</div>}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  {sweep.todos.length} {sweep.todos.length === 1 ? 'todo' : 'todos'}
                </p>
                <p className="text-sm text-gray-500">
                  {sweep.todos.filter(todo => todo.completed).length} completed
                </p>
                {sweep.isPublic && (
                  <p className="text-xs text-green-600 mt-2">
                    Public access enabled
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-sm text-amber-600">
                  Expires {formatDistanceToNow(sweep.expiresAt, { addSuffix: true })}
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                    onClick={(e) => handleShareSweep(e, sweep.id)}
                    disabled={sharing === sweep.id}
                  >
                    {sharing === sweep.id ? 'Sharing...' : <Share2 size={16} />}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={(e) => handleDeleteSweep(e, sweep.id)}
                    disabled={deleting === sweep.id}
                  >
                    {deleting === sweep.id ? 'Deleting...' : <Trash2 size={16} />}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 