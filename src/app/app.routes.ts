import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page';
import { DetailPageComponent } from './features/detail/pages/detail-page/detail-page';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'details/:id', component: DetailPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' } // Redirección comodín en caso de error
];