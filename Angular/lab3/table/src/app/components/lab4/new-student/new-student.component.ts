import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css'],
})
export class NewStudentComponent implements OnInit {
  id: any;
  constructor(id: ActivatedRoute) {
    this.id = id.snapshot.params.id;
  }
  ngOnInit(): void {}
}
