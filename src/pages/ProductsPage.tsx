import { useMemo } from 'react'
import { Stack } from '@phosphor-icons/react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/business/ProductCard'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHero } from '../components/layout/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { usePageMeta } from '../hooks/usePageMeta'
import { cn } from '../lib/cn'

export function ProductsPage() {
  usePageMeta(
    'منتجاتنا',
    'تصفّح فئات ومنتجات الأبواب المتاحة لدى Alexandria for Doors، واطلب عرض سعر لأي منتج.',
  )

  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') ?? 'all'

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((product) => product.categoryId === activeCategory)
  }, [activeCategory])

  const activeCategoryName = categories.find(
    (category) => category.slug === activeCategory,
  )?.name

  function selectCategory(slug: string) {
    if (slug === 'all') {
      setSearchParams({})
      return
    }
    setSearchParams({ category: slug })
  }

  return (
    <>
      <PageHero
        eyebrow="دليل المنتجات"
        title="منتجاتنا"
        description="مجموعة من الأبواب بتصاميم وخامات متنوعة، قابلة للتعديل بما يناسب فتحة الباب وهوية المكان."
        note="أسماء المنتجات ومواصفاتها محتوى تجريبي قابل للتعديل من ملفات البيانات."
        image="/images/product-modern-oak.webp"
      />

      <section className="section catalog-section">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="تصفية المنتجات حسب الفئة">
            <button
              type="button"
              className={cn('filter-chip', activeCategory === 'all' && 'is-active')}
              aria-pressed={activeCategory === 'all'}
              onClick={() => selectCategory('all')}
            >
              كل المنتجات
              <span>{products.length}</span>
            </button>
            {categories.map((category) => {
              const count = products.filter(
                (product) => product.categoryId === category.id,
              ).length
              return (
                <button
                  key={category.id}
                  type="button"
                  className={cn(
                    'filter-chip',
                    activeCategory === category.slug && 'is-active',
                  )}
                  aria-pressed={activeCategory === category.slug}
                  onClick={() => selectCategory(category.slug)}
                >
                  {category.name}
                  <span>{count}</span>
                </button>
              )
            })}
          </div>

          <div className="catalog-meta">
            <span>
              {activeCategory === 'all'
                ? 'كل الفئات'
                : activeCategoryName ?? 'كل الفئات'}
            </span>
            <span>{visibleProducts.length} منتج</span>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="product-grid product-grid--catalog">
              {visibleProducts.map((product, index) => (
                <Reveal key={product.id} delay={(index % 3) * 70}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={<Stack size={34} weight="light" />}
              title="لا توجد منتجات في هذه الفئة"
              body="يمكنك العودة إلى كل المنتجات أو التواصل معنا لمناقشة تصميم مخصص."
            />
          )}

          <p className="placeholder-note">
            لا تظهر أسعار لأن الشركة لم توفّر أسعارًا معتمدة بعد.
          </p>
        </div>
      </section>
    </>
  )
}
