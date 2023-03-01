import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'pm-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {

  employee:any;
  errorMessage = '';

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getEmployee(id);
    }

  }

  onSubmit(){
    
    this.employeeService.updateEmployee(this.employee!).subscribe( data =>{
      console.log(data);
    }
    , error => console.log(error));
    this.goToEmployeeList();
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  getEmployee(id: string): void {
    this.employeeService.getEmployee(id).subscribe({
      next: employee => this.employee = employee,
      error: err => this.errorMessage = err
    });
  }

}
