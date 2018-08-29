import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule
  } from '@angular/material';
  import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    imports: [
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
    ]
})
export class MaterialModule {}
