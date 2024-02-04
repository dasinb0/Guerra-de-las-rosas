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
  searchTerm: string = '';

  constructor(private router: Router, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();

    const storedSearchTerm = localStorage.getItem('searchTerm');
    this.searchTerm = storedSearchTerm ? storedSearchTerm : '';

    this.filterPeople();
  }

  selectPerson(id: number): void {
    this.selectedPersonId = id;
    this.router.navigateByUrl(`/person/${id}`);
  }

  filterPeople(): void {
    const selectedValue = this.searchTerm.toLowerCase();
    if (selectedValue !== "") {
      this.filteredPeople = this.people.filter((person) =>
        person.name.toLowerCase().includes(selectedValue)
      );
    } else {
      this.filteredPeople = this.people;
    }

    localStorage.setItem('searchTerm', selectedValue);
  }
}

  
  

