import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, locales } from '@/lib/siteContent'
import { localeAlternates } from '@/lib/seo'
import { ArticleDetail } from './ArticleDetail'
import { AdditionalArticleDetail, additionalArticleSlugs, getAdditionalArticle } from './AdditionalArticleDetail'

const metadata = {
  fa: { title: 'چه زمانی بررسی تعویض مفصل زانو مطرح می‌شود؟', description: 'راهنمای عمومی درباره نشانه‌ها، ارزیابی تخصصی و تصمیم‌گیری پیش از تعویض مفصل زانو.' },
  en: { title: 'When May Knee Replacement Evaluation Be Considered?', description: 'General guidance on symptoms, specialist assessment, and decision-making before knee replacement.' },
  ar: { title: 'متى قد يُطرح تقييم استبدال مفصل الركبة؟', description: 'دليل عام حول الأعراض والتقييم التخصصي واتخاذ القرار قبل استبدال مفصل الركبة.' },
}

export function generateStaticParams() {
  return [
    ...locales.map(locale => ({ locale, article: 'knee-replacement-evaluation' })),
    ...additionalArticleSlugs.map(article => ({ locale: 'fa', article })),
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; article: string }> }): Promise<Metadata> {
  const { locale, article } = await params
  if (!isLocale(locale)) return {}
  if (article === 'knee-replacement-evaluation') return { ...metadata[locale], alternates: localeAlternates(locale, `journal/${article}`) }
  const additional = locale === 'fa' ? getAdditionalArticle(article) : undefined
  if (!additional) return {}
  return { title: additional.title, description: additional.dek, alternates: localeAlternates(locale, `journal/${article}`) }
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; article: string }> }) {
  const { locale, article } = await params
  if (!isLocale(locale)) notFound()
  if (article === 'knee-replacement-evaluation') return <ArticleDetail locale={locale} />
  if (locale === 'fa' && getAdditionalArticle(article)) return <AdditionalArticleDetail article={article as typeof additionalArticleSlugs[number]} />
  notFound()
}
