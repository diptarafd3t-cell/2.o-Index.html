
export interface ExpertiseItem {
  icon: string;
  title: string;
  description: string;
  isLarge?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
