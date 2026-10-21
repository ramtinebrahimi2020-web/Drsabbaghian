import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { translationWorkflowFields } from '../fields/translationWorkflow'
import { revalidateLocation, revalidateLocationDelete } from '../hooks/revalidateSiteContent'

export const Locations: CollectionConfig = {
  slug: 'locations',
  labels: { singular: 'مرکز مراجعه', plural: 'مطب و مراکز مراجعه' },
  access: { create: authenticated, delete: authenticated, read: authenticatedOrPublished, update: authenticated },
  admin: {
    defaultColumns: ['name', 'type', '_status', 'updatedAt'],
    group: false,
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', localized: true, required: true },
    {
      name: 'type',
      type: 'select',
      options: [{ label: 'Office', value: 'office' }, { label: 'Hospital', value: 'hospital' }],
      required: true,
    },
    { name: 'address', type: 'textarea', localized: true, required: true },
    { name: 'visitNote', type: 'textarea', localized: true },
    {
      name: 'phones',
      type: 'array',
      fields: [{ name: 'number', type: 'text', required: true }],
    },
    { name: 'appointmentUrl', type: 'text' },
    { name: 'mapUrl', type: 'text' },
    { name: 'mapEmbedUrl', type: 'text' },
    { name: 'active', type: 'checkbox', defaultValue: true },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
    ...translationWorkflowFields,
  ],
  hooks: { afterChange: [revalidateLocation], afterDelete: [revalidateLocationDelete] },
  versions: { drafts: { autosave: { interval: 300 }, schedulePublish: true }, maxPerDoc: 30 },
}
