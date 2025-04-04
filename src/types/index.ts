export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  screenshotUrl?: string;
  createdAt: Date;
}

export interface Sweep {
  id: string;
  createdAt: Date;
  title?: string;
  todos: TodoItem[];
  isPublic?: boolean;
  publicAccessToken?: string;
  createdBy?: string;
  modifiedBy?: string;
} 