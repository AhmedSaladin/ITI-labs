import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'table';
  @Output() students: { name: string; age: number }[] = [];

  @Input() add_new_student(student: { name: string; age: number }) {
    this.students.push(student);
  }
}
