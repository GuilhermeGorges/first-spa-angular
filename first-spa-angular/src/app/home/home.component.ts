import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  value: number;
  showTable: boolean = false;

  studentList: student[] = [
    { name: 'Guilherme', age: '30', email: 'guilherme@gmail.com', course: 'Computer Cience'},
    { name: 'Guilherme', age: '30', email: 'guilherme@gmail.com', course: 'Computer Cience'},
    { name: 'Guilherme', age: '30', email: 'guilherme@gmail.com', course: 'Computer Cience'},
    { name: 'Guilherme', age: '30', email: 'guilherme@gmail.com', course: 'Computer Cience'}
  ];

  displayedColums: string[] = ['Nome', 'Idade', 'Email', 'Curso'];

  ngOnInit(): void {
    this.value = 5;
  }

  changeValue(){
    this.value++;
  }

  restartValue(){
    this.value = 0;
  }

  getTable(){
    this.showTable = true;
  }

}
