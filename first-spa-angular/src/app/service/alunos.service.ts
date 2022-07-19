import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getStudent():Observable<any> {
    let studentArray = [
      {
        firstName: 'Guilherme',
        lastName: 'Gabriel',
        age: 29
      },
      {
        firstName: 'Luis',
        lastName: 'Carlos',
        age: 58
      },
      {
        firstName: 'Tania',
        lastName: 'Regina',
        age: 49
      },
    ];

    return of(studentArray);
  }
}
