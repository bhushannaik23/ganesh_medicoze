import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { BookingComponent } from './booking/booking';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent },

  { path: '**', redirectTo: '' },
];
