import type { Access, CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { translationWorkflowFields } from '../fields/translationWorkflow'

const publishedWithConsent: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' }, publishingConsent: { equals: true } }
}

export const GalleryItems: CollectionConfig = {
  slug: 'gallery-items',
  labels: { singular: 'Gallery item', plural: 'Gallery' },
  access: { create: authenticated, delete: authenticated, read: publishedWithConsent, update: authenticated },
  admin: { defaultColumns: ['title', 'category', 'publishingConsent', '_status'], useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    { name: 'caption', type: 'textarea', localized: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Clinic and care spaces', value: 'clinic' },
        { label: 'Scientific and professional events', value: 'scientific' },
        { label: 'Professional portrait', value: 'portrait' },
      ],
      required: true,
    },
    { name: 'eventDate', type: 'date' },
    { name: 'publishingConsent', type: 'checkbox', defaultValue: false, label: 'Publication permission has been recorded', required: true },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
    ...translationWorkflowFields,
  ],
  versions: { drafts: { autosave: { interval: 300 }, schedulePublish: true }, maxPerDoc: 30 },
}
