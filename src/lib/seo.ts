import type { Metadata } from 'next'
import type { Locale } from './siteContent'

export const siteURL = (() => {
  const configured = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  return new URL(configured.startsWith('http') ? configured : `https://${configured}`)
})()

export function localeAlternates(locale: Locale, path = ''): Metadata['alternates'] {
  const normalizedPath = path ? `/${path.replace(/^\/+|\/+$/g, '')}` : ''
  return {
    canonical: `/${locale}${normalizedPath}`,
    languages: {
      fa: `/fa${normalizedPath}`,
      en: `/en${normalizedPath}`,
      ar: `/ar${normalizedPath}`,
      'x-default': `/fa${normalizedPath}`,
    },
  }
}
