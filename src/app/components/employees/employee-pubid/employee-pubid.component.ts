import { Component } from '@angular/core';
import { EmployeeModel } from '../../../models/employee-model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-pubid',
  templateUrl: './employee-pubid.component.html',
  styleUrl: './employee-pubid.component.css'
})

export class EmployeePubidComponent {
    employees: EmployeeModel[];
      pubId: number;
     
     
      constructor(private employeeService: EmployeeService) {}
      viewAll() {
        this.employees=null;
      }
   
      getEmployeesByPubId() {
        console.log(this.pubId)
        this.employeeService.getEmployeesByPubId(this.pubId).subscribe(
          (data: EmployeeModel[]) => {
            this.employees = data;
          console.log(data);
          });
      }
    }