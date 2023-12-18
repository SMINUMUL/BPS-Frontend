import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobModel } from '../../../models/job-model';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-job-minlevel',
  templateUrl: './job-minlevel.component.html',
  styleUrl: './job-minlevel.component.css'
})
export class JobMinlevelComponent {
  getJobminlevel: JobModel;
  getminlevel:any;
  constructor(private jobService: JobService,
    private activatedRoute: ActivatedRoute) {}
  viewAll() {
    this.getJobByminlevel();
  }
  getJobByminlevel() {
    this.jobService.getJobByminlevel(this.getminlevel).subscribe((data:JobModel[]) => {

      this.getJobminlevel = data.length > 0 ? { ...data[0] } : null;
   
    },
    error =>{
      console.error('Error fetching job details:',error);
    }
    );
   

 
  }

}
