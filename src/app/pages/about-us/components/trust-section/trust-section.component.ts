import { Component } from '@angular/core';

interface TrustItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-trust-section',
  standalone: true,
  imports: [],
  templateUrl: './trust-section.component.html',
})
export class TrustSectionComponent {
  items: TrustItem[] = [
    {
      title: 'Verificado y Certificado',
      description: 'Cumplimos con estándares internacionales.',
      image: 'assets/icons/certificado.svg',
      alt: 'Icono de certificación',
    },
    {
      title: 'Altamente Calificados',
      description: '4.9 estrellas en plataformas independientes.',
      image: 'assets/icons/estrellas.svg',
      alt: 'Icono de calificación alta',
    },
    {
      title: 'Sin Problemas Legales',
      description: 'Operamos con transparencia total.',
      image: 'assets/icons/legal.svg',
      alt: 'Icono legal y seguro',
    },
  ];
}
