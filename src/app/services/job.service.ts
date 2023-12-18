import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobModel } from '../models/job-model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseURL ="http://localhost:8090/api/jobs";
  constructor(private httpClient: HttpClient) { }
 
  getAllJobs(): Observable<JobModel[]>{
    return this.httpClient.get<JobModel[]>(`${this.baseURL}`)
  }
  getJobsById(jobid:number): Observable<JobModel>{
    return this.httpClient.get<JobModel>(`${this.baseURL}/${jobid}`);
 
  }
  getJobByminlevel(jobminlevel:number): Observable<JobModel[]>{
    return this.httpClient.get<JobModel[]>(`${this.baseURL}/minlvl/${jobminlevel}`);
  }
  getJobBymaxlevel(jobmaxlevel:number): Observable<JobModel[]>{
    return this.httpClient.get<JobModel[]>(`${this.baseURL}/maxlvl/${jobmaxlevel}`);
  }
  addNewJob(job: any): Observable<any> {
   
    return this.httpClient.post(`${this.baseURL}`, job);
 
  }
 
}