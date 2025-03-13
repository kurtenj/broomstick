import { useState, useEffect, useRef } from 'react';
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

export function SweepPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentUser, isAuthorized } = useAuth();
  const [sweep, setSweep] = useState<Sweep | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [extending, setExtending] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [updatingTitle, setUpdatingTitle] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

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
      } else {
        setError('Sweep not found');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  // Handle sharing the sweep
  const handleShare = async () => {
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

  // Toggle public access
  const handleTogglePublicAccess = async () => {
    if (!sweep || !id) return;
    
    try {
      await toggleSweepPublicAccess(id, !sweep.isPublic);
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

  const daysRemaining = getDaysRemaining();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <Button variant="outline" size="sm" onClick={handleBackToSweeps}>
            ← Back to Sweeps
          </Button>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={handleCopyLink}>
            {copied ? 'Copied!' : 'Copy Link'}
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleExtend}
            disabled={extending}
          >
            {extending ? 'Extending...' : `Extend (${daysRemaining} days left)`}
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
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
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleBackToSweeps}
            >
              All Sweeps
            </Button>
            
            <Button 
              variant={sweep?.isPublic ? "default" : "outline"}
              size="sm"
              onClick={handleTogglePublicAccess}
              className="ml-2"
            >
              {sweep?.isPublic ? 'Public' : 'Private'}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleShare}
              disabled={sharing}
              className="ml-2"
            >
              {sharing ? 'Generating...' : 'Share'}
            </Button>
          </div>
        </div>
        
        {shareLink && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700 truncate mr-2">
                {shareLink}
              </p>
              <Button 
                size="sm" 
                onClick={handleCopyShareLink}
              >
                {shareLinkCopied ? 'Copied!' : 'Copy Link'}
              </Button>
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