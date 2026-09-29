import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { translationWorkflowFields } from '../fields/translationWorkflow'

export const Locations: CollectionConfig = {
  slug: 'locations',
  labels: { singular: 'Location', plural: 'Visit locations' },
  access: { create: authenticated, delete: authenticated, read: authenticatedOrPublished, update: authenticated },
  admin: { defaultColumns: ['name', 'type', '_status', 'updatedAt'], useAsTitle: 'name' },
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
  versions: { drafts: { autosave: { interval: 300 }, schedulePublish: true }, maxPerDoc: 30 },
}
