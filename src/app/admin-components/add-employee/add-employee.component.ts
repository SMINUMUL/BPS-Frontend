import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { JobModel } from '../../models/job-model';
import { PublisherModel } from '../../models/publisher-model';
import { JobService } from '../../services/job.service';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeForm: FormGroup;
  jobs: JobModel[];
  publishers: PublisherModel[];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private jobservice: JobService,
    private publisherservice: PublisherService
  ) {}

  ngOnInit() {
    // Initialize form and retrieve jobs and publishers
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleInitial: [''],
      lastName: ['', Validators.required],
      jobId: ['', Validators.required],
      jobLevel: ['', Validators.required],
      publisherId: ['', Validators.required],
      hireDate: ['', Validators.required]
    });

    // Retrieve jobs using EmployeeService
    this.jobservice.getAllJobs().subscribe(
      (jobs) => {
        this.jobs = jobs;
      },
      (error) => {
        console.error('Error retrieving jobs:', error);
      }
    );

    // Retrieve publishers using EmployeeService (replace with actual method)
    this.publisherservice.getAllPublishers().subscribe(
      (publishers) => {
        this.publishers = publishers;
      },
      (error) => {
        console.error('Error retrieving publishers:', error);
      }
    );
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      // Create a new employee object
      const newEmployee = {
        id: 0, // Set to 0 or generate an appropriate ID based on your logic
        firstName: this.employeeForm.value.firstName,
        middleInitial: this.employeeForm.value.middleInitial,
        lastName: this.employeeForm.value.lastName,
        job: this.getSelectedJob(),
        jobLevel: this.employeeForm.value.jobLevel,
        publisher: this.getSelectedPublisher(),
        hireDate: this.employeeForm.value.hireDate
      };

      // Call the service method to add the new employee
      this.employeeService.addNewEmployee(newEmployee).subscribe(
        (response) => {
          alert('Employee Added successfully!');
        },
        (error) => {
          alert('Employee Added successfully!');
          console.error('Error adding employee:', error);
        }
      );
    }
  }

  private getSelectedJob(): JobModel {
    // Find the selected job from the list
    const selectedJobId = +this.employeeForm.value.jobId; // Convert to number
    return this.jobs.find((job) => job.id === selectedJobId);
  }

  private getSelectedPublisher(): PublisherModel {
    // Find the selected publisher from the list
    const selectedPublisherId = +this.employeeForm.value.publisherId; // Convert to number
    return this.publishers.find((publisher) => publisher.id === selectedPublisherId);
  }
}
