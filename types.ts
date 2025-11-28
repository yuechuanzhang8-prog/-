import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  id: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface OfficeLocation {
  city: string;
  address: string;
  image: string;
}

export interface IdentityPath {
  title: string;
  description: string;
  iconName: string;
}

export interface Misconception {
  id: number;
  title: string;
  myth: string;
  reality: string;
}

export interface IdentityType {
  type: string;
  name: string;
  description: string;
  features: string[];
  examples: string[];
}