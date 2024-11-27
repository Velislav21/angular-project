import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm | undefined;

  constructor(private userService: UserService) {}

  register() {
    const payload = this.registerForm?.form.value;
    
    this.userService.createAccount(payload).subscribe((result) => {
      console.log(result)
    })
  }
}
