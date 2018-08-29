import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleTableComponent } from './examples/example-table/example-table.component';
import { ExampleDashboardComponent } from './examples/example-dashboard/example-dashboard.component';

import {WelcomeComponent} from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent}, // empty part is the root route
    { path: 'table', component: ExampleTableComponent},
    { path: 'dash', component: ExampleDashboardComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
