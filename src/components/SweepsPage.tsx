import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllSweeps, deleteSweep, createSweep, getShareLink, updateSweepTitle } from '@/services/sweepService';
import { Sweep } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { Trash2, Link as LinkIcon, Pencil, MoreHorizontal, Check } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { AnimatedBroomLoader } from '@/components/AnimatedBroomLoader';

export function SweepsPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [sweeps, setSweeps] = useState<Sweep[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [copiedLinkId, setCopiedLinkId] = useState<string | null>(null);
  const [renamingSweepId, setRenamingSweepId] = useState<string | null>(null);
  const [currentRenameValue, setCurrentRenameValue] = useState('');
  const [isSavingRename, setIsSavingRename] = useState(false);

  const fetchSweeps = async () => {
    try {
      setLoading(true);
      setError(null);
      const allSweeps = await getAllSweeps();
      
      // Filter sweeps by current user if available
      const filteredSweeps = currentUser 
        ? allSweeps.filter(sweep => !sweep.createdBy || sweep.createdBy === currentUser.email || sweep.createdBy === currentUser.uid)
        : allSweeps;
        
      setSweeps(filteredSweeps.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()));
      
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
    if (renamingSweepId === id) return;
    navigate(`/sweep/${id}`);
  };

  const handleDeleteSweep = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this sweep? This action cannot be undone.')) {
      try {
        setDeleting(id);
        await deleteSweep(id);
        setSweeps(prev => prev.filter(sweep => sweep.id !== id));
      } catch (err) {
        console.error('Error deleting sweep:', err);
        setError(err instanceof Error ? err.message : 'Failed to delete sweep');
      } finally {
        setDeleting(null);
      }
    }
  };

  const handleShareSweep = async (id: string) => {
    setCopiedLinkId(null);
    try {
      const shareLink = await getShareLink(id);
      if (shareLink) {
        await navigator.clipboard.writeText(shareLink);
        setCopiedLinkId(id);
        setTimeout(() => setCopiedLinkId(null), 2000);
      } else {
        setError('Failed to get share link.');
      }
    } catch (err) {
      console.error('Error sharing sweep:', err);
      setError(err instanceof Error ? err.message : 'Failed to share sweep');
    }
  };

  const handleStartRename = (sweep: Sweep) => {
    setRenamingSweepId(sweep.id);
    setCurrentRenameValue(sweep.title || 'Untitled Sweep');
  };

  const handleCancelRename = () => {
    setRenamingSweepId(null);
    setCurrentRenameValue('');
    setIsSavingRename(false);
  };

  const handleRenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentRenameValue(e.target.value);
  };

  const handleSaveRename = async (sweepId: string) => {
    if (!currentRenameValue.trim() || isSavingRename) return;
    
    const originalSweep = sweeps.find(s => s.id === sweepId);
    if (originalSweep?.title === currentRenameValue.trim()) {
      handleCancelRename();
      return;
    }

    setIsSavingRename(true);
    try {
      await updateSweepTitle(sweepId, currentRenameValue.trim() || 'Untitled Sweep');
      setSweeps(prev => prev.map(s => s.id === sweepId ? { ...s, title: currentRenameValue.trim() || 'Untitled Sweep' } : s));
      handleCancelRename();
    } catch (err) {
      console.error('Error renaming sweep:', err);
      setError(err instanceof Error ? err.message : 'Failed to rename sweep');
      setIsSavingRename(false);
    } finally {
      setIsSavingRename(false);
    }
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, sweepId: string) => {
    if (e.key === 'Enter') {
      handleSaveRename(sweepId);
    } else if (e.key === 'Escape') {
      handleCancelRename();
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
        <div className="flex items-center justify-center pt-16">
          <AnimatedBroomLoader />
        </div>
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
            <Card key={sweep.id} className={`relative transition-shadow hover:shadow-md ${renamingSweepId !== sweep.id ? 'cursor-pointer' : ''}`} onClick={() => handleOpenSweep(sweep.id)}>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  {renamingSweepId === sweep.id ? (
                    <div className="flex gap-2 items-center">
                      <Input
                        value={currentRenameValue}
                        onChange={handleRenameChange}
                        onKeyDown={(e) => handleRenameKeyDown(e, sweep.id)}
                        autoFocus
                        disabled={isSavingRename}
                        className="h-8 text-lg font-semibold mr-2"
                        onBlur={() => setTimeout(handleCancelRename, 150)}
                      />
                      <Button size="sm" onClick={(e) => { e.stopPropagation(); handleSaveRename(sweep.id); }} disabled={isSavingRename || !currentRenameValue.trim()}>
                        {isSavingRename ? 'Saving...' : 'Save'}
                      </Button>
                    </div>
                  ) : (
                    <CardTitle>{sweep.title || 'Untitled Sweep'}</CardTitle>
                  )}
                  <CardDescription>
                    Created {formatDistanceToNow(sweep.createdAt, { addSuffix: true })}
                    {sweep.createdBy && <div className="text-xs mt-1">by {sweep.createdBy}</div>}
                  </CardDescription>
                </div>
                {renamingSweepId !== sweep.id && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-muted-foreground flex-shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal size={16} />
                        <span className="sr-only">Sweep Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                      <DropdownMenuItem onClick={() => handleStartRename(sweep)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        <span>Rename</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShareSweep(sweep.id)}>
                        {copiedLinkId === sweep.id ? (
                          <Check className="mr-2 h-4 w-4 text-green-600" />
                        ) : (
                          <LinkIcon className="mr-2 h-4 w-4" />
                        )}
                        <span>{copiedLinkId === sweep.id ? 'Copied!' : 'Copy Public Link'}</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-destructive focus:text-destructive focus:bg-destructive/10"
                        onClick={() => handleDeleteSweep(sweep.id)}
                        disabled={deleting === sweep.id}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>{deleting === sweep.id ? 'Deleting...' : 'Delete'}</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {sweep.todos.filter(todo => todo.completed).length} / {sweep.todos.length} completed
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 