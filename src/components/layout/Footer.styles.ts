import styled from 'styled-components'
import { Container } from '../../styles/shared.styles'

export const FooterRoot = styled.footer`
  background: var(--color-ink);
  color: var(--color-paper);
  padding: var(--space-8) 0 var(--space-5);
`
export const FooterGrid = styled(Container)`
  display: grid;
  gap: var(--space-7);
  address {
    display: grid;
    font-style: normal;
    gap: 0.85rem;
  }
  address a {
    font-size: var(--text-sm);
  }
  address a span {
    display: block;
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    margin-bottom: 0.15rem;
    opacity: 0.55;
    text-transform: uppercase;
  }
  address a:hover {
    color: var(--color-taupe);
  }
  @media (min-width: 48rem) {
    align-items: end;
    grid-template-columns: 1fr auto;
    address {
      grid-template-columns: repeat(2, auto);
      gap: 1.5rem 3rem;
    }
  }
`
export const Brand = styled.div`
  align-items: center;
  display: flex;
  gap: 1.25rem;
  justify-content: center;

  strong {
    display: block;
    font: 500 var(--text-xl) / 1.2 var(--font-display);
  }
  > div > span {
    display: block;
    font-size: var(--text-xs);
    margin-top: 0.4rem;
    opacity: 0.72;
  }

  @media (min-width: 48rem) {
    justify-content: flex-start;
  }
`

export const Monogram = styled.span<{ $src: string }>`
  background-color: currentColor;
  display: block;
  flex: 0 0 auto;
  height: 4.5rem;
  mask: url(${({ $src }) => $src}) center / contain no-repeat;
  width: 4rem;
`
export const FooterBottom = styled(Container)`
  border-top: 1px solid rgb(232 220 198 / 20%);
  display: flex;
  font-size: var(--text-xs);
  justify-content: space-between;
  margin-top: var(--space-7);
  padding-top: var(--space-4);

  a {
    align-items: center;
    display: inline-flex;
    gap: 0.35rem;
  }
`
