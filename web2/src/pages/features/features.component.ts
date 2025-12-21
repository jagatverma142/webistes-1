import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-page',
  templateUrl: './features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesPageComponent {
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
    {
      icon: 'chat-bubble',
      title: 'Doubt Clearing Sessions',
      description: 'Participate in dedicated sessions to get your questions answered by subject matter experts.',
    },
    {
      icon: 'user-group',
      title: 'Personalized Mentorship',
      description: 'Receive one-on-one guidance and mentorship from our experienced faculty to strategize your preparation.',
    },
    {
      icon: 'device-mobile',
      title: 'Mobile Learning App',
      description: 'Access all your study materials, tests, and video lectures anytime, anywhere with our mobile app.',
    },
  ]);
}