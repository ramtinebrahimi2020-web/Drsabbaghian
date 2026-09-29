import type { Field } from 'payload'

const statusOptions = [
  { label: 'Not started', value: 'not-started' },
  { label: 'Draft', value: 'draft' },
  { label: 'Medical review', value: 'medical-review' },
  { label: 'Language review', value: 'language-review' },
  { label: 'Approved', value: 'approved' },
]

export const translationWorkflowFields: Field[] = [
  {
    name: 'translationStatus',
    type: 'group',
    admin: { position: 'sidebar' },
    fields: [
      { name: 'fa', type: 'select', defaultValue: 'draft', options: statusOptions },
      { name: 'en', type: 'select', defaultValue: 'not-started', options: statusOptions },
      { name: 'ar', type: 'select', defaultValue: 'not-started', options: statusOptions },
    ],
    label: 'Translation readiness',
  },
  {
    name: 'medicalReview',
    type: 'group',
    admin: { position: 'sidebar' },
    fields: [
      {
        name: 'status',
        type: 'select',
        defaultValue: 'pending',
        options: [
          { label: 'Pending', value: 'pending' },
          { label: 'Changes requested', value: 'changes-requested' },
          { label: 'Approved', value: 'approved' },
        ],
      },
      { name: 'reviewedBy', type: 'relationship', relationTo: 'users' },
      { name: 'reviewedAt', type: 'date' },
      { name: 'note', type: 'textarea' },
    ],
    label: 'Medical review',
  },
]
