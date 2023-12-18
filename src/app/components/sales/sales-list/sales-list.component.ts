import { Component } from '@angular/core';
import { SaleModel } from '../../../models/sale-model';
import { SaleService } from '../../../services/sale.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.css'
})
export class SalesListComponent {
  sales: SaleModel[]=[];
 
  constructor(private saleService: SaleService){}
 
  ngOnInit(): void {
    this.getSalesList();
  }
 
  private getSalesList() {
    this.saleService.getAllSales().subscribe(data =>{this.sales=data})
  }
}
