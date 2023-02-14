import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { EmployeeComponent } from './employee/employee-list/employee.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'employees', component: EmployeeComponent },
        { path: 'employees/:id', component: EmployeeDetailComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: 'employees-create', component: EmployeeAddComponent },
        { path: 'employee-update/:id', component: EmployeeUpdateComponent },

        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
