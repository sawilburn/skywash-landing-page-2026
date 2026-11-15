# Project memory

## Product intent & audience

- Website for **Skywash Innovations** (skywashinnovations.com), a residential/exterior cleaning services company.
- Core service pages include professional window cleaning under `/residential/`.
- Audience: homeowners seeking professional cleaning services.

## Brand personality & voice

- Trustworthy, professional service brand.
- Page copy uses direct, benefit-oriented headings (e.g., "Why Homeowners Trust Our Team").
- Seasonal promotions (e.g., back-to-school special) were used but can be removed on request.

## Visual design & UX direction

- Vite + React with JSX, Tailwind CSS, and Lucide React icons.
- Page structure: hero section followed by trust/value proposition sections.
- Production-quality, distinctive designs expected; avoid generic templates.
- No additional UI/theme packages unless explicitly requested.

## Decisions, constraints & rationale

- Removed back-to-school special banner from `/residential/professional-window-cleaning`; page now flows hero → "Why Homeowners Trust Our Team".
- Kept all existing imports after removal; verified no unused imports introduced.
- Build passes after changes.
- Prefer editing existing components over creating new files for content removals.

## Open questions & assumptions

- Other seasonal promotions may exist on other pages — scope of cleanup unknown.
- Routing structure and full list of service pages not yet mapped.
- Whether a shared promotional banner component exists across multiple pages is unconfirmed.