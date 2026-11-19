import { featureCards } from '../data/homepage';
import { FeatureCard } from '../components/FeatureCard';

export function FeaturesSection() {
  return (
    <section className="features" id="services" aria-label="What we can help with">
      <div className="content-width features__grid">
        {featureCards.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
      </div>
    </section>
  );
}
