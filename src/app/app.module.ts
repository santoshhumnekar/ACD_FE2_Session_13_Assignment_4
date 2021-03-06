import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
