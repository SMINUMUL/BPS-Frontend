import { Component } from '@angular/core';
import { PublisherModel } from '../../../models/publisher-model';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-publishes-country',
  templateUrl: './publishes-country.component.html',
  styleUrl: './publishes-country.component.css'
})
export class PublishesCountryComponent {
  selectedPublisherName:PublisherModel[];
  country:string;
 
 
  constructor(private  publisherService: PublisherService){}
 
  viewAll() {
    this.selectedPublisherName=null;    
    }
 
    getPublishersByCountry() {
      this.publisherService.searchPublishersByCountry(this.country).subscribe(data =>{
        this.selectedPublisherName=data;
        console.log(this.selectedPublisherName)
      });
}
}
