# Interface design

The September 2026 redesign gives Prep Pilot a consistent identity across the landing page, account forms, dashboard, and interview workspace.

## Direction

- White and light-gray surfaces with charcoal actions, subtle borders, and restrained shadows.
- Simple sans-serif typography throughout. No external font requests.
- A shared brand mark and workspace navigation; a compact horizontal navigation on mobile.
- Session history uses divided rows. Session metadata is condensed so questions and writing get more space.
- A compact public introduction leads directly to sign-in and account creation. Marketing sections and the interactive demo are removed.
- Visible keyboard focus, labeled controls, reduced-motion support, and a skip link in the workspace.

References: [Linear's UI redesign](https://linear.app/now/how-we-redesigned-the-linear-ui) for hierarchy and alignment, and [Raycast's interface refresh](https://www.raycast.com/blog/a-fresh-look-and-feel) for focused, compact interactions. Prep Pilot uses its own layout, colors, copy, and mark.

## Verification

Production build and ESLint checks pass. Local browser checks cover sign-in, an eight-question session, question switching with a retained draft, saving drafts, feedback, answer guidance, sample-answer controls, and navigation to dashboard sections. Screenshots use the synthetic local smoke fixture, not customer data or real AI evaluations.

The landing page, account screens, dashboard, and interview workspace are checked at desktop and mobile widths. Production uses the existing API and authentication flow; no new account permissions or AI providers are introduced.
