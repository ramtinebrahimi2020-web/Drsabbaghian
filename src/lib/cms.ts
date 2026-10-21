import 'server-only'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

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

const staticPreview = process.env.STATIC_PREVIEW === 'true'

async function safely<T>(fallback: T, query: () => Promise<T>): Promise<T> {
  if (staticPreview) return fallback

  try {
    return await query()
  } catch (error) {
    console.warn('[cms] Payload data is unavailable; using the built-in site content.', error)
    return fallback
  }
}

async function payloadClient() {
  return getPayload({ config: configPromise })
}

const published = { _status: { equals: 'published' as const } }

export async function getCMSPage(locale: Locale, slug: string): Promise<Page | null> {
  return safely(null, async () => {
    const payload = await payloadClient()
    const result = await payload.find({
      collection: 'pages',
      depth: 2,
      draft: false,
      fallbackLocale: false,
      limit: 1,
      locale,
      overrideAccess: false,
      where: { and: [published, { slug: { equals: slug } }] },
    })
    return result.docs[0] ?? null
  })
}

export async function getCMSServices(locale: Locale): Promise<Service[]> {
  return safely([], async () => {
    const payload = await payloadClient()
    const result = await payload.find({ collection: 'services', depth: 2, draft: false, fallbackLocale: false, limit: 100, locale, overrideAccess: false, sort: 'sortOrder', where: published })
    return result.docs
  })
}

export async function getCMSService(locale: Locale, slug: string): Promise<Service | null> {
  const services = await getCMSServices(locale)
  return services.find((service) => service.slug === slug) ?? null
}

export async function getCMSPosts(locale: Locale): Promise<Post[]> {
  return safely([], async () => {
    const payload = await payloadClient()
    const result = await payload.find({ collection: 'posts', depth: 2, draft: false, fallbackLocale: false, limit: 100, locale, overrideAccess: false, sort: '-publishedAt', where: published })
    return result.docs
  })
}

export async function getCMSPost(locale: Locale, slug: string): Promise<Post | null> {
  const posts = await getCMSPosts(locale)
  return posts.find((post) => post.slug === slug) ?? null
}

export async function getCMSGallery(locale: Locale): Promise<GalleryItem[]> {
  return safely([], async () => {
    const payload = await payloadClient()
    const result = await payload.find({
      collection: 'gallery-items', depth: 2, draft: false, fallbackLocale: false, limit: 100, locale, overrideAccess: false, sort: 'sortOrder',
      where: { and: [published, { publishingConsent: { equals: true } }] },
    })
    return result.docs
  })
}

export async function getCMSLocations(locale: Locale): Promise<Location[]> {
  return safely([], async () => {
    const payload = await payloadClient()
    const result = await payload.find({
      collection: 'locations', depth: 1, draft: false, fallbackLocale: false, limit: 100, locale, overrideAccess: false, sort: 'sortOrder',
      where: { and: [published, { active: { equals: true } }] },
    })
    return result.docs
  })
}

export async function getCMSGlobals(locale: Locale): Promise<{ header: Header | null; footer: Footer | null }> {
  return safely<{ header: Header | null; footer: Footer | null }>({ header: null, footer: null }, async () => {
    const payload = await payloadClient()
    const [header, footer] = await Promise.all([
      payload.findGlobal({ slug: 'header', depth: 2, fallbackLocale: false, locale, overrideAccess: false }),
      payload.findGlobal({ slug: 'footer', depth: 2, fallbackLocale: false, locale, overrideAccess: false }),
    ])
    return { header, footer }
  })
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
