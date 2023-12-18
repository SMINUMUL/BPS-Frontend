import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = "http://localhost:8090/api";

  constructor(private httpClient: HttpClient) { }

  // Validate a user
  validateUser(newUser: UserModel): Observable<Auth> {
    return this.httpClient.post<Auth>(this.baseUrl+"/login", newUser);
  }
  createUser(newUser: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(this.baseUrl+"/createUser", newUser);
  }
}
