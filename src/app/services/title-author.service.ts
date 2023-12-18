import { Injectable } from '@angular/core';
import { TitleAuthorModel } from '../models/title-author-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TitleAuthorService {
  private apiUrl = 'http://localhost:8090/api/authortitles/post';
  constructor(private http: HttpClient) { }

  addNewTitleAuthorModel(titleAuthorModel: TitleAuthorModel): Observable<string> {
    return this.http.post<string>(this.apiUrl, titleAuthorModel);
  }
}
