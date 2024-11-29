import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails, User } from '../../types/user';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  profileDetails: ProfileDetails = {
    name: '',
    email: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const { name, email } = this.userService.user!;
    console.log(name, email)
    this.profileDetails = { name, email };
  }
}
