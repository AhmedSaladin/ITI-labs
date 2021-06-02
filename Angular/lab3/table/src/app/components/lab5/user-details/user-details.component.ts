import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  id: any;
  constructor(private user: UsersService, myid: ActivatedRoute) {
    this.id = myid.snapshot.params.id;
  }
  current: any;
  ngOnInit(): void {
    this.user.get_user_details(this.id).subscribe(
      (response) => {
        this.current = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
