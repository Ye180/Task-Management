import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private task: Task[] = [];

    getAllTask() {
        return this.task;
    }

    createTask(title: string, description: string) {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.task.push(task);

        return task;
    }
}
