import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ProfileDetails, User } from '../../../types/user';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: '././profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
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
    // const { name, email, _id } = this.userService.user!;
    // console.log(name, email, _id);
    // console.log(this.userService.user)
  }
}
