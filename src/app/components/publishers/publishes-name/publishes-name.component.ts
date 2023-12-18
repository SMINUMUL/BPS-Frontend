import { Component } from '@angular/core';
import { PublisherModel } from '../../../models/publisher-model';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-publishes-name',
  templateUrl: './publishes-name.component.html',
  styleUrl: './publishes-name.component.css'
})
export class PublishesNameComponent {
  selectedPublisherName:PublisherModel[];
  name:string;
 
 
  constructor(private  publisherService: PublisherService){}
 
  viewAll() {
    this.selectedPublisherName=null;    
    }
 
    getPublishersByName() {
      this.publisherService.searchPublishersByName(this.name).subscribe(data =>{
        this.selectedPublisherName=data;
        console.log(this.selectedPublisherName)
      });
}
}