import { TasksService } from './tasks.service';
import { Task } from './tasks.schema';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(body: {
        title: string;
        description: string;
    }): Promise<Task>;
    getAll(): Promise<Task[]>;
    getOne(id: string): Promise<Task | null>;
    update(id: string, body: {
        title: string;
        description: string;
    }): Promise<Task | null>;
    delete(id: string): Promise<Task | null>;
}
