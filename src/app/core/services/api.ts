import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CountryDetailItem, CountryListItem } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  
  private readonly baseUrl = environment.apiUrl;

  getItems(): Observable<CountryListItem[]> {
    return this.http
      .get<CountryListItem[]>(`${this.baseUrl}/all?fields=name,capital,flags`)
      .pipe(
        delay(2000) 
      );
  }

  getItemById(name: string): Observable<CountryDetailItem> {
    return this.http
      .get<CountryDetailItem[]>(`${this.baseUrl}/name/${name}?fields=name,flags,capital,maps,population`)
      .pipe(
        map(countries => countries[0]) 
      );
  }
}