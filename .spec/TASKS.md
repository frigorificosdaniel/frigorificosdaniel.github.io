# TASKS.md — Frigorificos Daniel Website Updates

## Design Decisions
- [INV-001] Keep existing bilingual URL and DOM structure intact (RO default, EN toggle via existing language switcher).
- [INV-002] Maintain Tailwind / CSS utility conventions without introducing external heavy dependencies.
- [INV-003] Surgical, minimal diffs only; verify changes locally before marking any task complete.
- [INV-004] Milestone Gates (GATE-X) require audit verification prior to proceeding.

## Strategic Interfaces & Key Implementations
- [SI-001] Route: `/certificat-FRC/` with bilingual language toggle matching the pattern of `/services/`.

## Migration Sequence

### Stage 1: Structure Discovery & Services Page Reordering
- [x] MS-001: Inspect the workspace structure to identify HTML templates, routing files, and language switching implementation.
- [x] MS-002: Reorder the FRC Certification section in `/services/` to be the first displayed service card/block (both RO and EN).
- [x] MS-003: Add the link ("Detalii certificare FRC aici" / "Details for certificate issuance at this link here") and wrap image 5.avif with a link to `/certificat-FRC/`.
- [ ] GATE-1: Services page updates verified locally.

### Stage 2: Create the Dedicated `/certificat-FRC` Page
- [ ] MS-004: Create the new `/certificat-FRC` page with bilingual content (RO default & EN).
- [ ] MS-005: Verify all internal links, navigation headers, language switchers, and asset paths resolve cleanly.
- [ ] GATE-2: Dedicated landing page verified locally.

