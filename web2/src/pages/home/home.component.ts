import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  template: `
    <app-hero></app-hero>
    <app-features></app-features>
    <app-testimonials></app-testimonials>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroComponent, FeaturesComponent, TestimonialsComponent],
})
export class HomeComponent {}