import { Component } from '@angular/core';
import { EmployeeModel } from '../../../models/employee-model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-lastname',
  templateUrl: './employee-lastname.component.html',
  styleUrl: './employee-lastname.component.css'
})
export class EmployeeLastnameComponent {
    selectedEmployeeLastName:EmployeeModel[];
    name:string;
    constructor(private  employeeService: EmployeeService){}
   
    viewAll() {
      this.selectedEmployeeLastName=null;    
      }
   
      getEmployeeByLastName() {
        this.employeeService.getEmployeesByLastName(this.name).subscribe(data =>{
          this.selectedEmployeeLastName=data;
          console.log(this.selectedEmployeeLastName)
        });
   
   
  }
  }