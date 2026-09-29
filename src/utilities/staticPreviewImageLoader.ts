import type { ImageLoaderProps } from 'next/image'

// GitHub project pages are served from a repository subpath, rather than the
// domain root. Keep all public images inside that path in static-preview mode.
export default function staticPreviewImageLoader({ src }: ImageLoaderProps): string {
  return `/Drsabbaghian${src}`
}
