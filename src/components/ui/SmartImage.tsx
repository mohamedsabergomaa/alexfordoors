import type { ImageAsset } from '../../data/types'
import { cn } from '../../lib/cn'

interface SmartImageProps extends ImageAsset {
  className?: string
  priority?: boolean
  sizes?: string
}

export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: SmartImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      className={cn('smart-image', className)}
    />
  )
}
