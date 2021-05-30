import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  age = new FormControl(0, [
    Validators.required,
    Validators.min(18),
    Validators.max(50),
  ]);
  @Output() send_data = new EventEmitter();
  student() {
    let stud: {} = {
      name: this.name.value,
      age: this.age.value,
    };
    if (this.is_name_valid() && this.is_age_valid()) this.send_data.emit(stud);
  }
  is_name_valid() {
    return this.name.valid;
  }
  is_age_valid() {
    return this.age.valid;
  }
}
