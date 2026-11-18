import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export function Reveal({ children, className, delay = 0, id }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      id={id}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
