import { Component } from '@angular/core';
import { StoreModel } from '../../../models/store-model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-store-by-id',
  templateUrl: './store-by-id.component.html',
  styleUrl: './store-by-id.component.css'
})
export class StoreByIdComponent {
    getStoreId: StoreModel;
    getId:any;
   
    constructor(private storeService: StoreService,) {}
   
   
    viewAll() {
      this.getStoreById();
    }
   
      getStoreById() {
       
       
      this.storeService.getStoresById(this.getId).subscribe(
   
         (data:StoreModel) => {
          console.log(this.getId);
         this.getStoreId = data
       },
     
         error => {
           console.error('Error fetching store details:',error);
         }
   );
       }
     
       
     
    }
   
     