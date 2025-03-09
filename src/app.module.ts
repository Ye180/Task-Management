import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
@Module({
    imports: [
        TasksModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'task-management',
            autoLoadEntities: true, //If true, entities will be loaded automatically.
            synchronize: true, //If true, it will automatically create database tables and columns.
        }),
    ],
})
export class AppModule {}
