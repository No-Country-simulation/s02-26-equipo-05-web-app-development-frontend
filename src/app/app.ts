import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');
  private analytics = inject(AnalyticsService);

  ngOnInit() {
    // 1. Atrapa globalmente los UTMs de cualquier URL, sin importar a qué página entre el usuario
    this.analytics.captureUrlParams();
  }
}
