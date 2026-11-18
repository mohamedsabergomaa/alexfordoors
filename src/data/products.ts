import { img } from './images'
import type { Product } from './types'

// PLACEHOLDER CATALOGUE — all names, copy and attributes are editable examples.
// No prices are listed because the company has not provided confirmed pricing.
export const products: Product[] = [
  {
    id: 'heritage-carved-wood',
    slug: 'heritage-carved-wood',
    name: 'باب خشبي تراثي منحوت',
    categoryId: 'classic-wood',
    shortDescription: 'خشب طبيعي وتفاصيل منحوتة تمنح المدخل حضورًا كلاسيكيًا دافئًا.',
    description:
      'تصميم مستوحى من الأبواب التراثية، ينفّذ بخطوط منحوتة واضحة وتشطيب يُبرز ملامح الخشب. يمكن تعديل الأبعاد والمقاس بما يناسب فتحة المدخل.',
    images: [
      img('product-heritage-wood', 'باب خشبي تراثي منحوت بلون دافئ', 1200, 1500),
      img('product-heritage-detail', 'تفاصيل مقبض نحاسي على باب خشبي', 1200, 1500),
    ],
    materials: ['خشب طبيعي', 'خشب مضغوط عالي الكثافة'],
    finishes: ['ورنيش شفاف', 'لون ملكي مطفي', 'تشطيب يدوي'],
    specifications: [
      { label: 'الاستخدام', value: 'مداخل خارجية' },
      { label: 'الطراز', value: 'كلاسيكي منحوت' },
      { label: 'المقاس', value: 'يُحدد حسب فتحة الباب' },
    ],
    customization: ['المقاس', 'نوع الخشب', 'لون التشطيب', 'تفاصيل النحت'],
    featured: true,
  },
  {
    id: 'modern-entrance',
    slug: 'modern-entrance',
    name: 'باب مدخل عصري بخطوط نظيفة',
    categoryId: 'entrance',
    shortDescription: 'خطوط مستقيمة وتشطيب هادئ لمدخل يعكس طابعًا معماريًا حديثًا.',
    description:
      'باب مدخل بتصميم بسيط يعتمد على تناسب الخطوط ووضوح التشطيب. يمكن دمجه مع إكسسوارات معدنية وإضاءة خارجية لتأكيد هوية المدخل.',
    images: [
      img('product-modern-oak', 'باب مدخل عصري بخطوط هندسية نظيفة', 1200, 1500),
      img('product-modern-detail', 'مقبض أسود على باب خشبي حديث', 1200, 1500),
    ],
    materials: ['خشب معالج', 'خشب طبيعي'],
    finishes: ['مطفي', 'نصف لامع', 'تشطيب حبيبي'],
    specifications: [
      { label: 'الاستخدام', value: 'مدخل رئيسي' },
      { label: 'الطراز', value: 'عصري' },
      { label: 'الإكسسوارات', value: 'اختيارية' },
    ],
    customization: ['المقاس', 'اتجاه الفتح', 'لون التشطيب', 'نوع المقبض'],
    featured: true,
  },
  {
    id: 'interior-oak',
    slug: 'interior-oak',
    name: 'باب داخلي بخامة البلوط',
    categoryId: 'interior',
    shortDescription: 'ملمس طبيعي ولون متوازن يضيف هدوءًا إلى المساحات الداخلية.',
    description:
      'خيار داخلي يجمع بين بساطة الشكل ودفء الخامة. مناسب للغرف والمساحات المكتبية التي تحتاج إلى خصوصية دون تعقيد بصري.',
    images: [
      img('product-interior-oak', 'باب داخلي خشبي بممر مضاء', 1200, 1500),
      img('product-interior-detail', 'تفاصيل باب داخلي خشبي', 1200, 1500),
    ],
    materials: ['بلوط', 'خشب هندسي'],
    finishes: ['ورنيش شفاف', 'لون طبيعي', 'لون مخصص'],
    specifications: [
      { label: 'الاستخدام', value: 'غرف ومساحات داخلية' },
      { label: 'الطراز', value: 'بسيط عصري' },
      { label: 'الزجاج', value: 'اختياري' },
    ],
    customization: ['المقاس', 'نوع الخشب', 'إضافة زجاج', 'لون التشطيب'],
    featured: true,
  },
  {
    id: 'glass-metal-door',
    slug: 'glass-metal-door',
    name: 'باب زجاجي بإطار معدني',
    categoryId: 'glass-metal',
    shortDescription: 'شفافية مدروسة وإطار دقيق لمساحات تحتاج إلى ضوء واتساع بصري.',
    description:
      'تصميم يجمع بين الزجاج والإطار المعدني، مناسب للمداخل الداخلية والمساحات التي تعتمد على تمرير الضوء مع الحفاظ على حدود واضحة.',
    images: [
      img('product-glass-partition', 'باب زجاجي بإطار معدني داكن', 1200, 1500),
      img('product-glass-detail', 'تفاصيل إطار الباب الزجاجي', 1200, 1500),
    ],
    materials: ['زجاج', 'معدن مطفي'],
    finishes: ['أسود مطفي', 'رمادي داكن', 'لون مخصص'],
    specifications: [
      { label: 'الاستخدام', value: 'مساحات داخلية' },
      { label: 'الطراز', value: 'عصري' },
      { label: 'الزجاج', value: 'شفاف أو مطفي' },
    ],
    customization: ['المقاس', 'نوع الزجاج', 'لون الإطار', 'تفاصيل المقبض'],
    featured: false,
  },
  {
    id: 'carved-double-door',
    slug: 'carved-double-door',
    name: 'باب مزدوج بتفاصيل محفورة',
    categoryId: 'classic-wood',
    shortDescription: 'فتحتان متناسقتان وتفاصيل محفورة تمنح المدخل حضورًا متوازنًا.',
    description:
      'تصميم مزدوج بتفاصيل محفورة متناسقة، مناسب للمداخل الواسعة التي تحتاج إلى حضور بصري والتزام واضح بالتناسق المعماري.',
    images: [
      img('product-carved-double', 'باب خشبي مزدوج بتفاصيل متناسقة', 1200, 1500),
      img('product-carved-detail', 'تفاصيل نقش على باب خشبي مزدوج', 1200, 1500),
    ],
    materials: ['خشب طبيعي', 'خشب مضغوط'],
    finishes: ['لون داكن مطفي', 'لون جوز', 'تشطيب مخصص'],
    specifications: [
      { label: 'الاستخدام', value: 'مدخل واسع' },
      { label: 'الطراز', value: 'كلاسيكي' },
      { label: 'الفتح', value: 'مزدوج' },
    ],
    customization: ['المقاس', 'تفاصيل الحفر', 'لون التشطيب', 'الإكسسوارات'],
    featured: false,
  },
  {
    id: 'black-panel-door',
    slug: 'black-panel-door',
    name: 'باب لوحي أسود بتشطيب مطفي',
    categoryId: 'entrance',
    shortDescription: 'حضور داكن وخطوط منتظمة لمدخل يجمع بين البساطة والثبات.',
    description:
      'باب بتقسيمات لوحية واضحة وتشطيب أسود مطفي. يمكن تنسيقه مع واجهة حجرية أو خشبية بحسب هوية المكان.',
    images: [
      img('product-black-panel', 'باب خشبي أسود بتقسيمات لوحية', 1200, 1500),
      img('product-black-detail', 'مقبض أسود على باب خشبي داكن', 1200, 1500),
    ],
    materials: ['خشب معالج', 'MDF مقاوم للرطوبة'],
    finishes: ['أسود مطفي', 'رمادي فحمي', 'لون مخصص'],
    specifications: [
      { label: 'الاستخدام', value: 'مدخل خارجي أو داخلي' },
      { label: 'الطراز', value: 'عصري مطفي' },
      { label: 'التقسيم', value: 'لوحي' },
    ],
    customization: ['المقاس', 'عدد اللوحات', 'لون التشطيب', 'نوع المقبض'],
    featured: false,
  },
]
