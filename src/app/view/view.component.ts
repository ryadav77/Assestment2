import { Component, OnInit } from '@angular/core';
import {EdataService} from '../Edata.service';
import { employee } from '../nav1/employee';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees : employee[]=[];

  constructor(private svc:EdataService) { }

  ngOnInit() {

    this.employees= this.svc.employees;
    console.log(this.employees);
  }

}
