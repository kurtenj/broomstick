import { useState, useRef } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { TodoItem as TodoItemType } from '@/types';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TodoItemProps {
  item: TodoItemType;
  onUpdate: (id: string, updates: Partial<Pick<TodoItemType, 'text' | 'completed'>>) => void;
  onDelete?: (id: string) => void;
}

export function TodoItem({ item, onUpdate, onDelete }: TodoItemProps) {
  const [text, setText] = useState(item.text);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const thumbnailRef = useRef<HTMLButtonElement>(null);

  const handleCheckboxChange = (checked: boolean) => {
    onUpdate(item.id, { completed: checked });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleTextBlur = () => {
    if (text !== item.text) {
      onUpdate(item.id, { text });
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(item.id);
    }
  };

  // Custom dialog animation styles based on thumbnail position
  const getDialogStyles = () => {
    if (!thumbnailRef.current) return {};
    
    const rect = thumbnailRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate position relative to viewport center
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    
    return {
      '--origin-left': `${centerX}px`,
      '--origin-top': `${centerY}px`,
      '--translate-x': `${centerX - viewportCenterX}px`,
      '--translate-y': `${centerY - viewportCenterY}px`,
    } as React.CSSProperties;
  };

  return (
    <div className="flex items-center gap-3 p-3 border rounded-md shadow-sm" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="flex items-center">
        <Checkbox 
          id={`todo-${item.id}`}
          checked={item.completed}
          onCheckedChange={handleCheckboxChange}
          className="size-4"
        />
        <Label 
          htmlFor={`todo-${item.id}`}
          className="sr-only"
        >
          {text || "Todo item"}
        </Label>
      </div>
      
      <div className="flex-1">
        <Input
          value={text}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          className={cn(
            "h-9",
            item.completed && "line-through text-muted-foreground"
          )}
        />
      </div>
      
      {item.screenshotUrl && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button 
              ref={thumbnailRef}
              className="flex-shrink-0 size-9 flex items-center justify-center p-0 bg-transparent border rounded-md hover:bg-accent overflow-hidden"
            >
              <ResponsiveImage 
                src={item.screenshotUrl} 
                alt="Screenshot" 
                className="rounded-sm"
                containerClassName="size-8"
                objectFit="cover"
                objectPosition="center"
                priority={true}
              />
            </button>
          </DialogTrigger>
          <DialogContent 
            className={cn(
              "max-w-3xl p-2 sm:p-4",
              "DialogContent-imageViewer"
            )}
            style={getDialogStyles()}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <ResponsiveImage 
              src={item.screenshotUrl} 
              alt="Screenshot" 
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 90vw"
              objectFit="contain"
              objectPosition="center"
              priority={true}
            />
          </DialogContent>
        </Dialog>
      )}
      
      {onDelete && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDelete}
          className="size-9 text-muted-foreground hover:text-destructive"
          title="Delete todo"
        >
          <Trash2 className="size-4" />
          <span className="sr-only">Delete</span>
        </Button>
      )}
    </div>
  );
} 