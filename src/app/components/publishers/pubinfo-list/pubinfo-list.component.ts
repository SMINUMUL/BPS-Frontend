import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PubinfoModel } from '../../../models/pubinfo-model';
import { PubinfoService } from '../../../services/pubinfo.service';

@Component({
  selector: 'app-pubinfo-list',
  templateUrl: './pubinfo-list.component.html',
  styleUrl: './pubinfo-list.component.css'
})
export class PubinfoListComponent {
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
}
