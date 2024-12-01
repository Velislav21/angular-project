import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails } from '../../types/user';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {

  isInEditMode = false;

  profileDetails: ProfileDetails = {
    name: '',
    email: '',
    _id: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    this.userService.getProfile().subscribe((user) => {
      this.profileDetails = {name: user?.name, email: user?.email, _id: user?._id}
    })
  }
}
