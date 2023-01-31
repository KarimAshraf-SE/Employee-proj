import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit, OnDestroy {
  pageTitle = 'Employees List';
  employees: IEmployee[] = [];
  errorMessage = '';
  sub!: Subscription;
  displayedColumns: string[] = ['ID', 'First Name', 'Last Name', 'age', 'Email', 'Hiring Date', 'OPS'];



  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) {
}

  ngOnInit(): void {
    
    this.sub = this.employeeService.getEmployees().subscribe({
      next: employees => {
        this.employees = employees;
      },
      error: err => this.errorMessage = err
    });

  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['employee-update', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.sub = this.employeeService.getEmployees().subscribe({
        next: employees => {
          this.employees = employees;
        },
        error: err => this.errorMessage = err
      });
    })
  }

 

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
