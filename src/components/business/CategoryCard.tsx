import { ArrowUpLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type { Category } from '../../data/types'
import { SmartImage } from '../ui/SmartImage'

interface CategoryCardProps {
  category: Category
  index: number
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="category-card"
      aria-label={`استكشف ${category.name}`}
    >
      <div className="category-card__media">
        <SmartImage
          {...category.image}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="category-card__shade" aria-hidden="true" />
        <span className="category-card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="category-card__arrow" aria-hidden="true">
          <ArrowUpLeft size={19} weight="light" />
        </span>
      </div>
      <div className="category-card__body">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <span className="text-link">استكشف الفئة</span>
      </div>
    </Link>
  )
}
