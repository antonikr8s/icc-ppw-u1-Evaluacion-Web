import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  title = input.required<string>();
  total = input<number | null>(null);
  isLoading = input<boolean>(false);
  hasError = input<boolean>(false);
}