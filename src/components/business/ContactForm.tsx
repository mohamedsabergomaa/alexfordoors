import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpLeft, CheckCircle, WarningCircle } from '@phosphor-icons/react'
import { useSearchParams } from 'react-router-dom'
import { categories } from '../../data/categories'
import { services } from '../../data/services'
import { buttonClass } from '../../lib/buttonClass'
import { buildWhatsAppUrl, isExternalUrl, whatsappMessages } from '../../lib/whatsapp'

type FieldName = 'name' | 'phone' | 'interest' | 'message'
type FormState = Record<FieldName, string>
type FormErrors = Partial<Record<FieldName, string>>

const initialState: FormState = {
  name: '',
  phone: '',
  interest: '',
  message: '',
}

const PHONE_PATTERN = /^\+?[\d\s\-()]{7,20}$/

const interestOptions = [
  ...services.map((service) => service.title),
  ...categories.map((category) => category.name),
  'استفسار عام',
]

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = setErrorsState()
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)
  const [searchParams] = useSearchParams()

  const intent = searchParams.get('intent')

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {}

    if (!values.name.trim()) {
      next.name = 'يرجى إدخال الاسم.'
    } else if (values.name.trim().length < 2) {
      next.name = 'الاسم قصير جدًا.'
    }

    if (!values.phone.trim()) {
      next.phone = 'يرجى إدخال رقم الهاتف.'
    } else if (!PHONE_PATTERN.test(values.phone.trim())) {
      next.phone = 'يرجى إدخال رقم هاتف صحيح.'
    }

    if (!values.interest) {
      next.interest = 'يرجى اختيار الخدمة أو المنتج.'
    }

    return next
  }

  function update(field: FieldName, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setFeedback(null)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setFeedback({
        type: 'error',
        text: 'يرجى تصحيح الحقول المحددة ثم المحاولة مرة أخرى.',
      })
      return
    }

    const message = whatsappMessages.inquiry(
      form.name.trim(),
      form.phone.trim(),
      form.interest,
      form.message.trim(),
    )
    const href = buildWhatsAppUrl(message)

    if (isExternalUrl(href)) {
      const link = document.createElement('a')
      link.href = href
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      link.remove()
      setFeedback({
        type: 'success',
        text: 'تم تجهيز رسالتك وفتح واتساب لإرسالها. يمكنك إكمال الإرسال من هناك.',
      })
    } else {
      void navigator.clipboard?.writeText(message).catch(() => undefined)
      setFeedback({
        type: 'success',
        text: 'تم التحقق من بياناتك. أضف رقم واتساب في ملف إعدادات الموقع لتفعيل الإرسال المباشر، أو انسخ الرسالة المجهزة من الحافظة.',
      })
    }

    setForm(initialState)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {intent === 'quote' ? (
        <p className="contact-form__intent">
          اختر ما يهمك وسنجهّز رسالة واتساب مكتوبة بالتفاصيل التي أدخلتها.
        </p>
      ) : null}

      <div className="field">
        <label htmlFor="contact-name">الاسم الكامل</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(event) => update('name', event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          placeholder="اكتب اسمك"
        />
        {errors.name ? (
          <span className="field__error" id="contact-name-error">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-phone">رقم الهاتف</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) => update('phone', event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
          placeholder="مثال: +20 123 456 7890"
        />
        {errors.phone ? (
          <span className="field__error" id="contact-phone-error">
            {errors.phone}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-interest">الخدمة أو المنتج المطلوب</label>
        <select
          id="contact-interest"
          name="interest"
          value={form.interest}
          onChange={(event) => update('interest', event.target.value)}
          aria-invalid={Boolean(errors.interest)}
          aria-describedby={errors.interest ? 'contact-interest-error' : undefined}
        >
          <option value="">اختر من القائمة</option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.interest ? (
          <span className="field__error" id="contact-interest-error">
            {errors.interest}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-message">تفاصيل إضافية (اختياري)</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          placeholder="اذكر المقاسات أو طبيعة المشروع أو أي تفاصيل تساعدنا"
        />
      </div>

      {feedback ? (
        <div
          className={`form-feedback form-feedback--${feedback.type}`}
          role="status"
          aria-live="polite"
        >
          {feedback.type === 'success' ? (
            <CheckCircle size={19} weight="light" aria-hidden="true" />
          ) : (
            <WarningCircle size={19} weight="light" aria-hidden="true" />
          )}
          <span>{feedback.text}</span>
        </div>
      ) : null}

      <button type="submit" className={buttonClass('dark', 'md', 'contact-form__submit')}>
        إرسال الاستفسار
        <span className="btn__icon" aria-hidden="true">
          <ArrowUpLeft size={17} weight="light" />
        </span>
      </button>
    </form>
  )
}

function setErrorsState() {
  return useState<FormErrors>({})
}
