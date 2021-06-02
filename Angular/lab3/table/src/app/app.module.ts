import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { StudentComponent } from './components/lab4/student/student.component';
import { TableComponent } from './components/lab4/table/table.component';
import { RouterModule } from '@angular/router';
import { NewStudentComponent } from './components/lab4/new-student/new-student.component';
import { AllUsersComponent } from './components/lab5/all-users/all-users.component';
import { UserDetailsComponent } from './components/lab5/user-details/user-details.component';
import { UsersService } from './services/users.service';
import { ErrorComponent } from './components/error/error.component';
import { HeaderDirective } from './directives/header.directive';
import { UpperPipe } from './pipes/upper.pipe';

const routes: any = [
  {
    path: '',
    component: TableComponent,
  },
  { path: 'add-student', component: StudentComponent },
  { path: 'students/:id', component: NewStudentComponent },
  {
    path: 'users',
    component: AllUsersComponent,
  },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    StudentComponent,
    TableComponent,
    NewStudentComponent,
    AllUsersComponent,
    UserDetailsComponent,
    ErrorComponent,
    HeaderDirective,
    UpperPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
