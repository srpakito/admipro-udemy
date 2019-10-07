import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
}) 
export class ProgressComponent implements OnInit {

  porcentaje01: number = 20;
  porcentaje02: number = 50;

  constructor() { }

  ngOnInit() {
  }

}
