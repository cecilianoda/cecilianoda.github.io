import styled from 'styled-components'

export const FaqList = styled.div`
  border-top: 1px solid var(--color-taupe);
`
export const FaqItemRoot = styled.div`
  border-bottom: 1px solid var(--color-taupe);
  padding-block: 0.35rem;

  h3 {
    margin: 0;
  }

  button {
    align-items: center;
    background: transparent;
    border: 0;
    border-radius: var(--radius-sm);
    color: var(--color-ink);
    cursor: pointer;
    display: flex;
    font: 500 clamp(1.05rem, 2vw, 1.35rem) / 1.35 var(--font-display);
    gap: 1rem;
    justify-content: space-between;
    padding: 1.05rem 0.75rem;
    text-align: left;
    transition:
      background-color var(--motion-fast),
      color var(--motion-fast);
    width: 100%;

    &:hover {
      background: rgb(85 0 0 / 5%);
      color: var(--color-wine);
    }

    &:focus-visible {
      outline: 2px solid var(--color-wine);
      outline-offset: 0.25rem;
    }
  }
`
export const Symbol = styled.span<{ $isOpen: boolean }>`
  align-items: center;
  border: 1px solid var(--color-brand);
  border-radius: 50%;
  display: flex;
  flex: 0 0 auto;
  height: 2rem;
  justify-content: center;
  position: relative;
  width: 2rem;

  &::before,
  &::after {
    background: var(--color-brand);
    content: '';
    height: 1px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.75rem;
  }

  &::after {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    transform: translate(-50%, -50%) rotate(90deg) scale(${({ $isOpen }) => ($isOpen ? 0 : 1)});
    transition:
      opacity var(--motion-fast),
      transform var(--motion-fast);
  }
`
export const Answer = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  max-width: 47rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition:
    grid-template-rows 280ms ease,
    opacity var(--motion-fast);
`
export const AnswerInner = styled.div`
  min-height: 0;
  overflow: hidden;

  p {
    color: var(--color-ink-muted);
    line-height: 1.75;
    margin: 0;
    padding: 0 3rem 1.5rem 0.75rem;
  }
`
