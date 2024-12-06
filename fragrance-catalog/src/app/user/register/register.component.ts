import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { EmailValidationDirective } from '../../directives/email-validation.directive';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailValidationDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm | undefined;

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const { email, name, password, rePassword } = this.registerForm?.form.value;

    this.userService
      .register(email, name, password, rePassword)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
