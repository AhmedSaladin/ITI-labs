import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  name: string = '';
  age: number = 0;
  address: string = '';
  members: { name: string; age: number; address: string }[] = [];
  get is_name_valid() {
    return this.name.length >= 3;
  }
  get is_address_valid() {
    return this.address.length >= 10;
  }
  get is_above_18_year() {
    return this.age >= 18;
  }
  clear_screen(): void {
    this.age = 0;
    this.name = '';
    this.address = '';
  }
  add_member() {
    let member: { name: string; age: number; address: string } = {
      name: this.name,
      age: this.age,
      address: this.address,
    };
    if (this.is_address_valid && this.is_above_18_year && this.is_name_valid)
      this.members.push(member);
    this.clear_screen();
  }
}
