import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fragrance } from './types/fragrance';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getFragrances() {
    return this.http.get<Fragrance[]>(`/api/fragrances`);
  }

  getSingleFragrance(fragranceId: string) {
    return this.http.get<Fragrance>(`/api/fragrances/details/${fragranceId}`);
  }

  create(
    name: string,
    imageUrl: string,
    description: string,
    scents: string[]
  ) {
    return this.http.post<Fragrance>('/api/fragrances/create', {
      name,
      imageUrl,
      description,
      scents,
    });

    
  }
}
