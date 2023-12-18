import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobModel } from '../../../models/job-model';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-job-id',
  templateUrl: './job-id.component.html',
  styleUrl: './job-id.component.css'
})
export class JobIdComponent {
 
    selectedJob: JobModel;
    jobId:number;
 
 
 
    constructor(private jobService: JobService,
      private activatedRoute: ActivatedRoute) {}
    viewAll() {
      this.selectedJob=null;
    }
 
    getJobById() {
      console.log(this.jobId)
      this.jobService.getJobsById(this.jobId).subscribe((data:JobModel) => {
        this.selectedJob = data;
        console.log(data);
      });
    }
}
