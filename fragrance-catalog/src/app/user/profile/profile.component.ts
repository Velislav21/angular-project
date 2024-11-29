import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../types/user';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {

  user: User | undefined;
  
  constructor( private userService: UserService) {}

  ngOnInit(): void {
    
    const profile = this.userService.getProfile()

  }
}
