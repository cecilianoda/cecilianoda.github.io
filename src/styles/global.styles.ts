import { createGlobalStyle } from 'styled-components'
import openSauceRegular from '../assets/fonts/OpenSauceOne-Regular.woff2'
import openSauceSemibold from '../assets/fonts/OpenSauceOne-SemiBold.woff2'
import playfairItalic from '../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.woff2'
import playfairRegular from '../assets/fonts/PlayfairDisplay-VariableFont_wght.woff2'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Open Sauce One';
    font-style: normal;
    font-weight: 400;
    src: url(${openSauceRegular}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sauce One';
    font-style: normal;
    font-weight: 600;
    src: url(${openSauceSemibold}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 400 900;
    src: url(${playfairRegular}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Playfair Display';
    font-style: italic;
    font-weight: 400 900;
    src: url(${playfairItalic}) format('woff2');
  }

  :root {
    --color-brand: ${theme.colors.brand};
    --color-focus: ${theme.colors.focus};
    --color-ink: ${theme.colors.ink};
    --color-ink-muted: ${theme.colors.inkMuted};
    --color-paper: ${theme.colors.paper};
    --color-paper-hover: ${theme.colors.paperHover};
    --color-surface: ${theme.colors.surface};
    --color-taupe: ${theme.colors.taupe};
    --color-wine: ${theme.colors.wine};
    --font-display: 'Playfair Display', Georgia, serif;
    --font-sans: 'Open Sauce One', Arial, sans-serif;
    --text-xs: clamp(.75rem, .72rem + .12vw, .82rem);
    --text-sm: clamp(.9rem, .86rem + .16vw, 1rem);
    --text-md: clamp(1.05rem, .98rem + .3vw, 1.22rem);
    --text-lg: clamp(1.35rem, 1.15rem + .8vw, 1.9rem);
    --text-xl: clamp(1.7rem, 1.35rem + 1.2vw, 2.6rem);
    --text-3xl: clamp(2.75rem, 2rem + 3vw, 5.6rem);
    --text-4xl: clamp(3.2rem, 2.1rem + 5vw, 7.4rem);
    --text-display: clamp(3.1rem, 2.1rem + 4.6vw, 7rem);
    --space-2: .5rem;
    --space-3: .75rem;
    --space-4: 1.25rem;
    --space-5: 2rem;
    --space-6: 3rem;
    --space-7: clamp(3.5rem, 6vw, 6rem);
    --space-8: clamp(5rem, 9vw, 9rem);
    --radius-sm: .25rem;
    --radius-pill: 999px;
    --shadow-lg: 0 1rem 3rem rgb(31 28 27 / 20%);
    --container: ${theme.widths.container};
    --gutter: clamp(1.25rem, 4vw, 4rem);
    --header-height: 4.75rem;
    --motion-fast: ${theme.motion.fast};
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 1rem);
  }

  body {
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-sans);
    margin: 0;
    min-width: 320px;
    text-rendering: optimizeLegibility;
  }

  body,
  button,
  a {
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-display);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  a {
    font: inherit;
  }

  :focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 4px;
  }

  .skip-link {
    background: var(--color-ink);
    color: white;
    left: 1rem;
    padding: .75rem 1rem;
    position: fixed;
    top: -5rem;
    z-index: 100;
  }

  .skip-link:focus {
    top: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: .01ms !important;
    }
  }
`
