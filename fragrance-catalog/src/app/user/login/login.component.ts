import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  constructor(private userService: UserService, private router: Router) {}

  get isUserLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  ngOnInit(): void {
    console.log(this.isUserLoggedIn)
  }

  login(email: string, password: string) {
    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
