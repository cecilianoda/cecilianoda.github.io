import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowIcon } from './ArrowIcon'
import { StyledLink, type LinkButtonVariant } from './LinkButton.styles'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: LinkButtonVariant
}

export function LinkButton({
  children,
  className,
  variant = 'primary',
  ...props
}: LinkButtonProps) {
  return (
    <StyledLink $variant={variant} className={className} {...props}>
      <span>{children}</span>
      <ArrowIcon />
    </StyledLink>
  )
}
