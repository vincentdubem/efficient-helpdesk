import { useEffect, useState } from 'react';

/** Hash routes work on GitHub Pages without server-side rewrite rules. */
export type RouteName = 'home' | 'submit' | 'track' | 'login' | 'register' | 'customer' | 'admin' | 'ticket' | 'notFound';

export type CurrentRoute = { name: RouteName; ticketId?: string; adminMode: boolean };

export function readRoute(): CurrentRoute {
  const hash = window.location.hash;
  if (!hash || hash === '#home' || hash === '#about' || hash === '#contact' || hash === '#main-content') {
    return { name: 'home', adminMode: false };
  }
  const routeString = hash.startsWith('#/') ? hash.slice(2) : hash.slice(1);
  const [pathname = '', query = ''] = routeString.split('?');
  const firstPart = pathname.replace(/^\/+|\/+$/g, '');
  const params = new URLSearchParams(query);
  if (firstPart.startsWith('ticket/')) {
    const ticketId = decodeURIComponent(firstPart.slice('ticket/'.length));
    return { name: 'ticket', ticketId, adminMode: params.get('mode') === 'admin' };
  }
  const valid: RouteName[] = ['home', 'submit', 'track', 'login', 'register', 'customer', 'admin'];
  if (valid.includes(firstPart as RouteName)) return { name: firstPart as RouteName, adminMode: false };
  return { name: 'notFound', adminMode: false };
}

export function navigate(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  window.location.hash = normalized;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export function useHashRoute(): CurrentRoute {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  useEffect(() => {
    if (window.location.hash === '#about' || window.location.hash === '#contact' || window.location.hash === '#main-content') {
      const target = window.location.hash.slice(1);
      window.requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
    }
  }, [route]);
  return route;
}
