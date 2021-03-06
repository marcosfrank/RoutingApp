import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from './people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from './person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() personId;
  person : Person;
  constructor(private _personService: PeopleService,
              private _activatedRoute: ActivatedRoute,
              private _router : Router) 
  { 

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.personId = +params['id']; 
   });
    this._personService.getById(this.personId)
    .subscribe(response => {
          this.person = response;
        },
        error => console.log("Ha surgido un error." + error)
    );
  }

  back() : void {
    this._router.navigate(['/people']);
  }
 
}
