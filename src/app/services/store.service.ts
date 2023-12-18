import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreModel } from '../models/store-model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  [x: string]: any;
  private apiurl= "http://localhost:8090/api/stores";
 
constructor(private httpClient: HttpClient) { }
 
getStores(): Observable<StoreModel[]>{
  return this.httpClient.get<StoreModel[]>(`${this.apiurl}`);
 
}
getStoresByName(getName: string): Observable<StoreModel[]> {
  return this.httpClient.get<StoreModel[]>(`${this.apiurl}/name/${getName}`);
}
addStore(store: any): Observable<any> {
  return this.httpClient.post(`${this.apiurl}`, store);
 
}
 
 
 
getStoresById(getId: Number): Observable<StoreModel> {
  return this.httpClient.get<StoreModel>(`${this.apiurl}/Id/${getId}`);
}
 
 
getStoresByCity(getCity: string): Observable<StoreModel[]> {
  return this.httpClient.get<StoreModel[]>(`${this.apiurl}/city/${getCity}`);
}
getStoresByZip(getZip: string): Observable<StoreModel[]> {
  return this.httpClient.get<StoreModel[]>(`${this.apiurl}/zip/${getZip}`);
}
updateStoreById(id: number, updatedStore: StoreModel): Observable<StoreModel> {
  const url = `${this.apiurl}/update/${id}`;
  return this.httpClient.put<StoreModel>(url, updatedStore);
}
}
 