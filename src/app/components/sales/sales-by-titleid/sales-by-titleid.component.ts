import { Component } from '@angular/core';
import { SaleModel } from '../../../models/sale-model';
import { SaleService } from '../../../services/sale.service';

@Component({
  selector: 'app-sales-by-titleid',
  templateUrl: './sales-by-titleid.component.html',
  styleUrl: './sales-by-titleid.component.css'
})
export class SalesByTitleidComponent {
  selectedOrderDate: SaleModel[];
  titleId: number;
 
  constructor(private saleService: SaleService) {}
 
  dateViewAll() {
    this.selectedOrderDate = null;
  }
 
  filterByTitleId() {
    this.saleService.filterByTitleId(this.titleId).subscribe(data => {
      this.selectedOrderDate = data;
      console.log(this.selectedOrderDate);
    });
  }
}