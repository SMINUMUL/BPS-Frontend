import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PubinfoModel } from '../../models/pubinfo-model';
import { PubinfoService } from '../../services/pubinfo.service';

@Component({
  selector: 'app-admin-pubinfo-update',
  templateUrl: './admin-pubinfo-update.component.html',
  styleUrl: './admin-pubinfo-update.component.css'
})
export class AdminPubinfoUpdateComponent {
  pubinfo:PubinfoModel = {
    id:0,
    publisher:{
        id:0,
        name:"",
        city:"",
        state:"",
        country:""
    },
    logo:"",
    prInfo:""
  }
 
  ngOnInit(){
 
    this.activateRoute.queryParams.subscribe(params => {
      this.pubinfo.id=+params['id'];
      this.pubinfo.publisher.id= params['id'];
      this.pubinfo.logo=params['logo'];
      this.pubinfo.prInfo=params['pr_info'];
  });
}
 
  constructor(private  pubinfoService: PubinfoService,private router:Router,private activateRoute:ActivatedRoute){}
 
  updatePublisher(){
    this.pubinfoService.updatePublisher(this.pubinfo,this.pubinfo.id).subscribe((response:string)=>console.log(response));
    this.router.navigate(['adminpubinfolist'])
  }
}