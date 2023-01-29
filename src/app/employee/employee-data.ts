import { IEmployee } from './employee';

export class EmployeeData {

  createDb() {
    var employees: IEmployee[] = [
      {
        "id": 1,
        "firstName": "Lionel",
        "lastName": "Messi",
        "age": 34,
        "email": "messi@psg.com",
        "hiringDate": "January 1, 2015"
      },
      {
        "id": 2,
        "firstName": "Cristiano",
        "lastName": "Ronaldo",
        "age": 35,
        "email": "ronaldo@nasr.com",
        "hiringDate": "February 2, 2016"
      },
      {
        "id": 3,
        "firstName": "Neymar",
        "lastName": "Santos",
        "age": 26,
        "email": "neymar@psg.com",
        "hiringDate": "March 3, 2017"
      },
      {
        "id": 4,
        "firstName": "Kylian",
        "lastName": "Mbappe",
        "age": 23,
        "email": "mbappe@psg.com",
        "hiringDate": "April 4, 2018"
      },
      {
        "id": 5,
        "firstName": "Andrea",
        "lastName": "Pirlo",
        "age": 39,
        "email": "pirlo@Juventus.com",
        "hiringDate": "May 5, 2019"
      }
    ]
    return { employees };
  }
}
