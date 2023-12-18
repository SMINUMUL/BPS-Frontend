import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleModel } from '../models/sale-model';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  private baseUrl = 'http://localhost:8090/api/sales';

  constructor(private httpClient: HttpClient) {}

  getAllSales(): Observable<SaleModel[]> {
    return this.httpClient.get<SaleModel[]>(`${this.baseUrl}`);
  }
  getSaleByOrderNumber(orderNumber: number): Observable<SaleModel> {
    return this.httpClient.get<SaleModel>(`${this.baseUrl}/${orderNumber}`);
  }
  getSalesByOrderDate(orderDate: string): Observable<SaleModel[]> {
    const url = `${this.baseUrl}/orderdate/${orderDate}`;
    return this.httpClient.get<SaleModel[]>(url);
  }
  filterByTitleId(title: number): Observable<SaleModel[]> {
    const url = `${this.baseUrl}/titleid/${title}`;
    return this.httpClient.get<SaleModel[]>(url);
  }
  filterByStoreId(storid: number): Observable<SaleModel[]> {
    const url = `${this.baseUrl}/storid/${storid}`;
    return this.httpClient.get<SaleModel[]>(url);
  }
  addSale(newSale: SaleModel): Observable<string> {
    return this.httpClient.post(this.baseUrl, newSale, {
      responseType: 'text',
    });
  }
}
