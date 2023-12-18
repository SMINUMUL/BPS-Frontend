import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-publisher-add',
  templateUrl: './publisher-add.component.html',
  styleUrl: './publisher-add.component.css'
})
export class PublisherAddComponent {
  publishers = {
    id:0,
    name:"",
    city:"",
    state:"",
    country:"",
   
  }
   
  constructor(private  publisherService: PublisherService,private router:Router){}
   
  onSubmit() {
  throw new Error('Method not implemented.');
  }
   
  addNewPublisher(){
    this.publisherService.addNewPublisher(this.publishers).subscribe((response:string)=>console.log(response));
    this.router.navigate(['publisherlistadmin'])
  }
  }