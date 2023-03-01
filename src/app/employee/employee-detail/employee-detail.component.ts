import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'pm-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  pageTitle = 'Employee Detail';
  errorMessage = '';
  employee: any;
  sub!: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) {
}






  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    if (id) {
      this.getEmployee(id);
    }
  }

  getEmployee(id: string): void {
    this.sub = this.employeeService.getEmployee(id).subscribe({
      next: (employee) => {
        console.log(employee)
        this.employee = employee;
        
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/employees']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
