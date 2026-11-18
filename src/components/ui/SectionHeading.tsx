import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  title: string
  description?: string
  action?: ReactNode
  className?: string
  compact?: boolean
}

export function SectionHeading({
  title,
  description,
  action,
  className,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('section-heading', compact && 'section-heading--compact', className)}>
      <div className="section-heading__main">
        <h2 className="section-heading__title">{title}</h2>
        {description ? (
          <p className="section-heading__description">{description}</p>
        ) : null}
      </div>
      {action ? <div className="section-heading__action">{action}</div> : null}
    </div>
  )
}
