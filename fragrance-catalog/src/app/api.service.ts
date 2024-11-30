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
    id: string,
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

  editFragrance(
    id: string,
    name: string,
    imageUrl: string,
    description: string,
    scents: string[]
  ) {
    return this.http.patch<Fragrance>(`/api/fragrances/edit/${id}`, {
      name, imageUrl, description, scents
    })
  }
}
