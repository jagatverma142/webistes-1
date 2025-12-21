import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class AboutComponent {
  teamMembers = signal<TeamMember[]>([
    { name: 'Dr. Aarav Sharma', role: 'Founder & Head Faculty', imageUrl: 'https://picsum.photos/400/400?random=1' },
    { name: 'Priya Singh', role: 'Lead Academic Coordinator', imageUrl: 'https://picsum.photos/400/400?random=2' },
    { name: 'Rohan Mehta', role: 'Senior Mock Test Analyst', imageUrl: 'https://picsum.photos/400/400?random=3' },
  ]);
}