import { ArrowUpLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import type { Product } from '../../data/types'
import { buttonClass } from '../../lib/buttonClass'
import { whatsappMessages } from '../../lib/whatsapp'
import { SmartImage } from '../ui/SmartImage'
import { WhatsAppLink } from './WhatsAppLink'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const category = categories.find((item) => item.id === product.categoryId)

  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-card__media">
        <SmartImage
          {...product.images[0]}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="product-card__media-arrow" aria-hidden="true">
          <ArrowUpLeft size={18} weight="light" />
        </span>
      </Link>
      <div className="product-card__body">
        <span className="product-card__category">{category?.name}</span>
        <h3>
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.shortDescription}</p>
        <div className="product-card__actions">
          <Link to={`/products/${product.slug}`} className="text-link">
            التفاصيل
          </Link>
          <WhatsAppLink
            message={whatsappMessages.productQuote(product.name)}
            className={buttonClass('quiet-dark', 'sm')}
          >
            عرض سعر
          </WhatsAppLink>
        </div>
      </div>
    </article>
  )
}
