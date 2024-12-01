import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FragranceDetailsComponent } from './fragrance/fragrance-details/fragrance-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddFragranceComponent } from './fragrance/add-fragrance/add-fragrance.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorNotifComponent } from './core/error-notif/error-notif.component';
import { FragranceEditComponent } from './fragrance/fragrance-edit/fragrance-edit.component';
import { isUserLogged } from './guards/isLogged.guard';
import { notLoggedIn } from './guards/isNotLogged.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Fragrance Roting
  {
    path: 'fragrances',
    children: [
      { path: '', component: MainComponent },
      {
        path: 'create',
        component: AddFragranceComponent,
        canActivate: [isUserLogged],
      },
      {
        path: ':fragranceId',
        component: FragranceDetailsComponent,
      },
      {
        path: 'edit/:fragranceId',
        component: FragranceEditComponent,
        canActivate: [isUserLogged],
      },
    ],
  },
  //User routing
  { path: 'login', component: LoginComponent,  canActivate: [notLoggedIn],  },
  { path: 'register', component: RegisterComponent, canActivate: [notLoggedIn],},
  { path: 'profile', component: ProfileComponent, canActivate: [isUserLogged], },
  // End of user roting
  { path: 'error', component: ErrorNotifComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
