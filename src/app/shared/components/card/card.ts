
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountryListItem } from '../../../core/models/country.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.html'
})
export class CardComponent {
  item = input.required<CountryListItem>();
  total = input.required<number>();
}


