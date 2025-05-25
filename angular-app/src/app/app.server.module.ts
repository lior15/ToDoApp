import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { TaskListModule } from './tasks/list/task-list.module';  // Your feature module
import { TaskListComponent } from './tasks/list/task-list.component'; // Your root component

@NgModule({
  imports: [
    TaskListModule,  // Import your module that declares the component
    ServerModule     // Import Angular's server rendering support
  ],
  bootstrap: [TaskListComponent]  // Bootstrap your root component
})
export class AppServerModule {}
