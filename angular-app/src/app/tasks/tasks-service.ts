import { Task } from '../../entities'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    private apiBaseUrl = 'http://localhost:3000/api/tasks';
    constructor(private http: HttpClient) {
    }

    getTasks() {
        // This method should return a list of tasks
        return this.http.get<Task[]>(this.apiBaseUrl);
    }
    createTask(task: Task) {
        return this.http.post<Task>(this.apiBaseUrl, task)
    }

    editTask(task: Task){
        return this.http.put<Task>(`${this.apiBaseUrl}/${task.id}`, task);
    }

    delteTask(taskId: string) {
        return this.http.delete(`${this.apiBaseUrl}/${taskId}`);
    }
}