import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PubinfoModel } from '../../models/pubinfo-model';
import { PubinfoService } from '../../services/pubinfo.service';

@Component({
  selector: 'app-admin-pubinfo-list',
  templateUrl: './admin-pubinfo-list.component.html',
  styleUrl: './admin-pubinfo-list.component.css'
})
export class AdminPubinfoListComponent {
  pubInfo: PubinfoModel[]=[];
  selectedPubinfoId:PubinfoModel|null=null;
 
  constructor(private pubInfoService:PubinfoService,private route:Router){}
 
  getPubInfo(){
    this.pubInfoService.getPublishersList().subscribe(data =>{
      this.pubInfo=data;
  });
}
 
ngOnInit(): void {
  this.getPubInfo();
}
viewUpdate(id: number,pubid: number,logo: string,prInfo: string) {
  this.route.navigate(['pubinfo-update'],{queryParams:{id,pubid,logo,prInfo}});
 
  }
}
