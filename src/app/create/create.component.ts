import { Component, OnInit } from '@angular/core';
import {EdataService} from '../Edata.service';
import { employee } from '../nav1/employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id:number=0;
  name: string;
  dob:string;
  address:string;
  phone: string;
  newEmp:employee;
  marks:number;
  stream:string;
  degree:string;
  college:string;


  constructor(private svc:EdataService) { }

  ngOnInit() {
  }
  createEmployee(){
    ++this.id;
    this.newEmp= new employee(this.id,this.name,this.dob,this.address,this.phone,this.degree,this.marks,this.stream,this.college);
    console.log(this.newEmp);
    this.svc.create(this.newEmp);
    this.reset();
  }
  reset(){
    this.name="";
    this.dob="";
    this.address= "";
    this.phone="";
    this.degree="";
    this.marks=0;
    this.stream="";
    this.college="";

  }

}



