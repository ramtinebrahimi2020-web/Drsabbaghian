import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

const locales = ['fa', 'en', 'ar'] as const

function safelyRevalidate(paths: string[]) {
  for (const path of paths) {
    try {
      revalidatePath(path)
    } catch {
      // Payload commands and migrations may run outside Next's cache context.
    }
  }
}

function pathsFor(kind: 'services' | 'journal' | 'gallery' | 'contact', slug?: string) {
  return locales.flatMap((locale) => [`/${locale}`, `/${locale}/${kind}`, ...(slug ? [`/${locale}/${kind}/${slug}`] : [])])
}

function slugOf(doc: unknown) {
  return doc && typeof doc === 'object' && 'slug' in doc && typeof doc.slug === 'string' ? doc.slug : undefined
}

const afterChange = (kind: 'services' | 'journal' | 'gallery' | 'contact'): CollectionAfterChangeHook => ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) safelyRevalidate(pathsFor(kind, slugOf(doc)))
  return doc
}

const afterDelete = (kind: 'services' | 'journal' | 'gallery' | 'contact'): CollectionAfterDeleteHook => ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) safelyRevalidate(pathsFor(kind, slugOf(doc)))
  return doc
}

export const revalidateService = afterChange('services')
export const revalidateServiceDelete = afterDelete('services')
export const revalidateGallery = afterChange('gallery')
export const revalidateGalleryDelete = afterDelete('gallery')
export const revalidateLocation = afterChange('contact')
export const revalidateLocationDelete = afterDelete('contact')

export function revalidateAllLocalizedLayouts() {
  safelyRevalidate(locales.map((locale) => `/${locale}`))
}
