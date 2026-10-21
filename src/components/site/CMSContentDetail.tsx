import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react'

import RichText from '@/components/RichText'
import type { Post, Service } from '@/payload-types'
import type { Locale } from '@/lib/siteContent'
import { mediaURL } from '@/lib/cms'

const labels = {
  fa: { services: 'خدمات تخصصی', journal: 'مجله سلامت', back: 'بازگشت به فهرست', appointment: 'هماهنگی مراجعه' },
  en: { services: 'Specialist services', journal: 'Health journal', back: 'Back to the list', appointment: 'Arrange an assessment' },
  ar: { services: 'الخدمات التخصصية', journal: 'المجلة الصحية', back: 'العودة إلى القائمة', appointment: 'تنسيق المراجعة' },
} as const

export function CMSServiceDetail({ locale, service }: { locale: Locale; service: Service }) {
  const t = labels[locale]
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft
  const image = mediaURL(service.heroImage)
  return <main><section className="inner-hero"><div className="shell inner-hero-grid"><div><span className="eyebrow">{t.services}</span><h1>{service.title}</h1><p>{service.summary}</p><div className="button-row"><Link className="button button-primary" href={`/${locale}/contact`}>{t.appointment}<Arrow /></Link><Link className="button button-secondary" href={`/${locale}/services`}>{t.back}</Link></div></div>{image && <div className="inner-hero-mark inner-hero-portrait"><Image src={image} alt={service.title} fill sizes="(max-width: 760px) 88vw, 32vw" priority /></div>}</div></section><section className="section shell"><RichText data={service.content} enableGutter={false} /></section></main>
}

export function CMSPostDetail({ locale, post }: { locale: Locale; post: Post }) {
  const t = labels[locale]
  const image = mediaURL(post.heroImage) || mediaURL(post.meta?.image)
  const date = post.publishedAt ? new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(post.publishedAt)) : null
  return <main><section className="inner-hero"><div className="shell inner-hero-grid"><div><span className="eyebrow">{t.journal}</span><h1>{post.title}</h1>{post.meta?.description && <p>{post.meta.description}</p>}{date && <p><CalendarDays size={18} /> {date}</p>}<Link className="button button-secondary" href={`/${locale}/journal`}>{t.back}</Link></div>{image && <div className="inner-hero-mark inner-hero-portrait"><Image src={image} alt={post.title} fill sizes="(max-width: 760px) 88vw, 32vw" priority /></div>}</div></section><article className="section shell"><RichText data={post.content} enableGutter={false} /></article></main>
}
