import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SaleService } from '../../services/sale.service';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrl: './add-sales.component.css'
})
export class AddSalesComponent {
  newSale: any = {
    store: {
      id: 0,
    },
    orderNumber: null,
    orderDate: "",
    qty: 0,
    payterms: "",
    title: {
      id: 0
    }
  };
 
  responseMessage: string = '';
 
  constructor(private saleService: SaleService) { }
 
  onSubmit(form: NgForm) {
    if (form) {
      this.addSale();
    } else {
      console.log('Form is invalid');
    }
  }
  addSale() {
    this.saleService.addSale(this.newSale).subscribe(
      (response: string) => {
        this.responseMessage = response;
        console.log(response);
        this.clearForm();
        setTimeout(() => {
          this.responseMessage = '';
        }, 5000);
      },
      (error) => {
        console.error('Error adding sale:', error);
        this.responseMessage = 'Error adding sale';
      }
    );
  }
 
  clearForm() {
    this.newSale = {
      store: {
        id: 0,
      },
      orderNumber: 0,
      orderDate: "",
      qty: 0,
      payterms: "",
      title: {
        id: 0
      }
    };
  }
}