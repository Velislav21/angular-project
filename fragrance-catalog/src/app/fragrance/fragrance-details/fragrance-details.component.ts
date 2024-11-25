import { Component } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Fragrance } from '../../types/fragrance';

@Component({
  selector: 'app-fragrance-details',
  standalone: true,
  imports: [],
  templateUrl: './fragrance-details.component.html',
  styleUrl: './fragrance-details.component.css',
})
export class FragranceDetailsComponent {
  fragrances: Fragrance[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getFragrances().subscribe((fragrancesFromDb) => {
      this.fragrances = fragrancesFromDb;
    });
  }
}
