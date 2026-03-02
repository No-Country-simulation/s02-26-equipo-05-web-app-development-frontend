import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  title = 'Sobre Nosotros';
  subtitle = 'Conoce la historia detrás de nuestra empresa y los valores que nos guían.';
}
