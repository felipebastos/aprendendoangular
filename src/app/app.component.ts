import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people: any;

  constructor(private service: PostService) { }

  async ngOnInit() {
    this.people = await this.service.getPosts();
  }
}
