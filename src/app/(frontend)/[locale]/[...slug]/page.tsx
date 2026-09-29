import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, Check, ExternalLink, ImageIcon, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isLocale, locales } from '@/lib/siteContent'
import { pageContent } from '@/lib/pageContent'
import { localeAlternates } from '@/lib/seo'
import { ServicesAtlas } from './ServicesAtlas'
import { AboutProfile } from './AboutProfile'
import { InternationalPatients } from './InternationalPatients'
import { JournalHub } from './JournalHub'
import { GalleryShowcase } from './GalleryShowcase'
import { ContactExperience } from './ContactExperience'

const pages = ['about', 'services', 'international-patients', 'journal', 'gallery', 'contact']

export function generateStaticParams() { return locales.flatMap((locale) => pages.map((page) => ({ locale, slug: [page] }))) }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string[] }> }): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const page = pageContent[locale][slug.join('/')]
  return page ? { title: page.title, description: page.lead, alternates: localeAlternates(locale, slug.join('/')) } : {}
}

export default async function InnerPage({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const key = slug.join('/')
  const page = pageContent[locale][key]
  if (!page) notFound()
  if (key === 'about') return <AboutProfile locale={locale} />
  if (key === 'services') return <ServicesAtlas locale={locale} page={page} />
  if (key === 'international-patients') return <InternationalPatients locale={locale} page={page} />
  if (key === 'journal') return <JournalHub locale={locale} page={page} />
  if (key === 'gallery') return <GalleryShowcase locale={locale} page={page} />
  if (key === 'contact') return <ContactExperience locale={locale} page={page} />
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft
  const isContact = key === 'contact'
  const isAbout = key === 'about'
  const isGallery = key === 'gallery'
  const isInternational = key === 'international-patients'
  const portrait = isAbout
    ? '/images/portraits/dr-sabbaghian-navy-suit.png'
    : isInternational
      ? '/images/portraits/dr-sabbaghian-green-scrubs.png'
      : null
  return <main><section className="inner-hero"><div className="shell inner-hero-grid"><div><span className="eyebrow">{page.kicker}</span><h1>{page.title}</h1><p>{page.lead}</p></div><div className={`inner-hero-mark ${portrait ? 'inner-hero-portrait' : ''} ${isInternational ? 'inner-hero-portrait-tall' : ''}`}>{portrait ? <Image src={portrait} alt={page.title} fill sizes="(max-width: 760px) 88vw, 32vw" quality={90} priority /> : isContact ? <MapPin /> : isGallery ? <ImageIcon /> : <span>۳۰+</span>}</div></div></section>
    <section className="section shell"><div className={`content-grid ${isAbout ? 'about-content-grid' : ''} ${isInternational ? 'steps-grid' : ''} ${isContact ? 'contact-locations' : ''}`}>{page.sections.map((section,index) => <article className={`content-card ${isContact ? 'contact-location-card' : ''}`} key={section.title}><span className="card-number">{String(index + 1).padStart(2,'0')}</span><h2>{section.title}</h2><p>{section.text}</p>{section.items && <ul>{section.items.map(item => <li key={item}><Check />{item}</li>)}</ul>}{section.phones && <div className="phone-list">{section.phones.map(phone => <a href={`tel:+98${phone.slice(1)}`} key={phone} dir="ltr"><Phone />{phone}</a>)}</div>}{section.mapEmbedUrl && <div className="map-frame"><iframe src={section.mapEmbedUrl} title={`${section.title} map`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>}{section.mapUrl && <a className="map-link" href={section.mapUrl} target="_blank" rel="noreferrer">{locale === 'fa' ? 'مشاهده در Google Maps' : locale === 'ar' ? 'عرض الموقع في خرائط Google' : 'View on Google Maps'}<ExternalLink /></a>}{key === 'journal' && <Link className="text-link" href={`/${locale}/journal/knee-replacement-evaluation`}>{locale === 'fa' ? 'مشاهده مطالب' : locale === 'ar' ? 'عرض المقالات' : 'View articles'}<Arrow /></Link>}</article>)}</div>
      {isGallery && <div className="empty-gallery"><ImageIcon /><h2>{locale === 'fa' ? 'در انتظار دریافت تصاویر تأییدشده' : locale === 'ar' ? 'بانتظار الصور المعتمدة' : 'Awaiting approved photographs'}</h2><p>{page.lead}</p></div>}
    </section>
    <section className="page-cta"><div className="shell"><div><h2>{locale === 'fa' ? 'برای هماهنگی مراجعه' : locale === 'ar' ? 'لتنسيق المراجعة' : 'Arrange a consultation'}</h2><p>{locale === 'fa' ? 'از مسیر رسمی نوبت‌دهی استفاده کنید.' : locale === 'ar' ? 'يرجى استخدام قناة حجز الموعد الرسمية.' : 'Use the official appointment channel.'}</p></div><Link className="button button-light" href={`/${locale}/contact`}>{locale === 'fa' ? 'درخواست نوبت' : locale === 'ar' ? 'طلب موعد' : 'Request an appointment'}<Arrow /></Link></div></section>
  </main>
}
