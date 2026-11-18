import {
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  WhatsappLogo,
  XLogo,
} from '@phosphor-icons/react'
import type { SocialIcon } from '../../data/types'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { navigation } from '../../data/navigation'
import { whatsappMessages } from '../../lib/whatsapp'
import { WhatsAppLink } from '../business/WhatsAppLink'

const socialIcons = {
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  x: XLogo,
} satisfies Record<SocialIcon, typeof InstagramLogo>

export function Footer() {
  const { contact } = siteConfig

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" className="brand brand--footer">
              <span className="brand__mark" aria-hidden="true">
                A
              </span>
              <span className="brand__text">
                <strong>{siteConfig.brand.nameArabic}</strong>
                <small>{siteConfig.brand.nameEnglish}</small>
              </span>
            </Link>
            <p>{siteConfig.brand.tagline}</p>
            <p className="site-footer__placeholder-note">
              محتوى تجريبي قابل للتعديل عند توفّر بيانات الشركة الرسمية.
            </p>
          </div>

          <div className="site-footer__column">
            <h3>روابط سريعة</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h3>خدماتنا</h3>
            <ul>
              <li>
                <Link to="/services">تصنيع الأبواب</Link>
              </li>
              <li>
                <Link to="/services">توريد الأبواب</Link>
              </li>
              <li>
                <Link to="/services">التركيب الاحترافي</Link>
              </li>
              <li>
                <Link to="/services">التشطيبات المرتبطة</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__column site-footer__contact">
            <h3>تواصل معنا</h3>
            <ul>
              <li>
                <Phone size={17} weight="light" aria-hidden="true" />
                {contact.phoneNumber || 'رقم الهاتف — يُضاف لاحقًا'}
              </li>
              <li>
                <WhatsappLogo size={17} weight="light" aria-hidden="true" />
                <WhatsAppLink message={whatsappMessages.generalQuote}>
                  {contact.whatsappNumber || 'واتساب — يُضاف لاحقًا'}
                </WhatsAppLink>
              </li>
              <li>
                <MapPin size={17} weight="light" aria-hidden="true" />
                {contact.address || 'العنوان — يُضاف لاحقًا'}
              </li>
            </ul>
            <div className="site-footer__socials">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.icon]
                return social.href ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon size={18} weight="light" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    key={social.label}
                    className="is-placeholder"
                    aria-label={`${social.label} — يُضاف لاحقًا`}
                    title={`${social.label} — يُضاف لاحقًا`}
                  >
                    <Icon size={18} weight="light" aria-hidden="true" />
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Alexandria for Doors. جميع الحقوق محفوظة.</p>
          <p>صور توضيحية من Unsplash، وليست مشاريع منفذة بواسطة الشركة.</p>
        </div>
      </div>
    </footer>
  )
}
