import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Cloudinary, CloudinaryImage} from "@cloudinary/base";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent, {
  title = 'lab6';
  constructor(private router: Router) {

  }
  add_new_user() {
    this.router.navigateByUrl('add-new-user');
  }
  users() {
     this.router.navigateByUrl('users');
  }
}
