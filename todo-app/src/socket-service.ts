import { io } from "socket.io-client";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
    private socket = io('http://localhost:3000');

    constructor() {

    }
    emit(event: string, data: any) {
        this.socket.emit(event, data);
    }
    on(event: string, callback: (data: any) => void) {
        this.socket.on(event, callback);
    }
}