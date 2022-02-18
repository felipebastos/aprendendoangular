import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../app.model';
import { Store } from '@ngrx/store';
import * as fromAppState from '../store/app.reducer';
import { addUnKnownPeoplenAction } from '../store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private next: string = 'https://swapi.dev/api/people/';

  constructor(
    private httpClient: HttpClient,
    private store: Store<{ appPeople: fromAppState.State }>
  ) { }

  async loadPeople() {
    let people = [];

    await this.access(this.next).then(
      response => {
        people = [...response['lista']];
        this.next = response['next'];
      }
    );

    this.store.dispatch(addUnKnownPeoplenAction({ payload: people }));

    return people;
  }

  access(seguir: String): Promise<any> {
    let p1 = new Promise((resolve, reject) => {
      this.httpClient.get(`${seguir}`).subscribe(
        response => {
          resolve({ 'next': response['next'], 'lista': response['results'] });
        });
    });
    return p1;
  }
}
