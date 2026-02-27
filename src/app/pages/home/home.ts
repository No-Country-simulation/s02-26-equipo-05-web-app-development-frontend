import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from './components/hero/hero';
import { FeaturesGrid } from './components/features-grid/features-grid';
import { SocialProof } from './components/social-proof/social-proof';
import { Footer } from './components/footer/footer';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, FeaturesGrid, SocialProof, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  analytics = inject(AnalyticsService);

  ngOnInit() {
    // 1. Atrapa los UTMs de la URL generada por los anuncios
    this.analytics.captureUrlParams();

    // 2. Grita al Data Layer "page_view" para que Meta y Google sepan que llegó.
    this.analytics.trackEvent('page_view', { page_title: 'Home Doola Style' });
  }
}
