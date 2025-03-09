import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    // getAllTask() {
    //     return this.task;
    // }
    // getTaskById(id: string): Task {
    //     //Try to get the task with the given id
    //     const found = this.task.find((task) => task.id === id);
    //     //if not found, return null
    //     if (!found) {
    //         throw new NotFoundException(`Task with ID "${id}" not found`);
    //     }
    //     return found;
    // }
    // getTaskWithFilters(filter: GetTaskFilterDto) {
    //     const { status, search } = filter;
    //     let tasks = this.getAllTask();
    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status);
    //     }
    //     if (search) {
    //         tasks = tasks.filter((task) => {
    //             if (
    //                 task.title.includes(search) ||
    //                 task.description.includes(search)
    //             ) {
    //                 return true;
    //             }
    //             return false;
    //         });
    //     }
    //     return tasks;
    // }
    // createTask(createTaskDto: CreateTaskDto) {
    //     const { title, description } = createTaskDto;
    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };
    //     this.task.push(task);
    //     return task;
    // }
    // deleteTask(id: string) {
    //     const found = this.getTaskById(id);
    //     this.task = this.task.filter((task) => task.id !== found.id);
    // }
    // updateTaskStatus(id: string, status: TaskStatus) {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
