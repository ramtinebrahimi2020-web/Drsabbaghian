import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { translationWorkflowFields } from '../fields/translationWorkflow'
import { revalidateService, revalidateServiceDelete } from '../hooks/revalidateSiteContent'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'خدمت تخصصی', plural: 'خدمات تخصصی' },
  access: { create: authenticated, delete: authenticated, read: authenticatedOrPublished, update: authenticated },
  admin: {
    defaultColumns: ['title', 'category', '_status', 'updatedAt'],
    group: false,
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    { name: 'summary', type: 'textarea', localized: true, required: true },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Knee ,Hip and trauma surgery', value: 'joint-replacement' },
        { label: 'Arthroscopy and sports knee injuries', value: 'sports-knee' },
      ],
      required: true,
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'content', type: 'richText', localized: true, required: true },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
    ...translationWorkflowFields,
    slugField(),
  ],
  hooks: { afterChange: [revalidateService], afterDelete: [revalidateServiceDelete] },
  versions: { drafts: { autosave: { interval: 300 }, schedulePublish: true }, maxPerDoc: 50 },
}
