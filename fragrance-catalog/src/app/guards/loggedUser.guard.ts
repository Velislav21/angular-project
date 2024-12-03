import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';
import { map } from 'rxjs';

export const loggedUser: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  const router = inject(Router);

    console.log(userService.isLoggedIn)

  if (userService.isLoggedIn) {
    return true;
  }

  router.navigate(['/login']);

  return false;

};
