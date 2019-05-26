import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from './patient/patient.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  { path: 'patient', component: PatientComponent },
  { path: 'predict', component: PredictComponent },
  { path: '', redirectTo: 'patient', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
