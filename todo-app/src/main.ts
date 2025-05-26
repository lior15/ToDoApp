import { bootstrapApplication } from '@angular/platform-browser';
import { TaskListComponent } from './app/task-list.component'; // Marked as standalone
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(TaskListComponent, {
  providers: [provideHttpClient()]
})
  .catch(err => console.error(err));