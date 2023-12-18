import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobModel } from '../../../models/job-model';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
    jobs:JobModel[]=[];
      
    constructor(private jobService: JobService
                ,private route: Router)
                {}
      
       ngOnInit(): void{
         this.getAllJobs();
       }        
    
       private getAllJobs(){
         this.jobService.getAllJobs().subscribe(data=>{this.jobs=data;})
       }
       getJobsById(jobId: number){
         this.route.navigate(['job-view',jobId])
       }
    
    
    
   }