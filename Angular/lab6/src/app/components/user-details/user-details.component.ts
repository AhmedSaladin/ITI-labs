import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  id: any;
  eve: any;
  user: any;
  
  constructor(
    private api: UsersService,
    current_id: ActivatedRoute,
    private router: Router
  ) {
    this.id = current_id.snapshot.params.id;
  }

  ngOnInit(): void {
    this.eve = this.api.get_user(this.id).subscribe(
      (response) => {
        this.user = response.body;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.eve.unsubscribe();
  }

  delete_user() {
    const ans = confirm('Are you sure?');
    if (ans) {
      this.api.delete_user(this.id).subscribe();
      this.router.navigateByUrl('users');
    }
  }

  edit_user_info(id: any) {
    this.router.navigateByUrl(`users/edit/${id}`);
  }
}
