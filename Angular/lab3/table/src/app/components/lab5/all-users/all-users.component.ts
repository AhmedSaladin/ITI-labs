import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(private users: UsersService) {}
  users_list: any;
  ngOnInit(): void {
    this.users.get_all_users().subscribe(
      (res) => {
        this.users_list = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
