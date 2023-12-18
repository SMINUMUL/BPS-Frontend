import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherModel } from '../../models/publisher-model';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-admin-publisher-list',
  templateUrl: './admin-publisher-list.component.html',
  styleUrl: './admin-publisher-list.component.css'
})
export class AdminPublisherListComponent {
  publishers: PublisherModel[]=[];
  selectedPublisherId:PublisherModel|null=null;
  publishersId:number=0;
 
 
  constructor(private  publisherService: PublisherService,private router:Router){}
 
  viewUpdate(id:number,name:string,city:string,state:string,country:string) {
    // this.selectedPublisherId=null;    
    this.router.navigate(['publisherupdate'],{queryParams:{id,name,city,state,country}});
    }
 
  ngOnInit(): void {
    this.getPublishers();
  }
 
   getPublishers() {
    this.publisherService.getAllPublishers().subscribe(data =>{
      this.publishers=data;
    });
  }
 
  getPublishersById() {
    this.publisherService.getPublisherById(this.publishersId).subscribe(data =>{
     
      this.selectedPublisherId=data;
      console.log(this.selectedPublisherId)
    });
  }
}
