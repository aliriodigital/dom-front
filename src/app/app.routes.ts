import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component'; // Import your AdminComponent

export const routes: Routes = [
  { path: '', component: LandingComponent }, // Route for '/'
  { path: 'admin', component: AdminComponent }, // Route for '/admin'
];
