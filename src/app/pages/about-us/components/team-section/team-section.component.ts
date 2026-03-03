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
      image: 'https://ui-avatars.com/api/?name=Juan+Perez&background=0284c7&color=fff&size=200',
      alt: 'Juan Pérez - CEO',
    },
    {
      name: 'María Gómez',
      role: 'Directora de Operaciones',
      description: 'Especialista en optimización de procesos',
      image: 'https://ui-avatars.com/api/?name=Maria+Gomez&background=0f172a&color=fff&size=200',
      alt: 'María Gómez - Directora de Operaciones',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Head de Producto',
      description: 'Innovador en desarrollo de soluciones',
      image: 'https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=0284c7&color=fff&size=200',
      alt: 'Carlos Rodríguez - Head de Producto',
    },
    {
      name: 'Jose Urrutia',
      role: 'Customer Success Lead',
      description: 'Dedicación exclusiva a tus objetivos y resultados.',
      image: 'https://ui-avatars.com/api/?name=Jose+Urrutia&background=0f172a&color=fff&size=200',
      alt: 'Jose Urrutia - Customer Success Lead',
    },
  ];
}
