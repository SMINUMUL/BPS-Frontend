import { Component } from '@angular/core';
import { PublisherModel } from '../../../models/publisher-model';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-publishes-city',
  templateUrl: './publishes-city.component.html',
  styleUrl: './publishes-city.component.css'
})
export class PublishesCityComponent {
  selectedPublisherCity:PublisherModel[];
  city:string;
 
 
  constructor(private  publisherService: PublisherService){}
 
  viewAll() {
    this.selectedPublisherCity=null;    
    }
 
    getPublishersByCity() {
      this.publisherService.searchPublishersByCity(this.city).subscribe(data =>{
        this.selectedPublisherCity=data;
        console.log(this.selectedPublisherCity)
      });
}
}
