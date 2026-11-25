import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { Footer } from './sections/Footer';
import { navigate, useHashRoute } from './router/hashRoute';
import type { PlannedPage } from './data/homepage';
import { DEMO_TICKETS } from './shared/tickets';
import type { Ticket, TicketFormValues } from './shared/tickets';
import { SubmitPage } from './pages/SubmitPage';

/** In-memory preview state: no API calls and no browser storage of customer PII. */
export default function App() {
  const route = useHashRoute();
  const [tickets, setTickets] = useState<Ticket[]>(() => structuredClone(DEMO_TICKETS));

  const handleNavigate = (page: PlannedPage) => navigate(page);

  function createTicket(form: TicketFormValues): Ticket {
    const ticket: Ticket = {
      ...form,
      id: `LPG-DEMO-${String(tickets.length + 1).padStart(4, '0')}`,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      responses: [],
    };
    setTickets(previous => [...previous, ticket]);
    return ticket;
  }


  if (route.name === 'home') return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header onOpenPlanned={handleNavigate} active="home" />
    <main id="main-content">
      <HeroSection onOpenPlanned={handleNavigate} />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
    <Footer onOpenPlanned={handleNavigate} />
  </>;

  const isDashboard = route.name === 'customer' || route.name === 'admin' || route.name === 'ticket';
  let page;
  if (route.name === 'submit') page = <SubmitPage onCreateTicket={createTicket} />;
  if (!page) page = <main id="main-content" className="eh-page"><div className="eh-container eh-stage-placeholder eh-panel"><span className="eh-eyebrow">UPCOMING DEVELOPMENT STAGE</span><h1>This screen is coming next</h1><p>Efficient Helpdesk is being built one page at a time. This stage contains only the pages listed in its README.</p><a className="eh-btn eh-btn--teal" href="#/home">Return to homepage</a></div></main>;
  if (isDashboard) return page;
  return <>
    <Header onOpenPlanned={handleNavigate} active={route.name} />
    {page}
    <Footer onOpenPlanned={handleNavigate} />
  </>;
}
