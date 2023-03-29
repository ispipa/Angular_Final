import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
  fecha!:Date;
  ngOnInit(): void {
    this.fecha = new Date();
  }
  back(){
    window.history.back();
  }

}
