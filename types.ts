import { LucideIcon } from 'lucide-react';

export interface Certificate {
  id: string;
  title: string;
  imageUrl: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  current?: boolean;
}

export interface TechItem {
  name: string;
  category?: 'code' | 'infra' | 'design' | 'other';
  icon: LucideIcon;
}