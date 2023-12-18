import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobModel } from '../../../models/job-model';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-job-maxlevel',
  templateUrl: './job-maxlevel.component.html',
  styleUrl: './job-maxlevel.component.css',
})
export class JobMaxlevelComponent {
  getJobmaxlevel: JobModel;
  getmaxlevel: number;
  constructor(
    private jobService: JobService,
    private activatedRoute: ActivatedRoute
  ) {}
  viewAll() {
    this.getJobBymaxlevel();
  }
  getJobBymaxlevel() {
    this.jobService.getJobBymaxlevel(this.getmaxlevel).subscribe(
      (data: JobModel[]) => {
        this.getJobmaxlevel = data.length > 0 ? { ...data[0] } : null;
      },
      (error) => {
        console.error('Error fetching job details:', error);
      }
    );
  }
}
