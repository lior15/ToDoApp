import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card'
import { Task } from '../../public/entities';
import { TaskService } from '../task-service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { SocketService } from '../socket-service';
import {TaskFormComponent} from './task-form.component'
import { priorities } from '../../public/entities';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'task',
  templateUrl: './task-list.component.html',
  imports: [MatCheckboxModule, MatCardModule, CommonModule, MatIconModule, MatSelectModule, MatInputModule, FormsModule, TaskFormComponent, MatButtonModule, MatDatepickerModule],
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  title = 'task list';
  tasks: Task[] = [];
  editingtaskID: string | null = null;
  priorities = priorities;
  constructor(private taskService: TaskService, private socketService: SocketService, private snackBar: MatSnackBar){}
  ngOnInit(): void {
    this.loadTasks();
    this.listenForUpdates();
  }
  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
        this.tasks = tasks;
      });
  }
  updateTask(task: Task): void {
      this.editingtaskID = task.id;
      this.socketService.emit('lockTask', task); 

  }
  deleteTask(task: Task): void {
  if (task.inEditMode || this.editingtaskID === task.id) {
    this.openLockAlert('Cannot delete a task that is being edited.');
    return;
  }

  this.taskService.deleteTask(task.id).subscribe(() => {
    this.socketService.emit('taskDeleted', task.id);
    this.loadTasks();
  });
}

  saveTask(task: Task): void {
    debugger;
    this.taskService.updateTask(task).subscribe(update => {
      this.socketService.emit('taskUpdated', update);
      this.editingtaskID = null;
      this.socketService.emit('unlockTask', this.tasks);
    })
  }
  markCompleted(task: Task): void {
    const updatedTask = { ...task, completed: !task.completed };

    this.taskService.updateTask(updatedTask).subscribe(updated => {
      this.socketService.emit('taskUpdated', updated);
      this.loadTasks(); // Refresh the list if needed
  });
}
  isLocked(task: Task): boolean {
    return task.inEditMode || this.editingtaskID === task.id;
  }

  getTaskClasses(task: Task): { [klass: string]: boolean } {
  return {
    'completed': task.completed,
    'locked': this.isLocked(task),
    [`priority-${task.priority.toLowerCase()}`]: true
  };
}

  openLockAlert(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, 
      horizontalPosition: 'center', 
      verticalPosition: 'bottom', 
    });
  }

  listenForUpdates(): void {
    this.socketService.on('taskUpdated', () => this.loadTasks());
    this.socketService.on('lockTask', (taskId: string) => {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.inEditMode = true;
      }
    })
    this.socketService.on('unlockTask', (taskId: string) => {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.inEditMode = false;
      }
    })
    this.socketService.on('taskDeleted', (taskId: string) => {
      debugger;
      this.loadTasks();
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      
    });
    this.socketService.on('taskCreated', (task: Task) => {
      this.tasks.push(task);
      this.loadTasks();
    });
  }
}


