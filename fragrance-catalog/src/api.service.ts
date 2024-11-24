import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environments/environments';
import { Fragrance } from './app/types/fragrance';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getFragrances(){
    return this.http.get<Fragrance[]>(`${this.apiUrl}/fragrances`)
  }

  getSingleFragrance(fragranceId: string) {
    return this.http.get<Fragrance>(`${this.apiUrl}/fragrances/details/${fragranceId}`) // localhost:3000/details/al;kfjal;fkaslk
  }
}
