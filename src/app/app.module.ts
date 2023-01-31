import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee-list/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    WelcomeComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
