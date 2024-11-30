import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Fragrance } from '../../types/fragrance';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { UserForAuth } from '../../types/user';
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

  user: UserForAuth = {
    name: '',
    email: '',
    password: '',
    _id: '',
    accessToken: '',
  };

  isOwner = false;

  constructor(private apiService: ApiService,private route: ActivatedRoute,private userService: UserService) {}

  ngOnInit(): void {
    const fragranceId = this.route.snapshot.params['fragranceId'];

    this.apiService
      .getSingleFragrance(fragranceId)
      .subscribe((fragranceFromDb) => {
        this.fragrance = fragranceFromDb;
      });

    this.userService.getProfile().subscribe((user) => {
      this.user = user;
    });

    this.isOwner = this.fragrance.owner == this.user._id;
    console.log(this.isOwner);
  }
}
