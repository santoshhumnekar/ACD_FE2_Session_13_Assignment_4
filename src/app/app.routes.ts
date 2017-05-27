import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const APP_ROUTES : Routes = [

   { path: '', redirectTo:'/home', pathMatch:'full'},
   { path: 'home', component:HomeComponent},
   { path: 'employee', component:EmployeeComponent },
   { path: 'employee/:Id/:Name/:Experience', component:UserDetailComponent }

]

export const routes : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);