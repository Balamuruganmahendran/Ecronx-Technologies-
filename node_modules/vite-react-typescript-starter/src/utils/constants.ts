export const APP_NAME = 'Company Name';
export const APP_VERSION = '1.0.0';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PRODUCTS: '/products',
  CAREERS: '/careers',
  BLOG: '/blog',
  CONTACT: '/contact',
  INNOVATION_LAB: '/innovation-lab',
} as const;

export const API_ENDPOINTS = {
  USERS: '/users',
  POSTS: '/posts',
  PRODUCTS: '/products',
  SERVICES: '/services',
} as const;

export const STORAGE_KEYS = {
  THEME: 'theme',
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
} as const;
