
import React from 'react';

export const COLORS = {
  accentOrange: '#FF8C00',
  primaryPurple: '#6D28D9',
  surfaceDark: '#0A0A0B',
  neonCyan: '#00F0FF',
};

export const SOCIALS = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/love-maker-188a6a328', icon: 'fa-linkedin' },
  { platform: 'WhatsApp', url: 'https://wa.me/8801704235825', icon: 'fa-whatsapp' },
  { platform: 'Github', url: '#', icon: 'fa-github' },
];

export const EXPERTISE = [
  { icon: 'fa-layer-group', title: 'Architecture', description: 'Scalable Backend Systems', isLarge: true },
  { icon: 'fa-code', title: 'Dev', description: 'Full-Stack Engineering' },
  { icon: 'fa-cloud', title: 'Cloud', description: 'Native Infrastructure' },
  { icon: 'fa-microchip', title: 'Innovation', description: 'AI Integration', isLarge: true },
];

export const PROFILE_IMAGE = 'IMG_20260211_182145.jpg';
// Fallback if local file isn't available in preview
export const PROFILE_PLACEHOLDER = 'https://picsum.photos/seed/dip/600/600';
