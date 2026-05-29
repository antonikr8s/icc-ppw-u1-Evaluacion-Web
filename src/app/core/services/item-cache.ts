import { Injectable } from '@angular/core';
import { CountryDetailItem } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemCacheService {
  
  private getKey(id: string): string {
    return `item-cache-${id}`;
  }

  save(id: string, item: CountryDetailItem): void {
    try {
      const key = this.getKey(id);
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }

  getById(id: string): CountryDetailItem | null {
    try {
      const key = this.getKey(id);
      const cachedData = localStorage.getItem(key);
      return cachedData ? JSON.parse(cachedData) : null;
    } catch (error) {
      console.error('Error al leer de localStorage:', error);
      return null;
    }
  }
}


