import { ArrowUpLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

interface ServiceRowProps {
  number: number
  title: string
  summary: string
}

export function ServiceRow({ number, title, summary }: ServiceRowProps) {
  return (
    <Link to="/services" className="service-row">
      <span className="service-row__number">{String(number).padStart(2, '0')}</span>
      <span className="service-row__content">
        <strong>{title}</strong>
        <span>{summary}</span>
      </span>
      <span className="service-row__arrow" aria-hidden="true">
        <ArrowUpLeft size={20} weight="light" />
      </span>
    </Link>
  )
}
