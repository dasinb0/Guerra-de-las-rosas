import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PeopleListComponent } from './person-list/person-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyTreeComponent,
    PersonDetailComponent,
    PeopleListComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
