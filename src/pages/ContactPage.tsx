import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  WhatsappLogo,
  XLogo,
} from '@phosphor-icons/react'
import { ContactForm } from '../components/business/ContactForm'
import { WhatsAppLink } from '../components/business/WhatsAppLink'
import { PageHero } from '../components/layout/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { siteConfig } from '../config/site'
import type { SocialIcon } from '../data/types'
import { usePageMeta } from '../hooks/usePageMeta'
import { whatsappMessages } from '../lib/whatsapp'

const socialIcons = {
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  x: XLogo,
} satisfies Record<SocialIcon, typeof InstagramLogo>

export function ContactPage() {
  usePageMeta(
    'تواصل معنا',
    'تواصل مع الإسكندرية للأبواب عبر واتساب أو أرسل استفسارك عن منتج أو خدمة.',
  )

  const { contact } = siteConfig

  return (
    <>
      <PageHero
        eyebrow="نيسّر التواصل"
        title="تواصل معنا"
        description="أخبرنا بما تحتاجه، وسنجهّز رسالة واتساب واضحة تصل مباشرة إلى الشركة."
      />

      <section className="section contact-section">
        <div className="container contact-layout">
          <Reveal className="contact-panel">
            <h2>معلومات التواصل</h2>
            <p className="contact-panel__intro">
              تُعرض بيانات التواصل أدناه كعناصر نائبة حتى يتم تزويدنا بالبيانات الرسمية.
            </p>

            <ul className="contact-list">
              <li>
                <span className="contact-list__icon" aria-hidden="true">
                  <Phone size={20} weight="light" />
                </span>
                <span>
                  <strong>الهاتف</strong>
                  {contact.phoneHref ? (
                    <a href={contact.phoneHref}>{contact.phoneNumber}</a>
                  ) : (
                    <span className="is-placeholder">يُضاف لاحقًا</span>
                  )}
                </span>
              </li>
              <li>
                <span className="contact-list__icon" aria-hidden="true">
                  <WhatsappLogo size={20} weight="light" />
                </span>
                <span>
                  <strong>واتساب</strong>
                  <WhatsAppLink message={whatsappMessages.generalQuote}>
                    {contact.whatsappNumber || 'يُضاف لاحقًا'}
                  </WhatsAppLink>
                </span>
              </li>
              <li>
                <span className="contact-list__icon" aria-hidden="true">
                  <Envelope size={20} weight="light" />
                </span>
                <span>
                  <strong>البريد الإلكتروني</strong>
                  {contact.email ? (
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  ) : (
                    <span className="is-placeholder">يُضاف لاحقًا</span>
                  )}
                </span>
              </li>
              <li>
                <span className="contact-list__icon" aria-hidden="true">
                  <MapPin size={20} weight="light" />
                </span>
                <span>
                  <strong>العنوان</strong>
                  <span className={contact.address ? '' : 'is-placeholder'}>
                    {contact.address || 'يُضاف لاحقًا'}
                  </span>
                </span>
              </li>
            </ul>

            <div className="contact-socials">
              <h3>تابعنا</h3>
              <div className="contact-socials__list">
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
                      <Icon size={19} weight="light" aria-hidden="true" />
                      <span>{social.label}</span>
                    </a>
                  ) : (
                    <span key={social.label} className="is-placeholder" aria-disabled="true">
                      <Icon size={19} weight="light" aria-hidden="true" />
                      <span>{social.label}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-panel" delay={100}>
            <div className="contact-form-panel__head">
              <span className="eyebrow">نموذج الاستفسار</span>
              <h2>أرسل تفاصيل طلبك</h2>
              <p>
                سنستخدم البيانات التي تدخلها لإنشاء رسالة واتساب جاهزة باسمك ورقمك
                والخدمة التي تهمك.
              </p>
            </div>
            <ContactForm />
          </Reveal>
        </div>

        <div className="container">
          <Reveal className="map-panel">
            <h2>الموقع على الخريطة</h2>
            {contact.mapsEmbedUrl ? (
              <iframe
                src={contact.mapsEmbedUrl}
                title="موقع الشركة على الخريطة"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="map-placeholder">
                <span className="map-placeholder__icon" aria-hidden="true">
                  <MapPin size={34} weight="light" />
                </span>
                <h3>خريطة الموقع غير مضافة بعد</h3>
                <p>
                  سيظهر هنا تضمين Google Maps فور تزويدنا بعنوان الشركة ورابط الخريطة.
                </p>
                <span className="map-placeholder__badge">مكان نائب</span>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
