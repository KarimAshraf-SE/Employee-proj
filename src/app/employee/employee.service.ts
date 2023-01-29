import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, catchError, tap, throwError, map } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = 'http://localhost:3000/employees'

  constructor(private http: HttpClient){}
  
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeeUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );

      
  }

  getEmployee(id: number): Observable<IEmployee | undefined> {
    return this.getEmployees()
      .pipe(
        map((employees: IEmployee[]) => employees.find(e => e.id === id))
      );
  }

  createEmployee(employee: IEmployee): Observable<Object>{
    return this.http.post(`${this.employeeUrl}`, employee);
  }

  updateEmployee(id: number, employee: IEmployee): Observable<Object>{
    return this.http.put(`${this.employeeUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.employeeUrl}/${id}`);
  }
  

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }


}
