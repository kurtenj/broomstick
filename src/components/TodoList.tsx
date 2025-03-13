import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TodoItem } from '@/components/TodoItem';
import { TodoItem as TodoItemType } from '@/types';
import { getImageFromClipboard } from '@/lib/clipboard';

interface TodoListProps {
  items: TodoItemType[];
  onAddItem: (text: string, screenshotFile?: File) => void;
  onUpdateItem: (id: string, updates: Partial<Pick<TodoItemType, 'text' | 'completed'>>) => void;
  onDeleteItem?: (id: string) => void;
}

export function TodoList({ items, onAddItem, onUpdateItem, onDeleteItem }: TodoListProps) {
  const [newItemText, setNewItemText] = useState('');
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAddItem = () => {
    if (newItemText.trim()) {
      onAddItem(newItemText);
      setNewItemText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  const handlePaste = async (e: React.ClipboardEvent<HTMLInputElement>) => {
    try {
      setError(null);
      const file = getImageFromClipboard(e.nativeEvent);
      
      if (file) {
        setIsProcessingImage(true);
        // If an image is pasted, create a new todo item with the image
        await onAddItem('', file);
        setNewItemText('');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process image');
    } finally {
      setIsProcessingImage(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      <div className="space-y-3">
        <div className="flex gap-3 items-center">
          <Input
            ref={inputRef}
            placeholder="Add a new todo item or paste a screenshot..."
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            disabled={isProcessingImage}
          />
          <Button 
            onClick={handleAddItem} 
            disabled={!newItemText.trim() || isProcessingImage}
            size="default"
          >
            Add
          </Button>
        </div>
        
        {error && (
          <div className="text-destructive text-sm mt-1">{error}</div>
        )}
        
        {isProcessingImage && (
          <div className="text-primary text-sm mt-1">Processing image...</div>
        )}
      </div>
      
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="text-center text-muted-foreground py-6">
            No todo items yet. Add one above!
          </div>
        ) : (
          items.map((item) => (
            <TodoItem 
              key={item.id} 
              item={item} 
              onUpdate={onUpdateItem}
              onDelete={onDeleteItem}
            />
          ))
        )}
      </div>
    </div>
  );
} 