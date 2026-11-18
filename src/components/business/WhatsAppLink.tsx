import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { buildWhatsAppUrl, isExternalUrl } from '../../lib/whatsapp'

interface WhatsAppLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  message: string
  children: ReactNode
}

export function WhatsAppLink({ message, children, ...rest }: WhatsAppLinkProps) {
  const href = buildWhatsAppUrl(message)

  if (isExternalUrl(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  )
}
