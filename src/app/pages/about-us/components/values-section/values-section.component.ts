import { Component } from '@angular/core';

interface Value {
  title: string;
  description: string;
  icon: string;
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
      description: 'Comunicación clara y honesta en tu mismo idioma.',
      icon: 'transparencia',
      alt: 'Icono de transparencia',
    },
    {
      title: 'Eficiencia',
      description: 'Optimización de procesos para ahorrar tiempo y dinero.',
      icon: 'eficiencia',
      alt: 'Icono de eficiencia',
    },
    {
      title: 'Accesibilidad',
      description: 'Servicios diseñados para todo tipo de negocio.',
      icon: 'accesibilidad',
      alt: 'Icono de accesibilidad',
    },
  ];
}
