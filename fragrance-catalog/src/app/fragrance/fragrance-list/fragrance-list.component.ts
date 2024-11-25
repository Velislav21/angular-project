import { Component, OnDestroy, OnInit } from '@angular/core';
import { Fragrance } from '../../types/fragrance';
import { ApiService } from '../../../api.service';
import { FragranceDetailsComponent } from '../fragrance-details/fragrance-details.component';

@Component({
  selector: 'app-fragrance-list',
  standalone: true,
  imports: [FragranceDetailsComponent],
  templateUrl: './fragrance-list.component.html',
  styleUrl: './fragrance-list.component.css',
})
export class FragranceListComponent implements OnInit {
  fragrances: Fragrance[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getFragrances().subscribe((fragrancesFromDb) => {
      this.fragrances = fragrancesFromDb;
    });
  }
}
