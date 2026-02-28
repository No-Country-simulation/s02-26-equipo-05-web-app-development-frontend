import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  analytics = inject(AnalyticsService);

  ngOnInit() {
    this.analytics.trackEvent('page_view', { page_title: 'Services Page' });
  }
}
