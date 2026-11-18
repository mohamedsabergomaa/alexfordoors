import { cn } from './cn'

type Variant = 'primary' | 'dark' | 'outline-light' | 'outline-dark' | 'quiet-dark'
type Size = 'md' | 'sm'

export function buttonClass(
  variant: Variant = 'primary',
  size: Size = 'md',
  className?: string,
): string {
  return cn(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    className,
  )
}
