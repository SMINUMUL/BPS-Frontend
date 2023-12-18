import { Component } from '@angular/core';
import { SaleModel } from '../../../models/sale-model';
import { SaleService } from '../../../services/sale.service';

@Component({
  selector: 'app-sales-by-storeid',
  templateUrl: './sales-by-storeid.component.html',
  styleUrl: './sales-by-storeid.component.css'
})
export class SalesByStoreidComponent {
  selectedOrderDate: SaleModel[];
  storeId: number;
 
  constructor(private saleService: SaleService) {}
 
  dateViewAll() {
    this.selectedOrderDate = null;
  }
 
  filterByStoreId() {
    console.log(this.storeId)
    this.saleService.filterByStoreId(this.storeId).subscribe(data => {
      this.selectedOrderDate = data;
      console.log(this.selectedOrderDate);
    });
  }
}