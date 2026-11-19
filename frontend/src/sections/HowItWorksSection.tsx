import { steps } from '../data/homepage';

export function HowItWorksSection() {
  return (
    <section className="how-it-works" id="about" aria-labelledby="how-it-works-title">
      <div className="content-width">
        <div className="section-heading">
          <span className="section-heading__eyebrow">SIMPLE SUPPORT, CLEAR UPDATES</span>
          <h2 id="how-it-works-title">How Efficient Helpdesk works</h2>
          <p>From reporting an issue to following its resolution, the process is designed to be straightforward.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-card__number" aria-hidden="true">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <p className="how-it-works__disclaimer">
          <strong>Safety first:</strong> If you suspect an LPG leak or immediate danger, move away from the area and contact qualified station personnel or local emergency services immediately. Do not rely on an online ticket for urgent assistance.
        </p>
      </div>
    </section>
  );
}
