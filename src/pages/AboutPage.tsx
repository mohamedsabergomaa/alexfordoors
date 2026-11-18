import { Link } from 'react-router-dom'
import { QuoteBanner } from '../components/business/QuoteBanner'
import { PageHero } from '../components/layout/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SmartImage } from '../components/ui/SmartImage'
import { img } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  {
    title: 'الجودة أولًا',
    body: 'نختار الخامات بما يخدم الاستخدام طويل الأمد، ولا نتعامل مع التشطيب كخطوة ثانوية.',
  },
  {
    title: 'الدقة في التنفيذ',
    body: 'نولي اهتمامًا بالمقاسات والمحاذاة والتفاصيل الصغيرة التي تظهر في النتيجة النهائية.',
  },
  {
    title: 'الاحترام في التعامل',
    body: 'نحرص على وضوح التواصل مع العملاء والمصممين والمقاولين في كل مرحلة.',
  },
  {
    title: 'التطوير المستمر',
    body: 'نراجع حلولنا باستمرار ونبحث في تصاميم وخامات جديدة تناسب احتياجات السوق.',
  },
]

export function AboutPage() {
  usePageMeta(
    'من نحن',
    'تعرّف على فلسفة الإسكندرية للأبواب في تصنيع الأبواب وتوريدها وتركيبها والتشطيبات المرتبطة بها.',
  )

  return (
    <>
      <PageHero
        eyebrow="عن الشركة"
        title="من نحن"
        description="اسم في مجال الأبواب يؤمن أن الباب ليس قطعة منفصلة، بل جزء من هوية المكان وتجربة من يستخدمه."
        image="/images/about-craft.webp"
      />

      <section className="section about-intro">
        <div className="container about-intro__grid">
          <Reveal className="about-intro__media">
            <SmartImage
              {...img('category-entrance', 'مدخل معماري باب خشبي كبير', 1000, 1300)}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal className="about-intro__copy" delay={100}>
            <h2>صنعة تُبنى على التفصيل</h2>
            <p>
              في Alexandria for Doors ننظر إلى كل باب كعنصر معماري له وظيفة وحضور.
              لذلك نبدأ من سؤال بسيط: كيف سيستخدم الناس هذا المكان؟ ومن هناك نبني
              الاختيار المناسب للخامة والشكل والتشطيب.
            </p>
            <p>
              نعمل مع الأفراد والشركات والمقاولين والمصممين، ونحرص أن تكون الخطوات
              واضحة من أول استفسار حتى آخر لمسة في التركيب.
            </p>
            <div className="about-placeholder">
              <span>محتوى نائب</span>
              <p>تاريخ التأسيس وعدد سنوات الخبرة يُضافان عند توفّر بيانات الشركة الرسمية.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">رؤيتنا ورسالتنا</h2>
          </Reveal>
          <div className="vision-grid">
            <Reveal className="vision-card" delay={0}>
              <span className="vision-card__label">الرؤية</span>
              <h3>أن نكون مرجعًا للأبواب ذات الحضور المعماري.</h3>
              <p>
                نسعى لأن يُعرف اسم الشركة بالتناسق بين الشكل والأداء، وبالاهتمام
                بالتفاصيل التي تُلاحظ بعد سنوات من الاستخدام.
              </p>
            </Reveal>
            <Reveal className="vision-card" delay={100}>
              <span className="vision-card__label">الرسالة</span>
              <h3>نقدّم أبوابًا تُصنع بعناية وتُركّب بثقة.</h3>
              <p>
                نوفّر لعملائنا خيارات واضحة، وخامات مناسبة، وتنفيذًا يحترم التصميم
                والوقت والاستخدام اليومي للمساحة.
              </p>
            </Reveal>
          </div>
          <p className="placeholder-note">
            صياغة الرؤية والرسالة نموذج قابل للتعديل وفق هوية الشركة المعتمدة.
          </p>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <Reveal>
            <h2 className="section-title">قيمنا</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <article className="value-item">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-band">
        <div className="quality-band__media">
          <SmartImage
            {...img('service-manufacturing', 'تفاصيل تصنيع باب خشبي في ورشة عمل', 1400, 1000)}
            sizes="100vw"
          />
        </div>
        <div className="quality-band__scrim" aria-hidden="true" />
        <div className="container quality-band__inner">
          <Reveal>
            <span className="eyebrow eyebrow--light">الجودة والحرفية</span>
            <h2>الجمال الحقيقي يظهر في ما لا يُرى للوهلة الأولى.</h2>
            <p>
              في ضبط الإطار، ونعومة الحركة، وتناسق المقبض مع الخطوط، وثبات
              التشطيب أمام الاستخدام اليومي. هذه هي التفاصيل التي نوليها اهتمامنا.
            </p>
            <Link to="/services" className="text-link text-link--light">
              تعرّف على خدماتنا
            </Link>
          </Reveal>
        </div>
      </section>

      <QuoteBanner
        title="لنتعاون في مشروعك القادم"
        body="شاركنا فكرتك، وسنبدأ من الخيارات المناسبة لها من حيث التصميم والخامة والتشطيب."
      />
    </>
  )
}
