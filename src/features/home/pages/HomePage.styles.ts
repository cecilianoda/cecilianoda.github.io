import styled from 'styled-components'
import { Container, Eyebrow, Section } from '../../../styles/shared.styles'

export * from './HomePage.secondary.styles'

export const Hero = styled.section`
  min-height: 100svh;
  overflow: hidden;
  padding: calc(var(--header-height) + var(--space-6)) 0 var(--space-5);
  position: relative;

  @media (min-width: 64rem) {
    padding-bottom: 0;
    padding-top: calc(var(--header-height) + var(--space-5));
  }
`
export const HeroGrid = styled(Container)`
  display: grid;
  gap: var(--space-6);
  @media (min-width: 48rem) {
    align-items: center;
    grid-template-columns: 1.05fr 0.95fr;
    min-height: calc(100svh - var(--header-height) - 6rem);
  }

  @media (min-width: 64rem) {
    grid-template-columns: 1.12fr 0.88fr;
  }
`
export const HeroCopy = styled.div`
  align-self: center;
  padding-top: var(--space-4);
  position: relative;
  z-index: 1;
  h1 {
    color: var(--color-brand);
    font-size: var(--text-display);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 0.99;
    margin: var(--space-3) 0 var(--space-5);
    max-width: 15ch;

    span {
      display: block;
    }
  }

  @media (min-width: 64rem) {
    h1 {
      font-size: clamp(4rem, 4.25vw, 5rem);
      max-width: 16ch;
    }
  }
`
export const HeroSupport = styled.p`
  color: var(--color-ink-muted);
  font-size: var(--text-md);
  line-height: 1.65;
  max-width: 35rem;
`
export const HeroActions = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: var(--space-5);
  @media (min-width: 48rem) {
    align-items: center;
    flex-direction: row;
    gap: 1.5rem;
  }
`
export const InlineLink = styled.a`
  align-items: center;
  border-bottom: 1px solid var(--color-taupe);
  display: inline-flex;
  gap: 0.35rem;
  font-size: var(--text-sm);
  padding: 0.75rem 0 0.35rem;
  transition:
    border-color var(--motion-fast),
    color var(--motion-fast);

  svg {
    transition: transform var(--motion-fast);
  }

  &:hover {
    border-color: var(--color-wine);
    color: var(--color-wine);

    svg {
      transform: translateY(0.2rem);
    }
  }
`
export const HeroVisual = styled.div`
  height: min(65svh, 42rem);
  justify-self: end;
  max-width: 34rem;
  position: relative;
  width: min(100%, 31rem);
  > img {
    border-radius: 14rem 14rem var(--radius-sm) var(--radius-sm);
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    position: relative;
    width: 100%;
    z-index: 1;
  }
  @media (min-width: 48rem) {
    height: min(72svh, 48rem);
  }
`
export const HeroArch = styled.span`
  border: 1px solid var(--color-taupe);
  border-radius: 15rem 15rem 0 0;
  height: 92%;
  left: -1rem;
  position: absolute;
  top: -1rem;
  width: calc(100% + 2rem);
`
export const OnlineBadge = styled.div`
  align-items: center;
  background: var(--color-paper);
  border-radius: var(--radius-pill);
  bottom: 1.25rem;
  display: flex;
  font-size: var(--text-xs);
  gap: 0.6rem;
  left: -1rem;
  padding: 0.75rem 1rem;
  position: absolute;
  z-index: 2;
  i {
    background: var(--color-wine);
    border-radius: 50%;
    height: 0.5rem;
    width: 0.5rem;
  }
`
export const HeroRail = styled.div`
  display: none;
  @media (min-width: 64rem) {
    align-items: center;
    border-top: 1px solid var(--color-taupe);
    display: flex;
    font-size: var(--text-xs);
    font-weight: 600;
    justify-content: space-around;
    letter-spacing: 0.12em;
    margin-top: var(--space-4);
    min-height: 4.75rem;
    padding-inline: var(--gutter);
    text-transform: uppercase;
    span::before {
      color: var(--color-wine);
      content: '✦';
      margin-right: 1rem;
    }
  }
`
export const AboutSection = styled(Section)`
  background: var(--color-surface);
`
export const AboutGrid = styled(Container)`
  display: grid;
  grid-template-areas:
    'eyebrow'
    'intro'
    'visual'
    'details';

  @media (min-width: 48rem) {
    column-gap: var(--space-7);
    grid-template-areas:
      '. eyebrow'
      'visual intro'
      'visual details';
    grid-template-columns: minmax(18rem, 0.78fr) 1.1fr;
  }

  @media (min-width: 64rem) {
    column-gap: clamp(4rem, 8vw, 8rem);
  }
`
export const AboutEyebrow = styled(Eyebrow)`
  grid-area: eyebrow;
  margin-bottom: var(--space-3);
`
export const AboutVisual = styled.div`
  grid-area: visual;
  height: 32rem;
  margin-bottom: var(--space-5);
  position: relative;

  @media (min-width: 48rem) {
    height: min(52vw, 36rem);
    margin-bottom: 0;
    margin-top: 0.75rem;
  }
`
export const AboutPhotoFrame = styled.div`
  --frame-offset: 0.75rem;

  height: 100%;
  isolation: isolate;
  padding: 0 var(--frame-offset) var(--frame-offset) 0;
  position: relative;
  width: 100%;

  &::before {
    background: var(--color-wine);
    border-radius: var(--radius-sm);
    content: '';
    inset: var(--frame-offset) 0 0 var(--frame-offset);
    position: absolute;
    z-index: -1;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover img {
      transform: scale(1.02);
    }
  }

  @media (min-width: 48rem) {
    width: 90%;
  }
`
export const AboutPhotoMedia = styled.div`
  border: 1px solid var(--color-taupe);
  border-radius: var(--radius-sm);
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: 68% center;
    transition: transform 400ms ease;
    width: 100%;
  }
`
export const AboutIntro = styled.div`
  grid-area: intro;
  margin-bottom: var(--space-5);

  h2 {
    color: var(--color-brand);
    font-size: var(--text-3xl);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.06;
    margin: 0 0 var(--space-5);
  }

  p {
    color: var(--color-ink-muted);
    line-height: 1.78;
    margin: 0;
    max-width: 42rem;
  }

  @media (min-width: 48rem) {
    margin-bottom: var(--space-4);
  }
`
export const AboutDetails = styled.div`
  grid-area: details;

  p {
    color: var(--color-ink-muted);
    line-height: 1.78;
    margin: 0 0 var(--space-4);
    max-width: 42rem;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`
export const Facts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  list-style: none;
  margin: var(--space-6) 0 0;
  padding: 0;

  li {
    background: rgb(185 168 154 / 16%);
    border: 1px solid var(--color-taupe);
    border-radius: var(--radius-pill);
    color: var(--color-brand);
    font-size: var(--text-xs);
    font-weight: 600;
    padding: 0.7rem 1rem;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  @media (max-width: 25rem) {
    li {
      padding-inline: 0.65rem;
      white-space: normal;
    }
  }

  @media (min-width: 48rem) {
    justify-content: flex-start;
  }
`
