import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  get_all_users() {
    return this.http.get(this.url, {
      observe: 'response',
    });
  }

  get_user(id: number) {
    return this.http.get(`${this.url}/${id}`, {
      observe: 'response',
    });
  }

  add_new_user(user: object) {
    return this.http.post(this.url, user);
  }

  delete_user(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update_user_info(id: number, user: object) {
    return this.http.put(`${this.url}/${id}`, user);
  }
}
