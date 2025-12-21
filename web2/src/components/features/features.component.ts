import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  features = signal<Feature[]>([
    {
      icon: 'academic-cap',
      title: 'Expert Faculty',
      description: 'Learn from experienced professionals and toppers from premier institutes across India.',
    },
    {
      icon: 'book-open',
      title: 'Comprehensive Study Material',
      description: 'Get access to well-researched and updated study materials designed for GATE success.',
    },
    {
      icon: 'chart-bar',
      title: 'Mock Tests & Analysis',
      description: 'Regular mock tests with detailed performance analysis to track your progress effectively.',
    },
  ]);
}