import { Component } from '@angular/core';
import { SaleModel } from '../../../models/sale-model';
import { SaleService } from '../../../services/sale.service';

@Component({
  selector: 'app-sales-by-id',
  templateUrl: './sales-by-id.component.html',
  styleUrl: './sales-by-id.component.css'
})
export class SalesByIdComponent {
  selectedorderNumber:SaleModel;
  orderNumber:number;
 
  constructor(private saleService: SaleService){}
 
  ngOnInit(): void {
   
  }
 
  viewAll() {
    this.selectedorderNumber=null;    
    }
   
  getSaleByOrderNumber(){
    console.log(this.orderNumber);
    this.saleService.getSaleByOrderNumber(this.orderNumber).subscribe(data => {
      this.selectedorderNumber=data;
      console.log(this.selectedorderNumber)
    })
  }
}