import { renderModule } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';

export default function bootstrap() {
  // This is an example, customize parameters as needed.
  return renderModule(AppServerModule, {
    document: '<app-task-list></app-task-list>', // or your app root selector's HTML
    url: '/'
  });
}
