import { Component, inject, OnInit } from '@angular/core';
import { Hero } from './components/hero/hero';
import { FeaturesGrid } from './components/features-grid/features-grid';
import { SocialProof } from './components/social-proof/social-proof';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, FeaturesGrid, SocialProof],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  analytics = inject(AnalyticsService);

  ngOnInit() {
    // 2. Grita al Data Layer "page_view" para que Meta y Google sepan que llegó.
    this.analytics.trackEvent('page_view', { page_title: 'Home Doola Style' });
  }
}
