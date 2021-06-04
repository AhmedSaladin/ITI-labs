import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(private api: UsersService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.get_users();
  }

  users: any;
  eve: any;

  get_users() {
    this.eve = this.api.get_all_users().subscribe(
      (response) => {
        this.users = response.body;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete_user(id: any) {
    const ans = confirm('Are you sure?');
    if (ans) {
      this.api.delete_user(id).subscribe();
      this.get_users();
    }
  }
}
