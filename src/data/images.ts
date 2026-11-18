import type { ImageAsset } from './types'

export const img = (
  file: string,
  alt: string,
  width: number,
  height: number,
): ImageAsset => ({
  src: `/images/${file}.webp`,
  alt,
  width,
  height,
})
