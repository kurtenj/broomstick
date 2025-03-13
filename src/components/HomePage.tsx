import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { createSweep, checkFirestoreSetup } from '@/services/sweepService';

export function HomePage() {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [firestoreStatus, setFirestoreStatus] = useState<'checking' | 'ready' | 'error'>('checking');

  useEffect(() => {
    const checkFirestore = async () => {
      try {
        const isSetup = await checkFirestoreSetup();
        setFirestoreStatus(isSetup ? 'ready' : 'error');
      } catch (err) {
        console.error('Error checking Firestore setup:', err);
        setFirestoreStatus('error');
      }
    };

    checkFirestore();
  }, []);

  const handleCreateSweep = async () => {
    try {
      setCreating(true);
      setError(null);
      
      if (firestoreStatus !== 'ready') {
        throw new Error('Firebase is not properly configured. Please check your Firebase setup.');
      }
      
      // Create a new sweep with default "Untitled Sweep" title
      const sweepId = await createSweep();
      navigate(`/sweep/${sweepId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create sweep');
      setCreating(false);
    }
  };

  const handleViewAllSweeps = () => {
    navigate('/sweeps');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="flex justify-center">
            <img 
              src="/images/broomstick-logo.svg" 
              alt="Broomstick" 
              className="h-16 w-auto"
            />
          </div>
          <p className="mt-3 text-xl">
            Temporary design sweeps for your team
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button 
            onClick={handleCreateSweep}
            disabled={creating || firestoreStatus !== 'ready'}
            className="w-full"
          >
            {creating ? 'Creating...' : 'Create New Sweep'}
          </Button>

          <Button 
            onClick={handleViewAllSweeps}
            variant="outline"
            className="w-full"
            disabled={firestoreStatus !== 'ready'}
          >
            View All Sweeps
          </Button>

          {firestoreStatus === 'checking' && (
            <div className="text-blue-500 mt-2">Checking Firebase connection...</div>
          )}

          {firestoreStatus === 'error' && (
            <div className="text-red-500 mt-2">
              Firebase connection error. Please check your Firebase configuration.
            </div>
          )}

          {error && (
            <div className="text-red-500 mt-2">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
} 