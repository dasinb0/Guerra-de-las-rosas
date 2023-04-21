import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeopleService } from '../people.service';
import { Person } from '../data';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    if (id !== null && id !== undefined) {
      this.person = this.peopleService.getPersonById(id);
      if (!this.person) {
        console.log(`La persona con id ${id} no se encontró en la lista`);
      }
      
    }
  }
  goBack(): void {
    this.location.back(); 
  }
}

