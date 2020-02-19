import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  model='fruits'
  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  create(fruit) {
    return this.httpClient.post(this.getUrl(), fruit);
  }

  getUrlForId(id) {
    return `${this.getUrl()}${id}`;
  }

  update(fruit) {
    return this.httpClient.patch(this.getUrlForId(fruit.id),fruit)
  }

  delete(fruitId) {
    return this.httpClient.delete(this.getUrlForId(fruitId))
  }
}

