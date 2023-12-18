import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-publisher-update',
  templateUrl: './publisher-update.component.html',
  styleUrl: './publisher-update.component.css'
})
export class PublisherUpdateComponent {
  publishers = {
    id:0,
    name:"",
    city:"",
    state:"",
    country:""
  }
 
  ngOnInit(){
 
    this.activateRoute.queryParams.subscribe(params => {
      this.publishers.id=+params['id'];
      this.publishers.name = params['name'];
      this.publishers.city=params['city'];
      this.publishers.state=params['state'];
      this.publishers.country=params['country'];
  });
}
 
  constructor(private  publisherService: PublisherService,private router:Router,private activateRoute:ActivatedRoute){}
 
  updatePublisher(){
    this.publisherService.updatePublisher(this.publishers,this.publishers.id).subscribe((response:string)=>console.log(response));
    this.router.navigate(['publisherlistadmin'])
  }
}