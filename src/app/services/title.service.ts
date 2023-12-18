import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TitleModel } from '../models/title-model'; // Import TitleModel
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private apiUrl = 'http://localhost:8090/api/titles';
  private titlesSubject = new BehaviorSubject<TitleModel[]>([]);
  titles$ = this.titlesSubject.asObservable()

  constructor(private http: HttpClient,
              private authService: AuthService) {}

  updateTitles(titles: TitleModel[]): void {
    this.titlesSubject.next(titles);
  }

  getTitles(): Observable<TitleModel[]> {
    let token: any = this.authService.retrieveToken();
    let header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token 
      })
    }
    return this.http.get<TitleModel[]>(`${this.apiUrl}`,header);
  }

  getTop5Titles(): Observable<TitleModel[]> {
    return this.http.get<TitleModel[]>(`${this.apiUrl}/top5titles`);
  }

  getTop5ExpensiveTitles(): Observable<TitleModel[]> {
    return this.http.get<TitleModel[]>(`${this.apiUrl}/top5ExpensiveTitles`);
  }

  searchTitleByTitle(titleName: string): Observable<TitleModel> {
    return this.http.get<TitleModel>(`${this.apiUrl}/title/${titleName}`);
  }

  addNewTitle(titleModel: TitleModel): Observable<TitleModel> {
    return this.http.post<TitleModel>(`${this.apiUrl}/post`, titleModel);
  }

  searchTitlesByType(type: string): Observable<TitleModel[]> {
    return this.http.get<TitleModel[]>(`${this.apiUrl}/type/${type}`);
  }

  searchTitlesByPubId(pubid: number): Observable<TitleModel[]> {
    return this.http.get<TitleModel[]>(`${this.apiUrl}/pubid/${pubid}`);
  }

  searchTitlesByPubDate(pubdate: string): Observable<TitleModel[]> {
    return this.http.get<TitleModel[]>(`${this.apiUrl}/pubdate/${pubdate}`);
  }

  updateAllTitleDetails(id: number, titleModel: TitleModel): Observable<TitleModel> {
    return this.http.put<TitleModel>(`${this.apiUrl}/${id}`, titleModel);
  }

  updateSpecificTitleDetails(id: number, titleModel: TitleModel): Observable<TitleModel> {
    return this.http.patch<TitleModel>(`${this.apiUrl}/${id}`, titleModel);
  }

  getTitlesByAuthorName(authorName: string): Observable<TitleModel[]> {
    return this.http.get<TitleModel[]>(`${this.apiUrl}/authorName/${authorName}`);
  }

  searchTitlesByPubDateLike(pubDate: string): Observable<TitleModel[]> {
    return this.http.get<TitleModel[]>(`${this.apiUrl}/searchByPubDateLike/${pubDate}`);
  }
}
