import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FragranceDetailsComponent } from './fragrance/fragrance-details/fragrance-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Fragrance Roting
  {
    path: 'fragrances',
    children: [
      { path: '', component: MainComponent },
      { path: ':fragranceId', component: FragranceDetailsComponent },
    ],
  },
];
