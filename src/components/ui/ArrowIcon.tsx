import { Icon } from './ArrowIcon.styles'

interface ArrowIconProps {
  direction?: 'up' | 'down' | 'upRight'
}

const paths = {
  up: 'M8 13V3M4.5 6.5 8 3l3.5 3.5',
  down: 'M8 3v10M4.5 9.5 8 13l3.5-3.5',
  upRight: 'M4 12 12 4M6 4h6v6',
} as const

export function ArrowIcon({ direction = 'upRight' }: ArrowIconProps) {
  return (
    <Icon aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path
        d={paths[direction]}
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}
