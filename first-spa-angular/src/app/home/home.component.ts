import { Component, Input, OnInit } from '@angular/core';
import { student } from '../model/student';
import { AlunosService } from '../service/alunos.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private alunosService: AlunosService) { }

  value!: number;
  showTable: boolean = false;

  studentList!: student[];

  displayedColums: string[] = ['Nome', 'Idade', 'Email', 'Curso'];

  ngOnInit(): void {
    this.value = 5;
    this.getStudent();
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

  private getStudent() {
    this.alunosService.getStudent().subscribe(student => {
      this.studentList.push(student);
    });
  }

}
