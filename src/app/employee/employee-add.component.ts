import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'pm-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employees: IEmployee[] = [];

  employee:IEmployee = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    hiringDate: ''
  };
  sub!: Subscription;
  id!: number;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {

    this.sub = this.employeeService.getEmployees().subscribe({
      next: employees => {
        console.log(employees.length);
        this.employees = employees;
        this.id = employees[employees.length].id;
      }
    });
  }

  saveEmployee(){
    this.employee.id = this.id;
    this.sub = this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
  
}


