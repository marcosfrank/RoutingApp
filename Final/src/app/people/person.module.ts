import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PersonsService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonMoodComponent } from './shared/person-mood.component';
import { PersonDetailComponent } from './person-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    { path: 'people', component: PersonListComponent},
    { path: 'people/detail/:id', component: PersonDetailComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PersonListComponent,
    PersonMoodComponent,
    PersonDetailComponent
  ],
  providers: [
    PersonsService
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonModule { }
