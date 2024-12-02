import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  isAuth = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuth = false;
      },
      error: () => {
        this.isAuth = false;
      },
      complete: () => {
        this.isAuth = false;
        console.log(`from global auth comp logged user ? ---> ${this.userService.isLoggedIn}`)
      }
    })
  }
}
