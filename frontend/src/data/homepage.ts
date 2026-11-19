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

export const plannedPageCopy: Record<PlannedPage, { title: string; description: string }> = {
  submit: {
    title: 'Complaint submission is coming next',
    description:
      'The complaint form and ticket creation API are planned for the next development phase. This homepage is currently a UI-only prototype.',
  },
  track: {
    title: 'Ticket tracking is coming next',
    description:
      'Customer accounts, ticket reference lookup, and complaint status updates will be added after the complaint form and backend are implemented.',
  },
  login: {
    title: 'Secure login is coming next',
    description:
      'Customer and administrator authentication will be built in the next project milestones. No login information is collected on this page.',
  },
};
