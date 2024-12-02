import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user/user.service';

export const loggedUser: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const user = userService.user

  console.log(userService.isLoggedIn)

  if (userService.isLoggedIn) {
    console.log('user is logged')
    return true;
  }

  router.navigate(['/home']);

  return false;
};
