import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TaskService } from "../task-service";
import { SocketService } from "../socket-service";
import { Task } from "../../public/entities";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { priorities } from '../../public/entities';


@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  imports: [FormsModule, CommonModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule],
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
    @Output() taskCreated= new EventEmitter();
  title = 'task form';
  task: Task = {
    id: crypto.randomUUID(),
    title: '',
    description: '',
    completed: false,
    priority: 'medium',
    dueDate: new Date()
  };
    priorities = priorities;


  constructor(private taskService: TaskService, private socketService: SocketService) {}
  createTask(): void {
    this.taskService.createTask(this.task).subscribe((createdTask) => {
        this.socketService.emit('taskCreated', createdTask);
        this.taskCreated.emit();
        this.resetForm();   
    })

  }
    resetForm(): void {
        this.task = {
        id: crypto.randomUUID(),
        title: '',
        description: '',
        completed: false,
        priority: 'medium',
        dueDate: new Date()
        };
    }

}