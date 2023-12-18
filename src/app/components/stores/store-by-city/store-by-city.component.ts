import { Component } from '@angular/core';
import { StoreModel } from '../../../models/store-model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-store-by-city',
  templateUrl: './store-by-city.component.html',
  styleUrl: './store-by-city.component.css'
})
export class StoreByCityComponent {
  getStoreCity: StoreModel;
  getCity: string;

 constructor(private storeService: StoreService) {}
 viewAll() {
   this.getStoreByCity();

  
  
 }
 getStoreByCity() {
   this.storeService.getStoresByCity(this.getCity).subscribe(
     (data:StoreModel[])=>{
     this.getStoreCity = data.length > 0 ? { ...data[0] } : null;

   },

     error => {
       console.error('Error fetching store details:', error);
     }
);
   }
 }