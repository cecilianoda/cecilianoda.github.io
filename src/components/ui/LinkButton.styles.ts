import styled, { css } from 'styled-components'

export type LinkButtonVariant = 'primary' | 'light'

const variants = {
  primary: css`
    background: var(--color-brand);
    color: var(--color-paper);
    &:hover {
      background: var(--color-wine);
    }
  `,
  light: css`
    background: var(--color-paper);
    color: var(--color-brand);
    &:hover {
      background: var(--color-paper-hover);
    }
  `,
}

export const StyledLink = styled.a<{ $variant: LinkButtonVariant }>`
  align-items: center;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  display: inline-flex;
  font-size: var(--text-sm);
  font-weight: 600;
  gap: var(--space-5);
  justify-content: space-between;
  min-height: 3rem;
  padding: 0.75rem 1.25rem;
  transition:
    background-color var(--motion-fast),
    color var(--motion-fast),
    transform var(--motion-fast);

  svg {
    transition: transform 280ms ease;
  }

  ${({ $variant }) => variants[$variant]}
  &:hover {
    transform: translateY(-2px);

    svg {
      transform: translateX(0.35rem);
    }
  }
`
