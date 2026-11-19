import { useState } from 'react';
import { LogIn, Menu, X } from 'lucide-react';
import { Brand } from './Brand';
import type { PlannedPage } from '../data/homepage';

type HeaderProps = {
  onOpenPlanned: (page: PlannedPage) => void;
};

export function Header({ onOpenPlanned }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openPlanned(page: PlannedPage) {
    setIsMenuOpen(false);
    onOpenPlanned(page);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner content-width">
        <div className="site-header__brand-group">
          <Brand />
          <span className="site-header__divider" aria-hidden="true" />
          <span className="site-header__descriptor">
            LPG Complaint &amp; Support<br />Management System
          </span>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <nav
          className={`primary-nav ${isMenuOpen ? 'primary-nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a className="primary-nav__link primary-nav__link--active" href="#home" aria-current="page" onClick={closeMenu}>Home</a>
          <button className="primary-nav__link" type="button" onClick={() => openPlanned('submit')}>Submit Complaint</button>
          <button className="primary-nav__link" type="button" onClick={() => openPlanned('track')}>Track Complaint</button>
          <a className="primary-nav__link" href="#about" onClick={closeMenu}>About</a>
          <a className="primary-nav__link" href="#contact" onClick={closeMenu}>Contact</a>
          <button className="primary-nav__login" type="button" onClick={() => openPlanned('login')}>
            <LogIn aria-hidden="true" size={19} strokeWidth={2.3} />
            <span>Login</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
