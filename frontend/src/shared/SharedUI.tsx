import type { ReactNode } from 'react';
import { AlertTriangle, ArrowLeft, ArrowRight, BadgeInfo, Bell, CheckCircle2, ClipboardList, Home, LayoutDashboard, LogOut, Menu, Plus, ShieldCheck, Users, X } from 'lucide-react';
import { Brand } from '../components/Brand';
import type { TicketStatus } from './tickets';

export function DemoNotice({ children }: { children?: ReactNode }) {
  return <div className="eh-demo-note" role="note"><BadgeInfo size={19} aria-hidden="true" /><span>{children ?? 'UI preview — sample data only. No live account, complaint submission, or database is connected.'}</span></div>;
}

export function SafetyNotice() {
  return <div className="eh-safety" role="alert"><AlertTriangle size={23} aria-hidden="true" /><div><strong>Suspected gas leak or immediate danger?</strong><p>Move away from the affected area. Do not operate switches, use flames, or attempt repairs. Contact the LPG station's emergency team or local emergency services. Online tickets are not an emergency channel.</p></div></div>;
}

export function StatusBadge({ status }: {status: TicketStatus}) {
  const className = status === 'Resolved' ? 'resolved' : status === 'Pending' ? 'pending' : 'progress';
  return <span className={`eh-status eh-status--${className}`}><span className="eh-status__dot" />{status}</span>;
}

export function PageIntro({ eyebrow, title, description }: {eyebrow: string; title: string; description: string}) {
  return <div className="eh-page-intro"><span className="eh-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>;
}

export function Field({ label, htmlFor, children, hint, error, required = false }: {label: string; htmlFor: string; children: ReactNode; hint?: string; error?: string; required?: boolean}) {
  return <div className="eh-field"><label htmlFor={htmlFor}>{label}{required && <span className="eh-required"> *</span>}</label>{children}{hint && <span className="eh-hint">{hint}</span>}{error && <span className="eh-error" role="alert">{error}</span>}</div>;
}

export type DashboardRole = 'customer' | 'admin';
export function DashboardShell({ title, subtitle, role, children }: {title: string; subtitle: string; role: DashboardRole; children: ReactNode}) {
  const [menuOpen, setMenuOpen] = useDashboardMenu();
  const links = role === 'admin' ? [
    {href:'#/admin',label:'Overview',icon:LayoutDashboard},
    {href:'#/admin',label:'All complaints',icon:ClipboardList},
    {href:'#/customer',label:'Customer preview',icon:Users},
    {href:'#/home',label:'Website',icon:Home},
  ] : [
    {href:'#/customer',label:'Overview',icon:LayoutDashboard},
    {href:'#/customer',label:'My complaints',icon:ClipboardList},
    {href:'#/submit',label:'New complaint',icon:Plus},
    {href:'#/home',label:'Website',icon:Home},
  ];
  return <div className="eh-dashboard">
    <aside className={`eh-sidebar ${menuOpen ? 'eh-sidebar--open' : ''}`} aria-label={`${role} dashboard navigation`}>
      <div className="eh-sidebar__brand"><Brand compact light /></div>
      <p className="eh-sidebar__caption">LPG SUPPORT PORTAL</p>
      <nav className="eh-sidebar__nav">{links.map((link,index)=>{const Icon=link.icon;return <a key={link.label} href={link.href} className={index === 0 ? 'eh-sidebar__item eh-sidebar__item--active' : 'eh-sidebar__item'} onClick={()=>setMenuOpen(false)}><Icon size={19} aria-hidden="true" />{link.label}</a>;})}</nav>
      <div className="eh-sidebar__footer"><ShieldCheck size={19}/> Academic prototype <a href="#/login"><LogOut size={16}/> Exit preview</a></div>
    </aside>
    {menuOpen && <button aria-label="Close menu" className="eh-sidebar-backdrop" onClick={()=>setMenuOpen(false)} />}
    <div className="eh-dashboard__main">
      <header className="eh-dashboard__top"><button className="eh-hamburger" aria-label={menuOpen ? 'Close dashboard menu':'Open dashboard menu'} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button><div className="eh-dashboard__top-spacer"/><span className="eh-dashboard__top-label">{role === 'admin' ? 'Administrator preview' : 'Customer preview'}</span><Bell size={19} aria-hidden="true"/><span className="eh-avatar">{role === 'admin' ? 'AD' : 'CU'}</span></header>
      <main className="eh-dashboard__content" id="main-content"><div className="eh-dashboard__heading"><div><h1>{title}</h1><p>{subtitle}</p></div>{role==='customer' && <a className="eh-btn eh-btn--teal" href="#/submit"><Plus size={18}/> New Complaint</a>}</div>{children}</main>
    </div>
  </div>;
}
import { useState } from 'react';
function useDashboardMenu(){return useState(false);}

export function BackLink({href,children}: {href:string;children:ReactNode}) {return <a className="eh-back" href={href}><ArrowLeft size={17}/>{children}</a>;}
export function ContinueLink({href,children}: {href:string;children:ReactNode}){return <a className="eh-btn eh-btn--teal" href={href}>{children}<ArrowRight size={17}/></a>;}
export function EmptyTickets(){return <div className="eh-empty"><CheckCircle2 size={36}/><h3>No matching complaints</h3><p>Try another search term or status filter.</p></div>}
