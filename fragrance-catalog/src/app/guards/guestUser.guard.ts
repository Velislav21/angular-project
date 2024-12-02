import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { catchError, map, of } from 'rxjs';

export const guestUser: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.getProfile().pipe(
    map((user) => {
      if (user) {
        console.log(user);
        router.navigate(['/home']);
        return false;
      }
      return true;
    }),
  );
};
