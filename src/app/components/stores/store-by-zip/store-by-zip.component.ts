import { Component } from '@angular/core';
import { StoreModel } from '../../../models/store-model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-store-by-zip',
  templateUrl: './store-by-zip.component.html',
  styleUrl: './store-by-zip.component.css'
})
export class StoreByZipComponent {
  getStoreZip: StoreModel;
  getZip: any;

 constructor(private storeService: StoreService) {}
 viewAll() {
   this.getStoreByZip();

  
  
 }
 getStoreByZip() {
     this.storeService.getStoresByZip(this.getZip).subscribe(
       (data:StoreModel[])=>{
       this.getStoreZip = data.length > 0 ? { ...data[0] } : null;

     },
  
       error => {
         console.error('Error fetching store details:', error);
       }
 );
     }
   }