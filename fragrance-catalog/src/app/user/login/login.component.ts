import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { EmailValidationDirective } from '../../directives/email-validation.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailValidationDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  login(email: string, password: string) {
    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
