# FORME — Fashion Store Frontend / Phase 3

RTL-first, static UI concept for a premium fashion commerce product.

## Stack
- Next.js 16.3.8
- React 19.3
- TypeScript
- Tailwind CSS 4.3
- Custom CSS design system

## Phase 3 additions
- Responsive global header and static mega-navigation
- Search discovery screen
- Wishlist preview
- Cart preview + order summary
- Account preview
- Stronger product cards and PLP hierarchy
- Shop-the-look editorial module
- Mobile refinements and accessibility focus states
- Reduced-motion support

## Current scope
No backend, database, authentication, API, payment, state management, or real interactions yet. Navigation is static and backed by mock content only.

## Run
```bash
npm install
npm run dev
```


## Phase 5

- Product cards are vertically compact so image, price, rating and color swatches remain visible with less scrolling.
- Product prices are numeric Toman values and formatted through `formatToman()` for future API compatibility.
- Current sale prices remain the primary light text; original prices are red and struck through, and the discount percentage is also red.
- Product cards include a lightweight static rating/review row.
- PDP imagery is shorter on mobile so product metadata enters the first viewport sooner.


Phase 5 changes: compact product cards; current/old price hierarchy corrected; old price and discount are red; static PDP gallery/details refinement.


## Phase 6 changes

- Reduced H1 scale across hero and page shells.
- Replaced manually-scrolled product rails with a soft CSS-only continuous product ticker; pauses on hover/focus and respects `prefers-reduced-motion`.
- Added `ProductRail` component with duplicated track content for seamless looping.
- Tightened product card rhythm so image, metadata and color options remain visible together.
- Shifted the visual language toward editorial fashion: stronger pacing, magazine-style statement sections and more narrative copy.
- Rewrote visible Persian microcopy to sound more natural and sales-advisor-like.
- Kept the UI static: no API, backend, database or real interaction.


## Phase 7 changes

- Rebuilt product rails as a true seamless marquee loop using two equal product groups; the track now resets at exactly the same visual position instead of exposing an empty gap.
- Increased product-card typography for brand, product name, metadata, price, rating and sale information.
- Added a fixed, predictable card rhythm with clamped product names and stable metadata heights to prevent text overlap.
- Standardized rail card widths, image ratios and vertical alignment so every item remains on the same baseline.
- Preserved the previous price hierarchy: current price stays neutral, original crossed-out price is red, and discount percentage is red.
- Kept the UI static apart from the visual marquee animation; no API, backend, database or real interaction.


## Phase 8 changes
- Product rails use ResizeObserver to measure one complete product set and animate by that exact width, creating a seamless infinite loop without empty gaps.
- Sale price hierarchy: discount + crossed previous price on a separate line above the current price. The current price never shares the sale line.
- Mobile product cards reserve a dedicated sale row to prevent overlap.

## Phase 8 viewport-safe rail
- The rail now measures its rendered group width and moves exactly one group per animation cycle.
- It renders enough duplicate groups to cover the current viewport plus a safety buffer, including short rails with only a few products.
- Animation is paused while dimensions are measured, preventing an initial jump.
- Speed is derived from the measured group width and clamped for a calm editorial pace.
- Discount information is on a dedicated line above the current price on every product card, including mobile.
