import { Injectable } from '@angular/core';
import { PEOPLE, Person} from './data';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  getPersonById(id: number): Person | null {
    const person = PEOPLE.find(person => person.id === id);
    return person ? person : null;
 }
    getPeople(): Person[] {
      return PEOPLE;
  }

  constructor() { }
}
