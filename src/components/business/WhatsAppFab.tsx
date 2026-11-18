import { WhatsappLogo } from '@phosphor-icons/react'
import { whatsappMessages } from '../../lib/whatsapp'
import { WhatsAppLink } from './WhatsAppLink'

export function WhatsAppFab() {
  return (
    <WhatsAppLink
      message={whatsappMessages.generalQuote}
      className="whatsapp-fab"
      aria-label="فتح محادثة واتساب لطلب عرض سعر"
    >
      <span className="whatsapp-fab__pulse" aria-hidden="true" />
      <WhatsappLogo size={28} weight="fill" aria-hidden="true" />
      <span className="whatsapp-fab__label">واتساب</span>
    </WhatsAppLink>
  )
}
