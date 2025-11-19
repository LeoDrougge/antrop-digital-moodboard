# High-Precision Design System

A design system built on a strict 24px grid foundation.

## Setup

```bash
npm install
npm run dev
```

## Grid System

- **GRID**: 24px
- **MARGIN**: 48px (2 × GRID)
- All spacing, padding, margins, component heights, and gaps are multiples of 24px
- Typography line-heights align to the grid

## Development

Press **'G'** to toggle the grid overlay in development mode.

## Structure

- `tokens.js` - Design tokens (GRID, MARGIN, g() helper)
- `helpers.js` - Layout utilities and spacing helpers
- `components/Page.jsx` - Page wrapper with 48px side margins
- `components/GridOverlay.jsx` - Toggleable 24×24px grid overlay
- `components/Button.jsx` - Example button component
- `components/Card.jsx` - Example card component

