import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() body: { title: string; description: string }): Promise<Task> {
    return this.tasksService.createTask(body.title, body.description);
  }

  @Get()
  async getAll(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.getTaskById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: { title: string; description: string },
  ): Promise<Task | null> {
    return this.tasksService.updateTask(id, body.title, body.description);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Task | null> {
    return this.tasksService.deleteTask(id);
  }
}
