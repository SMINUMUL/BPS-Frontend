import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee-model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
 
 
  private baseURL = "http://localhost:8090/api/employees";
 
  constructor(private httpClient: HttpClient) { }
 
  getAllEmployees(): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(`${this.baseURL}`)
  }
  getEmployeesById(empolyeeId:number): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(`${this.baseURL}/${empolyeeId}`);
  }
  getEmployeesByPubId(pubId:number): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(`${this.baseURL}/${pubId}`)
  }
  getEmployeesByFirstName( firstName: string): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(`${this.baseURL}/fname/${firstName}`)
  }
  getEmployeesByLastName(lastName: string): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(`${this.baseURL}/lname/${lastName}`)
  }
  getEmployeesByHireDate(hiredate: string): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(`${this.baseURL}/hiredate/${hiredate}`)
  }
 
  addNewEmployee(EmployeeModel: EmployeeModel): Observable<EmployeeModel> {
    return this.httpClient.post<EmployeeModel>(`${this.baseURL}/post`, EmployeeModel);
  }
 
}