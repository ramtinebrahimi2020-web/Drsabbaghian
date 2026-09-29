import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)
import { redirects } from './redirects'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.__NEXT_PRIVATE_ORIGIN || 'http://localhost:3000'

// GitHub Pages serves this repository below `/Drsabbaghian`. This flag is used
// only by the review-preview workflow; the normal Payload application keeps
// its server configuration unchanged.
const isStaticPreview = process.env.STATIC_PREVIEW === 'true'
const previewBasePath = isStaticPreview ? '/Drsabbaghian' : ''

const nextConfig: NextConfig = {
  ...(isStaticPreview
    ? {
        output: 'export',
        basePath: previewBasePath,
        trailingSlash: true,
      }
    : {}),
  // Temporarily required on Windows until Next.js fixes Turbopack Sass resolution.
  // See: https://github.com/vercel/next.js/issues/86431
  sassOptions: {
    loadPaths: ['./node_modules/@payloadcms/ui/dist/scss/'],
  },
  images: {
    ...(isStaticPreview
      ? {
          loader: 'custom',
          loaderFile: './src/utilities/staticPreviewImageLoader.ts',
        }
      : {}),
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
      {
        pathname: '/images/**',
      },
    ],
    qualities: [90, 100],
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', '') as 'http' | 'https',
        }
      }),
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default isStaticPreview ? nextConfig : withPayload(nextConfig, { devBundleServerPackages: false })
