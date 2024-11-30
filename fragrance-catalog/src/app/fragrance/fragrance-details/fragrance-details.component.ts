import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Fragrance } from '../../types/fragrance';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { ProfileDetails, User, UserForAuth } from '../../types/user';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  isOwner = false;

  get getFragranceId() : string {
    return this.route.snapshot.params['fragranceId'];
  }

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {}
  // const fragranceId = this.route.snapshot.params['fragranceId'];
  ngOnInit(): void {
    const fragranceId = this.getFragranceId

    this.apiService
      .getSingleFragrance(fragranceId)
      .subscribe((fragranceFromDb) => {
        this.fragrance = fragranceFromDb;

        this.userService.getProfile().subscribe((user) => {
          this.user = user;
          this.isOwner = this.fragrance.owner === this.user._id;
        });
      });
  }
  delete() {  
    const fragranceId = this.getFragranceId
  
    this.apiService.deleteFragrance(fragranceId).subscribe(() => {
      this.router.navigate(['/fragrances'])
    });
  }
}
