import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorModel } from '../models/author-model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:8090/api/authors';

  constructor(private http: HttpClient) {}

  addAuthor(authorModel: AuthorModel): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/add`, authorModel);
  }

  getAllAuthors(): Observable<AuthorModel[]> {
    return this.http.get<AuthorModel[]>(`${this.apiUrl}`);
  }

  getAuthorsByLastName(ln: string): Observable<AuthorModel[]> {
    return this.http.get<AuthorModel[]>(`${this.apiUrl}/lname/${ln}`);
  }

  getAuthorsByFirstName(fn: string): Observable<AuthorModel[]> {
    return this.http.get<AuthorModel[]>(`${this.apiUrl}/fname/${fn}`);
  }

  getAuthorByPhone(phno: string): Observable<AuthorModel> {
    return this.http.get<AuthorModel>(`${this.apiUrl}/phone/${phno}`);
  }

  getAuthorsByZip(zip: string): Observable<AuthorModel[]> {
    return this.http.get<AuthorModel[]>(`${this.apiUrl}/zip/${zip}`);
  }

  getAuthorsByState(state: string): Observable<AuthorModel[]> {
    return this.http.get<AuthorModel[]>(`${this.apiUrl}/state/${state}`);
  }

  getAuthorsByCity(city: string): Observable<AuthorModel[]> {
    return this.http.get<AuthorModel[]>(`${this.apiUrl}/city/${city}`);
  }

  partialUpdateAuthor(id: number, authorModel: AuthorModel): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/update/${id}`, authorModel);
  }

  updateAuthor(id: number, authorModel: AuthorModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update/${id}`, authorModel);
  }
}
