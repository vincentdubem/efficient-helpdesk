import type { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  theme: 'blue' | 'orange' | 'green' | 'purple';
};

export function FeatureCard({ title, description, icon: Icon, theme }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className={`feature-card__icon feature-card__icon--${theme}`}>
        <Icon size={35} strokeWidth={2.1} aria-hidden="true" />
      </div>
      <div>
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </article>
  );
}
