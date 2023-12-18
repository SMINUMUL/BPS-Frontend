import { Component } from '@angular/core';
import { PublisherModel } from '../../../models/publisher-model';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-publishes-id',
  templateUrl: './publishes-id.component.html',
  styleUrl: './publishes-id.component.css'
})
export class PublishesIdComponent {
  selectedPublisherId:PublisherModel|null=null;
  publishersId:number;
 
 
  constructor(private  publisherService: PublisherService){}
 
  viewAll() {
    this.selectedPublisherId=null;    
    }
 
    getPublishersById() {
      this.publisherService.getPublisherById(this.publishersId).subscribe(data =>{
       
        this.selectedPublisherId=data;
        console.log(this.selectedPublisherId)
      });
}

}
