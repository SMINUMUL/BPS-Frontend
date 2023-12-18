import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PubinfoModel } from '../models/pubinfo-model';

@Injectable({
  providedIn: 'root'
})
export class PubinfoService {
  private baseURL="http://localhost:8090/api/pubinfo";
 
  constructor(private httpclient: HttpClient) { }
 
  getPublishersList(): Observable<PubinfoModel[]>{
    return this.httpclient.get<PubinfoModel[]>(`${this.baseURL}`)
  }
 
 
  updatePublisher(pubinfo:PubinfoModel,id:number): Observable<string>{
 
    const url=`${this.baseURL}/${id}`;
    return this.httpclient.put<string>(url,pubinfo)
  }
}

