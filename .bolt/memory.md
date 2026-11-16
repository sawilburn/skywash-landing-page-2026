# Project memory

## Product intent & audience

- Website for **Skywash Innovations** (skywashinnovations.com), a residential/exterior cleaning services company.
- Service pages include professional window cleaning under `/residential/` and solar panel cleaning under `/campaigns/holiday-solar-cleaning`.
- Audience: homeowners seeking professional cleaning services.

## Brand personality & voice

- Trustworthy, professional service brand.
- Page copy uses direct, benefit-oriented headings (e.g., "Why Homeowners Trust Our Team").
- Seasonal promotions (e.g., back-to-school special) were used but can be removed on request.

## Visual design & UX direction

- Vite + React with JSX, Tailwind CSS, and Lucide React icons.
- Page structure: hero section followed by trust/value proposition sections.
- Campaign pages mirror existing service pages in look, layout, and form placement.
- Lead form fields: First Name, Email, Property Address, Service Required dropdown.
- Service dropdown is scoped per page (e.g., solar campaign page lists only Solar Panel Cleaning).
- Production-quality, distinctive designs expected; avoid generic templates.
- No additional UI/theme packages unless explicitly requested.

## Decisions, constraints & rationale

- Created solar campaign page at `/campaigns/holiday-solar-cleaning` as its own file, modeled on the window cleaning page with solar-focused benefits.
- Form submissions route to the same lead system and emails as other forms.
- Removed back-to-school special banner from `/residential/professional-window-cleaning`; page now flows hero → "Why Homeowners Trust Our Team".
- Prefer editing existing components over creating new files for content removals; create new files for new campaign/service pages.
- Build passes after changes.

## Open questions & assumptions

- Leads table must be recreated in the live database for form submissions to succeed; awaiting user go-ahead.
- Other seasonal promotions may exist on other pages — scope of cleanup unknown.
- Full routing structure and complete list of service/campaign pages not yet mapped.
- Whether a shared promotional banner component exists across multiple pages is unconfirmed.