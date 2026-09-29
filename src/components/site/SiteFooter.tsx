import Link from 'next/link'
import Image from 'next/image'
import { content, localeConfig, type Locale } from '@/lib/siteContent'

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = content[locale]
  return <footer className="site-footer"><div className="shell footer-grid"><div><Image src={localeConfig[locale].logo} alt="Dr. Alireza Sabbaghian" width={288} height={108} /><p>{copy.heroText}</p></div><div><h3>{copy.serviceTitle}</h3><Link href={`/${locale}/services`}>{copy.serviceCards[0].title}</Link><Link href={`/${locale}/services`}>{copy.serviceCards[1].title}</Link></div><div><h3>{copy.nav[6]}</h3><Link href={`/${locale}/contact`}>{copy.appointment}</Link><Link href={`/${locale}/international-patients`}>{copy.intlKicker}</Link></div></div><div className="shell copyright">© ۲۰۲۶ Dr. Alireza Sabbaghian</div></footer>
}
