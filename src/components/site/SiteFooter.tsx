import Link from 'next/link'
import Image from 'next/image'
import { content, localeConfig, type Locale } from '@/lib/siteContent'
import type { CMSLink } from '@/lib/cms'

export function SiteFooter({ locale, links }: { locale: Locale; links?: CMSLink[] }) {
  const copy = content[locale]
  const footerLinks = links?.length ? links : [{ href: `/${locale}/contact`, label: copy.appointment }, { href: `/${locale}/international-patients`, label: copy.intlKicker }]
  return <footer className="site-footer"><div className="shell footer-grid"><div><Image src={localeConfig[locale].logo} alt="Dr. Alireza Sabbaghian" width={288} height={108} /><p>{copy.heroText}</p></div><div><h3>{copy.serviceTitle}</h3><Link href={`/${locale}/services`}>{copy.serviceCards[0].title}</Link><Link href={`/${locale}/services`}>{copy.serviceCards[1].title}</Link></div><div><h3>{copy.nav[6]}</h3>{footerLinks.map((item) => <Link key={`${item.href}-${item.label}`} href={item.href} target={item.newTab ? '_blank' : undefined} rel={item.newTab ? 'noreferrer' : undefined}>{item.label}</Link>)}</div></div><div className="shell copyright"><span className="footer-copyright">© ۲۰۲۶ Dr. Alireza Sabbaghian</span><span className="footer-credit" dir="ltr">Made with ❤️ by <a href="https://byramtin.ir" target="_blank" rel="noreferrer">RAMTIN</a></span></div></footer>
}
