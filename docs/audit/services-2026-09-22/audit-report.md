# Audit — Services page

## Audit scope

Persian RTL services page at `/fa/services`, reviewed in the current desktop light, desktop dark, and mobile states.

## User goal and accessibility target

Visitors should understand the two confirmed service areas, find one clear route to coordination, and be able to read the page comfortably in light and dark themes and on a small screen.

## Strengths

1. The page title, primary action, and two confirmed service areas are present and understandable.
2. The current brand typography, header, and restrained green/burgundy palette are recognizable.
3. The mobile header has a clear compact navigation affordance.

## UX risks

1. **Duplicate service journey — desktop and mobile.** Each service appears once as a hero callout and again in the service index. This repeats the same decision instead of giving the visitor a single, clear information path.
2. **Unbalanced opening composition — desktop.** The large central anatomical illustration has more visual weight than the service information, while the two small callouts compete with both the image and the page introduction.
3. **The dark theme changes the page’s hierarchy.** The warm-white asset area becomes a bright rectangular block against the green field, so it reads like an imported image rather than part of one composition.
4. **The mobile image crop fails.** The tall anatomy asset produces large empty white bands before its meaningful joint area appears, delaying the actual service information and breaking the page rhythm.
5. **Calls to action repeat without adding context.** Appointment actions and detail actions appear in several locations without a different decision or next step.

## Accessibility risks

1. The small green body copy on the warm background and the fine green text in the dark screenshot may fall below comfortable contrast at normal viewing sizes; contrast needs measurement in the rebuilt page.
2. The mobile screenshot shows extremely small supporting text and inline service detail lists, which will be hard to read at 390px.
3. The image-first composition needs final alt-text and keyboard-focus verification after redesign; screenshots cannot verify these behaviours.

## Evidence limits and verification gaps

The review is based on supplied rendered screenshots. It cannot confirm keyboard order, focus visibility, screen-reader announcements, or measured contrast ratios.

## Recommendations

1. Use each service exactly once as its own editorial section or numbered row.
2. Replace the anatomical hero image with a visual treatment that belongs to the layout in both themes, or omit it.
3. Keep one primary coordination action in the opening and one supporting action after the two services.
4. Design the mobile layout from a separate crop and reading order rather than shrinking the desktop composition.
5. Test contrast, focus, and target sizes during implementation.

## Evidence

- `01-desktop-dark.png`
- `02-desktop-light.png`
- `03-mobile-full.png`
