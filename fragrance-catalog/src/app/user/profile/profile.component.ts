import { Component, DestroyRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails } from '../../types/user';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  subscription: Subscription | null = null;

  profileDetails: ProfileDetails = {
    name: '',
    email: '',
    _id: '',
  };

  constructor(
    private userService: UserService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.userService.getProfile().subscribe((user) => {
      this.profileDetails = {
        name: user?.name,
        email: user?.email,
        _id: user?._id,
      };
    });
    this.destroyRef.onDestroy(() => this.subscription?.unsubscribe());
  }
}
