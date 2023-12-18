import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {
  newJob = {
  id:0,
  description: '',
  minLevel: 0,
  maxLevel: 0,
};

constructor(private jobService: JobService, private router: Router) {}

onSubmit(){
  throw new Error('Method not implemented');
}

addNewJob() {
  this.jobService.addNewJob(this.newJob).subscribe(
    (response:string) => console.log(response));
 
 this.router.navigate(['jobs'])
}
}
