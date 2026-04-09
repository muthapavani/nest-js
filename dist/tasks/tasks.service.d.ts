import { Model } from 'mongoose';
import { Task } from './tasks.schema';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    createTask(title: string, description: string): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    getTaskById(id: string): Promise<Task | null>;
    updateTask(id: string, title: string, description: string): Promise<Task | null>;
    deleteTask(id: string): Promise<Task | null>;
}
