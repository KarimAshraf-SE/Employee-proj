import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'pm-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  pageTitle = 'Employee Detail';
  errorMessage = '';
  employee: IEmployee | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) {
}






  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getEmployee(id);
    }
  }

  getEmployee(id: number): void {
    this.employeeService.getEmployee(id).subscribe({
      next: employee => this.employee = employee,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/employees']);
  }

}
