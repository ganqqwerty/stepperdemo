import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MatStepperModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Route, RouterModule} from '@angular/router';
import {SearchHealthServicesComponent} from './search-health-services/search-health-services.component';
import {FacultiesCardsComponent} from './faculties-cards/faculties-cards.component';
import {SearchAvailableSlotsComponent} from './search-available-slots/search-available-slots.component';
import {ReferrerNotesComponent} from './referrer-notes/referrer-notes.component';
import {SummaryComponent} from './summary/summary.component';
import {PatientComponent} from './patient/patient.component';
import {Step1Component} from './step1/step1.component';
import {Step2Component} from './step2/step2.component';

const myRoutes: Array<Route> = [
  {
    path: '',
    redirectTo: 'app/search/available',
    pathMatch: 'full'
  },
  {
    path: 'app/search/health-services',
    component: SearchHealthServicesComponent
  },
  {
    path: 'app/search/health-department',
    component: FacultiesCardsComponent
  },
  {
    path: 'app/search/available',
    component: SearchAvailableSlotsComponent,
    children: [{
      path: 'step1',
      component: Step1Component
    }, {
      path: 'step2',
      component: Step2Component
    }
    ]
  },
  {
    path: 'app/patient-data',
    component: PatientComponent
  },
  {
    path: 'app/referrer-notes',
    component: ReferrerNotesComponent,
    pathMatch: 'full'
  },
  {
    path: 'app/summary',
    component: SummaryComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchHealthServicesComponent,
    FacultiesCardsComponent,
    SearchAvailableSlotsComponent,
    ReferrerNotesComponent,
    SummaryComponent,
    PatientComponent,
    Step1Component,
    Step2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),

    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
