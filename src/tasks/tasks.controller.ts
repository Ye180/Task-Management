import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    // @Get()
    // getAllTask(@Query() filterDto: GetTaskFilterDto) {
    //     //if we have any filter defined in the query string
    //     // Otherwise, just take all tasks

    //     if (Object.keys(filterDto).length) {
    //         return this.taskService.getTaskWithFilters(filterDto);
    //     }

    //     return this.taskService.getAllTask();
    // }

    // @Get('/:id')
    // getTaskById(@Param('id') id: string) {
    //     return this.taskService.getTaskById(id);
    // }

    // @Post()
    // createTask(@Body() createTaskDto: CreateTaskDto) {
    //     return this.taskService.createTask(createTaskDto);
    // }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string) {
    //     return this.taskService.deleteTask(id);
    // }

    // @Patch('/:id/status')
    // updateTaskSatus(
    //     @Param('id') id: string,
    //     @Body() updateStatusDto: UpdateTaskStatusDto,
    // ) {
    //     return this.taskService.updateTaskStatus(id, updateStatusDto.status);
    // }
}
