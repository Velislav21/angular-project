import { Component, OnInit } from '@angular/core';
import { Fragrance } from '../../types/fragrance';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fragrance-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fragrance-list.component.html',
  styleUrl: './fragrance-list.component.css',
})
export class FragranceListComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  fragrances: Fragrance[] = [];
  
  
  ngOnInit() {
    this.apiService.getFragrances().subscribe((fragrancesFromDb) => {
      this.fragrances = fragrancesFromDb;
    });
  }
}
