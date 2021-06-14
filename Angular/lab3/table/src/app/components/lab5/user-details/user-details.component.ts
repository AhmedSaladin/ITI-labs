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
  img: any =
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a8dcf103173247.5f471a30c0f21.png';
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

  compelete(eve: any) {
    console.log(`on compelete`);
    console.log(eve);
    this.img= eve.cdnUrl
  }
  prog(eve: any) {
    console.log(`on progress`);
    console.log(eve);
  }
  change_pic(eve: any) {
    console.log(`on change`);
    console.log(eve);
  }
}
