import styled from 'styled-components'

export const Container = styled.div`
  margin-inline: auto;
  max-width: var(--container);
  padding-inline: var(--gutter);
  width: 100%;
`

export const Section = styled.section`
  padding-block: clamp(2.5rem, 4.5vw, 4.5rem);
`

export const Eyebrow = styled.p<{ $light?: boolean }>`
  color: ${({ $light }) => ($light ? 'var(--color-taupe)' : 'var(--color-wine)')};
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.13em;
  margin: 0;
  text-transform: uppercase;
`
