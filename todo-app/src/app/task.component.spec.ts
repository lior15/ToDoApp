import { TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TaskComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'todo-app' title`, () => {
    const fixture = TestBed.createComponent(TaskComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TaskComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, todo-app');
  });
});
