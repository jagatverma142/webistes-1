import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FeaturesPageComponent } from './pages/features/features.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AskAiComponent } from './pages/ask-ai/ask-ai.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ask-ai', component: AskAiComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];