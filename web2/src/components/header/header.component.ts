import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);

  navItems = signal<NavItem[]>([
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Test Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
    { name: 'Ask AI', path: '/ask-ai' },
  ]);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}