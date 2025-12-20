
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'fa-house' },
  { id: 'ai-helper', label: 'AI Helper', icon: 'fa-robot' },
  { id: 'analytics', label: 'Analytics', icon: 'fa-chart-line' },
  { id: 'features', label: 'Features', icon: 'fa-star' },
  { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
];

export const SYSTEM_PROMPT = `You are a world-class senior frontend engineer. 
The user is interacting with a multi-page React application. 
Explain frontend concepts like routing, sticky navbars, and component architecture clearly.`;
