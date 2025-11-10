import { Code, Palette, Cloud, BarChart, Shield, Smartphone } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: Code,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
    icon: Palette,
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment strategies.',
    icon: Cloud,
  },
  {
    id: 4,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights and business intelligence.',
    icon: BarChart,
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security solutions.',
    icon: Shield,
  },
  {
    id: 6,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
];
