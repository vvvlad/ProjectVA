import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleTableComponent } from './examples/example-table/example-table.component';
import { ExampleDashboardComponent } from './examples/example-dashboard/example-dashboard.component';

import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'table', component: ExampleTableComponent},
    { path: 'dash', component: ExampleDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
