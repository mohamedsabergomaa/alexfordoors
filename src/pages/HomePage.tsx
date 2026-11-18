import { ArrowUpLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/business/CategoryCard'
import { ProductCard } from '../components/business/ProductCard'
import { QuoteBanner } from '../components/business/QuoteBanner'
import { ServiceRow } from '../components/business/ServiceRow'
import { WhatsAppLink } from '../components/business/WhatsAppLink'
import { SmartImage } from '../components/ui/SmartImage'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { buttonClass } from '../lib/buttonClass'
import { whatsappMessages } from '../lib/whatsapp'
import { categories } from '../data/categories'
import { homeContent } from '../data/home'
import { products } from '../data/products'
import { services } from '../data/services'
import { img } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  usePageMeta(
    'الإسكندرية للأبواب | صنعة تُرى في كل تفصيلة',
    'تصنيع وتوريد وتركيب الأبواب والتشطيبات المرتبطة بها. اكتشف منتجاتنا وخدماتنا وأرسل طلب عرض سعر.',
  )

  const featured = products.filter((product) => product.featured).slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <SmartImage
            {...img('hero-entrance', 'مدخل فاخر باب خشبي كبير وإضاءة معمارية', 2000, 1200)}
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow eyebrow--light">{homeContent.hero.eyebrow}</span>
            <h1>{homeContent.hero.title}</h1>
            <p>{homeContent.hero.description}</p>
            <div className="hero__actions">
              <Link to="/products" className={buttonClass('primary', 'md')}>
                استكشف منتجاتنا
                <span className="btn__icon" aria-hidden="true">
                  <ArrowUpLeft size={17} weight="light" />
                </span>
              </Link>
              <WhatsAppLink
                message={whatsappMessages.generalQuote}
                className={buttonClass('outline-light', 'md')}
              >
                اطلب عرض سعر
              </WhatsAppLink>
            </div>
          </div>
        </div>
        <div className="hero__rail" aria-hidden="true">
          <span>Alexandria for Doors</span>
          <span className="hero__rail-line" />
          <span>صناعة · تركيب · تشطيب</span>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container intro-grid">
          <Reveal className="intro-figure">
            <div className="intro-figure__frame">
              <SmartImage
                {...img('about-craft', 'تفاصيل حرفية في باب خشبي بتشطيب دافئ', 1200, 1500)}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
            <span className="intro-figure__caption">حرفية تُقرأ في التفاصيل</span>
          </Reveal>
          <Reveal className="intro-copy" delay={100}>
            <h2>{homeContent.intro.title}</h2>
            <p>{homeContent.intro.body}</p>
            <ul className="intro-points">
              {homeContent.intro.points.map((point) => (
                <li key={point}>
                  <span className="intro-points__dash" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/about" className="text-link text-link--large">
              تعرّف على الشركة
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="فئات منتجاتنا"
              description="اختر الفئة الأقرب لطبيعة مشروعك، وابدأ من التفاصيل التي تناسب مساحتك."
              action={
                <Link to="/products" className="text-link">
                  عرض كل المنتجات
                </Link>
              }
            />
          </Reveal>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Reveal key={category.id} delay={index * 70}>
                <CategoryCard category={category} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-home">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="ما نقدّمه"
              description="من التصنيع إلى التركيب والتشطيب، نعمل على إنجاز الباب كما ينبغي أن يكون."
            />
          </Reveal>
          <div className="service-rows">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 60}>
                <ServiceRow
                  number={index + 1}
                  title={service.title}
                  summary={service.summary}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section reasons-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="لماذا نحن؟"
              description="خيارات واضحة، وتنفيذ يولي اهتمامه بالأشياء التي تُلاحظ بعد الانتهاء."
            />
          </Reveal>
          <div className="reasons-grid">
            {homeContent.reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 50}>
                <article className="reason-item">
                  <span className="reason-item__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="منتجات مختارة"
              description="نماذج قابلة للتعديل من دليل المنتجات، لتتخيّل شكل الباب قبل تحديد التفاصيل."
              action={
                <Link to="/products" className="text-link">
                  تصفّح الكتالوج
                </Link>
              }
            />
          </Reveal>
          <div className="product-grid">
            {featured.map((product, index) => (
              <Reveal key={product.id} delay={index * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          <p className="placeholder-note">
            أسماء المنتجات وصورها نماذج قابلة للتعديل من ملفات البيانات.
          </p>
        </div>
      </section>

      <section className="section inspiration-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="إلهام معماري"
              description="صور توضيحية من Unsplash لاستلهام الأفكار، وليست مشاريع منفذة بواسطة الشركة."
              action={
                <Link to="/work" className="text-link">
                  صفحة أعمالنا
                </Link>
              }
            />
          </Reveal>
          <div className="inspiration-grid">
            {homeContent.inspiration.map((image, index) => (
              <Reveal key={image.src} delay={index * 60} className={`inspiration-item inspiration-item--${index + 1}`}>
                <figure>
                  <SmartImage {...image} sizes="(max-width: 768px) 100vw, 50vw" />
                  <figcaption>
                    <span>صورة إلهامية</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteBanner
        title={homeContent.quote.title}
        body={homeContent.quote.body}
      />
    </>
  )
}
