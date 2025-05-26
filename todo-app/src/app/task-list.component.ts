import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card'
import { Task } from '../../public/entities';
import { TaskService } from '../task-service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'task',
  templateUrl: './task-list.component.html',
  imports: [MatCheckboxModule, MatCardModule, CommonModule, MatIconModule],
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  title = 'task list';
  tasks: Task[] = [];
  constructor(private taskService: TaskService){}
  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
        this.tasks = tasks;
      });
  }
  updateTask(task: Task): void {
    this.taskService.updateTask(task).subscribe(updatedTask => {});
  }
  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(()=>{
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    })
  }
  markCompleted(task: Task): void {
    task.completed = !task.completed;
    this.updateTask(task);
  }
  isLocked(task: Task): boolean {
    return false
  }
}


