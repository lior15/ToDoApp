export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    dueDate: Date | null;
    inEditMode? : boolean;
}

export const priorities = ['low', 'medium', 'high']