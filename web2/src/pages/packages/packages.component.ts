import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackagesComponent {
  packages = signal<Package[]>([
    {
      name: 'Basic',
      price: '₹2,999',
      description: 'Perfect for getting started and strengthening your core concepts.',
      features: ['20 Subject-wise Tests', '5 Full-length Mock Tests', 'Basic Performance Analysis', 'Email Support'],
      isPopular: false,
    },
    {
      name: 'Standard',
      price: '₹4,999',
      description: 'The most popular choice for comprehensive preparation.',
      features: ['50 Subject-wise Tests', '15 Full-length Mock Tests', 'Detailed Performance Analysis', 'Doubt Clearing Sessions', 'Priority Email Support'],
      isPopular: true,
    },
    {
      name: 'Premium',
      price: '₹7,999',
      description: 'The ultimate package for aspirants aiming for a top rank.',
      features: ['All Standard Features', 'Personalized Mentorship', 'Previous Year Paper Analysis', 'Video Solutions for Mock Tests', '24/7 Support'],
      isPopular: false,
    },
  ]);
}