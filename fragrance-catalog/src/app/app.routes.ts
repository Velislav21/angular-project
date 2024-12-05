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
import { authGuard } from './guards/auth.guard';
import { loggedUser } from './guards/loggedUser.guard';
import { ProfileEditComponent } from './user/profile/profile-edit/profile-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Fragrance Routing
  {
    path: 'fragrances',
    children: [
      { path: '', component: MainComponent },
      {
        path: 'create',
        component: AddFragranceComponent,
        canActivate: [loggedUser]
      },
      {
        path: ':fragranceId',
        component: FragranceDetailsComponent,
      },
      {
        path: 'edit/:fragranceId',
        component: FragranceEditComponent,
        canActivate: [loggedUser]
      },
    ],
  },
  //User routing
  { path: 'login', component: LoginComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [authGuard] },
  { path: 'profile', children: [
    {path: ':id', component: ProfileComponent},
    {path: 'edit/:profileId', component: ProfileEditComponent, canActivate: [loggedUser]}
  ] },
  // End of user roting
  { path: '404', component: PageNotFoundComponent },
  { path: 'error', component: ErrorNotifComponent },
  { path: '**', redirectTo: '/404'  },
];
