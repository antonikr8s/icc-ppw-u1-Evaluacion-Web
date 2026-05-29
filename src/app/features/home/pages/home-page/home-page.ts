import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ApiService } from '../../../../core/services/api';
import { CardComponent } from '../../../../shared/components/card/card';
import { HeroComponent } from '../../../../shared/components/hero/hero';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, HeroComponent],
  templateUrl: './home-page.html'
})
export class HomePageComponent {
  private apiService = inject(ApiService);

  countriesResource = rxResource({
    stream: () => this.apiService.getItems()
  });
}
