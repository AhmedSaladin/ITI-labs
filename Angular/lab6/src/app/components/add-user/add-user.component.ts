import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit, OnDestroy {
  constructor(private api: UsersService, private router: Router) {}
  ngOnDestroy(): void {
    this.eve.unsubscribe();
  }
  ngOnInit(): void {}
  eve: any;
  add_new_user(name: string, email: string, phone: string) {
    let user: object = { name: name, email: email, phone: phone };
    this.eve = this.api.add_new_user(user).subscribe();
    this.router.navigateByUrl('users');
  }
}
