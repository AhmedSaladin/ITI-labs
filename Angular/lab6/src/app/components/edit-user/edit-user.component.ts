import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  id: number;
  constructor(
    private api: UsersService,
    current_id: ActivatedRoute,
    private router: Router
  ) {
    this.id = current_id.snapshot.params.id;
  }
  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.get_user_inforamtion();
  }
  user: any;

  save_user_updates(name: string, email: string, phone: string) {
    let user = { name: name, email: email, phone: phone };
    this.api.update_user_info(this.id, user).subscribe();
    console.log(user);
    this.router.navigateByUrl('users');
  }

  get_user_inforamtion() {
    this.api.get_user(this.id).subscribe(
      (response) => {
        this.user = response.body;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
