import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

export const loggedUser: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const isUserLoggedIn = userService.isLoggedIn;

  if (!isUserLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  return true;

};
