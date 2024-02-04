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
  person: Person | any;  //Corregir el tipo en algun momento
  fatherName: string = 'Unknown';
  motherName: string = 'Unknown';
  spouseName: string = 'Unknown';
  childrenNames: string[] = [];

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
        this.goBack();
      } else {
        this.loadFamilyDetails();
      }
    }
  }

  loadFamilyDetails(): void {
    this.fatherName = this.getRelativeName(this.person.fatherId);
    this.motherName = this.getRelativeName(this.person.motherId);
    this.spouseName = this.getRelativeName(this.person.spouseId);
    this.childrenNames = this.person.childrenIds.map((childId: number | null) => this.getRelativeName(childId));
  }

  getRelativeName(relativeId: number | null): string {
    if (relativeId === null) {
      return 'Unknown';
    }

    const relative = this.peopleService.getPersonById(relativeId);
    return relative ? relative.name : 'Unknown';
  }

  goBack(): void {
    this.location.back();
  }
}


