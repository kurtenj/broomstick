import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SweepView } from './SweepView';
import { Sweep, TodoItem } from '@/types';
import { 
  subscribeSweep, 
  addTodoItem, 
  updateTodoItem, 
  deleteTodoItem,
  updateSweepTitle,
  getShareLink
} from '@/services/sweepService';
import { useAuth } from '@/contexts/AuthContext';
import { Link as LinkIcon, Check } from 'lucide-react';
import { AnimatedBroomLoader } from '@/components/AnimatedBroomLoader';

export function SweepPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentUser, isAuthorized } = useAuth();
  const [sweep, setSweep] = useState<Sweep | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [updatingTitle, setUpdatingTitle] = useState(false);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [generatingLink, setGeneratingLink] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

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

    const unsubscribe = subscribeSweep(id, (data) => {
      if (data) {
        setSweep(data);
        if (!isEditingTitle) {
          setNewTitle(data.title || 'Untitled Sweep');
        }
      } else {
        setError('Sweep not found');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id, isEditingTitle]);

  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
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

  const handleToggleCompleteForView = (todoId: string, completed: boolean) => {
    handleUpdateTodo(todoId, { completed });
  };

  const handleUpdateScreenshot = async (todoId: string, screenshotFile: File) => {
    if (!id) return;

    try {
      await updateTodoItem(id, todoId, { screenshotFile });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update screenshot');
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

  const handleBackToSweeps = () => {
    navigate('/sweeps');
  };

  const handleStartEditingTitle = () => {
    if (!sweep) return;
    setNewTitle(sweep.title || 'Untitled Sweep');
    setIsEditingTitle(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleSaveTitle = async () => {
    if (!id || !sweep) return;
    
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

  const handleCopyShareLink = async () => {
    if (!id || generatingLink) return;
    
    setGeneratingLink(true);
    try {
      const link = await getShareLink(id);
      if (link) {
        await navigator.clipboard.writeText(link);
        setShareLinkCopied(true);
        setTimeout(() => setShareLinkCopied(false), 2500);
      } else {
        setError('Could not generate or find share link.');
      }
    } catch (err) {
      console.error('Failed to copy share link:', err);
      setError(err instanceof Error ? err.message : 'Failed to copy share link');
    } finally {
      setGeneratingLink(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] pt-16">
        <AnimatedBroomLoader />
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
      {error && (
        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      {sweep && (
        <SweepView 
          sweep={sweep} 
          isPublicView={false} 
          onToggleComplete={handleToggleCompleteForView}
          onAddItem={handleAddTodo}
          onDeleteItem={handleDeleteTodo}
          onUpdateScreenshot={handleUpdateScreenshot}
          isEditingTitle={isEditingTitle}
          newTitle={newTitle}
          updatingTitle={updatingTitle}
          titleInputRef={titleInputRef}
          onStartEditingTitle={handleStartEditingTitle}
          onTitleChange={handleTitleChange}
          onSaveTitle={handleSaveTitle}
          onCancelEditingTitle={() => setIsEditingTitle(false)}
          onTitleKeyDown={handleTitleKeyDown}
          generatingLink={generatingLink}
          shareLinkCopied={shareLinkCopied}
          onCopyShareLink={handleCopyShareLink}
        />
      )}
    </div>
  );
} 