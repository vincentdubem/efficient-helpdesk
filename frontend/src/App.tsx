import { useState } from 'react';
import { Header } from './components/Header';
import { ComingSoonDialog } from './components/ComingSoonDialog';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { Footer } from './sections/Footer';
import type { PlannedPage } from './data/homepage';

export default function App() {
  const [plannedPage, setPlannedPage] = useState<PlannedPage | null>(null);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div id="home" />
      <Header onOpenPlanned={setPlannedPage} />
      <main id="main-content">
        <HeroSection onOpenPlanned={setPlannedPage} />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer onOpenPlanned={setPlannedPage} />
      <ComingSoonDialog page={plannedPage} onClose={() => setPlannedPage(null)} />
    </>
  );
}
