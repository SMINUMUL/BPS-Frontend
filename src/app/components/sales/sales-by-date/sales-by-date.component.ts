import { Component } from '@angular/core';
import { SaleModel } from '../../../models/sale-model';
import { SaleService } from '../../../services/sale.service';

@Component({
  selector: 'app-sales-by-date',
  templateUrl: './sales-by-date.component.html',
  styleUrl: './sales-by-date.component.css'
})
export class SalesByDateComponent {
  selectedOrderDate: SaleModel[];
  orderDate: string;
 
  constructor(private saleService: SaleService) {}
 
  dateViewAll() {
    this.selectedOrderDate = null;
  }
 
  getSalesByOrderDate() {
    this.saleService.getSalesByOrderDate(this.orderDate).subscribe(data => {
      this.selectedOrderDate = data;
      console.log(this.selectedOrderDate);
    });
  }
}
