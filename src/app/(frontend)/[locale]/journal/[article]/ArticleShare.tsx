'use client'

import { Check, Copy, MessageCircle, Send, Share2 } from 'lucide-react'
import { useState } from 'react'
import type { Locale } from '@/lib/siteContent'
import styles from './ArticleDetailFa.module.css'

const labels = {
  fa: { group: 'اشتراک‌گذاری مقاله', title: 'اشتراک‌گذاری', share: 'اشتراک‌گذاری', copy: 'کپی لینک', copied: 'لینک کپی شد', telegram: 'اشتراک در تلگرام', whatsapp: 'اشتراک در واتساپ' },
  en: { group: 'Share this article', title: 'Share', share: 'Share article', copy: 'Copy link', copied: 'Link copied', telegram: 'Share on Telegram', whatsapp: 'Share on WhatsApp' },
  ar: { group: 'مشاركة المقالة', title: 'مشاركة', share: 'مشاركة المقالة', copy: 'نسخ الرابط', copied: 'تم نسخ الرابط', telegram: 'مشاركة عبر تيليغرام', whatsapp: 'مشاركة عبر واتساب' },
} as const

export function ArticleShare({ title, locale, compact = false }: { title: string; locale: Locale; compact?: boolean }) {
  const [copied, setCopied] = useState(false)
  const text = labels[locale]

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href })
      return
    }
    await copyLink()
  }

  const openShare = (network: 'telegram' | 'whatsapp') => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(title)
    const target = network === 'telegram'
      ? `https://t.me/share/url?url=${url}&text=${text}`
      : `https://wa.me/?text=${text}%20${url}`
    window.open(target, '_blank', 'noopener,noreferrer')
  }

  return <div className={`${styles.shareTools} ${compact ? styles.shareCompact : ''}`} aria-label={text.group}>
    {!compact && <span>{text.title}</span>}
    <button type="button" onClick={share} aria-label={text.share}><Share2 aria-hidden="true" /></button>
    <button type="button" onClick={copyLink} aria-label={copied ? text.copied : text.copy}>{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}</button>
    <button type="button" onClick={() => openShare('telegram')} aria-label={text.telegram}><Send aria-hidden="true" /></button>
    <button type="button" onClick={() => openShare('whatsapp')} aria-label={text.whatsapp}><MessageCircle aria-hidden="true" /></button>
  </div>
}
