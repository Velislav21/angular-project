import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailValidationDirective } from '../../../directives/email-validation.directive';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule, EmailValidationDirective],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css',
})
export class ProfileEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  
  
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute){}
  subscription: Subscription | null = null;
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['profileId']
    
    this.subscription = this.userService.getUserById(id).subscribe((user) => {
      this.editForm?.controls['name'].setValue(user.name)
      this.editForm?.controls['email'].setValue(user.email)
    })
  }
  
  onEdit() {
    const id = this.route.snapshot.params['profileId']
    
    const name: string = this.editForm?.controls['name'].value;
    const email: string = this.editForm?.controls['email'].value;
    
    this.userService.updateProfile(id, name, email).subscribe((res) => {
    })
    this.router.navigate(['/profile', id])
  }
  onCancel(event: Event) {
    event.preventDefault();
    history.back()
  }

}
