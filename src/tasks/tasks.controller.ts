import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getAllTask() {
        return this.taskService.getAllTask();
    }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string,
    ) {
        return this.taskService.createTask(title, description);
    }
}
