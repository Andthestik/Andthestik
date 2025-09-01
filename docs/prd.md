# ContractMate – Product Requirements Document

## Goal
Enable small businesses to quickly understand contract risks without hiring a lawyer.

## User Stories
- As a user, I can upload or paste contract text and receive a plain-language summary.
- As a user, I can see highlighted risky clauses with explanations.
- As a Pro subscriber, I can export reports to PDF for record keeping.
- As a Team admin, I can invite members and share reviewed contracts.

## Functional Requirements
1. **Upload & Parsing**: Accept text/PDF, extract raw text.
2. **AI Analysis**: Use OpenAI GPT-4 or compatible model to summarize and flag clauses.
3. **Risk Scoring**: Categorize clauses (e.g., termination, liability, payment terms) with severity levels.
4. **Reporting**: Generate downloadable PDF summary (Pro tier+).
5. **Authentication & Billing**: OAuth sign-in and Stripe subscriptions.

## Non‑functional Requirements
- Data privacy: Contracts deleted after 24 hours unless saved by user.
- Response time: Analysis results under 10 seconds for <10 page documents.
- Accessibility: WCAG 2.1 AA compliance.

## Success Metrics
- Time-to-first-contract under 3 minutes.
- NPS ≥ 40 after first month.
- Churn <5% monthly.

## Open Questions
- Should we provide contract templates?
- Can we partner with legal professionals for on-demand review?
