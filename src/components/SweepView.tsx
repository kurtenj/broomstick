import { useState, useEffect, RefObject } from 'react'; // Added RefObject
import { Sweep, TodoItem } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Pencil, Link as LinkIcon, Check, ImagePlus, X } from 'lucide-react'; // Removed Plus
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // Import Dialog
import { cn } from "@/lib/utils"; // Import cn for conditional classes
import { compressImage } from "@/lib/imageUtils"; // Import the compression utility

interface SweepViewProps {
  sweep: Sweep;
  isPublicView: boolean;
  onToggleComplete?: (todoId: string, completed: boolean) => void;
  onAddItem?: (text: string, screenshotFile?: File) => Promise<void>;
  onDeleteItem?: (todoId: string) => Promise<void>;
  onUpdateScreenshot?: (todoId: string, screenshotFile: File) => Promise<void>;
  // Props passed down from SweepPage for title editing
  isEditingTitle?: boolean;
  newTitle?: string;
  updatingTitle?: boolean;
  titleInputRef?: RefObject<HTMLInputElement | null>; // Allow null from parent ref
  onStartEditingTitle?: () => void;
  onTitleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveTitle?: () => Promise<void>;
  onCancelEditingTitle?: () => void;
  onTitleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  // Props passed down for copy link button
  generatingLink?: boolean;
  shareLinkCopied?: boolean;
  onCopyShareLink?: () => Promise<void>;
}

export function SweepView({
  sweep,
  isPublicView,
  onToggleComplete,
  onAddItem,
  onDeleteItem,
  onUpdateScreenshot,
  // Destructure new props
  isEditingTitle,
  newTitle,
  updatingTitle,
  titleInputRef,
  onStartEditingTitle,
  onTitleChange,
  onSaveTitle,
  onCancelEditingTitle,
  onTitleKeyDown,
  generatingLink,
  shareLinkCopied,
  onCopyShareLink,
}: SweepViewProps) {
  const [newItemText, setNewItemText] = useState('');
  const [newScreenshotFile, setNewScreenshotFile] = useState<File | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const [imageModalUrl, setImageModalUrl] = useState<string | null>(null);

  const handleToggleCompleteInternal = (todoId: string, completed: boolean) => {
    if (onToggleComplete) {
      onToggleComplete(todoId, completed);
    }
  };

  const handlePasteOnNewItemInput = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const items = event.clipboardData.files;
    let imageFile: File | null = null;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith('image/')) {
        imageFile = items[i];
        break;
      }
    }

    if (imageFile) {
      event.preventDefault();
      setNewScreenshotFile(imageFile);
      console.log("Image pasted for new item:", imageFile.name);
    }
  };

  const handleAddItemInternal = async () => {
    if (!onAddItem || (!newItemText.trim() && !newScreenshotFile)) return;
    setIsAdding(true);
    let fileToSend: File | Blob | undefined = undefined;
    try {
      if (newScreenshotFile) {
        console.log('Compressing new item image...');
        fileToSend = await compressImage(newScreenshotFile);
        // We might need to convert Blob back to File if onAddItem expects File
        // fileToSend = new File([compressedBlob], newScreenshotFile.name, { type: compressedBlob.type });
      }

      await onAddItem(newItemText.trim(), fileToSend as File | undefined); // Assuming onAddItem handles File or Blob appropriately for now
      setNewItemText('');
      setNewScreenshotFile(null);
    } catch (error) {
      console.error("Error adding item from SweepView:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteItemInternal = async (todoId: string) => {
    if (!onDeleteItem) return;
    try {
      await onDeleteItem(todoId);
    } catch (error) {
      console.error("Error deleting item from SweepView:", error);
    }
  };

  const processAndUpdateScreenshot = async (file: File | null, todoId: string) => {
    if (file && file.type.startsWith('image/') && onUpdateScreenshot) {
      console.log(`Processing image for todo ${todoId}:`, file.name);
      try {
        console.log('Compressing existing item image...');
        const compressedBlob = await compressImage(file);
        // Convert Blob back to File if needed by onUpdateScreenshot
        const compressedFile = new File([compressedBlob], file.name, { type: compressedBlob.type });

        await onUpdateScreenshot(todoId, compressedFile); // Pass compressed File
      } catch (compressionError) {
        console.error(`Error compressing screenshot for todo ${todoId}:`, compressionError);
        // Optionally, decide whether to try uploading the original file or just fail
        // For now, we'll just log the error and not proceed with the update.
        // await onUpdateScreenshot(todoId, file); // Fallback to original?
      }
    } else if (file) {
      console.warn('Pasted file is not an image:', file.type);
    }
  };

  // Global paste handler for selected todo
  const handleGlobalPaste = (event: ClipboardEvent) => {
    if (!selectedTodoId || !onUpdateScreenshot) return; // Only act if a todo is selected

    // Don't interfere if paste happens inside the "new item" input
    if (event.target instanceof HTMLInputElement && event.target.id === 'new-item-input') {
        return;
    }

    const items = event.clipboardData?.files;
    let imageFile: File | null = null;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          imageFile = items[i];
          break;
        }
      }
    }

    if (imageFile) {
      console.log('Image pasted via global listener for selected todo:', selectedTodoId);
      event.preventDefault(); // Prevent default paste behavior ONLY if we handle the image
      processAndUpdateScreenshot(imageFile, selectedTodoId);
      setSelectedTodoId(null); // Optionally deselect after successful paste
    } else {
      // console.log('Global paste event detected, but no image found or no todo selected.');
    }
  };

  // Effect to manage the global paste listener
  useEffect(() => {
    // Only add listener if in private view and screenshot updates are possible
    if (!isPublicView && onUpdateScreenshot) {
        console.log('Adding global paste listener');
        window.addEventListener('paste', handleGlobalPaste);
    }
    
    // Cleanup function
    return () => {
      if (!isPublicView && onUpdateScreenshot) {
        console.log('Removing global paste listener');
        window.removeEventListener('paste', handleGlobalPaste);
      }
    };
    // Rerun if props change (e.g., view becomes public/private)
    // Also depends on selectedTodoId to know *which* item to update if paste occurs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPublicView, onUpdateScreenshot, selectedTodoId]); 

  return (
    <Dialog open={!!imageModalUrl} onOpenChange={(isOpen) => !isOpen && setImageModalUrl(null)}>
      <div> {/* Main container, no card styles */} 

        {/* Header Section */} 
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2"> {/* Added flex-wrap and gap */} 
          {/* Title Display/Input */} 
          <div className="flex-grow min-w-0"> {/* Allow title to take space */} 
            {isEditingTitle && !isPublicView ? (
              // Render Input group when editing (only in private view)
              <div className="flex gap-2 items-center">
                <Input
                  ref={titleInputRef} // Use passed ref
                  type="text"
                  value={newTitle}
                  onChange={onTitleChange}
                  onKeyDown={onTitleKeyDown}
                  className="text-xl font-bold h-9 flex-grow" // Match previous style
                  disabled={updatingTitle}
                  onBlur={onSaveTitle} // Save on blur
                  autoFocus
                />
                <Button variant="secondary" onClick={onSaveTitle} disabled={updatingTitle} size="sm">
                  Save
                </Button>
                <Button variant="ghost" onClick={onCancelEditingTitle} size="sm">
                  Cancel
                </Button>
              </div>
            ) : (
              // Render Title (clickable in private view)
              <h1 
                className={cn(
                  "text-2xl font-bold truncate",
                  !isPublicView && onStartEditingTitle && "cursor-pointer hover:text-primary transition-colors"
                )}
                onClick={!isPublicView ? onStartEditingTitle : undefined}
                title={!isPublicView ? "Click to rename sweep" : undefined}
              >
                {sweep.title || 'Untitled Sweep'}
              </h1>
            )}
          </div>

          {/* Right-side Content (Public View Text or Private Buttons) */} 
          <div className="flex items-center space-x-2 flex-shrink-0"> 
            {isPublicView ? (
              <span className="text-sm text-gray-500">
                Shared view
              </span>
            ) : (
              // Show buttons only when NOT editing title in private view
              !isEditingTitle && (
                <>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={onStartEditingTitle}
                    className="flex items-center gap-1.5"
                    title="Rename Sweep"
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="hidden sm:inline">Rename</span> {/* Hide text on small screens */} 
                  </Button>

                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={onCopyShareLink}
                    disabled={generatingLink || shareLinkCopied}
                    className="flex items-center gap-1.5"
                  >
                    {shareLinkCopied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <LinkIcon className="h-4 w-4" />
                    )}
                    <span className="hidden sm:inline">{generatingLink ? 'Copying...' : shareLinkCopied ? 'Copied!' : 'Copy Link'}</span> {/* Hide text */} 
                  </Button>
                </>
              )
            )}
          </div>
        </div>

        {sweep.todos.length === 0 && isPublicView ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No items in this sweep</p>
          </div>
        ) : (
          <ul className="space-y-4 mb-6">
            {sweep.todos.map((todo: TodoItem) => (
              <li 
                key={todo.id} 
                className={cn(
                  "p-4 border border-gray-200 rounded-lg transition-colors flex flex-row justify-between items-start gap-3",
                  !isPublicView && "cursor-pointer hover:bg-gray-50",
                  selectedTodoId === todo.id && "bg-blue-50 border-blue-300"
                )}
                onClick={() => !isPublicView && setSelectedTodoId(todo.id)}
              >
                <div className="flex items-start gap-3 flex-grow">
                  <Checkbox 
                    id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onCheckedChange={(checked) => 
                      handleToggleCompleteInternal(todo.id, checked === true)
                    }
                    className="mt-1 flex-shrink-0"
                  />
                  <div className="flex-grow">
                    <label 
                      htmlFor={`todo-${todo.id}`}
                      className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}
                    >
                      {todo.text}
                    </label>
                  </div>
                </div>

                <div className="flex items-start gap-2 flex-shrink-0">
                  {todo.screenshotUrl && (
                    <div className="w-16 h-16 flex-shrink-0">
                      <DialogTrigger asChild>
                        <div 
                          className="w-full h-full rounded border border-gray-200 overflow-hidden cursor-pointer hover:border-primary transition-colors group bg-gray-100 flex items-center justify-center" 
                          onClick={(e) => { 
                            e.stopPropagation();
                            setImageModalUrl(todo.screenshotUrl!)
                          }}
                          title="Click to enlarge screenshot"
                        >
                          <img 
                            src={todo.screenshotUrl} 
                            alt="Screenshot thumbnail" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                            loading="lazy"
                          />
                        </div>
                      </DialogTrigger>
                    </div>
                  )}

                  {!isPublicView && onDeleteItem && (
                    <div className="flex-shrink-0">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8 mt-0.5"
                        onClick={(e) => { 
                          e.stopPropagation();
                          handleDeleteItemInternal(todo.id)
                        }} 
                        title="Delete item"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        {!isPublicView && onAddItem && (
          <div className="mt-6 mb-4 flex items-center gap-2"> {/* Applied flexbox here */} 
            <Input
              id="new-item-input" 
              type="text"
              placeholder="Enter todo text..."
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddItemInternal()}
              onPaste={handlePasteOnNewItemInput}
              className="flex-grow" // Input takes available space
            />
            <Button onClick={handleAddItemInternal} disabled={isAdding || (!newItemText.trim() && !newScreenshotFile)}>
              {isAdding ? 'Adding...' : 'Add'} {/* Removed Plus icon */} 
            </Button>
          </div>
        )}

        {/* Screenshot indicator */} 
        {newScreenshotFile && (
          <div className="inline-flex items-center gap-1 p-1 px-2 rounded-md border border-green-500 text-green-700 text-sm"> {/* Changed flex to inline-flex */} 
            <ImagePlus size={16} className="text-green-600" />
            <span>Screenshot added!</span>
            <Button 
              type="button"
              variant="ghost"
              size="icon"
              onClick={(e) => { e.stopPropagation(); setNewScreenshotFile(null); }} // Added stopPropagation
              className="h-5 w-5 p-0 text-gray-500 hover:text-gray-700" // Kept styling
            >
              <X size={14} />
            </Button>
          </div>
        )}
      </div>

      {/* Image Modal Content */}
      <DialogContent className="max-w-4xl p-2 sm:p-4" onOpenAutoFocus={(e) => e.preventDefault()}>
        {imageModalUrl && (
          <img 
            src={imageModalUrl} 
            alt="Full size screenshot" 
            className="w-auto h-auto max-w-full max-h-[85vh] object-contain mx-auto"
            onClick={() => setImageModalUrl(null)} // Click image itself to close
            style={{ cursor: 'zoom-out' }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
} 