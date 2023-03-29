import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {TaskInterface} from "../../interfaces/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl;

  getTasks():Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(`${this.baseUrl}tasks/getAllTasks`);
  }

  getTaskById(id: string):Observable<TaskInterface> {
      console.log("esto es lo que entra: "+id)
      return this.http.get<TaskInterface>(`${this.baseUrl}tasks/getTaskById/${id}`);
  }

  createTask(task:TaskInterface):Observable<TaskInterface> {
    return this.http.post<TaskInterface>(`${this.baseUrl}tasks/addTask`, task);
  }

  updateTask(task:TaskInterface):Observable<TaskInterface> {
    return this.http.put<TaskInterface>(`${this.baseUrl}tasks/updateTask`, task);
  }

  deleteTask(id:string):Observable<TaskInterface> {
    return this.http.delete<TaskInterface>(`${this.baseUrl}tasks/deleteTask/${id}`);
  }
}
