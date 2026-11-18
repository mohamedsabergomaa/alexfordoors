import { img } from './images'
import type { Category } from './types'

// PLACEHOLDER CONTENT — replace with the company's real door categories.
export const categories: Category[] = [
  {
    id: 'classic-wood',
    slug: 'classic-wood',
    name: 'الأبواب الخشبية الكلاسيكية',
    description: 'خامات دافئة وتفاصيل منحوتة لمداخل ذات شخصية واضحة.',
    image: img(
      'category-classic-wood',
      'باب خشبي كلاسيكي منحوت بتفاصيل دقيقة',
      1000,
      1300,
    ),
  },
  {
    id: 'entrance',
    slug: 'entrance',
    name: 'أبواب المداخل',
    description: 'تصاميم قوية تجمع بين الحضور المعماري والاستخدام اليومي.',
    image: img(
      'category-entrance',
      'مدخل مبنى باب خشبي كبير وإضاءة دافئة',
      1000,
      1300,
    ),
  },
  {
    id: 'interior',
    slug: 'interior',
    name: 'الأبواب الداخلية',
    description: 'خطوط هادئة وتشطيبات متناسقة للمساحات المعيشية والمكتبية.',
    image: img(
      'category-interior',
      'ممر داخلي بأبواب خشبية وإضاءة ناعمة',
      1000,
      1300,
    ),
  },
  {
    id: 'glass-metal',
    slug: 'glass-metal',
    name: 'الأبواب الزجاجية والمعدنية',
    description: 'شفافية وخفة بصرية بإطارات دقيقة وتفاصيل عصرية.',
    image: img(
      'category-glass-metal',
      'باب زجاجي بإطار معدني داكن',
      1000,
      1300,
    ),
  },
]
