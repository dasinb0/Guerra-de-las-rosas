import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../data';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  filteredPeople: Person[] = [];
  selectedPersonId: number | null = null;

  constructor(private router: Router, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
    this.filteredPeople = this.people;
  }

  selectPerson(id: number): void {
    this.selectedPersonId = id;
    this.router.navigateByUrl(`/person/${id}`);
  }

  filterPeople(event: Event): void {
    const selectedValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (selectedValue !== "") {
      this.filteredPeople = this.people.filter(person =>
        person.name.toLowerCase().includes(selectedValue)
      );
    } else {
      this.filteredPeople = this.people;
    }
  }
  
}
