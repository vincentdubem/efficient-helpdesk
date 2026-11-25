import { useState } from 'react';
import type { FormEvent } from 'react';
import { BadgeCheck, CircleHelp, ClipboardEdit, Clock3, CreditCard, Fuel, Headphones, Info, Send, ShieldAlert, Wrench } from 'lucide-react';
import { DemoNotice, Field, SafetyNotice } from '../shared/SharedUI';
import { isSafetyIssue, TICKET_CATEGORIES } from '../shared/tickets';
import type { Ticket, TicketCategory, TicketFormValues } from '../shared/tickets';

const initialForm: TicketFormValues = {name:'',email:'',phone:'',category:'Gas Refill Issue',description:''};
const icons = [Fuel, CreditCard, ShieldAlert, Wrench, Headphones, CircleHelp] as const;

type Props = { onCreateTicket: (values: TicketFormValues) => Ticket };

export function SubmitPage({onCreateTicket}:Props) {
  const [form,setForm] = useState<TicketFormValues>(initialForm);
  const [submitted,setSubmitted] = useState<Ticket | null>(null);
  const [error,setError] = useState('');

  function update<K extends keyof TicketFormValues>(key:K, value:TicketFormValues[K]) {
    setForm(previous=>({...previous,[key]:value}));
    if(error) setError('');
  }

  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || form.description.trim().length < 15) {
      setError('Please complete every required field. Use at least 15 characters to describe your complaint.');
      return;
    }
    setSubmitted(onCreateTicket({...form,name:form.name.trim(),email:form.email.trim(),phone:form.phone.trim(),description:form.description.trim()}));
    window.scrollTo({top:0,behavior:'instant'});
  }

  return <main className="eh-submit-page" id="main-content"><div className="eh-submit-layout eh-container">
    <section className="eh-submit-story" aria-labelledby="submit-story-heading">
      <div className="eh-submit-story__copy"><span className="eh-story-kicker">LPG STATION CUSTOMER SUPPORT</span><h1 id="submit-story-heading">Have an Issue at Our <span>LPG Station?</span></h1><p>Report your complaint, service concern or equipment issue. Follow every update from one place.</p>
        <div className="eh-submit-benefits"><div><Headphones size={22}/><span><b>Report Issues</b><small>Tell us what went wrong</small></span></div><div><Clock3 size={22}/><span><b>Track Progress</b><small>Follow ticket status updates</small></span></div><div><BadgeCheck size={22}/><span><b>Get Resolution</b><small>Keep a record of responses</small></span></div></div>
      </div><img className="eh-submit-story__image" src={`${import.meta.env.BASE_URL}images/auth-station-side.webp`} alt="Illustrative LPG station with refill equipment and orange cylinders" />
    </section>
    <section className="eh-submit-panel eh-panel" aria-labelledby="submit-title">
      {submitted ? <div className="eh-submit-success"><span className="eh-submit-success__mark"><BadgeCheck size={37}/></span><span className="eh-eyebrow">SAMPLE CONFIRMATION</span><h2>Complaint preview created</h2><p>Your sample ticket appears in this browser session only. In the finished application, the API will save it and offer secure account setup for tracking.</p><div className="eh-submit-success__ticket"><span>Demo ticket reference</span><strong>{submitted.id}</strong></div><DemoNotice>Not sent to a station or stored in a database. Reloading the page clears this new sample ticket.</DemoNotice><div className="eh-success-actions"><a href="#/register" className="eh-btn eh-btn--teal">Continue to account setup</a><a href={`#/ticket/${encodeURIComponent(submitted.id)}`} className="eh-btn eh-btn--outline">Preview ticket</a></div><button type="button" className="eh-link eh-text-button" onClick={()=>{setForm(initialForm);setSubmitted(null);}}>Submit another demo complaint</button></div> : <>
      <div className="eh-form-title"><span className="eh-form-title__icon"><ClipboardEdit size={26}/></span><div><h2 id="submit-title">Submit a Complaint</h2><p>Tell us about your issue. Our future helpdesk team will be able to review it.</p></div></div>
      <DemoNotice>Prototype form: submitting creates a temporary example ticket in this browser session, not a real station request.</DemoNotice>
      <form className="eh-submit-form" onSubmit={submit} noValidate={false}>
        <div className="eh-form-grid"><Field label="Full Name" htmlFor="eh-name" required><input id="eh-name" className="eh-input" placeholder="Enter your full name" autoComplete="name" required maxLength={100} value={form.name} onChange={e=>update('name',e.target.value)}/></Field><Field label="Email Address" htmlFor="eh-email" required><input id="eh-email" className="eh-input" type="email" placeholder="you@example.com" autoComplete="email" required maxLength={254} value={form.email} onChange={e=>update('email',e.target.value)}/></Field></div>
        <Field label="Phone Number" htmlFor="eh-phone" required><input id="eh-phone" className="eh-input" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 0803 123 4567" required maxLength={25} value={form.phone} onChange={e=>update('phone',e.target.value)}/></Field>
        <fieldset className="eh-category-fieldset"><legend>Complaint Category <span className="eh-required">*</span></legend><div className="eh-category-grid">{TICKET_CATEGORIES.map((category:TicketCategory,index)=>{const Icon=icons[index] ?? CircleHelp;return <label className={`eh-category-chip ${form.category === category ? 'eh-category-chip--active':''}`} key={category}><input type="radio" name="category" value={category} checked={form.category === category} onChange={()=>update('category',category)}/><Icon size={23} aria-hidden="true"/><span>{category}</span></label>})}</div></fieldset>
        {isSafetyIssue(form.category) && <SafetyNotice />}
        <Field label="Describe Your Complaint" htmlFor="eh-description" hint="Please avoid passwords, payment-card details or other sensitive information." required><textarea className="eh-textarea" id="eh-description" placeholder="Explain what happened, when it occurred, and other relevant details..." minLength={15} maxLength={1500} required value={form.description} onChange={e=>update('description',e.target.value)} /></Field>
        {error && <p className="eh-submit-error" role="alert">{error}</p>}
        <button className="eh-btn eh-btn--teal eh-btn--block" type="submit"><Send size={19}/> Preview Complaint Submission</button>
        <p className="eh-form-footnote"><Info size={17}/> In the live system, first-time users will receive a secure account setup link by email after submission.</p>
      </form></>}
    </section>
  </div></main>;
}
