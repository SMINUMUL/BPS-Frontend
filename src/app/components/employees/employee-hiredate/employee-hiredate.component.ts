import { Component } from '@angular/core';
import { EmployeeModel } from '../../../models/employee-model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-hiredate',
  templateUrl: './employee-hiredate.component.html',
  styleUrl: './employee-hiredate.component.css'
})

export class EmployeeHiredateComponent {
  employees: EmployeeModel[];
 hiredate: string;
 
 
  constructor(private employeeService: EmployeeService) {}
  viewAll() {
    this.employees=null;
  }
 
  getEmployeesByHireDate() {
    console.log(this.hiredate)
    this.employeeService.getEmployeesByHireDate(this.hiredate).subscribe(
      (data: EmployeeModel[]) => {
        this.employees = data;
     
      // error => {
      //   console.error('Error fetching employees by pubid:', error);
      // }
      console.log(data);
      });
  }
}