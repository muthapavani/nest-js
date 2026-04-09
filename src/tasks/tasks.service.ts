import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './tasks.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async createTask(title: string, description: string): Promise<Task> {
    const task = new this.taskModel({ title, description });
    return task.save();
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async getTaskById(id: string): Promise<Task | null> {
    return this.taskModel.findById(id).exec();
  }


  async updateTask(id: string, title: string, description: string): Promise<Task | null> {
    return this.taskModel.findByIdAndUpdate(id, { title, description }, { new: true });
  }


  async deleteTask(id: string): Promise<Task | null> {
    return this.taskModel.findByIdAndDelete(id);
  }
}
