import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://swapi.dev/api/people/';

  constructor(private httpClient: HttpClient) { }

  async getPosts() {
    let people = [];

    let next = this.url;

    while (next) {
      await this.access(next).then(
        response => {
          let resposta = response;
          people = [...people, ...resposta['lista']];
          next = resposta['next'];
        }
      );
    }
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
