import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatConfirmDialogComponent } from './pages/helper/mat-confirm-dialog/mat-confirm-dialog.component';
import { MaterialModule } from './material/material/material.module';
import { ExcelService } from './helper/excel.service';
import { DatePipe } from '@angular/common';

import { HtmlFeatureHandlerComponent } from './pages/bemo-data/bemo-data.component';

import { CreateComponent } from './pages/bemo-data/create/create.component';
import { EditComponent } from './pages/bemo-data/edit/edit.component';
// import { MatTableFilterModule } from 'mat-table-filter';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    routingComponents,
    MatConfirmDialogComponent,
    HtmlFeatureHandlerComponent,
    EditComponent,
    CreateComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    HttpClientModule,
    MatSortModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MaterialModule,
    MatMenuModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    // MatTableFilterModule,
    
  ],
  providers: [MatDatepickerModule, ExcelService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [CreateComponent, MatConfirmDialogComponent]
})
export class AppModule { }
