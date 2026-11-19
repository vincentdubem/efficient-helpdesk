import { Headphones, Plus, Search, ShieldCheck, Zap } from 'lucide-react';
import type { PlannedPage } from '../data/homepage';

type HeroSectionProps = {
  onOpenPlanned: (page: PlannedPage) => void;
};

export function HeroSection({ onOpenPlanned }: HeroSectionProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__visual" aria-hidden="true" />
      <div className="hero__gradient" aria-hidden="true" />
      <div className="content-width hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <ShieldCheck size={19} strokeWidth={2.3} aria-hidden="true" />
            <span>LPG GAS STATION SUPPORT</span>
          </div>
          <h1 id="hero-title" className="hero__title">
            Report Issues, Get<br />
            <span>Quick Support</span>
          </h1>
          <p className="hero__description">
            A simple and reliable platform to submit, track, and resolve your
            complaints, service requests, and safety concerns at our LPG
            Gas Station in Enugu.
          </p>
          <div className="hero__actions">
            <button type="button" className="button button--primary" onClick={() => onOpenPlanned('submit')}>
              <Plus size={27} strokeWidth={2.2} aria-hidden="true" />
              Submit a Complaint
            </button>
            <button type="button" className="button button--outline-light" onClick={() => onOpenPlanned('track')}>
              <Search size={25} strokeWidth={2.3} aria-hidden="true" />
              Track Complaint
            </button>
          </div>
          <ul className="hero__trust" aria-label="Service benefits">
            <li><ShieldCheck size={24} aria-hidden="true" /> Secure &amp; Reliable</li>
            <li><Zap size={24} aria-hidden="true" /> Quick Response</li>
            <li><Headphones size={24} aria-hidden="true" /> Customer Focused</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
