import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrl: './add-store.component.css'
})
export class AddStoreComponent {
  newStore = {
    storeName: '',
    name:'',
    address: '',
    city: '',
    state: '',
    zip: '',
  };
 
  constructor(private storeService: StoreService) {}
 
  addStore() {
    this.storeService.addStore(this.newStore).subscribe(
      (data) => {
        // Handle success, e.g., show a success message
        console.log('Store added successfully:', data);
 
        // Optionally, reset the form after successful submission
        this.resetForm();
      },
      (error) => {
        console.error('Error adding store:', error);
        // Handle error, e.g., show an error message
      }
    );
  }
 
  resetForm() {
    this.newStore = {
      storeName: '',
      name:'',
      address: '',
      city: '',
      state: '',
      zip: '',
    };
  }
}