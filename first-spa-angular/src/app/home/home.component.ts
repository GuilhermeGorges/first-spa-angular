import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { student } from '../model/student';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  value!: number;
  showTable: boolean = false;

  studentList: student[] = [
    { name: 'Guilherme', age: '30', email: 'guilherme@gmail.com', course: 'Computer Cience'},
    { name: 'Gabriel', age: '30', email: 'gabriel@gmail.com', course: 'Analise e Desenvolvimento de Sistemas'},
    { name: 'Dielen', age: '27', email: 'dielen@gmail.com', course: 'Logistica'},
    { name: 'Tania', age: '49', email: 'tania@gmail.com', course: 'Pedagogia'}
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
