import { hasWhatsApp, siteConfig } from '../config/site'

const GREETING = 'مرحباً،'

export const whatsappMessages = {
  generalQuote:
    'مرحباً، أود طلب عرض سعر من Alexandria for Doors. يسعدني أن أتعرف على الخيارات المناسبة لمشروعي.',
  productQuote: (productName: string) =>
    `مرحباً، أود طلب عرض سعر لـ «${productName}». يسعدني معرفة الخامات والتشطيبات المتاحة والمدة المناسبة للتنفيذ.`,
  serviceQuote: (serviceName: string) =>
    `مرحباً، أود الاستفسار عن خدمة «${serviceName}» وطلب عرض سعر لمشروعي.`,
  inquiry: (name: string, phone: string, interest: string, message: string) =>
    [
      `${GREETING} أود إرسال استفسار إلى Alexandria for Doors.`,
      '',
      `الاسم: ${name}`,
      `رقم الهاتف: ${phone}`,
      `الاهتمام: ${interest}`,
      ...(message ? ['', `التفاصيل: ${message}`] : []),
    ].join('\n'),
}

/**
 * Builds a wa.me link when a real number is configured.
 * Until then, every CTA degrades gracefully to the contact page so no button
 * is ever dead.
 */
export function buildWhatsAppUrl(message: string): string {
  if (!hasWhatsApp()) return '/contact?intent=quote'

  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url)
}
