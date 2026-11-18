import { Gear, PaintBrush, Truck, Wrench } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { QuoteBanner } from '../components/business/QuoteBanner'
import { PageHero } from '../components/layout/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SmartImage } from '../components/ui/SmartImage'
import { services } from '../data/services'
import type { ServiceIcon } from '../data/types'
import { usePageMeta } from '../hooks/usePageMeta'

const icons = {
  gear: Gear,
  truck: Truck,
  wrench: Wrench,
  brush: PaintBrush,
} satisfies Record<ServiceIcon, typeof Gear>

const layouts = ['split', 'reverse', 'wide', 'split'] as const

export function ServicesPage() {
  usePageMeta(
    'خدماتنا',
    'تصنيع الأبواب وتوريدها وتركيبها والتشطيبات المرتبطة بها لدى الإسكندرية للأبواب.',
  )

  return (
    <>
      <PageHero
        eyebrow="ما نقدّمه"
        title="خدماتنا"
        description="أربع مراحل متكاملة، من اختيار الخامة إلى اللمسة الأخيرة التي تُكمل حضور الباب."
        image="/images/service-manufacturing.webp"
      />

      <section className="services-page">
        {services.map((service, index) => {
          const Icon = icons[service.icon]
          const layout = layouts[index]
          const isWide = layout === 'wide'

          return (
            <article key={service.id} className={`service-feature service-feature--${layout}`}>
              {isWide ? (
                <div className="service-feature__wide-media">
                  <SmartImage
                    {...service.image}
                    sizes="100vw"
                  />
                  <span className="service-feature__wide-scrim" aria-hidden="true" />
                </div>
              ) : null}

              <div className="container service-feature__inner">
                {!isWide ? (
                  <Reveal className="service-feature__media">
                    <SmartImage
                      {...service.image}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </Reveal>
                ) : null}

                <Reveal className="service-feature__copy" delay={100}>
                  <span className="service-feature__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="service-feature__icon" aria-hidden="true">
                    <Icon size={27} weight="light" />
                  </span>
                  <h2>{service.title}</h2>
                  <p className="service-feature__summary">{service.summary}</p>
                  <p className="service-feature__description">{service.description}</p>
                  <ul className="service-feature__bullets">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-link text-link--large">
                    استفسر عن هذه الخدمة
                  </Link>
                </Reveal>
              </div>
            </article>
          )
        })}
      </section>

      <QuoteBanner
        title="لست متأكدًا من الخدمة المناسبة؟"
        body="صف لنا ما تحتاجه، وسنساعدك في تحديد الخطوة المناسبة لمشروعك."
      />
    </>
  )
}
