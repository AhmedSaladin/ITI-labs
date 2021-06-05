import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: '[app-user-info]',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  constructor(private api: UsersService) {}
  @Input('data') user: any;
  eve: any;
  ngOnInit(): void {}

  delete_user(id: any) {
    const ans = confirm('Are you sure?');
    if (ans) {
      this.eve = this.api.delete_user(id).subscribe();
    }
  }
}
