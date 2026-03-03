import { Component } from '@angular/core';

interface TrustItem {
  title: string;
  description: string;
  icon: string;
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
      icon: 'certificado',
      alt: 'Icono de certificación',
    },
    {
      title: 'Altamente Calificados',
      description: '4.9 estrellas en plataformas independientes.',
      icon: 'estrellas',
      alt: 'Icono de calificación alta',
    },
    {
      title: 'Sin Problemas Legales',
      description: 'Operamos con transparencia total.',
      icon: 'legal',
      alt: 'Icono legal y seguro',
    },
  ];
}
