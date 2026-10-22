import 'server-only'

import type {
  Footer,
  GalleryItem,
  Header,
  Location,
  Media,
  Page,
  Post,
  Service,
} from '@/payload-types'
import type { Locale } from '@/lib/siteContent'

// GitHub Pages has no database or Payload runtime. The public pages already
// merge these empty results with the built-in, statically authored content.
export async function getCMSPage(_locale: Locale, _slug: string): Promise<Page | null> {
  return null
}

export async function getCMSServices(_locale: Locale): Promise<Service[]> {
  return []
}

export async function getCMSService(_locale: Locale, _slug: string): Promise<Service | null> {
  return null
}

export async function getCMSPosts(_locale: Locale): Promise<Post[]> {
  return []
}

export async function getCMSPost(_locale: Locale, _slug: string): Promise<Post | null> {
  return null
}

export async function getCMSGallery(_locale: Locale): Promise<GalleryItem[]> {
  return []
}

export async function getCMSLocations(_locale: Locale): Promise<Location[]> {
  return []
}

export async function getCMSGlobals(_locale: Locale): Promise<{ header: Header | null; footer: Footer | null }> {
  return { header: null, footer: null }
}

export function mediaURL(resource: number | Media | null | undefined): string | undefined {
  return typeof resource === 'object' && resource?.url ? resource.url : undefined
}

export function lexicalText(value: unknown): string {
  const parts: string[] = []
  const visit = (node: unknown) => {
    if (!node || typeof node !== 'object') return
    const record = node as Record<string, unknown>
    if (typeof record.text === 'string') parts.push(record.text)
    if (Array.isArray(record.children)) record.children.forEach(visit)
    if (record.root) visit(record.root)
  }
  visit(value)
  return parts.join(' ').replace(/\s+/g, ' ').trim()
}

export type CMSLink = { href: string; label: string; newTab?: boolean }

export function globalLinks(global: Header | Footer | null, locale: Locale): CMSLink[] {
  return (global?.navItems ?? []).flatMap(({ link }) => {
    let href = link.url ?? ''
    if (link.type === 'reference' && link.reference) {
      const reference = link.reference
      const value = reference.value
      if (typeof value === 'object') {
        const slug = value.slug
        href = reference.relationTo === 'posts' ? `/${locale}/journal/${slug}` : slug === 'home' ? `/${locale}` : `/${locale}/${slug}`
      }
    }
    if (!href) return []
    if (href.startsWith('/') && !href.startsWith(`/${locale}`) && !href.startsWith('/api/')) href = `/${locale}${href}`
    return [{ href, label: link.label, newTab: Boolean(link.newTab) }]
  })
}
