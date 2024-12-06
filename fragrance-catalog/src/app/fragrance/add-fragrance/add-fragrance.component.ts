import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { UserForAuth } from '../../types/user';
import { ImageUrlValidationDirective } from '../../directives/image-url.directive';

@Component({
  selector: 'app-add-fragrance',
  standalone: true,
  imports: [FormsModule, ImageUrlValidationDirective],
  templateUrl: './add-fragrance.component.html',
  styleUrl: './add-fragrance.component.css',
})
export class AddFragranceComponent {

  @ViewChild('createForm') createForm: NgForm | undefined;

  user: UserForAuth = {
    name: '',
    email: '',
    _id: '',
    accessToken: '',
  }

  constructor(private apiService: ApiService, private userService: UserService, private router: Router) {}

  get ownerId(): string {
    this.userService.getProfile().subscribe((user) => this.user = user);
    return this.user._id
  }

  create() {
    const { name, imageUrl, description, scents} = this.createForm?.form.value;

    const scentsAsArr = scents.split(' ');

    const ownerId = this.ownerId

    this.apiService.create(ownerId, name, imageUrl, description, scentsAsArr).subscribe((res) => {
      this.router.navigate(['/fragrances'])
    })
  }
}
