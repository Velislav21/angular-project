import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';


export const loggedUser: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);
  

  if (userService.isLoggedIn) {
    return true;
  }

  router.navigate(['/login']);

  return false;

};
