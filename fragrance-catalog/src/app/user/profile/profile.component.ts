import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {

  constructor( private userService: UserService) {}

  ngOnInit(): void {
    
    const user = this.userService.getProfile()
    console.log(user)
  }
}
