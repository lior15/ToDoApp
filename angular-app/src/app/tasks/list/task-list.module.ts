// task.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  exports: [TaskListComponent],
})
export class TaskListModule {}
