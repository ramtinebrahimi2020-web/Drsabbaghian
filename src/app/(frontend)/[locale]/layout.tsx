import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SmoothScroll } from '@/components/site/SmoothScroll'
import { isLocale, localeConfig } from '@/lib/siteContent'
import { content } from '@/lib/siteContent'
import { siteURL } from '@/lib/seo'
import { getCMSGlobals, globalLinks } from '@/lib/cms'
import '../globals.css'

export function generateStaticParams() { return [{ locale: 'fa' }, { locale: 'en' }, { locale: 'ar' }] }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const doctorName = locale === 'fa' ? 'دکتر علیرضا صباغیان' : locale === 'ar' ? 'الدكتور علي رضا صباغيان' : 'Dr. Alireza Sabbaghian'
  return {
    metadataBase: siteURL,
    title: { default: `${doctorName} | ${content[locale].heroKicker}`, template: `%s | ${doctorName}` },
    description: content[locale].heroText,
    icons: { icon: '/favicon.svg' },
  }
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const globals = await getCMSGlobals(locale)
  return <html lang={locale} dir={localeConfig[locale].dir} data-scroll-behavior="smooth" suppressHydrationWarning><head><InitTheme /></head><body><Providers><SmoothScroll /><SiteHeader locale={locale} links={globalLinks(globals.header, locale)} />{children}<SiteFooter locale={locale} links={globalLinks(globals.footer, locale)} /></Providers></body></html>
}
