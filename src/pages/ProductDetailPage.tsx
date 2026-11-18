import { useEffect, useState } from 'react'
import { ArrowUpLeft, CaretLeft } from '@phosphor-icons/react'
import { Link, useParams } from 'react-router-dom'
import { ProductCard } from '../components/business/ProductCard'
import { QuoteBanner } from '../components/business/QuoteBanner'
import { WhatsAppLink } from '../components/business/WhatsAppLink'
import { PageHero } from '../components/layout/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SmartImage } from '../components/ui/SmartImage'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { buttonClass } from '../lib/buttonClass'
import { whatsappMessages } from '../lib/whatsapp'
import { usePageMeta } from '../hooks/usePageMeta'
import { NotFoundPage } from './NotFoundPage'

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((item) => item.slug === slug)
  const [selectedImage, setSelectedImage] = useState(0)

  usePageMeta(
    product?.name ?? 'المنتج غير موجود',
    product?.shortDescription ??
      'لم يتم العثور على المنتج المطلوب في دليل Alexandria for Doors.',
  )

  useEffect(() => {
    setSelectedImage(0)
  }, [slug])

  if (!product) return <NotFoundPage />

  const category = categories.find((item) => item.id === product.categoryId)
  const related = products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
    .slice(0, 3)
  const message = whatsappMessages.productQuote(product.name)

  return (
    <>
      <PageHero
        eyebrow={category?.name}
        title={product.name}
        description={product.shortDescription}
        image={product.images[0].src}
      />

      <section className="section product-detail-section">
        <div className="container">
          <Link to="/products" className="back-link">
            <CaretLeft size={16} weight="light" aria-hidden="true" />
            العودة إلى المنتجات
          </Link>

          <div className="product-detail">
            <Reveal className="product-gallery">
              <div className="product-gallery__main">
                <SmartImage
                  {...product.images[selectedImage]}
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
                <span className="product-gallery__label">صورة توضيحية للمنتج</span>
              </div>
              {product.images.length > 1 ? (
                <div className="product-gallery__thumbs" role="group" aria-label="صور المنتج">
                  {product.images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      className={`product-gallery__thumb ${
                        selectedImage === index ? 'is-active' : ''
                      }`}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`عرض الصورة ${index + 1}`}
                      aria-pressed={selectedImage === index}
                    >
                      <SmartImage {...image} sizes="120px" />
                    </button>
                  ))}
                </div>
              ) : null}
            </Reveal>

            <Reveal className="product-info" delay={100}>
              <span className="product-info__category">{category?.name}</span>
              <h2>{product.name}</h2>
              <p className="product-info__description">{product.description}</p>

              <WhatsAppLink message={message} className={buttonClass('dark', 'md', 'product-info__cta')}>
                اطلب عرض سعر لهذا المنتج
                <span className="btn__icon" aria-hidden="true">
                  <ArrowUpLeft size={17} weight="light" />
                </span>
              </WhatsAppLink>

              <div className="product-info__group">
                <h3>الخامات والتشطيبات</h3>
                <p className="product-info__group-label">الخامات</p>
                <div className="chip-list">
                  {product.materials.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="product-info__group-label">التشطيبات</p>
                <div className="chip-list">
                  {product.finishes.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="product-info__group">
                <h3>المواصفات</h3>
                <div className="spec-grid">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="spec-grid__item">
                      <span>{spec.label}</span>
                      <strong>{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-info__group">
                <h3>إمكانيات التخصيص</h3>
                <ul className="check-list">
                  {product.customization.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <QuoteBanner
        title="تحتاج إلى مقاس أو تصميم مختلف؟"
        body="أرسل لنا تفاصيل فتحة الباب، وسنجهّز رسالة واتساب تتضمن اسم المنتج الذي اخترته."
        message={message}
      />

      {related.length > 0 ? (
        <section className="section related-section">
          <div className="container">
            <Reveal>
              <h2 className="related-section__title">منتجات ذات صلة</h2>
            </Reveal>
            <div className="product-grid">
              {related.map((item, index) => (
                <Reveal key={item.id} delay={index * 70}>
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
