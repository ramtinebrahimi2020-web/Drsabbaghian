'use client'

import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, type MouseEvent } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/providers/Theme'
import { content, localeConfig, type Locale } from '@/lib/siteContent'

const paths = ['', 'about', 'services', 'international-patients', 'journal', 'gallery', 'contact']

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const copy = content[locale]
  const config = localeConfig[locale]
  const localizedHref = (targetLocale: Locale) => pathname.replace(/^\/(fa|en|ar)(?=\/|$)/, `/${targetLocale}`) || `/${targetLocale}`
  const preservePagePosition = (event: MouseEvent<HTMLAnchorElement>, targetLocale: Locale) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const suffix = `${window.location.search}${window.location.hash}`
    if (!suffix) return
    event.preventDefault()
    window.location.assign(`${localizedHref(targetLocale)}${suffix}`)
  }
  return <header className="site-header"><div className="brand-line" /><div className="shell header-row">
    <button className="mobile-menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <Link href={`/${locale}`} className="brand-link" aria-label="Dr. Alireza Sabbaghian"><Image src={config.logo} alt="Dr. Alireza Sabbaghian" width={288} height={108} priority /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{copy.nav.map((label, index) => <Link key={label} href={`/${locale}/${paths[index]}`.replace(/\/$/, '')}>{label}</Link>)}</nav>
    <div className="header-actions"><button className="icon-action desktop-theme" type="button" aria-label="Toggle color theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun /> : <Moon />}</button><div className="language-menu"><Languages /><span>{config.label}</span><div className="language-popover"><Link href={localizedHref('fa')} onClick={(event) => preservePagePosition(event, 'fa')} aria-current={locale === 'fa' ? 'page' : undefined}>فارسی</Link><Link href={localizedHref('en')} onClick={(event) => preservePagePosition(event, 'en')} aria-current={locale === 'en' ? 'page' : undefined}>English</Link><Link href={localizedHref('ar')} onClick={(event) => preservePagePosition(event, 'ar')} aria-current={locale === 'ar' ? 'page' : undefined}>العربية</Link></div></div><Link href={`/${locale}/contact`} className="button button-primary header-appointment">{copy.appointment}</Link></div>
  </div>{open && <div className="mobile-panel shell"><nav>{copy.nav.map((label, index) => <Link key={label} href={`/${locale}/${paths[index]}`.replace(/\/$/, '')} onClick={() => setOpen(false)}>{label}</Link>)}</nav><button className="theme-row" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>{theme === 'dark' ? <Sun /> : <Moon />}</button></div>}</header>
}
