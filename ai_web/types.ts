
export type PageId = 'home' | 'ai-helper' | 'analytics' | 'features' | 'contact' | 'login';

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface NavItem {
  id: PageId;
  label: string;
  icon: string;
}
