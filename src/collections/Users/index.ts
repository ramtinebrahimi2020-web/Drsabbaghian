import type { Access, CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

const adminOnly: Access = ({ req: { user } }) => user?.role === 'admin'

const adminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false
  if (user.role === 'admin') return true
  return { id: { equals: user.id } }
}

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'کاربر', plural: 'کاربران' },
  access: {
    admin: authenticated,
    create: adminOnly,
    delete: adminOnly,
    read: adminOrSelf,
    update: adminOrSelf,
  },
  admin: {
    defaultColumns: ['name', 'username', 'role', 'updatedAt'],
    group: false,
    useAsTitle: 'name',
  },
  auth: {
    loginWithUsername: {
      allowEmailLogin: false,
      requireEmail: false,
      requireUsername: true,
    },
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
  },
  fields: [
    {
      name: 'name',
      label: 'نام و نام خانوادگی',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'editor',
      label: 'نقش کاربری',
      access: {
        create: ({ req: { user } }) => !user || user.role === 'admin',
        update: ({ req: { user } }) => user?.role === 'admin',
      },
      options: [
        { label: 'مدیر ارشد', value: 'admin' },
        { label: 'مدیر محتوا', value: 'editor' },
        { label: 'بازبین پزشکی', value: 'medical-reviewer' },
        { label: 'بازبین زبان', value: 'language-reviewer' },
      ],
      required: true,
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ data, operation, req }) => {
        if (operation !== 'create' || req.user) return data

        const existingUsers = await req.payload.count({
          collection: 'users',
          overrideAccess: true,
        })

        if (existingUsers.totalDocs === 0) {
          return { ...data, role: 'admin' }
        }

        return data
      },
    ],
  },
  timestamps: true,
}
