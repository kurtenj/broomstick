import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TodoList } from '@/components/TodoList';
import { Sweep, TodoItem } from '@/types';
import { 
  subscribeSweep, 
  addTodoItem, 
  updateTodoItem, 
  deleteTodoItem,
  extendSweep,
  updateSweepTitle,
  toggleSweepPublicAccess,
  getShareLink
} from '@/services/sweepService';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, Globe, ArrowLeft } from 'lucide-react';

export function SweepPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentUser, isAuthorized } = useAuth();
  const [sweep, setSweep] = useState<Sweep | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [extending, setExtending] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [updatingTitle, setUpdatingTitle] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  // Handle sharing the sweep
  const handleShare = useCallback(async () => {
    if (!sweep || !id) return;
    
    try {
      setSharing(true);
      const link = await getShareLink(id);
      setShareLink(link);
    } catch (err) {
      console.error('Error generating share link:', err);
      setError('Failed to generate share link');
    } finally {
      setSharing(false);
    }
  }, [id, sweep, setSharing, setShareLink, setError]);

  // Check authentication
  useEffect(() => {
    if (!currentUser && !isAuthorized && !loading) {
      navigate('/login', { state: { from: `/sweep/${id}` } });
    }
  }, [currentUser, isAuthorized, id, navigate, loading]);

  useEffect(() => {
    if (!id) {
      setError('No sweep ID provided');
      setLoading(false);
      return;
    }

    // Subscribe to sweep changes
    const unsubscribe = subscribeSweep(id, (data) => {
      if (data) {
        setSweep(data);
        setNewTitle(data.title || 'Untitled Sweep');
        
        // If the sweep is public, generate the share link
        if (data.isPublic && !shareLink) {
          handleShare();
        } else if (!data.isPublic) {
          // If the sweep is private, clear the share link
          setShareLink(null);
        }
      } else {
        setError('Sweep not found');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id, handleShare, shareLink]);

  // Focus the title input when editing starts
  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
      // Select all text for easy replacement
      titleInputRef.current.select();
    }
  }, [isEditingTitle]);

  const handleAddTodo = async (text: string, screenshotFile?: File) => {
    if (!id) return;
    
    try {
      await addTodoItem(id, text, screenshotFile);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add todo item');
    }
  };

  const handleUpdateTodo = async (todoId: string, updates: Partial<Pick<TodoItem, 'text' | 'completed'>>) => {
    if (!id) return;
    
    try {
      await updateTodoItem(id, todoId, updates);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo item');
    }
  };

  const handleDeleteTodo = async (todoId: string) => {
    if (!id) return;
    
    try {
      await deleteTodoItem(id, todoId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete todo item');
    }
  };

  const handleExtend = async () => {
    if (!id) return;
    
    try {
      setExtending(true);
      await extendSweep(id);
      setExtending(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to extend sweep');
      setExtending(false);
    }
  };

  const handleBackToSweeps = () => {
    navigate('/sweeps');
  };

  const getDaysRemaining = () => {
    if (!sweep) return 0;
    
    const now = new Date();
    const expiresAt = sweep.expiresAt;
    const diffTime = expiresAt.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return Math.max(0, diffDays);
  };

  const handleStartEditingTitle = () => {
    setIsEditingTitle(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleSaveTitle = async () => {
    if (!id || !sweep) return;
    
    // Don't save if the title hasn't changed
    if (newTitle === sweep.title) {
      setIsEditingTitle(false);
      return;
    }
    
    try {
      setUpdatingTitle(true);
      await updateSweepTitle(id, newTitle || 'Untitled Sweep');
      setIsEditingTitle(false);
      setUpdatingTitle(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update sweep title');
      setUpdatingTitle(false);
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveTitle();
    } else if (e.key === 'Escape') {
      setIsEditingTitle(false);
      setNewTitle(sweep?.title || 'Untitled Sweep');
    }
  };

  // Copy share link to clipboard
  const handleCopyShareLink = () => {
    if (!shareLink) return;
    
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        setShareLinkCopied(true);
        setTimeout(() => setShareLinkCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy share link:', err);
      });
  };

  // Toggle public access and handle share link generation
  const handleTogglePublicAccess = async () => {
    if (!sweep || !id) return;
    
    try {
      const newPublicState = !sweep.isPublic;
      await toggleSweepPublicAccess(id, newPublicState);
      
      // If toggling to public, generate the share link
      if (newPublicState) {
        handleShare();
      } else {
        // If toggling to private, clear the share link
        setShareLink(null);
      }
    } catch (err) {
      console.error('Error toggling public access:', err);
      setError('Failed to update sharing settings');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading sweep...</p>
      </div>
    );
  }

  if (error || !sweep) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="text-destructive mb-4">{error || 'Sweep not found'}</p>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleBackToSweeps}
              className="mr-3 p-1 h-8 w-8"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to Sweeps</span>
            </Button>
            
            {isEditingTitle ? (
              <div className="flex-1">
                <Input
                  ref={titleInputRef}
                  type="text"
                  value={newTitle}
                  onChange={handleTitleChange}
                  onKeyDown={handleTitleKeyDown}
                  className="text-xl font-bold"
                  disabled={updatingTitle}
                  onBlur={handleSaveTitle}
                  autoFocus
                />
              </div>
            ) : (
              <h1 
                className="text-2xl font-bold cursor-pointer hover:text-primary transition-colors"
                onClick={handleStartEditingTitle}
              >
                {sweep?.title || 'Untitled Sweep'}
              </h1>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant={sweep?.isPublic ? "default" : "outline"}
              size="sm"
              onClick={handleTogglePublicAccess}
              className="flex items-center gap-2"
            >
              {sweep?.isPublic ? (
                <>
                  <Globe className="h-4 w-4" />
                  <span>Public</span>
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  <span>Private</span>
                </>
              )}
            </Button>
          </div>
        </div>
        
        {sweep.isPublic && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <div className="flex items-center justify-between">
              {shareLink ? (
                <>
                  <p className="text-sm text-gray-700 truncate mr-2">
                    {shareLink}
                  </p>
                  <Button 
                    size="sm" 
                    onClick={handleCopyShareLink}
                  >
                    {shareLinkCopied ? 'Copied!' : 'Copy Link'}
                  </Button>
                </>
              ) : (
                <p className="text-sm text-gray-700">
                  {sharing ? 'Generating share link...' : 'Share link will appear here'}
                </p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Anyone with this link can view and mark items as complete
            </p>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Expires: {sweep?.expiresAt.toLocaleDateString()} 
            ({getDaysRemaining()} days remaining)
          </p>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleExtend}
            disabled={extending}
          >
            {extending ? 'Extending...' : 'Extend (3 days)'}
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      <TodoList 
        items={sweep.todos} 
        onAddItem={handleAddTodo}
        onUpdateItem={handleUpdateTodo}
        onDeleteItem={handleDeleteTodo}
      />
    </div>
  );
} 