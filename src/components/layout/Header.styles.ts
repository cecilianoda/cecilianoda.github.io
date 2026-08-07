import styled from 'styled-components'
import { Container } from '../../styles/shared.styles'
import { LinkButton } from '../ui/LinkButton'

export const HeaderRoot = styled.header`
  backdrop-filter: blur(16px);
  background: color-mix(in srgb, var(--color-paper) 92%, transparent);
  border-bottom: 1px solid rgb(31 28 27 / 12%);
  inset: 0 0 auto;
  position: fixed;
  z-index: 20;
`
export const HeaderInner = styled(Container)`
  align-items: center;
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
`
export const LogoLink = styled.a`
  align-items: center;
  display: flex;
  width: 11rem;
  img {
    height: auto;
    width: 100%;
  }
  @media (min-width: 64rem) {
    width: 13rem;
  }
`
export const MenuButton = styled.button`
  align-items: center;
  background: none;
  border: 0;
  color: var(--color-ink);
  display: flex;
  gap: 0.75rem;
  min-height: 2.75rem;
  padding: 0.5rem;

  &:hover > span:last-child {
    background: rgb(85 0 0 / 7%);
    border-color: var(--color-wine);
    color: var(--color-wine);
  }

  &:focus-visible {
    outline: 2px solid var(--color-wine);
    outline-offset: 0.2rem;
  }

  @media (min-width: 64rem) {
    display: none;
  }
`
export const MenuLabel = styled.span`
  font: 600 var(--text-xs) / 1 var(--font-sans);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`
export const MenuIcon = styled.span<{ $isOpen: boolean }>`
  border: 1px solid currentColor;
  border-radius: 50%;
  height: 2.5rem;
  position: relative;
  transition:
    background-color var(--motion-fast),
    border-color var(--motion-fast),
    color var(--motion-fast);
  width: 2.5rem;

  i {
    background: currentColor;
    height: 1px;
    left: 50%;
    position: absolute;
    top: 50%;
    transition:
      opacity var(--motion-fast),
      transform var(--motion-fast);
    width: 1rem;
  }

  i:nth-child(1) {
    transform: translate(-50%, -50%)
      ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'translateY(-0.3rem)')};
  }

  i:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    transform: translate(-50%, -50%);
  }

  i:nth-child(3) {
    transform: translate(-50%, -50%)
      ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'translateY(0.3rem)')};
  }
`
export const MenuBackdrop = styled.button<{ $isOpen: boolean }>`
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  background: rgb(31 28 27 / 42%);
  border: 0;
  inset: var(--header-height) 0 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  padding: 0;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  position: fixed;
  transition:
    opacity var(--motion-fast),
    visibility var(--motion-fast);
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  z-index: 1;

  @media (min-width: 64rem) {
    display: none;
  }
`
export const Navigation = styled.nav<{ $isOpen: boolean }>`
  background: var(--color-paper);
  border-bottom: 1px solid var(--color-taupe);
  box-shadow: 0 1.5rem 3rem rgb(31 28 27 / 25%);
  left: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  padding: 1.25rem var(--gutter) 2rem;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  position: absolute;
  right: 0;
  top: var(--header-height);
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-0.75rem')})
    scaleY(${({ $isOpen }) => ($isOpen ? 1 : 0.96)});
  transform-origin: top;
  transition:
    opacity var(--motion-fast),
    transform 300ms ease,
    visibility 300ms;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  z-index: 2;

  ul {
    display: grid;
    gap: 0.2rem;
    list-style: none;
    margin: 0 0 1.25rem;
    padding: 0;
  }
  ul a {
    border-bottom: 1px solid rgb(31 28 27 / 14%);
    display: block;
    font: 500 1.25rem / 1.2 var(--font-display);
    padding: 0.85rem 0;
  }
  @media (min-width: 64rem) {
    align-items: center;
    background: transparent;
    border: 0;
    box-shadow: none;
    display: flex;
    gap: 2rem;
    opacity: 1;
    padding: 0;
    pointer-events: auto;
    position: static;
    transform: none;
    visibility: visible;
    ul {
      align-items: center;
      display: flex;
      gap: clamp(1rem, 2vw, 2rem);
      margin: 0;
    }
    ul a {
      border: 0;
      font: 500 var(--text-xs) / 1 var(--font-sans);
      letter-spacing: 0.04em;
      padding: 0.75rem 0;
    }
    ul a:hover {
      color: var(--color-wine);
    }
  }
`
export const HeaderCta = styled(LinkButton)`
  width: 100%;
  @media (min-width: 64rem) {
    width: auto;
  }
`
