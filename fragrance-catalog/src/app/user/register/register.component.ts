import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { EmailValidationDirective } from '../../directives/email-validation.directive';
import { ErrorNotifComponent } from '../../core/error-notif/error-notif.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailValidationDirective, ErrorNotifComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm | undefined;

  errorMsg: string | undefined = '';

  get passwordsMatch(): boolean {
    return this.registerForm?.controls['password'].value !== this.registerForm?.controls['rePassword'].value
  }

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const { email, name, password, rePassword } = this.registerForm?.form.value;

    this.userService
      .register(email, name, password, rePassword)
      .subscribe({
        next: (user) => {
          this.errorMsg = '';

          this.router.navigate(['/home']);
        },
        error:(err) => {
          console.log(err)
          this.errorMsg = err.error?.message
        }
      })
  }
}
