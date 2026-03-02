import { Component } from '@angular/core';

interface Value {
  title: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [],
  templateUrl: './values-section.component.html',
})
export class ValuesSectionComponent {
  values: Value[] = [
    {
      title: 'Transparencia',
      description: 'Comunicación clara y honesta.',
      image: 'assets/icons/transparencia.svg',
      alt: 'Icono de transparencia',
    },
    {
      title: 'Eficiencia',
      description: 'Optimizamos procesos para ahorrar tiempo y dinero.',
      image: 'assets/icons/eficiencia.svg',
      alt: 'Icono de eficiencia',
    },
    {
      title: 'Accesibilidad',
      description: 'Servicios diseñados para todos los tamaños de negocio.',
      image: 'assets/icons/accesibilidad.svg',
      alt: 'Icono de accesibilidad',
    },
  ];
}
