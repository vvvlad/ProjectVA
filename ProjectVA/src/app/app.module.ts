import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule, MatGridListModule, MatCardModule, MatMenuModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ExampleTableComponent } from './examples/example-table/example-table.component';
import { ExampleDashboardComponent } from './examples/example-dashboard/example-dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExampleTableComponent,
    ExampleDashboardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
