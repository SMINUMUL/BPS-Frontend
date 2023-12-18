import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from '../../../models/employee-model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})export class EmployeeListComponent {
  employees: EmployeeModel[]=[];
 
  constructor(private employeeService: EmployeeService
              ,private route:Router
    ){}
 
  ngOnInit(): void {
    this.getAllEmployees();
  }
     
   
    private getAllEmployees() {
      this.employeeService.getAllEmployees().subscribe(data=>{this.employees=data;
      })
    }
    getEmployeeById(employeeid: number){
     
       
      this.route.navigate(['employee-view', employeeid]);
    }
 
  }