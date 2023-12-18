import { Component } from '@angular/core';
import { EmployeeModel } from '../../../models/employee-model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-firstname',
  templateUrl: './employee-firstname.component.html',
  styleUrl: './employee-firstname.component.css'
})
export class EmployeeFirstnameComponent {
  selectedEmployeeFirstName:EmployeeModel[];
  name:string;
 
  constructor(private  employeeService: EmployeeService){}
 
  viewAll() {
    this.selectedEmployeeFirstName=null;    
    }
 
    getEmployeeByFirstName() {
      this.employeeService.getEmployeesByFirstName(this.name).subscribe(data =>{
        this.selectedEmployeeFirstName=data;
        console.log(this.selectedEmployeeFirstName)
      });
 
 
}}