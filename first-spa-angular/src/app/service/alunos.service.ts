import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getStudent(): Observable<student[]> {
    let studentArray = [
      {
        firstName: 'Guilherme',
        age: 29,
        email: 'guilherme@gmail.com',
        course: 'Computer Cience'
      },
      {
        firstName: 'Luis',
        age: 58,
        email: 'luis@gmail.com',
        course: 'Analise e Desenvolvimento de Sistemas'
      },
      {
        firstName: 'Tania',
        age: 49,
        email: 'tania@gmail.com',
        course: 'Pedagogia'
      },
    ];

    return of(studentArray);
  }
}
