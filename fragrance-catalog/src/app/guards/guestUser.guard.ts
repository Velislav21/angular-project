import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { catchError, map, of } from 'rxjs';

export const guestUser: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.getProfile().pipe(
    map((user) => {
      console.log(user);
      if (user) {
        router.navigate(['/home']);
        return false;
      }
      return true;
    }),
    // catchError((error) => {
    //   if(error.status === 401) {
    //     return of(true)
    //   }
    //   router.navigate(['/home']);
    //   return of(false)
    // })
    catchError(() => {
      router.navigate(['/404']);
      return of(false);
    })
  );

  // const isUserLoggedIn = userService.isLoggedIn;

  // console.log(isUserLoggedIn);

  // if (!isUserLoggedIn) {
  //   return false;
  // }
  // router.navigate(['/login']);
  // return true;
};
