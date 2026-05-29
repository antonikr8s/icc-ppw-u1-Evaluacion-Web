
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of, tap } from 'rxjs';
import { DecimalPipe } from '@angular/common'; 
import { ApiService } from '../../../../core/services/api';
import { ItemCacheService } from '../../../../core/services/item-cache';
import { HeroComponent } from '../../../../shared/components/hero/hero';
import { CardComponent } from '../../../../shared/components/card/card';
import { CountryListItem } from '../../../../core/models/country.interface';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [HeroComponent, CardComponent, RouterLink, DecimalPipe], 
  templateUrl: './detail-page.html'
})
export class DetailPageComponent {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  private cacheService = inject(ItemCacheService);

  countryId = this.route.snapshot.paramMap.get('id') || '';
  totalQuery = Number(this.route.snapshot.queryParamMap.get('total')) || null;

  countryResource = rxResource({
    stream: () => {
      const cached = this.cacheService.getById(this.countryId);
      if (cached) {
        return of(cached); 
      }
      
      return this.apiService.getItemById(this.countryId).pipe(
        tap((country) => {
          if (country) this.cacheService.save(this.countryId, country);
        })
      );
    }
  });

  getCardItem(detailItem: any): CountryListItem {
    return {
      name: detailItem.name,
      capital: detailItem.capital,
      flags: detailItem.flags
    };
  }
}

