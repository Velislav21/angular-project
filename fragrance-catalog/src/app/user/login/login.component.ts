import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { EmailValidationDirective } from '../../directives/email-validation.directive';
import { ErrorNotifComponent } from "../../core/error-notif/error-notif.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailValidationDirective, ErrorNotifComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  errorMsg: string | undefined = '';

  login(email: string, password: string) {
    this.userService.login(email, password).subscribe({
      next: (user) => {
        this.errorMsg = ''
        this.router.navigate(['/home']);
      },
      error:(err) => {
        console.log(err)
        this.errorMsg = err.error?.message
      }
    })
  }
}
