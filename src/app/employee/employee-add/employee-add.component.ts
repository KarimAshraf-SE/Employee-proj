import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'pm-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  employees: IEmployee[] = [];

  employee: IEmployee = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    hiringDate: '',
  };
  sub!: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  saveEmployee() {
    this.sub = this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
    this.goToEmployeeList();

  }
}
