# GROW DESK — PREMIUM SAAS MARKETING WEBSITE

## ROLE

Act as a:

* Senior SaaS product designer
* Creative director
* Senior frontend engineer
* GSAP animation specialist
* UX/UI designer
* Conversion-focused landing-page designer
* Performance engineer

You are working inside an existing project called **GrowDesk**.

GrowDesk is an already-developed CRM application.

Your task is to create a **world-class, single-page marketing website for GrowDesk**.

This must NOT look like a generic CRM landing page.

It should feel like a:

* premium SaaS launch
* cinematic digital product experience
* high-end agency website
* modern startup product website
* Apple/Stripe/Linear/Vercel-level presentation

The website should be:

**PREMIUM**
**CINEMATIC**
**DARK**
**MODERN**
**MINIMAL**
**HIGHLY ANIMATED**
**PRODUCT-FOCUSED**
**SCROLL-STOPPING**

The most important principle:

> EVERY SCROLL SHOULD REVEAL SOMETHING NEW.

---

# 1. CRITICAL FIRST STEP — INSPECT THE EXISTING PROJECT

Before writing or modifying code, inspect the existing GrowDesk project thoroughly.

Understand:

* project structure
* framework
* package manager
* dependencies
* routing
* existing components
* existing styling system
* existing design system
* dashboard
* customer management
* customer profiles
* lead management
* stages
* appointments
* bookings
* treatments
* payments
* follow-ups
* activity/history
* analytics
* reports
* notifications
* administration
* users
* roles
* settings
* authentication
* APIs
* database structure where necessary
* reusable UI components

Determine exactly what GrowDesk currently does.

DO NOT invent product functionality.

If a feature does not exist, do not claim that it exists.

If the product has a feature that is more impressive than the examples in this document, use the real feature instead.

The marketing website must accurately represent the actual GrowDesk product.

---

# 2. DO NOT BREAK THE EXISTING CRM

This is a critical requirement.

The existing GrowDesk CRM must continue working.

Do not unnecessarily modify:

* database schemas
* APIs
* authentication
* existing CRM routes
* existing business logic
* existing customer functionality
* existing production components

Do not delete working functionality.

Do not replace working components just for the marketing website.

The marketing website must be isolated from the existing CRM as much as practical.

If the project architecture requires the marketing page to live at `/`, first determine whether `/` is currently used by the CRM.

If necessary, use:

* a separate route
* a separate marketing application
* or another clean architecture

Choose the safest architecture after inspecting the project.

---

# 3. BEFORE IMPLEMENTATION

First create a short internal implementation plan based on the actual project.

Identify:

1. Existing technology stack
2. Existing GrowDesk features
3. Existing visual identity
4. Existing colors
5. Existing typography
6. Best existing UI screens to showcase
7. Components that can be reused
8. Components that should remain untouched
9. Best architecture for the marketing website
10. Required animation libraries
11. Required assets

Then begin implementation.

Do not spend excessive time explaining.

Inspect first.

Then build.

---

# 4. CORE CREATIVE CONCEPT

The entire website should tell one visual story:

# FROM CHAOS TO GROWTH

At the beginning, show the problem:

Customer messages.

Notes.

Spreadsheets.

Calendars.

Leads.

Follow-ups.

Appointments.

Scattered information.

The visitor should visually feel:

"Everything is everywhere."

Then everything progressively comes together.

The chaos collapses into:

# GROW DESK

GrowDesk becomes the single customer workspace.

The entire website then demonstrates how GrowDesk helps turn customer activity into an organized customer journey.

---

# 5. BRAND POSITIONING

Product:

# GrowDesk

Primary message:

# Turn Every Customer Into Your Next Opportunity.

Supporting message:

GrowDesk brings customers, opportunities, appointments and follow-ups into one beautifully simple CRM.

Use actual product capabilities discovered from the existing project.

Do not make unsupported claims.

---

# 6. OVERALL VISUAL DIRECTION

Create an extremely premium dark visual system.

Use:

* near-black background
* sophisticated dark surfaces
* white typography
* muted secondary text
* one distinctive accent color
* subtle glow
* subtle gradients
* elegant borders
* cinematic lighting
* restrained glass effects
* large typography
* generous whitespace
* realistic product UI

Avoid:

* generic Bootstrap appearance
* generic SaaS templates
* excessive rounded cards
* excessive gradients
* rainbow colors
* cheap glassmorphism
* stock photos
* generic illustrations
* cartoon graphics
* excessive icons
* crowded layouts
* walls of text

The website should feel expensive.

---

# 7. COLOR SYSTEM

First inspect the existing GrowDesk branding.

If GrowDesk already has an established brand color, use it.

If not, create a premium dark system.

Suggested foundation:

Background:

#050505

Surface:

#0B0B0D

Primary text:

#F5F5F5

Muted text:

#8A8A8F

Borders:

very subtle translucent white

Accent:

ONE distinctive GrowDesk accent.

Do not introduce multiple competing accent colors.

---

# 8. TYPOGRAPHY

Use a modern premium sans-serif.

Possible fonts:

* Geist
* Inter
* Manrope
* Plus Jakarta Sans
* Satoshi

Choose the font that best fits the existing project and GrowDesk identity.

Typography should have strong hierarchy.

Hero:

extremely large.

Sections:

large.

Supporting copy:

short and restrained.

Do not make everything bold.

---

# 9. TECHNOLOGY

Use the technology already present in the project where practical.

If the project is Next.js:

Use Next.js.

Prefer:

* GSAP
* GSAP ScrollTrigger
* Lenis
* Framer Motion where useful

Do not install unnecessary libraries.

If an existing animation system is already present, evaluate whether it should be reused.

Create reusable animation utilities.

---

# 10. ANIMATION PHILOSOPHY

Animations should tell a story.

Do NOT animate everything simply because animation is possible.

Use:

* scroll-driven animation
* pinned sections
* scale
* parallax
* blur-to-sharp
* opacity
* clip-path
* staggered typography
* perspective
* subtle 3D
* horizontal scrolling
* product zoom
* UI transitions
* hover interactions
* micro-interactions

Animations should feel:

smooth

intentional

cinematic

premium

controlled

Use GPU-friendly transforms.

Respect:

`prefers-reduced-motion`

---

# 11. HERO — MOST IMPORTANT SECTION

The hero must immediately stop the visitor from scrolling away.

Initial screen:

Almost black.

Very subtle ambient light.

GrowDesk logo appears.

Then:

# Turn Every Customer Into Your Next Opportunity.

Supporting text:

GrowDesk brings your customers, opportunities, appointments and follow-ups into one beautifully simple CRM.

CTA:

# Explore GrowDesk

Secondary CTA:

# See How It Works

---

# 12. CINEMATIC HERO PRODUCT REVEAL

Do NOT simply place a screenshot underneath the hero.

Create a cinematic product reveal.

Initial state:

The GrowDesk application is small and distant.

It has subtle perspective.

As the user scrolls:

1. Product slowly approaches.
2. Product scales up.
3. Background depth increases.
4. Interface becomes sharper.
5. Surrounding elements appear.
6. Interface becomes dominant.
7. Product expands toward the viewport.
8. Hero transitions into the next section.

The visitor should feel as though they are entering GrowDesk.

Use:

* scale
* translate
* perspective
* opacity
* blur
* subtle rotation
* parallax

Use GSAP ScrollTrigger where appropriate.

---

# 13. USE THE REAL GROW DESK UI

The actual GrowDesk application should be the visual star.

Do NOT rely on generic screenshots.

Where possible:

Use actual GrowDesk components.

If direct components cannot be safely reused:

Create polished marketing mockups using screenshots of the real application.

Show actual functionality such as:

* dashboard
* customer list
* customer profile
* customer activity
* stages
* appointments
* follow-ups
* analytics

Only show features that actually exist.

---

# 14. NAVIGATION

Create a floating premium navbar.

Left:

GrowDesk logo

Navigation:

Product

Features

How It Works

Why GrowDesk

Right:

Get Started

Initial state:

transparent.

On scroll:

* translucent dark background
* backdrop blur
* subtle border
* slight shadow
* smaller height

Smooth transition.

Mobile navigation must be excellent.

---

# 15. HERO TO CHAOS TRANSITION

After the hero, create a cinematic transition.

Headline:

# Customer management shouldn't feel like a second job.

Then show floating fragments:

Messages

Notes

Spreadsheet

Calendar

Customer

Follow-up

Appointment

Each element should float independently.

Then:

They begin moving toward the center.

They merge.

Everything transforms into:

# GROW DESK

This should be one of the strongest visual moments.

---

# 16. BEFORE → AFTER

Do NOT create a boring comparison card.

Create a full-screen visual transformation.

BEFORE:

Scattered customer information.

AFTER:

One connected customer workspace.

Animate the entire environment.

The transformation should communicate the value without requiring much text.

---

# 17. PRODUCT INTRODUCTION

Headline:

# Meet GrowDesk.

Supporting:

A modern workspace built around the customer journey.

Show a large actual GrowDesk interface.

As the user scrolls:

* interface zooms
* panels move
* sections highlight
* UI changes
* labels appear
* different screens transition

Make it feel like an interactive product demonstration.

---

# 18. FEATURE STORY

DO NOT create a standard feature-card grid.

Create a cinematic feature journey.

Each major feature gets its own scene.

---

# 19. FEATURE — CUSTOMER MANAGEMENT

Headline:

# Know every customer.

Use actual GrowDesk customer management functionality.

Show:

customer list

customer profile

customer information

history

activity

other actual fields

Animation:

A customer record appears.

Profile opens.

Information reveals progressively.

Timeline expands.

The interface should tell the story visually.

---

# 20. FEATURE — LEADS AND STAGES

Headline:

# Know where every opportunity stands.

Use the actual GrowDesk stage system.

If actual stages include:

Interested

Booked

Follow-up

Completed

use them.

If different:

use the actual stages.

Animate records moving through the journey.

Make the movement satisfying and understandable.

---

# 21. FEATURE — APPOINTMENTS

Headline:

# Never lose track of what's next.

If appointment/booking functionality exists:

Show actual GrowDesk booking functionality.

Create an animated calendar.

Show:

Customer

Appointment

Date

Status

Use actual terminology.

---

# 22. FEATURE — FOLLOW-UPS

Headline:

# Follow up when it matters.

If follow-up functionality exists:

Show it visually.

Use an animated timeline.

Customer enters.

Action occurs.

Follow-up becomes due.

Customer moves forward.

Keep the explanation short.

---

# 23. FEATURE — CUSTOMER JOURNEY

Headline:

# Every customer has a story.

Create a massive scroll-driven customer journey.

Example:

NEW CUSTOMER

↓

INTERESTED

↓

BOOKED

↓

VISIT

↓

SERVICE

↓

FOLLOW-UP

↓

RETURN

Use actual GrowDesk terminology and capabilities.

Each stage reveals a different part of the CRM.

---

# 24. ONE CUSTOMER — ONE VIEW

Create a major immersive section.

Headline:

# Everything you need to know. In one place.

Start with a small customer card.

As the user scrolls:

Customer card expands.

Customer details appear.

Activity appears.

History appears.

Appointments appear.

Follow-up appears.

The interface becomes a complete customer profile.

Use actual GrowDesk functionality.

---

# 25. INTERACTIVE PRODUCT DEMO

Create a marketing-only interactive demonstration.

It can use mock/demo data.

Example:

Hover customer.

Click customer.

Open profile.

Move through stages.

Open appointment.

View activity.

The demo does not need to connect to production data.

But it must look authentic.

Use safe demo data.

Never expose real customer data.

---

# 26. DASHBOARD SECTION

If GrowDesk has a dashboard:

Create a large dashboard showcase.

Headline:

# See your business at a glance.

Show actual metrics.

Animate:

* numbers
* charts
* activities
* customers
* appointments
* other real metrics

DO NOT invent statistics.

---

# 27. BIG TYPOGRAPHY SECTION

Create a very minimal cinematic section.

Display:

# CAPTURE.

Then:

# MANAGE.

Then:

# FOLLOW UP.

Then:

# GROW.

Each word should dominate the viewport.

Use scroll-driven transitions.

At the end:

# That's GrowDesk.

Keep this section extremely minimal.

---

# 28. BENEFITS

Use giant statements instead of boring feature cards.

Examples:

# Less searching.

# Less forgetting.

# Less manual work.

# More visibility.

# Better follow-ups.

# Stronger customer relationships.

# More room to grow.

Only use statements that accurately represent the product.

Animate each phrase individually.

---

# 29. WHO IS GROW DESK FOR?

Based on actual product capabilities, identify suitable customer types.

Potential examples:

* Clinics
* Beauty & Wellness
* Consultants
* Service businesses
* Sales teams
* Customer-focused businesses

Only include appropriate categories.

Do not make unsupported industry claims.

Use typography and product UI rather than stock photography.

---

# 30. PRODUCT SCREEN MARATHON

Create an immersive product showcase.

Show multiple real GrowDesk screens:

Dashboard

↓

Customers

↓

Customer Profile

↓

Stages

↓

Appointments

↓

Reports

↓

Settings

Only include screens that actually exist.

Screens should transition seamlessly.

This should feel like a SaaS product launch presentation.

---

# 31. CHAOS RETURNS — BUT THIS TIME ORGANIZED

Bring back the elements from the beginning:

Customer

Appointment

Follow-up

Activity

Dashboard

But now everything is organized inside GrowDesk.

This creates a visual narrative:

CHAOS

↓

GROW DESK

↓

CLARITY

↓

GROWTH

---

# 32. FINAL CTA

Create a dramatic quiet section.

Almost black.

Minimal glow.

GrowDesk logo.

Then:

# Ready to grow smarter?

Supporting text:

Bring your customers, opportunities and follow-ups together with GrowDesk.

Primary CTA:

# Get Started

Secondary:

# Explore GrowDesk

---

# 33. FINAL CTA INTERACTION

CTA button should have a premium interaction.

Hover:

* subtle expansion
* glow
* arrow movement
* background response

Keep it elegant.

No cheesy effects.

Ensure the CTA links to a valid destination.

Never create broken links.

---

# 34. FOOTER

Minimal.

GrowDesk logo.

Short description.

Navigation.

Product.

Features.

Contact.

Social links only if they actually exist.

Copyright.

No clutter.

---

# 35. CUSTOM CURSOR

Desktop only.

Create a subtle premium cursor.

Normal:

small dot.

CTA hover:

slightly expands.

Product hover:

subtle visual change.

Do not create a distracting giant cursor.

Disable on mobile.

---

# 36. MICRO INTERACTIONS

Use refined micro-interactions.

Buttons:

* hover
* press
* arrow movement

Navigation:

* active section indicator

Product:

* subtle hover depth

Images:

* slight parallax

Text:

* smooth reveal

Keep everything restrained.

---

# 37. SCROLL EXPERIENCE

The entire website should feel like one continuous story.

Suggested flow:

OPEN

↓

GrowDesk logo

↓

Hero headline

↓

Product appears

↓

Product zooms

↓

Customer-management chaos

↓

Chaos collapses

↓

GrowDesk appears

↓

Product introduction

↓

Customer management

↓

Lead/stage management

↓

Appointments

↓

Follow-ups

↓

Customer journey

↓

Customer profile

↓

Dashboard

↓

CAPTURE

↓

MANAGE

↓

FOLLOW UP

↓

GROW

↓

Benefits

↓

Product showcase

↓

Everything converges

↓

Final CTA

↓

GrowDesk

---

# 38. PAGE PACING

Do not make every section visually intense.

Use contrast.

Example:

INTENSE

↓

Minimal

↓

INTENSE

↓

Minimal

↓

Product-focused

↓

Typography

↓

Product

↓

Quiet final CTA

This makes the important moments feel more powerful.

---

# 39. RESPONSIVE DESIGN

Desktop should provide the full cinematic experience.

Tablet should simplify where necessary.

Mobile must be designed intentionally.

Do NOT simply shrink the desktop layout.

On mobile:

* simplify 3D
* reduce parallax
* reduce particle effects
* simplify horizontal scrolling
* reduce pinned animations if necessary
* keep typography strong
* keep product UI readable
* keep buttons touch-friendly

Performance and usability come first.

---

# 40. PERFORMANCE

The website must be visually impressive without becoming slow.

Use:

* lazy loading
* optimized images
* Next/Image where applicable
* code splitting
* GPU-friendly transforms
* efficient GSAP timelines
* optimized fonts
* compressed assets
* minimal dependencies

Avoid:

* huge videos
* massive unoptimized images
* unnecessary JavaScript
* excessive DOM nodes
* layout thrashing

Target excellent Lighthouse performance.

---

# 41. ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* accessible buttons
* accessible navigation
* proper contrast
* focus states
* alt text
* reduced-motion support

---

# 42. SEO

Implement:

Title:

GrowDesk — Turn Customer Relationships Into Growth

Description:

GrowDesk is a modern CRM that helps businesses manage customers, opportunities, appointments and follow-ups in one simple workspace.

Include:

* OpenGraph
* Twitter/X metadata
* favicon
* semantic HTML
* proper H1
* heading hierarchy
* canonical URL if known
* structured metadata where appropriate

---

# 43. SOCIAL SHARING

The page should look excellent when shared through:

* WhatsApp
* Instagram
* Facebook
* LinkedIn
* X

Create a strong OpenGraph concept:

GrowDesk logo

Real product interface

Headline:

# Turn Every Customer Into Your Next Opportunity.

---

# 44. PUBLIC DEMO DATA

Never expose real CRM customer information.

For marketing demonstrations use:

* fictional names
* fictional phone numbers
* fictional appointments
* fictional customer records

Do not expose:

* production data
* API keys
* passwords
* credentials
* internal URLs
* private customer information

---

# 45. COMPONENT ARCHITECTURE

Keep the website maintainable.

Suggested components:

MarketingNavbar

HeroSection

ProductHero

ChaosSection

TransformationSection

ProductIntro

ProductShowcase

CustomerManagementSection

StageManagementSection

AppointmentsSection

FollowUpSection

CustomerJourneySection

CustomerProfileDemo

DashboardSection

TypographySection

BenefitsSection

AudienceSection

ProductScreensSection

FinalCTA

Footer

Animation utilities:

RevealText

FadeUp

ScaleReveal

Parallax

PinnedProduct

HorizontalScroll

StaggerReveal

MagneticButton

Do not create one enormous component.

---

# 46. ANIMATION UTILITIES

Create reusable animation utilities.

Use GSAP/ScrollTrigger where appropriate.

Animations should be easy to modify.

Avoid duplicated animation code.

Clean up ScrollTrigger instances correctly.

Ensure React/Next.js lifecycle is handled correctly.

Avoid hydration problems.

---

# 47. SECURITY

Do not expose:

* environment variables
* secrets
* API keys
* database credentials
* internal API endpoints
* production data

Do not hardcode secrets.

Use environment variables where necessary.

---

# 48. ROUTING

Determine the safest marketing website route after inspecting the project.

If `/` is available:

use `/`.

If `/` belongs to the CRM:

do not break it.

Use an appropriate route or architecture.

---

# 49. DESIGN QUALITY BAR

The website must NOT look like:

"Claude generated a landing page."

It should look like:

"A professional design team spent significant time creating a SaaS product launch website."

Avoid repetitive:

* rounded cards
* gradient blobs
* generic icon grids
* floating random circles
* unnecessary glass cards

Every element must have a purpose.

---

# 50. VIRAL / SCROLL-STOPPING REQUIREMENT

The website should contain visually memorable moments.

Examples:

### Moment 1

GrowDesk UI emerging from darkness.

### Moment 2

Customer-management chaos collapsing into GrowDesk.

### Moment 3

CRM interface expanding toward the visitor.

### Moment 4

Customer journey moving through stages.

### Moment 5

Customer profile expanding into a complete workspace.

### Moment 6

Huge typography:

CAPTURE.

MANAGE.

FOLLOW UP.

GROW.

### Moment 7

All product screens rapidly but elegantly coming together.

### Moment 8

Everything disappears into a minimal final GrowDesk CTA.

These should feel intentional and cinematic.

---

# 51. DO NOT USE STOCK PHOTOGRAPHY

The product is the visual hero.

Use:

* actual GrowDesk UI
* product mockups
* typography
* abstract lighting
* subtle graphics
* UI animation

Only use photography if there is a very strong reason.

---

# 52. DO NOT OVERWRITE EXISTING BRANDING

Before choosing colors, logos or typography:

Inspect the existing GrowDesk application.

If there is already a visual identity:

Elevate it.

Do not completely replace it without reason.

---

# 53. CONTENT RULES

Keep copy concise.

Prefer:

"Know every customer."

instead of:

"Our powerful comprehensive customer management platform enables organizations to..."

Prefer:

"Know what's next."

instead of:

"Our intelligent appointment management system provides..."

The visual experience should communicate most of the information.

---

# 54. FINAL QUALITY REVIEW

After implementation, perform a full review.

Check:

## FIRST 5 SECONDS

Does the website immediately feel premium?

Does the product appear quickly?

Is the headline powerful?

## SCROLL

Does every scroll reveal something?

Are transitions smooth?

Are there boring stretches?

## PRODUCT

Is actual GrowDesk visible?

Are features accurate?

## DESIGN

Is spacing consistent?

Is typography strong?

Does anything look generic?

## MOBILE

Does mobile feel intentionally designed?

## PERFORMANCE

Are animations smooth?

Any console errors?

Any layout shifts?

Any hydration problems?

## ACCESSIBILITY

Can keyboard users navigate?

Does reduced motion work?

---

# 55. FINAL CREATIVE-DIRECTOR PASS

After building the entire website:

Pretend you are reviewing it as a senior creative director.

Do NOT simply say "looks good."

Find weaknesses.

Ask:

* Does this feel premium?
* Does the hero stop scrolling?
* Does the product look beautiful?
* Are the animations purposeful?
* Is there too much text?
* Are sections repetitive?
* Is there enough visual contrast?
* Does the page have memorable moments?
* Does the product story make sense?
* Does the final CTA feel earned?
* Does the page feel like one continuous experience?

Then improve anything necessary.

---

# 56. IMPORTANT — DO NOT SETTLE FOR THE FIRST VERSION

The first implementation is NOT necessarily the final version.

After implementation:

1. Inspect the page.
2. Run it.
3. Test desktop.
4. Test mobile.
5. Check console.
6. Check animation smoothness.
7. Check spacing.
8. Check product visuals.
9. Check responsiveness.
10. Improve weak areas.

Continue until the website feels polished.

---

# 57. FINAL EXPERIENCE

The final website should feel like:

A digital product film.

Not a brochure.

Not a template.

Not a generic CRM landing page.

The visitor should feel:

"I want to see what this product does."

Then:

"I understand what it does."

Then:

"I can imagine using this."

Then:

"I want to try it."

---

# 58. FINAL INSTRUCTION

START BY INSPECTING THE EXISTING GROW DESK PROJECT.

Do not blindly implement the examples in this document.

Use the real application as the source of truth.

Build the marketing experience around the actual product.

Do not break the existing CRM.

Do not invent functionality.

Use the actual GrowDesk UI wherever possible.

Make the page:

# PREMIUM

# CINEMATIC

# SCROLL-DRIVEN

# PRODUCT-FOCUSED

# MODERN

# FAST

# RESPONSIVE

# MEMORABLE

The final quality target is:

> **A website that could be presented as the official launch website of a serious global SaaS product.**

Build it to that standard.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
