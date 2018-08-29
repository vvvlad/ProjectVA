import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { ExampleTableComponent } from './examples/example-table/example-table.component';
import { ExampleDashboardComponent } from './examples/example-dashboard/example-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExampleTableComponent,
    ExampleDashboardComponent,
    WelcomeComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
