import { Routes } from '@angular/router';
import { MarketingLayout } from './shared/layouts/marketing-layout/marketing-layout';

export const routes: Routes = [
  {
    path: '',
    component: MarketingLayout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing').then((m) => m.Pricing),
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services/services').then((m) => m.Services),
      },
      {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
      },
    ]
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./pages/onboarding/onboarding').then((m) => m.Onboarding),
  },
  {
    path: 'onboarding-success',
    loadComponent: () => import('./pages/onboarding-success/onboarding-success').then((m) => m.OnboardingSuccess),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
