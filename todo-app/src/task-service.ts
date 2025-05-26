import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../public/entities";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    private baseUrl = 'http://localhost:3000/api/tasks';

    constructor(private httpClient: HttpClient) {}

    getTasks() {
        return this.httpClient.get<Task[]>(this.baseUrl);
    }
    createTask(task: Task) {
        return this.httpClient.post<Task>(this.baseUrl, task);
    }
    updateTask(task: Task) {
        return this.httpClient.put<Task>(`${this.baseUrl}/${task.id}`, task);
    }
    deleteTask(taskId: string) {
        return this.httpClient.delete(`${this.baseUrl}/${taskId}`);
    }
}