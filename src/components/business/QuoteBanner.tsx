import { ArrowUpLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { buttonClass } from '../../lib/buttonClass'
import { whatsappMessages } from '../../lib/whatsapp'
import { WhatsAppLink } from './WhatsAppLink'

interface QuoteBannerProps {
  title: string
  body: string
  message?: string
}

export function QuoteBanner({ title, body, message = whatsappMessages.generalQuote }: QuoteBannerProps) {
  return (
    <section className="quote-banner">
      <div className="container quote-banner__inner">
        <div className="quote-banner__copy">
          <span className="quote-banner__rule" aria-hidden="true" />
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="quote-banner__actions">
          <WhatsAppLink message={message} className={buttonClass('primary', 'md')}>
            اطلب عرض سعر
            <span className="btn__icon" aria-hidden="true">
              <ArrowUpLeft size={17} weight="light" />
            </span>
          </WhatsAppLink>
          <Link to="/contact" className={buttonClass('outline-light', 'md')}>
            تواصل معنا
          </Link>
        </div>
      </div>
    </section>
  )
}
