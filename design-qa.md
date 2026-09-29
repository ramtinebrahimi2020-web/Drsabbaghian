# Design QA — Home hero refinement

## Reference and implementation

- Latest approved visual reference: `C:\Users\Ramtin\Pictures\Screenshots\Screenshot 2026-09-22 103210.png`
- Reference dimensions: 1920 × 1020 px
- Implementation: `http://localhost:3000/fa`
- Browser: Codex in-app browser
- Desktop QA viewport: 1440 × 1024 px
- Mobile QA viewport: 390 × 844 px
- State: Persian, RTL, light theme

## Full-view comparison

The implementation preserves the approved direction: a restrained split hero, text on the right, a detached deep-green portrait stage on the left, a burgundy primary action, and a clear transition into the services section. The live site retains the project's existing navigation, brand mark, copy, typography, and accessibility structure rather than copying decorative text from the concept.

Desktop and mobile browser captures were inspected against the reference during this QA pass. The page has no horizontal overflow at either tested breakpoint. The portrait remains fully visible, the doctor’s head and crossed arms are not clipped, and the content hierarchy remains readable without competing with the visual stage.

## Focused hero comparison

- **Composition:** RTL content order and visual weight match the approved reference. The green field now starts below the header and reads as a separate rounded panel.
- **Typography:** Peyda remains the Persian display face; Dana remains the body face. The H1 fits on one line on desktop and remains compact on mobile.
- **Color:** Deep medical green is used for the visual field and scrollbar; burgundy is reserved for the primary appointment action and small brand accents.
- **Portrait:** The transparent cutout is crisp, extends above the green field, and ends exactly at the field’s bottom edge. The crossed arms remain fully visible on desktop.
- **Green field:** The physical right edge uses the large upper radius and smaller lower radius visible in the reference. The outer edge bleeds to the viewport.
- **Decoration:** The orbital artwork and its animations were removed from markup, styles, and project assets. The composition now relies on the portrait, color field, spacing, and type hierarchy.
- **Shadow:** A directional shadow follows the panel’s rounded contour and stays concentrated beneath its inner and lower edges.
- **Scrolling:** Lenis is active in the browser (`lenis lenis-autoToggle`) with restrained wheel smoothing. Native anchor offset and reduced-motion behavior are retained.
- **Scrollbar:** The track uses the surface color and the thumb uses the site’s primary green in Firefox and WebKit browsers.

## Findings and fixes

1. **P2 — orbital decoration did not support the site’s visual language.**
   - Fix: removed both orbit layers, their animation rules, their background use, and both PNG assets.
   - Verification: no orbit references remain under `src` or `public`, and the browser capture shows a clean green field.

2. **P2 — the portrait and green field did not share the same lower edge.**
   - Fix: set the panel’s block-end inset to zero while keeping the portrait anchored to `center bottom`; changed the panel to a 10rem upper and 4.25rem lower inner radius with a contour-following shadow.
   - Verification: at 1440 × 1024 the portrait, portrait container, green panel, and hero all end at y=852px. No image pixels extend beneath the green field.

3. **P2 — scrolling and scrollbar styling did not reflect the new visual system.**
   - Fix: added Lenis-based wheel smoothing and branded cross-browser scrollbar rules.
   - Verification: computed `scroll-behavior` is `smooth`, Lenis classes are present after hydration, and computed scrollbar colors resolve to the site green and surface colors.

4. **P2 — the desktop green field was too large and touched the header.**
   - Fix: moved the field into the portrait composition, added a 5.5rem top inset, increased the hero to 46rem, used a large asymmetric corner treatment, and let the portrait extend above the panel.
   - Verification: the final 1440 × 1024 capture shows a clear white gap below the header, a 736px portrait area, fully visible crossed arms, and no horizontal overflow. Mobile keeps its own compact rounded panel treatment.

5. **P2 — the desktop portrait touched the header and the physician name could wrap at laptop widths.**
   - Fix: reduced the desktop portrait scale from 1.075 to .99 and adjusted the desktop H1 to `clamp(2.6rem, 4vw, 3.75rem)` with a single-line constraint. The mobile breakpoint explicitly restores its original wrapping and portrait scale.
   - Verification: at 1440px the portrait begins 31px below the header and the title is one line at 57.6px. At 1280px the title remains one line at 51.2px with no horizontal overflow. At 390px the title keeps normal wrapping and the portrait remains at its previous 1.02 scale.

6. **P2 — the Persian desktop portrait composition was still taller than necessary.**
   - Fix: added a Persian-only desktop override that reduces the hero and portrait to 39rem and scales the doctor to .91. The panel now uses `inset-block: 10.5rem 0` and `border-radius: 0 17.5rem .75rem 0`, with an 88% translucent surface, light border, inset highlight, and a directional box shadow applied to the same rounded pseudo-element.
   - Verification: at 1440 × 800 the complete hero ends at y=740px. The doctor extends above the panel while the doctor, panel, portrait container, and hero share the same bottom edge. Computed panel values resolve to a 168px top inset, `0 280px 12px 0` radii, and a curved 44.8px shadow. English and Arabic remain at the original 760px hero and 736px portrait heights.

7. **P2 — the portrait stage needed a compact visual signature without bringing back the removed orbit artwork.**
   - Fix: moved the Persian desktop portrait 2.5rem to the left and added a circular frosted label at the lower-right corner of the green panel. The label uses the approved `#8e173b` base, a 32px backdrop blur, a fixed central movement mark, and a 26-second rotating text ring. Reduced-motion preferences stop the rotation.
   - Verification: at 1440 × 800 the label remains inside the panel, clears the face and copy, and the complete hero stays visible without scrolling. At 390 × 844 the label remains 16px from the panel’s right and bottom edges, the page has no horizontal overflow, and the doctor and portrait container still share the same lower edge.

## Technical validation

- `tsc --noEmit`: passed
- `npm run build`: passed
- Static generation: 31/31 pages
- Browser console on the refreshed home page: no warnings or errors
- `/fa/about`: rendered successfully after refresh
- Responsive overflow check: passed at 390 px width

final result: passed

---

# Design QA — Services page, Clinical Atlas direction

## Reference and implementation

- Selected visual direction: `C:\Users\Ramtin\.codex\generated_images\01a0c070-7306-7f13-a2d0-6d63d0efc807\exec-ab66d881-3115-4233-859c-6c9d556a6005.png`
- Reference dimensions: 1488 × 1058 px
- Implementation: `http://localhost:3000/fa/services`
- Browser: Codex in-app browser
- Desktop QA viewport: 1440 × 1024 px
- Mobile QA viewport: 390 × 844 px
- States checked: Persian RTL in light and dark themes; mobile navigation state

## Full-view comparison

The implemented page carries the selected Clinical Atlas direction into the existing site system: an editorial introduction on the right, a dominant anatomical knee plate, two circular clinical callouts, and a structured service index below. The global header, verified service content, Peyda/Dana typography, and restrained green/burgundy palette remain part of the established product rather than being replaced by generated mockup details.

The two verified service areas use different visual evidence but share one connected composition. The lower section uses horizontal index rows rather than repeating generic cards, which creates a clearer hierarchy and gives the services page its own identity.

## Focused comparison

- **Composition:** The desktop opening uses an asymmetric RTL split, with the content introduction occupying the right side and the anatomical atlas occupying the larger left field.
- **Typography:** Persian headings use Peyda and body copy uses Dana. The desktop H1 stays within two lines and the supporting content retains a readable line length.
- **Color:** The atlas uses a warm clinical surface, deep green type and page sections, and burgundy only for actions and small indexing accents.
- **Images:** Three purpose-made raster assets are used: the main anatomical knee, knee replacement illustration, and arthroscopy clinical image. They remain sharp at their intended display sizes.
- **Content:** Only the two confirmed fields are shown: knee/hip replacement and knee arthroscopy/sports knee injuries. No additional treatments or claims were introduced.
- **Interaction:** Appointment actions lead to `/{locale}/contact`, the replacement detail action leads to `/{locale}/services/knee-replacement`, and the second callout leads to its service row.
- **Dark mode:** The anatomical plate stays on a controlled warm surface, while surrounding sections and navigation adopt the dark palette without reducing callout contrast.

## Findings and fixes

1. **P2 — the first desktop pass gave the introduction too little width and produced an overly tall title.**
   - Fix: widened the main composition to 84rem, adjusted the grid ratio, and reduced the H1 clamp.
   - Verification: at 1440 × 1024 the heading resolves to two balanced lines and the introduction no longer competes with the anatomy.

2. **P2 — the mobile anatomy began with a large empty faded region.**
   - Fix: switched the mobile image treatment to a centered cover crop with a 48% vertical focus.
   - Verification: at 390 × 844 the knee begins immediately after the introduction and remains recognizable; `scrollWidth` is 380px for a 390px viewport.

3. **P2 — the dark theme exposed the source image rectangle and reduced callout contrast.**
   - Fix: established a fixed warm atlas surface, retained multiply blending for the anatomy, and set explicit dark green, gray, and burgundy callout colors.
   - Verification: the dark desktop capture reads as one intentional clinical plate with clear text and controls.

4. **P2 — nonconfigured Next.js image quality values created console warnings.**
   - Fix: normalized all three service images to the configured quality value of 90.
   - Verification: the post-fix refresh produced no new console warnings or errors.

## Technical validation

- `npm run build`: passed
- TypeScript: passed
- Static generation: 31/31 pages
- Postbuild sitemap generation: passed
- Link targets: verified for contact, replacement detail, and the second service anchor
- Responsive structure: exactly two callouts and two service rows; no horizontal overflow at 390px
- Browser states: desktop light, desktop dark, and mobile light inspected

final result: passed
