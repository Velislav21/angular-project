import { Component, DestroyRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileDetails } from '../../types/user';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;

  isInEditMode: boolean = false;
  
  subscription: Subscription | null = null;
  
  profileDetails: ProfileDetails = {
    name: '',
    email: '',
    _id: '',
  };
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private destroyRef: DestroyRef
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.subscription = this.userService.getUserById(id).subscribe((user) => {
      this.profileDetails = {
        name: user?.name,
        email: user?.email,
        _id: user?._id,
      };
    });
    this.destroyRef.onDestroy(() => this.subscription?.unsubscribe());
  }
}

//   onCancel(event: Event) {
//     event.preventDefault();
//     this.toggleEdit();
//   }

//   toggleEdit() {
//     this.isInEditMode = !this.isInEditMode;
//   }

//   onSave() {
//     this.toggleEdit();
//     console.log(this.editForm?.controls['name']);
//   }
// }
