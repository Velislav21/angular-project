import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Fragrance } from '../../types/fragrance';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fragrance-details',
  standalone: true,
  imports: [],
  templateUrl: './fragrance-details.component.html',
  styleUrl: './fragrance-details.component.css',
})
export class FragranceDetailsComponent implements OnInit {

  fragrance = {} as Fragrance;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const fragranceId = this.route.snapshot.params['fragranceId'];
    
    this.apiService.getSingleFragrance(fragranceId).subscribe((fragranceFromDb) => {
      console.log(fragranceFromDb)
      this.fragrance = fragranceFromDb;
    });
  }
}
