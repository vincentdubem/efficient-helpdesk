# Efficient Helpdesk — Project Roadmap

## Phase 1 — Responsive homepage (included in this ZIP)
- [x] Create repository structure `frontend/` and `backend/`
- [x] Recreate approved homepage mockup
- [x] Add brand styling, optimized local image assets, navigation, and accessible layout
- [x] Add documentation and developer scripts

## Phase 2 — Complaint form and customer access (planned)
- [ ] Complaint form fields: customer name, email, telephone, category, description
- [ ] Generate an unpredictable ticket reference after validated submission
- [ ] Enable secure login/account setup and recovery
- [ ] Protect against spam and validate form inputs on the server
- [ ] Separate immediate safety instructions and alerting for critical issues

## Phase 3 — Customer portal (planned)
- [ ] View only own tickets and responses
- [ ] Show statuses: Pending, In Progress, Resolved
- [ ] Secure complaint detail view

## Phase 4 — Admin portal (planned)
- [ ] Admin-only ticket list, categories, priority, and status updates
- [ ] Responses and resolution notes with audit history
- [ ] Basic summary metrics

## Phase 5 — Back end, database, and testing (planned)
- [ ] Node.js + Express.js REST API
- [ ] PostgreSQL tables for users, complaints, responses, and audit logs
- [ ] Authorization and server-side validation
- [ ] Unit, integration, and end-to-end tests
- [ ] Deploy to suitable hosting and document evaluation for the academic report

## Deliberate exclusions from Phase 1

Real authentication, API routes, complaint storage, station contact details, payment processing, emergency dispatch, staff allocation, and real customer data.
