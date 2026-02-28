import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing implements OnInit {
  analytics = inject(AnalyticsService);

  ngOnInit() {
    this.analytics.trackEvent('page_view', { page_title: 'Pricing Page' });
  }
}
