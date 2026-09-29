import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react'
import { notFound } from 'next/navigation'
import { content, isLocale } from '@/lib/siteContent'
import { localeAlternates } from '@/lib/seo'
import { HomeSections } from './HomeSections'

const heroMotionLabel = {
  fa: { aria: 'حرکت، جریان زندگی‌ست', ring: 'حرکت • جریان زندگی • حرکت • جریان زندگی • ', top: 'حرکت', bottom: 'جریان زندگی' },
  en: { aria: 'Movement is life in motion', ring: 'MOVEMENT • LIFE IN MOTION • MOVEMENT • LIFE IN MOTION • ', top: 'MOVEMENT', bottom: 'LIFE IN MOTION' },
  ar: { aria: 'الحركة نبض الحياة', ring: 'الحركة • نبض الحياة • الحركة • نبض الحياة • ', top: 'الحركة', bottom: 'نبض الحياة' },
} as const

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const specialty = locale === 'fa' ? 'متخصص جراحی استخوان و مفاصل' : locale === 'ar' ? 'اختصاصي جراحة العظام والمفاصل' : 'Orthopaedic Surgeon'
  return { title: { absolute: `${content[locale].heroTitle} | ${specialty}` }, description: content[locale].heroText, alternates: localeAlternates(locale) }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const copy = content[locale]
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft
  const motionLabel = heroMotionLabel[locale]
  return <main>
    <section className="home-hero"><div className="shell hero-layout"><div className="hero-copy"><span className="eyebrow">{copy.heroKicker}</span><h1>{copy.heroTitle}</h1><p>{copy.heroText}</p><div className="button-row"><Link className="button button-primary" href={`/${locale}/contact`}>{copy.appointment}<Arrow /></Link><Link className="button button-secondary" href={`/${locale}/services`}>{copy.services}</Link></div><div className="experience"><ShieldCheck /><span>{copy.experience}</span></div></div><div className="hero-portrait"><Image className="hero-doctor" src="/images/dr-alireza-sabbaghian-hero-cutout.png" alt={copy.heroTitle} fill sizes="(max-width: 760px) 92vw, 43vw" quality={90} priority /><div className="hero-motion-label" role="img" aria-label={motionLabel.aria}>{locale === 'en' ? <svg className="hero-motion-label-ring" viewBox="0 0 106 106" aria-hidden="true"><defs><path id="hero-motion-path-en" d="M53 7a46 46 0 1 1-.01 0" /></defs><text textLength="270" lengthAdjust="spacing"><textPath href="#hero-motion-path-en">{motionLabel.ring}</textPath></text></svg> : <svg className="hero-motion-label-ring hero-motion-label-ring-rtl" viewBox="0 0 106 106" aria-hidden="true"><circle cx="12" cy="53" r="1.7" /><circle cx="94" cy="53" r="1.7" /><text x="53" y="17" textAnchor="middle">{motionLabel.top}</text><text x="53" y="94" textAnchor="middle">{motionLabel.bottom}</text></svg>}<span className="hero-motion-label-core" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M23 22C15 22 10 17 10 9c8 0 13 5 13 13Z" /><path d="M25 22c8 0 13-5 13-13-8 0-13 5-13 13Z" /><path d="M23 26c-8 0-13 5-13 13 8 0 13-5 13-13Z" /><path d="M25 26c8 0 13 5 13 13-8 0-13-5-13-13Z" /></svg></span></div></div></div></section>
    <HomeSections locale={locale} />
  </main>
}
