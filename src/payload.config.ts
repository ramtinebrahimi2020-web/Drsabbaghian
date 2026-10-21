import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fa } from '@payloadcms/translations/languages/fa'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Services } from './collections/Services'
import { GalleryItems } from './collections/GalleryItems'
import { Locations } from './collections/Locations'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeNavLinks: ['@/components/AdminNavigation'],
      graphics: {
        Icon: '@/components/AdminBrand#AdminIcon',
        Logo: '@/components/AdminBrand#AdminLogo',
      },
      views: {
        dashboard: {
          Component: '@/components/BeforeDashboard',
        },
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  i18n: {
    fallbackLanguage: 'fa',
    supportedLanguages: { fa },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  folders: {
    browseByFolder: false,
  },
  db:
    process.env.NODE_ENV === 'production'
      ? postgresAdapter({
          pool: {
            connectionString: process.env.DATABASE_URL || '',
          },
        })
      : sqliteAdapter({
          client: {
            url: process.env.SQLITE_URL || 'file:./dr-sabbaghian.db',
          },
        }),
  collections: [Pages, Services, Locations, Posts, Categories, GalleryItems, Media, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins,
  localization: {
    locales: [
      { code: 'fa', label: 'فارسی', rtl: true },
      { code: 'en', label: 'English' },
      { code: 'ar', label: 'العربية', rtl: true },
    ],
    defaultLocale: 'fa',
    fallback: false,
  },
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        const secret = process.env.CRON_SECRET
        if (!secret) return false

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${secret}`
      },
    },
    tasks: [],
  },
})
