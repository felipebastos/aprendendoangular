import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from './app.model';
import { PeopleService } from './services/people.service';
import * as AppActions from './store/app.actions';
import * as fromAppState from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people: Observable<fromAppState.State>;

  constructor(
    private service: PeopleService,
    private store: Store<{ appPeople: fromAppState.State }>
  ) { }

  ngOnInit() {
    this.people = this.store.select('appPeople');
  }

  async onPopulateButton() {
    await this.service.loadPeople();
  }

  onMoveToUnknown(person: Person) {
    this.store.dispatch(AppActions.moveToUnknown({ payload: person }));
  }

  onMoveToKnown(person: Person) {
    this.store.dispatch(AppActions.moveToKnown({ payload: person }));
  }

  onDetalhesClicked(person: Person) {
    this.store.dispatch(AppActions.selectPerson({ payload: person }));
  }

  onFecharClicked() {
    this.store.dispatch(AppActions.unselectPerson());
  }
}
