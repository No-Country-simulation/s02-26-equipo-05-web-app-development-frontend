import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-section',
  standalone: true,
  imports: [],
  templateUrl: './mission-section.component.html',
})
export class MissionSectionComponent {
  label = 'NUESTRA HISTORIA';
  title = 'Nuestra Misión';

  description = `
    Nacimos con una misión clara: transformar la forma en que las empresas operan.
    Creemos que la tecnología y el servicio al cliente deben ir de la mano para crear soluciones que realmente impacten los negocios.
  `;

  highlights = [
    {
      image: 'assets/icons/innovation.svg',
      alt: 'Icono de innovación',
      title: 'Innovación Constante',
      description: 'Comprometidos con ofrecer las mejores soluciones.',
    },
    {
      image: 'assets/icons/value.svg',
      alt: 'Icono de valor',
      title: 'Valor Real',
      description: 'Medimos nuestro éxito por el impacto en tus resultados.',
    },
  ];

  metrics = [
    { value: '2.5K+', label: 'Empresas Activas' },
    { value: '45+', label: 'Países' },
    { value: '10M+', label: 'Ahorros Generados' },
    { value: '4.9★', label: 'Calificación' },
  ];
}
