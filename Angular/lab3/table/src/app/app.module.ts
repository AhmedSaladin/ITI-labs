import { Input, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { StudentComponent } from './components/lab4/student/student.component';
import { TableComponent } from './components/lab4/table/table.component';
import { RouterModule } from '@angular/router';
import { NewStudentComponent } from './components/lab4/new-student/new-student.component';

const routes: any = [
  { path: '', component: TableComponent },
  { path: 'add-student', component: StudentComponent },
  { path: 'students/:id', component: NewStudentComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    StudentComponent,
    TableComponent,
    NewStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
