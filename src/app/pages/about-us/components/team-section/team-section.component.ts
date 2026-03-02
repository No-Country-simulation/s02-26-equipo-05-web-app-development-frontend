import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [],
  templateUrl: './team-section.component.html',
})
export class TeamSectionComponent {
  team: TeamMember[] = [
    {
      name: 'Juan Pérez',
      role: 'CEO & Fundador',
      description: 'Experto con 15+ años en la industria',
      image: 'assets/team/juan.jpg',
      alt: 'Juan Pérez - CEO',
    },
    {
      name: 'María Gómez',
      role: 'Directora de Operaciones',
      description: 'Especialista en optimización de procesos',
      image: 'assets/team/maria.jpg',
      alt: 'María Gómez - Directora de Operaciones',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Head de Producto',
      description: 'Innovador en desarrollo de soluciones',
      image: 'assets/team/carlos.jpg',
      alt: 'Carlos Rodríguez - Head de Producto',
    },
    {
      name: 'Jose Urrutia',
      role: 'Customer Success Lead',
      description: 'Dedicado a tu satisfacción y éxito',
      image: 'assets/team/jose.jpg',
      alt: 'Jose Urrutia - Customer Success Lead',
    },
  ];
}
