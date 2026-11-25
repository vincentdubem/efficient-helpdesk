import { Brand } from '../components/Brand';
import type { PlannedPage } from '../data/homepage';

type FooterProps = {
  onOpenPlanned: (page: PlannedPage) => void;
};

export function Footer({ onOpenPlanned }: FooterProps) {
  return (
    <footer className="footer" id="contact">
      <div className="content-width footer__top">
        <div className="footer__identity">
          <Brand light compact />
          <p>An academic prototype for managing LPG station customer complaints and service requests in Enugu, Nigeria.</p>
        </div>
        <div className="footer__links">
          <h2>Quick links</h2>
          <a href="#/home">Home</a>
          <button type="button" onClick={() => onOpenPlanned('submit')}>Submit Complaint</button>
          <button type="button" onClick={() => onOpenPlanned('track')}>Track Complaint</button>
        </div>
        <div className="footer__contact">
          <h2>Project location</h2>
          <p>Independent LPG Gas Station<br />Enugu State, Nigeria</p>
          <p className="footer__note">Contact details will be added when the case-study station is confirmed.</p>
        </div>
      </div>
      <div className="content-width footer__bottom">
        <span>© {new Date().getFullYear()} Efficient Helpdesk. Academic project prototype.</span>
        <a href="#/home">Back to top ↑</a>
      </div>
    </footer>
  );
}
