import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublisherModel } from '../models/publisher-model';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  private apiUrl = 'http://localhost:8090/api/publishers';

  constructor(private http: HttpClient) {}

  addNewPublisher(publisherModel: PublisherModel): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/post`, publisherModel);
  }

  getAllPublishers(): Observable<PublisherModel[]> {
    return this.http.get<PublisherModel[]>(`${this.apiUrl}`);
  }

  getPublisherById(id: number): Observable<PublisherModel> {
    return this.http.get<PublisherModel>(`${this.apiUrl}/${id}`);
  }

  searchPublishersByName(name: string): Observable<PublisherModel[]> {
    return this.http.get<PublisherModel[]>(`${this.apiUrl}/pubname/${name}`);
  }

  searchPublishersByCity(city: string): Observable<PublisherModel[]> {
    return this.http.get<PublisherModel[]>(`${this.apiUrl}/city/${city}`);
  }

  searchPublishersByState(state: string): Observable<PublisherModel[]> {
    return this.http.get<PublisherModel[]>(`${this.apiUrl}/state/${state}`);
  }

  searchPublishersByCountry(country: string): Observable<PublisherModel[]> {
    return this.http.get<PublisherModel[]>(`${this.apiUrl}/Country/${country}`);
  }

  updatePublisherDetails(id: number, publisherModel: PublisherModel): Observable<PublisherModel> {
    return this.http.put<PublisherModel>(`${this.apiUrl}/${id}`, publisherModel);
  }

  updatePublisher(publisher:PublisherModel,id:number): Observable<string>{
    const url=`${this.apiUrl}/${id}`;
    return this.http.put<string>(url,publisher)
  }
}
