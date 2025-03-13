import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { getSweepByToken, updateTodoItem } from '@/services/sweepService';
import { Sweep, TodoItem } from '@/types';

export function SharedSweepPage() {
  const { token } = useParams<{ token: string }>();
  const [sweep, setSweep] = useState<Sweep | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load sweep data
  useEffect(() => {
    const loadSweep = async () => {
      if (!token) {
        setError('Invalid share link');
        setLoading(false);
        return;
      }

      try {
        const sweepData = await getSweepByToken(token);
        
        if (!sweepData) {
          setError('Sweep not found or access denied');
        } else {
          setSweep(sweepData);
        }
      } catch (err) {
        console.error('Error loading sweep:', err);
        setError('Failed to load sweep data');
      } finally {
        setLoading(false);
      }
    };

    loadSweep();
  }, [token]);

  // Handle todo item completion toggle
  const handleToggleComplete = async (todoId: string, completed: boolean) => {
    if (!sweep) return;
    
    try {
      await updateTodoItem(sweep.id, todoId, { completed });
      
      // Update local state
      setSweep({
        ...sweep,
        todos: sweep.todos.map(todo => 
          todo.id === todoId ? { ...todo, completed } : todo
        )
      });
    } catch (err) {
      console.error('Error updating todo item:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
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
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            {sweep.title || 'Untitled Sweep'}
          </h1>
          <div className="text-sm text-gray-500">
            Shared view
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Expires: {sweep.expiresAt.toLocaleDateString()}
          </p>
        </div>

        {sweep.todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No items in this sweep</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {sweep.todos.map((todo: TodoItem) => (
              <li 
                key={todo.id} 
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onCheckedChange={(checked) => 
                      handleToggleComplete(todo.id, checked === true)
                    }
                  />
                  <div className="flex-1">
                    <label 
                      htmlFor={`todo-${todo.id}`}
                      className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}
                    >
                      {todo.text}
                    </label>
                    
                    {todo.screenshotUrl && (
                      <div className="mt-3">
                        <img 
                          src={todo.screenshotUrl} 
                          alt="Screenshot" 
                          className="max-w-full rounded-md border border-gray-200"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 