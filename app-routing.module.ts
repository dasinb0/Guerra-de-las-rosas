import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './person-list/person-list.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/person-list', pathMatch: 'full' },
  { path: 'person-list', component: PeopleListComponent },
  { path: 'family-tree', component: FamilyTreeComponent },
  { path: 'person/:id', component: PersonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

