import { Link } from 'react-router-dom'
import { buttonClass } from '../lib/buttonClass'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta(
    'الصفحة غير موجودة',
    'لم يتم العثور على الصفحة المطلوبة في موقع الإسكندرية للأبواب.',
  )

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">404</span>
        <h1>الصفحة غير موجودة</h1>
        <p>ربما تغيّر الرابط أو نُقلت الصفحة. يمكنك العودة إلى الصفحة الرئيسية أو تصفح المنتجات.</p>
        <div className="not-found__actions">
          <Link to="/" className={buttonClass('dark', 'md')}>
            الصفحة الرئيسية
          </Link>
          <Link to="/products" className={buttonClass('outline-dark', 'md')}>
            منتجاتنا
          </Link>
        </div>
      </div>
    </section>
  )
}
