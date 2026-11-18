import type { ReactNode } from 'react'

interface EmptyStateProps {
  icon: ReactNode
  title: string
  body: string
  action?: ReactNode
  note?: string
}

export function EmptyState({ icon, title, body, action, note }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        {icon}
      </div>
      <h2 className="empty-state__title">{title}</h2>
      <p className="empty-state__body">{body}</p>
      {note ? <p className="empty-state__note">{note}</p> : null}
      {action ? <div className="empty-state__action">{action}</div> : null}
    </div>
  )
}
