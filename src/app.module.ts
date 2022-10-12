import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/company/users/users.module';
import { RolesModule } from './api/company/roles/roles.module';
import { DepartmentsModule } from './api/company/departments/departments.module';
import { TasksModule } from './api/company/tasks/tasks.module';
import { ProjectsModule } from './api/company/projects/projects.module';

@Module({
  imports: [UsersModule, RolesModule, DepartmentsModule, TasksModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
