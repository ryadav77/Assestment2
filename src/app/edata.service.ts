import { Injectable } from '@angular/core';
import { employee } from './nav1/employee';

@Injectable({
  providedIn: 'root'
})
export class EdataService {

  employees:employee[]=[];

  constructor() {  }
    create(e:employee){
      console.log((this.employees.length));
      this.employees.push(e);
      console.log(this.employees[0]);
    }
}


