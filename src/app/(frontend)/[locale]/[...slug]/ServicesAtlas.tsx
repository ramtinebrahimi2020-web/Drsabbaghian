import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Bone,
  CalendarDays,
  Check,
  ClipboardCheck,
  HeartPulse,
  Info,
  MoveUpLeft,
  MoveUpRight,
  ScanSearch,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './ServicesAtlas.module.css'

type ServiceSection = { title: string; text: string; items?: string[] }
type ServicesAtlasProps = { locale: Locale; page: { kicker: string; title: string; lead: string; sections: ServiceSection[] } }

const copy = {
  fa: {
    home: 'صفحه اصلی', services: 'خدمات تخصصی', title: ['خدمات جراحی', 'استخوان و مفاصل'],
    philosophy: 'ارزیابی دقیق، گفت‌وگوی روشن و انتخاب مسیر متناسب با شرایط هر فرد.', appointment: 'درخواست نوبت', viewFields: 'مشاهده حوزه‌ها',
    principles: ['تشخیص دقیق', 'تصمیم‌گیری آگاهانه', 'بازگشت به فعالیت'], anatomyAlt: 'نمای آناتومیک مفصل زانو', anatomyLabel: 'ساختار مفصل زانو', anatomyText: 'شناخت دقیق، آغاز تصمیم‌گیری آگاهانه',
    markerOne: 'تعویض مفصل', markerTwo: 'آرتروسکوپی', onPage: 'در این صفحه', fieldsNav: 'حوزه‌های تخصصی', pathwayNav: 'مسیر تصمیم‌گیری', contactNav: 'هماهنگی مراجعه',
    fieldsKicker: 'حوزه‌های اصلی فعالیت', fieldsTitle: 'دو مسیر تخصصی، متناسب با نیاز هر بیمار', fieldsLead: 'اطلاعات این بخش برای آشنایی اولیه است. انتخاب روش درمان پس از ارزیابی شرایط هر فرد انجام می‌شود.',
    details: 'اطلاعات کامل این خدمت', evaluation: 'هماهنگی برای ارزیابی', pathwayKicker: 'مسیر مراقبت', pathwayTitle: 'از ارزیابی تا برنامه درمان', pathwayLead: 'هدف، رسیدن به تصمیمی روشن و متناسب با شرایط پزشکی، سطح فعالیت و نیازهای فردی است.',
    steps: [
      ['ارزیابی دقیق شرایط', 'شرح حال، معاینه، تصاویر و درمان‌های پیشین در کنار نیازهای روزمره بررسی می‌شوند.'],
      ['گفت‌وگو درباره گزینه‌ها', 'گزینه‌های ممکن، انتظارهای واقع‌بینانه و مسیر مناسب برای تصمیم‌گیری روشن مرور می‌شوند.'],
      ['برنامه‌ریزی مراقبت', 'جزئیات آمادگی، درمان و پیگیری متناسب با وضعیت هر بیمار برنامه‌ریزی می‌شود.'],
    ],
    noteTitle: 'یادآوری پزشکی', note: 'اطلاعات این صفحه عمومی است و جایگزین معاینه و ارزیابی فردی نیست. مناسب‌بودن هر روش درمانی پس از بررسی پزشک مشخص می‌شود.',
    next: 'قدم بعدی', contactTitle: 'برای بررسی شرایط و هماهنگی مراجعه', contactText: 'زمان مراجعه پس از ارتباط با تیم پذیرش و دریافت اطلاعات اولیه هماهنگ می‌شود.', contactAction: 'اطلاعات مطب و درخواست نوبت',
  },
  en: {
    home: 'Home', services: 'Specialized services', title: ['Orthopaedic', 'surgical services'],
    philosophy: 'Careful assessment, clear discussion, and a care path suited to each patient.', appointment: 'Request an appointment', viewFields: 'Explore services',
    principles: ['Careful assessment', 'Informed decisions', 'Return to activity'], anatomyAlt: 'Anatomical view of the knee joint', anatomyLabel: 'Knee joint anatomy', anatomyText: 'Clear understanding supports informed decisions',
    markerOne: 'Joint replacement', markerTwo: 'Arthroscopy', onPage: 'On this page', fieldsNav: 'Specialist fields', pathwayNav: 'Decision pathway', contactNav: 'Arrange a visit',
    fieldsKicker: 'Main fields of practice', fieldsTitle: 'Two specialist paths, shaped around each patient', fieldsLead: 'This information offers an introduction. Treatment options are considered only after an individual assessment.',
    details: 'Full service information', evaluation: 'Arrange an assessment', pathwayKicker: 'Care pathway', pathwayTitle: 'From assessment to a care plan', pathwayLead: 'The aim is a clear decision that reflects medical needs, activity level, and individual circumstances.',
    steps: [
      ['Careful assessment', 'History, examination, imaging, previous treatment, and everyday needs are reviewed together.'],
      ['A clear discussion of options', 'Available options, realistic expectations, and an appropriate path are discussed clearly.'],
      ['Individual care planning', 'Preparation, treatment, and follow-up are planned around each patient’s circumstances.'],
    ],
    noteTitle: 'Medical note', note: 'This page provides general information and does not replace an examination or individual assessment. A physician determines whether any treatment is appropriate.',
    next: 'Next step', contactTitle: 'Arrange an assessment and visit', contactText: 'The coordination team arranges a visit after receiving the initial information.', contactAction: 'Clinic details and appointments',
  },
  ar: {
    home: 'الصفحة الرئيسية', services: 'الخدمات التخصصية', title: ['خدمات جراحة', 'العظام والمفاصل'],
    philosophy: 'تقييم دقيق ونقاش واضح واختيار مسار يتناسب مع حالة كل مريض.', appointment: 'طلب موعد', viewFields: 'عرض المجالات',
    principles: ['تقييم دقيق', 'قرار علاجي واعٍ', 'العودة إلى النشاط'], anatomyAlt: 'رسم تشريحي لمفصل الركبة', anatomyLabel: 'تركيب مفصل الركبة', anatomyText: 'فهم دقيق يدعم اتخاذ قرار واعٍ',
    markerOne: 'استبدال المفصل', markerTwo: 'تنظير الركبة', onPage: 'في هذه الصفحة', fieldsNav: 'المجالات التخصصية', pathwayNav: 'مسار القرار', contactNav: 'تنسيق المراجعة',
    fieldsKicker: 'مجالات العمل الرئيسية', fieldsTitle: 'مساران تخصصيان وفق احتياجات كل مريض', fieldsLead: 'تقدم هذه المعلومات تعريفاً أولياً، وتُناقش خيارات العلاج بعد تقييم حالة كل مريض.',
    details: 'معلومات الخدمة كاملة', evaluation: 'تنسيق التقييم', pathwayKicker: 'مسار الرعاية', pathwayTitle: 'من التقييم إلى خطة الرعاية', pathwayLead: 'الهدف هو الوصول إلى قرار واضح يراعي الحالة الطبية ومستوى النشاط والاحتياجات الفردية.',
    steps: [
      ['تقييم الحالة بدقة', 'تُراجع السيرة المرضية والفحص والصور والعلاجات السابقة إلى جانب الاحتياجات اليومية.'],
      ['نقاش واضح حول الخيارات', 'تُناقش الخيارات المتاحة والتوقعات الواقعية والمسار المناسب لاتخاذ قرار واعٍ.'],
      ['تخطيط الرعاية الفردية', 'يُخطط للاستعداد والعلاج والمتابعة وفق ظروف كل مريض.'],
    ],
    noteTitle: 'ملاحظة طبية', note: 'تقدم هذه الصفحة معلومات عامة ولا تغني عن الفحص والتقييم الفردي. يحدد الطبيب مدى ملاءمة أي طريقة علاجية بعد التقييم.',
    next: 'الخطوة التالية', contactTitle: 'لتقييم الحالة وتنسيق المراجعة', contactText: 'ينسق فريق الاستقبال موعد المراجعة بعد استلام المعلومات الأولية.', contactAction: 'معلومات العيادة وطلب موعد',
  },
} as const

const stepIcons = [ScanSearch, ClipboardCheck, HeartPulse]
const serviceImages = ['/images/services/knee-replacement-atlas.png', '/images/services/knee-arthroscopy-clinical.png']

export function ServicesAtlas({ locale, page }: ServicesAtlasProps) {
  const text = copy[locale]
  const ForwardArrow = locale === 'en' ? ArrowRight : ArrowLeft
  const DiagonalArrow = locale === 'en' ? MoveUpRight : MoveUpLeft
  return <main className={`${styles.page} ${locale === 'en' ? styles.ltr : styles.rtl}`} data-locale={locale}>
    <section className={styles.hero} aria-labelledby="services-title">
      <div className={styles.shell}>
        <nav className={styles.breadcrumb} aria-label={text.services}>
          <Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><span>{text.services}</span>
        </nav>
        <div className={styles.heroGrid}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>{page.kicker}</span>
            <h1 id="services-title">{text.title[0]}<br /><span>{text.title[1]}</span></h1>
            <p className={styles.lead}>{page.lead}</p><p className={styles.philosophy}>{text.philosophy}</p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href={`/${locale}/contact`}><CalendarDays aria-hidden="true" />{text.appointment}<ForwardArrow aria-hidden="true" /></Link>
              <a className={styles.secondaryButton} href="#service-fields">{text.viewFields}<ArrowDown aria-hidden="true" /></a>
            </div>
            <div className={styles.principles} aria-label={text.philosophy}>{text.principles.map(item => <span key={item}>{item}</span>)}</div>
          </div>
          <figure className={styles.atlas}>
            <div className={styles.atlasMedia}><Image className={styles.anatomy} src="/images/services/knee-anatomy-atlas.png" alt={text.anatomyAlt} fill sizes="(max-width: 760px) 92vw, 48vw" quality={90} priority /></div>
            <figcaption className={styles.atlasCaption}><span>{text.anatomyLabel}</span><strong>{text.anatomyText}</strong></figcaption>
            <div className={`${styles.atlasMarker} ${styles.markerTop}`}><span>{locale === 'fa' ? '۰۱' : '01'}</span><strong>{text.markerOne}</strong></div>
            <div className={`${styles.atlasMarker} ${styles.markerBottom}`}><span>{locale === 'fa' ? '۰۲' : '02'}</span><strong>{text.markerTwo}</strong></div>
          </figure>
        </div>
        <nav className={styles.sectionNav} aria-label={text.onPage}>
          <span>{text.onPage}</span><a href="#service-fields">{text.fieldsNav}</a><a href="#care-pathway">{text.pathwayNav}</a><a href="#services-contact">{text.contactNav}</a>
        </nav>
      </div>
    </section>

    <section className={`${styles.shell} ${styles.fieldsSection}`} id="service-fields" aria-labelledby="fields-title">
      <header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{text.fieldsKicker}</span><h2 id="fields-title">{text.fieldsTitle}</h2></div><p>{text.fieldsLead}</p></header>
      <div className={styles.serviceCards}>
        {page.sections.map((service, index) => {
          const Icon = index === 0 ? Bone : Activity
          const serviceHref = index === 0 ? `/${locale}/services/knee-replacement` : `/${locale}/services/knee-arthroscopy`
          return <Link className={styles.serviceCard} href={serviceHref} id={`service-0${index + 1}`} key={service.title}>
            <div className={styles.cardImage}><Image src={serviceImages[index]} alt="" fill sizes="(max-width: 760px) 100vw, 42vw" quality={90} /><span className={styles.cardNumber}>{locale === 'fa' ? `۰${index + 1}` : `0${index + 1}`}</span></div>
            <div className={styles.cardBody}><span className={styles.cardIcon}><Icon aria-hidden="true" /></span><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items?.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><span className={styles.cardLink}>{index === 0 ? text.details : text.evaluation}<DiagonalArrow aria-hidden="true" /></span></div>
          </Link>
        })}
      </div>
    </section>

    <section className={styles.pathwaySection} id="care-pathway" aria-labelledby="pathway-title">
      <div className={styles.shell}>
        <header className={styles.pathwayHeading}><div><span className={styles.eyebrow}>{text.pathwayKicker}</span><h2 id="pathway-title">{text.pathwayTitle}</h2></div><p>{text.pathwayLead}</p></header>
        <ol className={styles.pathway}>{text.steps.map((step, index) => { const Icon = stepIcons[index]; return <li key={step[0]}><div className={styles.stepTop}><span>{locale === 'fa' ? `۰${index + 1}` : `0${index + 1}`}</span><Icon aria-hidden="true" /></div><h3>{step[0]}</h3><p>{step[1]}</p></li> })}</ol>
        <aside className={styles.medicalNote}><Info aria-hidden="true" /><p><strong>{text.noteTitle}</strong>{text.note}</p></aside>
      </div>
    </section>

    <section className={`${styles.shell} ${styles.contactSection}`} id="services-contact" aria-labelledby="services-contact-title">
      <div><span className={styles.eyebrow}>{text.next}</span><h2 id="services-contact-title">{text.contactTitle}</h2><p>{text.contactText}</p></div>
      <Link className={styles.contactButton} href={`/${locale}/contact`}><CalendarDays aria-hidden="true" />{text.contactAction}<ForwardArrow aria-hidden="true" /></Link>
    </section>
  </main>
}
