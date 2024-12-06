import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user/user.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.getProfile().pipe(
    map((user) => {
      if (user) {
        router.navigate(['/home']);
        return false;
      }
      return true;
    })
  );
};
