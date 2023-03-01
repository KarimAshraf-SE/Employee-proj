import { Injectable } from '@angular/core';
import { IEmployee } from '../employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError, map } from 'rxjs';

import { Apollo } from 'apollo-angular/apollo';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient, private apollo:Apollo, private httplink: HttpLink) {
    apollo.create({
      link: httplink.create({uri: this.employeeUrl}),
      cache: new InMemoryCache()
    })
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeeUrl).pipe(
      tap((data) => console.log('All: ', data)),
      catchError(this.handleError)
    );
  }

  getEmployee(id: string): Observable<IEmployee[]> {
    return this.http.post<IEmployee[]>(`${this.employeeUrl}/find`, {
      id: id
    })
  }

  createEmployee(employee: IEmployee): Observable<Object> {
    return this.http.post(`${this.employeeUrl}`, employee);
  }

  updateEmployee(employee: IEmployee): Observable<Object> {
    return this.http.post(`${this.employeeUrl}/update`, employee);
  }

  deleteEmployee(id: string): Observable<Object> {
    return this.http.post(`${this.employeeUrl}/remove`, {
      id: id
    });
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
