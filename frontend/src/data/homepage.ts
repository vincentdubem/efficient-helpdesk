import { Clock3, Headphones, ShieldCheck, Wrench } from 'lucide-react';

export const featureCards = [
  {
    title: 'Customer Support',
    description: 'Get timely responses to your complaints and inquiries.',
    icon: Headphones,
    theme: 'blue',
  },
  {
    title: 'Safety & Compliance',
    description: 'Report cylinder, valve, or equipment safety concerns.',
    icon: ShieldCheck,
    theme: 'orange',
  },
  {
    title: 'Technical Assistance',
    description: 'Log equipment faults and request maintenance support.',
    icon: Wrench,
    theme: 'green',
  },
  {
    title: 'Track Progress',
    description: 'Check complaint status and updates at any time.',
    icon: Clock3,
    theme: 'purple',
  },
] as const;

export const steps = [
  {
    number: '01',
    title: 'Submit a complaint',
    description: 'Tell us what happened and choose the type of issue.',
  },
  {
    number: '02',
    title: 'We review it',
    description: 'Station staff investigate and provide status updates.',
  },
  {
    number: '03',
    title: 'Track the resolution',
    description: 'Follow your ticket until the issue is marked resolved.',
  },
] as const;

export type PlannedPage = 'submit' | 'track' | 'login';
