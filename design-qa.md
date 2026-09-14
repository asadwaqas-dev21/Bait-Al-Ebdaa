# Design QA

- Source visual truth: https://www.atginteriors.com/ (desktop source inspected in the cloud browser at 1363 × 936 CSS px, DPR 1)
- Implementation: http://terminal.local:4173/
- Intended QA viewports: 1363 × 936 desktop and 390 × 844 mobile
- Source pixel dimensions: 1363 × 936 per desktop viewport capture, DPR 1
- Implementation pixel dimensions: unavailable
- Density normalization: not applicable; the implementation could not be captured
- State: homepage default, hero slide one; menu, hero next, sector tabs, project rail, and form states intended for testing

## Full-view comparison evidence

The source homepage was inspected from hero through footer in the cloud browser, including its sticky black header state, full-screen menu, hero slide transition, staggered section reveals, sector switching pattern, horizontal project treatment, proof-point section, form, and footer. A valid side-by-side comparison could not be produced because the workspace preview bridge could not start: `sites-preview` reported that its mailbox was unavailable, and the cloud browser consequently returned `ERR_CONNECTION_REFUSED` for the local implementation.

## Focused region comparison evidence

Blocked for the same reason. The implementation has no browser-rendered screenshot, so typography, spacing, color, image crop, and responsive behavior cannot be judged from visual evidence.

## Findings

- [P0] Browser-rendered implementation evidence is unavailable.
  - Location: local preview and all responsive states.
  - Evidence: production build and Sites worker tests pass, but the cloud browser cannot reach `http://terminal.local:4173/` because the preview bridge mailbox is unavailable.
  - Impact: required desktop/mobile visual QA and interaction verification cannot be completed.
  - Fix: restore the workspace preview service, open the local preview in the cloud browser, capture desktop and mobile states, check the console, and compare them with the source evidence.

## Required fidelity surfaces

- Fonts and typography: implementation uses DM Sans with Manrope display type and a Georgia italic accent; visual comparison blocked.
- Spacing and layout rhythm: responsive CSS is implemented for desktop, tablet, and mobile; visual comparison blocked.
- Colors and visual tokens: near-black, warm white, stone, walnut-adjacent neutrals, and restrained sand accents are defined; visual comparison blocked.
- Image quality and asset fidelity: six original high-resolution generated assets are bundled locally; visual crop and sharpness comparison blocked.
- Copy and content: original Dubai/Abu Dhabi-focused content covers 15,000 sq ft manufacturing, photorealistic 3D CAD, authority approvals/NOCs, Somfy automation, villas, offices, and in-house joinery.

## Primary interactions tested

- Static implementation review completed for hero controls, navigation overlay, sector tabs, project rail controls, anchor navigation, project type selector, enquiry validation/success state, and back-to-top link.
- Browser interaction testing: blocked.
- Browser console errors checked: blocked.

## Implementation checklist

- Restore the local preview bridge.
- Capture and compare the 1363 × 936 desktop view.
- Capture and compare the 390 × 844 mobile view.
- Test menu, hero controls, tabs, project rail, and form.
- Check browser console errors and fix any P0/P1/P2 visual issues.

## Comparison history

- Pass 1: blocked before implementation capture; no visual fixes could be evidence-driven.

final result: blocked
