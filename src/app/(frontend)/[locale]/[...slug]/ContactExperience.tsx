import Link from 'next/link'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Globe2,
  Hospital,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './ContactExperience.module.css'

type ContactSection = { title: string; text: string; items?: string[]; phones?: string[]; mapEmbedUrl?: string; mapUrl?: string }
type ContactExperienceProps = { locale: Locale; page: { kicker: string; title: string; lead: string; sections: ContactSection[] } }

const copy = {
  fa: {
    home: 'صفحه اصلی', contact: 'تماس و مراجعه', heroTop: 'اطلاعات تماس', heroAccent: 'و مراکز مراجعه', call: 'تماس با مطب', addresses: 'مشاهده آدرس‌ها', confirmed: 'تأیید نهایی توسط پذیرش', official: 'مسیرهای رسمی تماس',
    clinicType: 'مطب تخصصی', clinicShort: 'ولیعصر، بالاتر از ظفر', clinicSchedule: 'یکشنبه و سه‌شنبه، ساعت ۱۴ تا ۱۹', hospitalType: 'مرکز جراحی', hospitalShort: 'بیمارستان لاله', hospitalSchedule: 'مراجعه پس از هماهنگی تیم پذیرش', locationCount: 'مرکز مراجعه\nدر تهران',
    onPage: 'در این صفحه', clinicNav: 'مطب ولیعصر', hospitalNav: 'بیمارستان لاله', stepsNav: 'مسیر هماهنگی', locationKicker: 'آدرس و راه‌های تماس', locationTitle: 'مرکز مناسب مراجعه را انتخاب کنید', locationLead: 'اطلاعات هر محل مستقل نمایش داده شده است. پیش از حرکت، زمان و محل مراجعه را با پذیرش تأیید کنید.',
    locationTypes: ['مطب تخصصی و پیگیری', 'مرکز جراحی و بستری'], visitTime: 'زمان مراجعه', coordinated: 'پس از هماهنگی تیم پذیرش', mainNumber: 'شماره اصلی', line: 'خط', map: 'نقشه', openMap: 'بازکردن مسیر در Google Maps',
    before: 'پیش از مراجعه', stepsTitle: 'سه قدم برای هماهنگی مطمئن', stepsLead: 'زمان و محل نهایی مراجعه پس از تماس و بررسی درخواست شما تأیید می‌شود.',
    steps: [['محل مناسب را مشخص کنید', 'برای ویزیت مطب یا خدمات بیمارستانی، مقصد موردنظر را با پذیرش در میان بگذارید.'], ['با پذیرش تماس بگیرید', 'شرح کوتاهی از درخواست ارائه دهید و زمان‌های ممکن برای مراجعه را بررسی کنید.'], ['تأیید نهایی را دریافت کنید', 'پس از تأیید ساعت و محل، مدارک لازم را برای روز مراجعه آماده کنید.']],
    abroad: 'مراجعه از خارج ایران', internationalTitle: 'برای هماهنگی بین‌المللی مسیر جداگانه‌ای در نظر گرفته شده است', internationalText: 'ارسال مدارک، بررسی اولیه و برنامه‌ریزی مراجعه را از راهنمای بیماران بین‌المللی دنبال کنید.', guide: 'مشاهده راهنما', digits: ['۰۱', '۰۲', '۰۳'], count: '۲',
  },
  en: {
    home: 'Home', contact: 'Contact and visits', heroTop: 'Contact details', heroAccent: 'and places of care', call: 'Call the clinic', addresses: 'View addresses', confirmed: 'Confirmed by reception', official: 'Official contact channels',
    clinicType: 'Specialist clinic', clinicShort: 'Valiasr Street, above Zafar', clinicSchedule: 'Sunday and Tuesday, 14:00–19:00', hospitalType: 'Surgical centre', hospitalShort: 'Laleh Hospital', hospitalSchedule: 'Visit after confirmation by reception', locationCount: 'locations\nin Tehran',
    onPage: 'On this page', clinicNav: 'Valiasr clinic', hospitalNav: 'Laleh Hospital', stepsNav: 'Coordination steps', locationKicker: 'Addresses and contact', locationTitle: 'Choose the appropriate place for your visit', locationLead: 'Each location is listed separately. Confirm the time and place with reception before travelling.',
    locationTypes: ['Specialist clinic and follow-up', 'Surgery and inpatient care'], visitTime: 'Visit time', coordinated: 'After confirmation by reception', mainNumber: 'Main number', line: 'Line', map: 'Map of', openMap: 'Open directions in Google Maps',
    before: 'Before your visit', stepsTitle: 'Three steps for reliable coordination', stepsLead: 'The final time and location are confirmed after your request has been reviewed.',
    steps: [['Choose the right location', 'Tell reception whether you need a clinic consultation or hospital-based care.'], ['Call the reception team', 'Briefly describe your request and review the available visit times.'], ['Receive final confirmation', 'Once the time and location are confirmed, prepare the requested records for your visit.']],
    abroad: 'Visiting from abroad', internationalTitle: 'A separate coordination pathway is available for international patients', internationalText: 'Follow the international patient guide for record submission, preliminary review, and visit planning.', guide: 'View the guide', digits: ['01', '02', '03'], count: '2',
  },
  ar: {
    home: 'الصفحة الرئيسية', contact: 'التواصل والمراجعة', heroTop: 'معلومات التواصل', heroAccent: 'ومراكز المراجعة', call: 'الاتصال بالعيادة', addresses: 'مشاهدة العناوين', confirmed: 'التأكيد النهائي من الاستقبال', official: 'قنوات التواصل الرسمية',
    clinicType: 'العيادة التخصصية', clinicShort: 'شارع وليعصر، أعلى ظفر', clinicSchedule: 'الأحد والثلاثاء، من 14:00 إلى 19:00', hospitalType: 'مركز الجراحة', hospitalShort: 'مستشفى لاله', hospitalSchedule: 'المراجعة بعد تأكيد فريق الاستقبال', locationCount: 'مركزان للمراجعة\nفي طهران',
    onPage: 'في هذه الصفحة', clinicNav: 'عيادة وليعصر', hospitalNav: 'مستشفى لاله', stepsNav: 'خطوات التنسيق', locationKicker: 'العناوين ووسائل التواصل', locationTitle: 'اختر المكان المناسب للمراجعة', locationLead: 'تُعرض معلومات كل موقع بشكل مستقل. يرجى تأكيد موعد ومكان المراجعة مع فريق الاستقبال قبل التوجه.',
    locationTypes: ['العيادة التخصصية والمتابعة', 'الجراحة والإقامة في المستشفى'], visitTime: 'وقت المراجعة', coordinated: 'بعد التنسيق مع فريق الاستقبال', mainNumber: 'الرقم الرئيسي', line: 'الخط', map: 'خريطة', openMap: 'فتح المسار في خرائط Google',
    before: 'قبل المراجعة', stepsTitle: 'ثلاث خطوات لتنسيق موثوق', stepsLead: 'يُؤكد الموعد والمكان النهائيان بعد التواصل ومراجعة طلبكم.',
    steps: [['حدد المكان المناسب', 'أبلغ فريق الاستقبال إذا كانت حاجتك لمراجعة العيادة أو لخدمة داخل المستشفى.'], ['اتصل بفريق الاستقبال', 'قدّم وصفاً موجزاً لطلبك وراجع الأوقات المتاحة للمراجعة.'], ['احصل على التأكيد النهائي', 'بعد تأكيد الموعد والمكان، جهّز الملفات المطلوبة ليوم المراجعة.']],
    abroad: 'المراجعة من خارج إيران', internationalTitle: 'يتوفر مسار مستقل لتنسيق مراجعة المرضى الدوليين', internationalText: 'اتبع دليل المرضى الدوليين لإرسال الملفات والمراجعة الأولية والتخطيط للزيارة.', guide: 'مشاهدة الدليل', digits: ['٠١', '٠٢', '٠٣'], count: '٢',
  },
} as const

const phoneHref = (phone: string) => `tel:+98${phone.slice(1)}`

export function ContactExperience({ locale, page }: ContactExperienceProps) {
  const t = copy[locale]
  const [clinic] = page.sections
  const GuideArrow = locale === 'en' ? ArrowRight : ArrowLeft

  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="contact-title"><div className={styles.shell}>
      <nav className={styles.breadcrumb} aria-label={t.contact}><Link href={`/${locale}`}>{t.home}</Link><span aria-hidden="true">/</span><span>{t.contact}</span></nav>
      <div className={styles.heroGrid}>
        <div className={styles.intro}><span className={styles.eyebrow}>{page.kicker}</span><h1 id="contact-title">{t.heroTop}<br /><span>{t.heroAccent}</span></h1><p>{page.lead}</p>
          <div className={styles.actions}><a className={styles.primaryButton} href={phoneHref(clinic.phones?.[0] ?? '02188650372')}><Phone aria-hidden="true" />{t.call}</a><a className={styles.secondaryButton} href="#locations">{t.addresses}<ArrowDown aria-hidden="true" /></a></div>
          <div className={styles.assurances}><span><CheckCircle2 aria-hidden="true" />{t.confirmed}</span><span><ShieldCheck aria-hidden="true" />{t.official}</span></div>
        </div>
        <div className={styles.routePanel} aria-label={t.locationCount.replace('\n', ' ')}><div className={styles.routeLine} aria-hidden="true"><span /><span /></div>
          <article className={styles.routeCard}><span className={styles.routeIcon}><Building2 aria-hidden="true" /></span><div><small>{t.clinicType}</small><h2>{t.clinicShort}</h2><p>{t.clinicSchedule}</p></div><span className={styles.routeNumber}>{t.digits[0]}</span></article>
          <article className={styles.routeCard}><span className={styles.routeIcon}><Hospital aria-hidden="true" /></span><div><small>{t.hospitalType}</small><h2>{t.hospitalShort}</h2><p>{t.hospitalSchedule}</p></div><span className={styles.routeNumber}>{t.digits[1]}</span></article>
          <div className={styles.routeBadge}><MapPin aria-hidden="true" /><strong>{t.count}</strong><span>{t.locationCount.split('\n').map(line => <span key={line}>{line}</span>)}</span></div>
        </div>
      </div>
      <nav className={styles.sectionNav} aria-label={t.onPage}><span>{t.onPage}</span><a href="#clinic">{t.clinicNav}</a><a href="#hospital">{t.hospitalNav}</a><a href="#coordination">{t.stepsNav}</a></nav>
    </div></section>

    <section className={`${styles.shell} ${styles.locations}`} id="locations" aria-labelledby="locations-title"><header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{t.locationKicker}</span><h2 id="locations-title">{t.locationTitle}</h2></div><p>{t.locationLead}</p></header>
      <div className={styles.locationList}>{page.sections.map((section, index) => <article className={styles.locationCard} id={index === 0 ? 'clinic' : 'hospital'} key={section.title}><div className={styles.locationInfo}>
        <div className={styles.locationTop}><span className={styles.locationIcon}>{index === 0 ? <Building2 aria-hidden="true" /> : <Hospital aria-hidden="true" />}</span><span className={styles.locationNumber}>{t.digits[index]}</span></div><span className={styles.locationType}>{t.locationTypes[index]}</span><h3>{section.title}</h3><p className={styles.address}><MapPin aria-hidden="true" />{section.text}</p>
        <div className={styles.schedule}><Clock3 aria-hidden="true" /><div><strong>{section.items?.[0] ?? t.visitTime}</strong><span>{section.items?.[1] ?? t.coordinated}</span></div></div>
        <div className={styles.phoneList}>{section.phones?.map((phone, phoneIndex) => <a href={phoneHref(phone)} key={phone}><Phone aria-hidden="true" /><span><small>{phoneIndex === 0 ? t.mainNumber : `${t.line} ${phoneIndex + 1}`}</small><b dir="ltr">{phone}</b></span></a>)}</div>
      </div><div className={styles.mapWrap}>{section.mapEmbedUrl && <iframe src={section.mapEmbedUrl} title={`${t.map} ${section.title}`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />}{section.mapUrl && <a href={section.mapUrl} target="_blank" rel="noreferrer">{t.openMap}<ExternalLink aria-hidden="true" /></a>}</div></article>)}</div>
    </section>

    <section className={styles.coordination} id="coordination" aria-labelledby="coordination-title"><div className={styles.shell}><header className={styles.coordinationHeading}><span className={styles.eyebrow}>{t.before}</span><h2 id="coordination-title">{t.stepsTitle}</h2><p>{t.stepsLead}</p></header><div className={styles.steps}>{t.steps.map((step, index) => { const Icon = [MapPin, Phone, CalendarCheck2][index]; return <article key={step[0]}><span>{t.digits[index]}</span><Icon aria-hidden="true" /><h3>{step[0]}</h3><p>{step[1]}</p></article> })}</div></div></section>
    <section className={`${styles.shell} ${styles.internationalCard}`}><span className={styles.globeIcon}><Globe2 aria-hidden="true" /></span><div><span>{t.abroad}</span><h2>{t.internationalTitle}</h2><p>{t.internationalText}</p></div><Link href={`/${locale}/international-patients`}>{t.guide}<GuideArrow aria-hidden="true" /></Link></section>
  </main>
}
