import type { SocialLink } from '../data/types'

/**
 * SINGLE SOURCE OF TRUTH FOR CONTACT DATA
 * ---------------------------------------
 * All values below are clearly marked placeholders because the company has not
 * supplied confirmed contact details. Replace the empty strings only.
 * Every WhatsApp CTA reads `whatsappNumber` from this file.
 */
export const siteConfig = {
  brand: {
    nameArabic: 'الإسكندرية للأبواب',
    nameEnglish: 'Alexandria for Doors',
    tagline: 'صنعة تُرى في كل تفصيلة',
  },
  contact: {
    /** digits only, with country code. Example: "201234567890" */
    whatsappNumber: '',
    /** displayed exactly as provided by the company */
    phoneNumber: '',
    phoneHref: '',
    address: '',
    email: '',
    /** full Google Maps embed URL, supplied by the company */
    mapsEmbedUrl: '',
    socials: [
      { label: 'إنستغرام', href: '', icon: 'instagram' },
      { label: 'فيسبوك', href: '', icon: 'facebook' },
      { label: 'إكس', href: '', icon: 'x' },
    ] satisfies SocialLink[],
  },
  content: {
    /** Show a discreet "editable placeholder" notice in the catalogue. */
    isPlaceholder: true,
    projectsStatus: 'empty' as const,
  },
} as const

export const hasWhatsApp = () =>
  siteConfig.contact.whatsappNumber.replace(/\D/g, '').length > 6

export const hasPhone = () => Boolean(siteConfig.contact.phoneHref.trim())
