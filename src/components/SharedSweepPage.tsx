import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SweepView } from './SweepView';
import { subscribeSweepByToken, updateTodoItem } from '@/services/sweepService';
import { Sweep } from '@/types';
import { AnimatedBroomLoader } from '@/components/AnimatedBroomLoader';

export function SharedSweepPage() {
  const { token } = useParams<{ token: string }>();
  const [sweep, setSweep] = useState<Sweep | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Subscribe to sweep data using token
  useEffect(() => {
    if (!token) {
      setError('Invalid share link token');
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = subscribeSweepByToken(token, (sweepData) => {
      if (sweepData) {
        setSweep(sweepData);
        setError(null); // Clear error if data loads successfully
      } else {
        // Handle case where sweep is not found, not public, or error occurs
        setSweep(null);
        setError('Sweep not found, access denied, or an error occurred.'); 
      }
      setLoading(false);
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();

  }, [token]); // Re-run effect if token changes

  // Handle todo item completion toggle (remove optimistic update)
  const handleToggleComplete = async (todoId: string, completed: boolean) => {
    if (!sweep) return;
    
    try {
      // Update in Firestore - the listener will update the UI
      await updateTodoItem(sweep.id, todoId, { completed });
      
    } catch (err) {
      console.error('Error updating todo item:', err);
      // Optionally: Show a temporary error message to the user
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AnimatedBroomLoader />
      </div>
    );
  }

  if (error || !sweep) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700 mb-6">
            {error || 'Unable to load the requested sweep'}
          </p>
          <Link to="/">
            <Button>Go to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SweepView 
        sweep={sweep}
        isPublicView={true}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
} 