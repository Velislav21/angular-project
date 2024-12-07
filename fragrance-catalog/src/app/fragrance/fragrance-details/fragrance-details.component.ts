import { Component, DestroyRef, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Fragrance } from '../../types/fragrance';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { UserForAuth } from '../../types/user';

@Component({
  selector: 'app-fragrance-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fragrance-details.component.html',
  styleUrl: './fragrance-details.component.css',
})
export class FragranceDetailsComponent implements OnInit {
  fragrance = {} as Fragrance;
  user = {} as UserForAuth;

  isOwner: boolean = false;

  isLikedByUser: boolean = false;

  get isLogged(): boolean {
    return this.userService.isLoggedIn
  }

  get getFragranceId(): string {
    return this.route.snapshot.params['fragranceId'];
  }

  constructor(
    private destroyRef: DestroyRef,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const fragranceId = this.getFragranceId;
    
    const subscription = this.apiService
    .getSingleFragrance(fragranceId)
    .subscribe((fragranceFromDb) => {
      this.fragrance = fragranceFromDb;

      if (this.userService.isLoggedIn) {

        this.isOwner = this.fragrance.owner === this.userService.user?._id;
        this.isLikedByUser = this.fragrance.likedList.includes(this.userService.user!._id) || false;
      }
        
      });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  delete() {
    const fragranceId = this.getFragranceId;

    this.apiService.deleteFragrance(fragranceId).subscribe(() => {
      this.router.navigate(['/fragrances']);
    });
  }

  like() {
    const fragranceId = this.fragrance._id;
    this.apiService.likeFragrance(fragranceId).subscribe()
    this.isLikedByUser = true;
  }
}
