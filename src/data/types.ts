export interface ImageAsset {
  src: string
  alt: string
  width: number
  height: number
}

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  image: ImageAsset
}

export interface Product {
  id: string
  slug: string
  name: string
  categoryId: string
  shortDescription: string
  description: string
  images: ImageAsset[]
  materials: string[]
  finishes: string[]
  specifications: { label: string; value: string }[]
  customization: string[]
  featured: boolean
}

export type ServiceIcon = 'gear' | 'truck' | 'wrench' | 'brush'

export interface Service {
  id: string
  slug: string
  title: string
  summary: string
  description: string
  bullets: string[]
  image: ImageAsset
  icon: ServiceIcon
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  images: ImageAsset[]
}

export type SocialIcon = 'instagram' | 'facebook' | 'x'

export interface SocialLink {
  label: string
  href: string
  icon: SocialIcon
}
