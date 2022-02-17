import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from './app.model';
import { PostService } from './services/post.service';
import * as AppActions from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people: Observable<{ knownpeople: Person[], unknownpeople: Person[] }>;

  constructor(
    private service: PostService,
    private store: Store<{ appPeople: { knownpeople: Person[], unknownpeople: Person[] } }>
  ) { }

  ngOnInit() {
    this.people = this.store.select('appPeople');
  }

  async onPopulateButton() {
    let people = await this.service.getPosts();

    for (let person of people) {
      this.store.dispatch(new AppActions.AddKnownPersonAction(
        person
      ));
    }
  }

  onMoveToUnknown(person: Person) {
    this.store.dispatch(new AppActions.MoveToUnknown(
      person
    ))
  }

  onMoveToKnown(person: Person) {
    this.store.dispatch(new AppActions.MoveToknown(
      person
    ))
  }
}
