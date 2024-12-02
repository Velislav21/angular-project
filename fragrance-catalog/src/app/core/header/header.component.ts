import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  get isUserLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get name(): string {
    return this.userService.user?.name || '';
  }

  logout() {
    this.userService.logout().subscribe((res) => {
      console.log(res)
      this.router.navigate(['/login']);
    })
  }
} 
