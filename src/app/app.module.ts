import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTableModule } from "angular-6-datatable";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientComponent } from './patient/patient.component';
import { PredictComponent } from './predict/predict.component';

import { ApiCallingsService } from './api-callings.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientComponent,
    PredictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiCallingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
