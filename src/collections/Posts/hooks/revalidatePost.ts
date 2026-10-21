import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post } from '../../../payload-types'

const locales = ['fa', 'en', 'ar'] as const
const revalidatePostPaths = (slug: string) => locales.forEach((locale) => {
  revalidatePath(`/${locale}`)
  revalidatePath(`/${locale}/journal`)
  revalidatePath(`/${locale}/journal/${slug}`)
})

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/journal/${doc.slug}`

      payload.logger.info(`Revalidating post at path: ${path}`)

      revalidatePostPaths(doc.slug)
      revalidateTag('posts-sitemap', 'max')
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/journal/${previousDoc.slug}`

      payload.logger.info(`Revalidating old post at path: ${oldPath}`)

      revalidatePostPaths(previousDoc.slug)
      revalidateTag('posts-sitemap', 'max')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    revalidatePostPaths(doc.slug)
    revalidateTag('posts-sitemap', 'max')
  }

  return doc
}
