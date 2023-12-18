import { Component } from '@angular/core';
import { StoreModel } from '../../../models/store-model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrl: './stores-list.component.css'
})
export class StoresListComponent {
  stores: StoreModel[];
  constructor(private storeservice: StoreService){ }
 
  ngOnInit(): void {
    this.getStores();
  }
 
  private getStores(){
    this.storeservice.getStores().subscribe(data =>{this.stores = data;
    });
 
  }
 
}