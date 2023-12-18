import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from '../../../models/employee-model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-view-id',
  templateUrl: './employee-view-id.component.html',
  styleUrl: './employee-view-id.component.css'
})
export class EmployeeViewIdComponent {
    selectedEmployee: EmployeeModel[];
    employeeId:number;
   
    constructor(private employeeService: EmployeeService,
      private activatedRoute: ActivatedRoute) {}
    viewAll() {
      this.selectedEmployee=null;
    }
   
    getEmployeeById() {
      console.log(this.employeeId)
      this.employeeService.getEmployeesById(this.employeeId).subscribe((data:EmployeeModel[]) => {
        this.selectedEmployee = data;
        console.log(data);
      });
    }
  }