import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TaskModule } from './app/task.module';

platformBrowserDynamic().bootstrapModule(TaskModule)
  .catch(err => console.error(err));
