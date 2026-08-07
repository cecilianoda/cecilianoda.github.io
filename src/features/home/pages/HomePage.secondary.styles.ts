import styled, { css } from 'styled-components'
import backgroundMonogram from '../../../assets/logos/monograma-principal.svg'
import { Container, Section } from '../../../styles/shared.styles'

const compactSectionTitle = css`
  color: var(--color-brand);
  font-size: clamp(2.5rem, 1.8rem + 2.2vw, 4.4rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.06;
  margin: var(--space-3) 0 var(--space-5);
`

const stickySectionHeading = css`
  @media (min-width: 64rem) {
    position: sticky;
    top: calc(var(--header-height) + 2rem);
  }
`

export const ApproachSection = styled(Section)`
  background: var(--color-brand);
  color: var(--color-paper);
  overflow: hidden;
  position: relative;

  > div {
    position: relative;
    z-index: 1;
  }

  @media (min-width: 64rem) {
    &::before,
    &::after {
      aspect-ratio: 519 / 561;
      background: url(${backgroundMonogram}) center / contain no-repeat;
      content: '';
      height: 140%;
      opacity: 0.1;
      pointer-events: none;
      position: absolute;
      top: 50%;
      width: auto;
      z-index: 0;
    }

    &::before {
      left: max(0rem, calc((100vw - var(--container)) / 2));
      transform: translate(-82%, -50%);
    }

    &::after {
      right: max(0rem, calc((100vw - var(--container)) / 2));
      transform: translate(82%, -50%);
    }
  }
`

export const SectionIntro = styled.div`
  display: grid;
  gap: var(--space-4);
  margin-bottom: var(--space-7);

  h2 {
    color: inherit;
    font-size: var(--text-3xl);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.05;
    margin: var(--space-3) 0 0;
  }

  > p {
    color: rgb(232 220 198 / 82%);
    font-size: var(--text-md);
    line-height: 1.7;
    margin: 0;
    max-width: 40rem;
  }

  @media (min-width: 48rem) {
    align-items: end;
    grid-template-columns: 0.9fr 1.1fr;
  }
`

export const FoundationGrid = styled.div`
  display: grid;

  @media (min-width: 48rem) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto 1fr;
  }
`

export const FoundationCard = styled.article`
  border-top: 1px solid rgb(232 220 198 / 35%);
  padding: var(--space-5) 0 var(--space-6);

  > span {
    color: var(--color-taupe);
    font: italic 500 var(--text-lg) / 1 var(--font-display);
  }

  h3 {
    font: 500 var(--text-xl) / 1.15 var(--font-display);
    margin: var(--space-6) 0 1rem;
    max-width: 14ch;
  }

  p {
    color: rgb(232 220 198 / 78%);
    font-size: var(--text-sm);
    line-height: 1.72;
    margin: 0;
  }

  @media (max-width: 47.99rem) {
    > span {
      font-size: 1.55rem;
    }
  }

  @media (min-width: 48rem) {
    border-left: 1px solid rgb(232 220 198 / 35%);
    display: grid;
    grid-row: span 3;
    grid-template-rows: subgrid;
    padding: var(--space-6) var(--space-5);

    > span {
      margin-bottom: var(--space-6);
    }

    h3 {
      margin: 0 0 1rem;
    }

    &:first-child {
      border-left: 0;
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`

export const ProcessSection = styled(Section)`
  h2 {
    ${compactSectionTitle}
  }
`

export const ProcessGrid = styled(Container)`
  display: grid;
  gap: var(--space-6);

  @media (min-width: 64rem) {
    align-items: start;
    column-gap: clamp(4rem, 8vw, 8rem);
    grid-template-columns: minmax(17rem, 0.85fr) minmax(0, 1.15fr);
  }
`

export const ProcessHeading = styled.div`
  align-self: start;
  ${stickySectionHeading}
`

export const Steps = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    border-top: 1px solid var(--color-taupe);
    column-gap: var(--space-4);
    display: grid;
    grid-template-areas:
      'number title'
      '. description';
    grid-template-columns: 3.5rem minmax(0, 1fr);
    padding: var(--space-5) 0;
    row-gap: var(--space-2);
  }

  h3 {
    color: var(--color-brand);
    font: 500 var(--text-xl) / 1.2 var(--font-display);
    grid-area: title;
    margin: 0;
  }

  p {
    color: var(--color-ink-muted);
    grid-area: description;
    line-height: 1.65;
    margin: 0;
    max-width: 36rem;
  }

  @media (min-width: 48rem) {
    li {
      grid-template-columns: 4rem minmax(0, 1fr);
    }
  }
`

export const StepNumber = styled.span`
  color: var(--color-wine);
  font: italic 500 var(--text-lg) / 1 var(--font-display);
  grid-area: number;
  justify-self: center;
`

export const FaqSection = styled(Section)`
  background: var(--color-surface);

  h2 {
    ${compactSectionTitle}
  }
`

export const FaqGrid = styled(Container)`
  display: grid;
  gap: var(--space-7);
  grid-template-areas:
    'heading'
    'content';

  @media (min-width: 64rem) {
    align-items: start;
    column-gap: clamp(4rem, 8vw, 8rem);
    grid-template-areas: 'content heading';
    grid-template-columns: minmax(0, 1.15fr) minmax(17rem, 0.85fr);
  }
`

export const FaqHeading = styled.div`
  grid-area: heading;
  ${stickySectionHeading}
`

export const FaqContent = styled.div`
  grid-area: content;
`

export const FinalCta = styled.section`
  background: var(--color-wine);
  color: var(--color-paper);
  padding: clamp(2.5rem, 6vw, 5rem) 0;
  text-align: center;

  h2 {
    font-size: var(--text-4xl);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1;
    margin: var(--space-4) 0;
  }
`

export const FinalCtaInner = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const CtaSubtitle = styled.p`
  font: italic 500 var(--text-xl) / 1.3 var(--font-display);
  margin: 0;
`

export const CtaBody = styled.p`
  color: rgb(232 220 198 / 82%);
  line-height: 1.75;
  margin: var(--space-5) auto;
  max-width: 39rem;
`

export const MobileWhatsapp = styled.a`
  align-items: center;
  background: var(--color-brand);
  border: 1px solid rgb(232 220 198 / 45%);
  border-radius: var(--radius-pill);
  bottom: 1rem;
  box-shadow: var(--shadow-lg);
  color: var(--color-paper);
  display: flex;
  font-size: var(--text-xs);
  font-weight: 600;
  gap: 0.5rem;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  position: fixed;
  right: 1rem;
  z-index: 15;

  @media (min-width: 48rem) {
    display: none;
  }
`
