import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserInterface} from "../../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  //http://localhost:8080/auth/signin
  //http://localhost:8080/auth/signup
  private baseUrl: string = environment.baseUrl;


  login(user:UserInterface):Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.baseUrl}auth/signin`, user);
  }

  register(user:UserInterface):Observable<UserInterface> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.http.post<UserInterface>(`${this.baseUrl}auth/signup`, user, );
  }

}
