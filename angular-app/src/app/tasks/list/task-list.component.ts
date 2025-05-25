import {Component, OnInit} from '@angular/core';
import { TaskService } from '../tasks-service';
import { Task } from 'shared/entities';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    tasks: any[] = [];
    selectedTask: any = null;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.loadTasks();
        this.listenToEvents();
    }
    isLocked(task: Task): boolean {
        return false
    }

    loadTasks() {
        this.taskService.getTasks().subscribe(tasks => {this.tasks = tasks;});
    }
    listenToEvents() {
    }

    save(task: Task) {
        
    }
    editTask(task: Task) {}

    markComplete(task: Task) {}

    deleteTask(task: Task) {

    }
}