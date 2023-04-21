import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people = PEOPLE;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectPerson(personId: number): void {
    this.router.navigate(['/person', personId]);
    console.log(`Persona seleccionada: ${personId}`);
  }
}

