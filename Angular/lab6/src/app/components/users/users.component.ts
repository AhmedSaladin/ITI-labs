import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: any;
  eve: any;
  constructor(private api: UsersService) {}

  ngOnInit(): void {
    this.eve = this.api.get_all_users().subscribe(
      (response) => {
        this.users = response.body;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.eve.unsubscribe();
  }
}
