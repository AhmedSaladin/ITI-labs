import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  get_all_users() {
    return this.http.get(this.url);
  }
  get_user_details(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
}
