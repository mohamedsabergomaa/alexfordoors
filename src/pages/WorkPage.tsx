import { Stack } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { QuoteBanner } from '../components/business/QuoteBanner'
import { PageHero } from '../components/layout/PageHero'
import { EmptyState } from '../components/ui/EmptyState'
import { Reveal } from '../components/ui/Reveal'
import { projectCategoryLabels } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'

export function WorkPage() {
  usePageMeta(
    'أعمالنا',
    'ستعرض هذه الصفحة مشاريع الإسكندرية للأبواب فور توفّر صور حقيقية من الشركة.',
  )

  return (
    <>
      <PageHero
        eyebrow="معرض المشاريع"
        title="أعمالنا"
        description="هنا ستُنشر صور المشاريع المنجزة، مصنّفة حسب نوع العمل، فور توفّر صور حقيقية من الشركة."
      />

      <section className="section work-empty-section">
        <div className="container">
          <Reveal>
            <EmptyState
              icon={<Stack size={36} weight="light" />}
              title="لم تُضف مشاريع منجزة بعد"
              body="لم نتلقَّ صورًا لمشاريع فعلية حتى الآن. ولن نعرض صورًا توضيحية على أنها أعمال للشركة."
              note="سيكون بإمكان الشركة لاحقًا إضافة عنوان المشروع ونوع الباب وصور قبل وبعد التنفيذ."
              action={
                <Link to="/contact" className="text-link text-link--large">
                  تواصل معنا لمعرفة المزيد
                </Link>
              }
            />
          </Reveal>

          <Reveal className="work-categories" delay={100}>
            <h2>ما الذي ستعرضه الصفحة؟</h2>
            <div className="work-categories__list">
              {projectCategoryLabels.map((label) => (
                <span key={label} className="work-category-chip" aria-disabled="true">
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <QuoteBanner
        title="لديك مشروع قادم؟"
        body="أرسل تفاصيل مشروعك، وسنبدأ بمناقشة التصميم والخامة والتشطيب المناسبين."
      />
    </>
  )
}
