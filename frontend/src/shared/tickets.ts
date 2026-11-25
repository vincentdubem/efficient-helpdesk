export type TicketStatus = 'Pending' | 'In Progress' | 'Resolved';
export type TicketCategory = 'Gas Refill Issue' | 'Billing / Payment' | 'Cylinder / Safety Issue' | 'Equipment Fault' | 'Poor Customer Service' | 'Other';
export type TicketResponse = { id: string; author: 'Support Team' | 'Customer'; message: string; time: string };
export type Ticket = {
  id: string; name: string; email: string; phone: string; category: TicketCategory;
  description: string; status: TicketStatus; createdAt: string; responses: TicketResponse[];
};
export type TicketFormValues = Pick<Ticket, 'name' | 'email' | 'phone' | 'category' | 'description'>;

/** Synthetic records. No real customer information is stored or retrieved. */
export const DEMO_TICKETS: Ticket[] = [
  { id:'LPG-0001', name:'Chinedu Okafor', email:'chinedu@example.test', phone:'0800 000 0001', category:'Gas Refill Issue', description:'The gas quantity I received appears less than what I paid for. Please help review the refill transaction.', status:'Pending', createdAt:'2026-11-18T09:30:00', responses:[] },
  { id:'LPG-0002', name:'Amaka Eze', email:'amaka@example.test', phone:'0800 000 0002', category:'Cylinder / Safety Issue', description:'I noticed a possible fault with my cylinder valve after refilling. I have stopped using it and moved to a safe location.', status:'In Progress', createdAt:'2026-11-19T11:10:00', responses:[{id:'r1',author:'Support Team',message:'Thank you for reporting this. Do not attempt to use or repair the cylinder. A qualified station representative should assess the issue.',time:'2026-11-19T11:35:00'}] },
  { id:'LPG-0003', name:'Ifeanyi Nwosu', email:'ifeanyi@example.test', phone:'0800 000 0003', category:'Billing / Payment', description:'I was charged twice for a single transaction. Kindly review the receipt.', status:'Resolved', createdAt:'2026-11-16T14:20:00', responses:[{id:'r2',author:'Support Team',message:'The duplicate payment was identified and resolved in this sample record.',time:'2026-11-17T10:00:00'}] },
  { id:'LPG-0004', name:'Ebere Ade', email:'ebere@example.test', phone:'0800 000 0004', category:'Poor Customer Service', description:'The service queue was not properly managed during my visit.', status:'Pending', createdAt:'2026-11-20T16:10:00', responses:[] },
  { id:'LPG-0005', name:'Nneka Obi', email:'nneka@example.test', phone:'0800 000 0005', category:'Equipment Fault', description:'The refill dispenser was temporarily unavailable at the station.', status:'In Progress', createdAt:'2026-11-21T13:40:00', responses:[] },
];

export const TICKET_CATEGORIES: TicketCategory[] = [
  'Gas Refill Issue', 'Billing / Payment', 'Cylinder / Safety Issue', 'Equipment Fault', 'Poor Customer Service', 'Other',
];

export function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-NG', { day:'numeric', month:'short', year:'numeric' }).format(new Date(value));
}

export function isSafetyIssue(category: TicketCategory) { return category === 'Cylinder / Safety Issue'; }
