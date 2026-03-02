import { Component } from '@angular/core';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TrustSectionComponent } from './components/trust-section/trust-section.component';
import { ValuesSectionComponent } from './components/values-section/values-section.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';

@Component({
  selector: 'app-about-us',
  imports: [
    HeroSectionComponent,
    ValuesSectionComponent,
    TrustSectionComponent,
    MissionSectionComponent,
    TeamSectionComponent,
    CtaSectionComponent,
  ],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
