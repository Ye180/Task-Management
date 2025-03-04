import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private task: Task[] = [];

    getAllTask() {
        return this.task;
    }

    getTaskById(id: string): Task {
        return this.task.find((task) => task.id === id);
    }

    getTaskWithFilters(filter: GetTaskFilterDto) {
        const { status, search } = filter;

        const tasks = this.getAllTask();

        if (status) {
            return tasks.filter((task) => task.status === status);
        }

        if (search) {
            return tasks.filter((task) => {
                if (
                    task.title.includes(search) ||
                    task.description.includes(search)
                ) {
                    return true;
                }
                return false;
            });

            return tasks;
        }
    }

    createTask(createTaskDto: CreateTaskDto) {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.task.push(task);

        return task;
    }

    deleteTask(id: string) {
        this.task = this.task.filter((task) => task.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}
