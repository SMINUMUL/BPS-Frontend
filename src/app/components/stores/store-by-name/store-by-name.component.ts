import { Component } from '@angular/core';
import { StoreModel } from '../../../models/store-model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-store-by-name',
  templateUrl: './store-by-name.component.html',
  styleUrl: './store-by-name.component.css'
})
export class StoreByNameComponent {
  getStoreName: StoreModel;
  getName: string;

 constructor(private storeService: StoreService) {}
 viewAll() {
   this.getStoreByName();

  
  
 }
 getStoreByName() {
   this.storeService.getStoresByName(this.getName).subscribe(
     (data:StoreModel[])=>{
     this.getStoreName = data.length > 0 ? { ...data[0] } : null;

   },

     error => {
       console.error('Error fetching store details:', error);
     }
);
   }
 }
