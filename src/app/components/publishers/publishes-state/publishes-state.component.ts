import { Component } from '@angular/core';
import { PublisherModel } from '../../../models/publisher-model';
import { PublisherService } from '../../../services/publisher.service';

@Component({
  selector: 'app-publishes-state',
  templateUrl: './publishes-state.component.html',
  styleUrl: './publishes-state.component.css'
})
export class PublishesStateComponent {
  selectedPublisherState:PublisherModel[];
  state:string;
 
 
  constructor(private  publisherService: PublisherService){}
 
  viewAll() {
    this.selectedPublisherState=null;    
    }
 
    getPublishersByState() {
      this.publisherService.searchPublishersByState(this.state).subscribe(data =>{
        this.selectedPublisherState=data;
        console.log(this.selectedPublisherState)
      });
}
}

