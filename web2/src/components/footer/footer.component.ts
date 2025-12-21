import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

interface SocialLink {
  platform: string;
  url: string;
  iconPath: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  submitted = signal(false);

  quickLinks = signal([
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Test Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ]);

  socialLinks = signal<SocialLink[]>([
    { platform: 'Facebook', url: '#', iconPath: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { platform: 'Twitter', url: '#', iconPath: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { platform: 'Instagram', url: '#', iconPath: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
    { platform: 'LinkedIn', url: '#', iconPath: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
  ]);

  subscribe() {
    if (this.emailControl.valid) {
      console.log('Subscribing with email:', this.emailControl.value);
      this.submitted.set(true);
      this.emailControl.reset();
      setTimeout(() => this.submitted.set(false), 5000);
    }
  }
}