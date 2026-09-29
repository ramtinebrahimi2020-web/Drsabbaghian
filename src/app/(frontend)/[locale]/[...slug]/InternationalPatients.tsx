import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CalendarCheck2,
  Check,
  ClipboardList,
  FileSearch,
  FileText,
  Globe2,
  Info,
  MessageSquareText,
  ShieldCheck,
  WalletCards,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './InternationalPatients.module.css'

type InternationalPatientsProps = {
  locale: Locale
  page: { kicker: string; title: string; lead: string; sections: Array<{ title: string; text: string }> }
}

const copy = {
  fa: {
    home: 'صفحه اصلی', pageName: 'بیماران بین‌المللی', title: ['راهنمای مراجعه', 'از خارج ایران'], start: 'شروع هماهنگی', viewSteps: 'مشاهده مراحل',
    assurances: ['بررسی اولیه مدارک', 'هماهنگی پیش از سفر'], portraitAlt: 'دکتر علیرضا صباغیان', badge: ['مرحله روشن', 'برای هماهنگی'], beforeTravel: 'پیش از سفر', caption: 'مسیر مراجعه را مرحله‌به‌مرحله روشن کنید',
    onPage: 'در این صفحه', stepsNav: 'مراحل هماهنگی', documentsNav: 'مدارک اولیه', notesNav: 'نکات مهم', pathKicker: 'مسیر هماهنگی', pathTitle: 'از درخواست اولیه تا تأیید مراجعه', pathLead: 'هر مرحله برای کاهش ابهام پیش از سفر طراحی شده است. ادامه مسیر پس از بررسی اطلاعات همان مرحله انجام می‌شود.', step: 'مرحله',
    preparationKicker: 'پیش از شروع', preparationTitle: 'چه اطلاعاتی آماده باشد؟', preparationText: 'در تماس اولیه، وجود این موارد به تیم پذیرش کمک می‌کند مسیر بعدی را روشن‌تر توضیح دهد.',
    checklist: ['شرح کوتاه مشکل و درخواست اصلی', 'تصاویر پزشکی و گزارش‌های مرتبط', 'سوابق درمان و جراحی‌های پیشین', 'اطلاعات تماس در دسترس'], secure: 'مدارک پزشکی فقط از مسیر امن و تأییدشده تیم پذیرش ارسال می‌شوند.',
    clarityKicker: 'شفافیت پیش از مراجعه', clarityTitle: 'ارزیابی اولیه چه چیزی را مشخص می‌کند؟', clarityLead: 'این مرحله برای بررسی امکان ادامه هماهنگی است و جای معاینه حضوری یا تشخیص قطعی را نمی‌گیرد.',
    clarityCards: [
      ['کمک می‌کند', 'مسیر بعدی روشن شود', 'پس از مشاهده اطلاعات اولیه، امکان ادامه هماهنگی و مدارک تکمیلی موردنیاز مشخص می‌شود.'],
      ['پس از ارزیابی', 'هزینه و برنامه اعلام شود', 'برآورد هزینه، مدت اقامت و برنامه احتمالی تنها پس از بررسی شرایط بیمار قابل اعلام است.'],
      ['به‌معنای این موارد نیست', 'تشخیص قطعی یا تضمین درمان', 'بررسی اولیه مدارک، جایگزین ارزیابی پزشکی کامل نیست و نتیجه درمان را تضمین نمی‌کند.'],
    ],
    contactKicker: 'ارتباط با پذیرش', contactTitle: 'هماهنگی را پیش از برنامه‌ریزی سفر آغاز کنید', contactText: 'برای دریافت مسیر ارسال مدارک و مراحل بعدی، ابتدا از راه ارتباطی رسمی با تیم پذیرش تماس بگیرید.', contactAction: 'اطلاعات تماس و شروع هماهنگی',
  },
  en: {
    home: 'Home', pageName: 'International patients', title: ['Planning a visit', 'from abroad'], start: 'Start coordination', viewSteps: 'View the steps',
    assurances: ['Preliminary record review', 'Coordination before travel'], portraitAlt: 'Dr. Alireza Sabbaghian', badge: ['clear steps', 'for coordination'], beforeTravel: 'Before you travel', caption: 'Understand each stage of the visit pathway',
    onPage: 'On this page', stepsNav: 'Coordination steps', documentsNav: 'Initial records', notesNav: 'Important notes', pathKicker: 'Coordination pathway', pathTitle: 'From the initial request to visit confirmation', pathLead: 'Each stage is designed to reduce uncertainty before travel. The process continues after the information for that stage has been reviewed.', step: 'Step',
    preparationKicker: 'Before you begin', preparationTitle: 'What information should be ready?', preparationText: 'Having these items available helps the coordination team explain the next step more clearly.',
    checklist: ['A brief description of the concern and request', 'Relevant medical images and reports', 'Previous treatment and surgical history', 'Current contact information'], secure: 'Medical records are sent only through a secure channel confirmed by the coordination team.',
    clarityKicker: 'Clarity before your visit', clarityTitle: 'What does the preliminary review establish?', clarityLead: 'This stage determines whether coordination can continue. It does not replace an in-person examination or final diagnosis.',
    clarityCards: [
      ['It helps', 'Clarify the next step', 'The initial information helps identify whether coordination can continue and whether further records are needed.'],
      ['After assessment', 'Costs and timing can be discussed', 'Estimated costs, length of stay, and a possible plan can be discussed only after the patient’s circumstances are reviewed.'],
      ['It does not mean', 'A final diagnosis or treatment guarantee', 'A preliminary record review does not replace a complete medical assessment and cannot guarantee an outcome.'],
    ],
    contactKicker: 'Contact the coordination team', contactTitle: 'Begin coordination before planning your travel', contactText: 'Contact the team through the official channel to receive instructions for sending records and arranging the next step.', contactAction: 'Contact details and coordination',
  },
  ar: {
    home: 'الصفحة الرئيسية', pageName: 'المرضى الدوليون', title: ['تنسيق المراجعة', 'من خارج إيران'], start: 'بدء التنسيق', viewSteps: 'عرض المراحل',
    assurances: ['مراجعة أولية للملفات', 'تنسيق قبل السفر'], portraitAlt: 'الدكتور علي رضا صباغيان', badge: ['مراحل واضحة', 'للتنسيق'], beforeTravel: 'قبل السفر', caption: 'تعرّف إلى مسار المراجعة خطوة بخطوة',
    onPage: 'في هذه الصفحة', stepsNav: 'مراحل التنسيق', documentsNav: 'الملفات الأولية', notesNav: 'ملاحظات مهمة', pathKicker: 'مسار التنسيق', pathTitle: 'من الطلب الأولي إلى تأكيد المراجعة', pathLead: 'تهدف كل مرحلة إلى تقليل الغموض قبل السفر، ويستمر المسار بعد مراجعة معلومات المرحلة الحالية.', step: 'المرحلة',
    preparationKicker: 'قبل البدء', preparationTitle: 'ما المعلومات التي ينبغي تجهيزها؟', preparationText: 'يساعد توفر هذه المعلومات فريق التنسيق على توضيح الخطوة التالية بصورة أدق.',
    checklist: ['وصف موجز للحالة والطلب الرئيسي', 'الصور والتقارير الطبية ذات الصلة', 'العلاجات والعمليات السابقة', 'معلومات تواصل متاحة'], secure: 'تُرسل الملفات الطبية فقط عبر قناة آمنة يحددها فريق التنسيق.',
    clarityKicker: 'وضوح قبل المراجعة', clarityTitle: 'ماذا تحدد المراجعة الأولية؟', clarityLead: 'تحدد هذه المرحلة إمكانية متابعة التنسيق، ولا تغني عن الفحص الحضوري أو التشخيص النهائي.',
    clarityCards: [
      ['تساعد على', 'توضيح الخطوة التالية', 'تساعد المعلومات الأولية على تحديد إمكانية متابعة التنسيق والملفات الإضافية المطلوبة.'],
      ['بعد التقييم', 'توضيح التكلفة والبرنامج', 'يمكن مناقشة التكلفة المتوقعة ومدة الإقامة والخطة المحتملة بعد مراجعة حالة المريض.'],
      ['لا تعني', 'تشخيصاً نهائياً أو ضماناً للعلاج', 'لا تغني مراجعة الملفات الأولية عن التقييم الطبي الكامل ولا تضمن نتيجة العلاج.'],
    ],
    contactKicker: 'التواصل مع فريق التنسيق', contactTitle: 'ابدأ التنسيق قبل التخطيط للسفر', contactText: 'تواصل عبر القناة الرسمية للحصول على تعليمات إرسال الملفات وتنسيق الخطوة التالية.', contactAction: 'معلومات التواصل وبدء التنسيق',
  },
} as const

const stepIcons = [MessageSquareText, FileText, FileSearch, WalletCards, CalendarCheck2]
const faNumbers = ['۱', '۲', '۳', '۴', '۵']

export function InternationalPatients({ locale, page }: InternationalPatientsProps) {
  const text = copy[locale]
  const ForwardArrow = locale === 'en' ? ArrowRight : ArrowLeft
  const number = (index: number) => locale === 'fa' ? faNumbers[index] : String(index + 1)
  return <main className={`${styles.page} ${locale === 'en' ? styles.ltr : styles.rtl}`} data-locale={locale}>
    <section className={styles.hero} aria-labelledby="international-title">
      <div className={styles.shell}>
        <nav className={styles.breadcrumb} aria-label={text.pageName}><Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><span>{text.pageName}</span></nav>
        <div className={styles.heroGrid}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>{page.kicker}</span><h1 id="international-title">{text.title[0]}<br /><span>{text.title[1]}</span></h1><p className={styles.lead}>{page.lead}</p>
            <div className={styles.actions}><Link className={styles.primaryButton} href={`/${locale}/contact`}><MessageSquareText aria-hidden="true" />{text.start}<ForwardArrow aria-hidden="true" /></Link><a className={styles.secondaryButton} href="#coordination-path">{text.viewSteps}<ArrowDown aria-hidden="true" /></a></div>
            <div className={styles.assurances}><span><ShieldCheck aria-hidden="true" />{text.assurances[0]}</span><span><Globe2 aria-hidden="true" />{text.assurances[1]}</span></div>
          </div>
          <figure className={styles.portrait}>
            <div className={styles.portraitMedia}><Image className={styles.portraitImage} src="/images/portraits/dr-sabbaghian-green-scrubs.png" alt={text.portraitAlt} fill sizes="(max-width: 760px) 92vw, 43vw" quality={90} priority /></div>
            <div className={styles.stepBadge}><strong>{locale === 'fa' ? '۵' : '5'}</strong><span>{text.badge[0]}<br />{text.badge[1]}</span></div>
            <figcaption><span>{text.beforeTravel}</span><strong>{text.caption}</strong></figcaption>
          </figure>
        </div>
        <nav className={styles.sectionNav} aria-label={text.onPage}><span>{text.onPage}</span><a href="#coordination-path">{text.stepsNav}</a><a href="#documents">{text.documentsNav}</a><a href="#important-note">{text.notesNav}</a></nav>
      </div>
    </section>

    <section className={`${styles.shell} ${styles.pathSection}`} id="coordination-path" aria-labelledby="path-title">
      <header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{text.pathKicker}</span><h2 id="path-title">{text.pathTitle}</h2></div><p>{text.pathLead}</p></header>
      <div className={styles.pathLayout}>
        <ol className={styles.timeline}>{page.sections.map((section, index) => { const Icon = stepIcons[index]; const title = section.title.replace(/^[۰-۹\d]+\.\s*/, ''); return <li key={section.title}><div className={styles.stepIcon}><Icon aria-hidden="true" /></div><div className={styles.stepCopy}><span>{text.step} {number(index)}</span><h3>{title}</h3><p>{section.text}</p></div></li> })}</ol>
        <aside className={styles.preparation} id="documents" aria-labelledby="documents-title"><span className={styles.preparationIcon}><ClipboardList aria-hidden="true" /></span><span className={styles.eyebrow}>{text.preparationKicker}</span><h2 id="documents-title">{text.preparationTitle}</h2><p>{text.preparationText}</p><ul>{text.checklist.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><div className={styles.secureNote}><ShieldCheck aria-hidden="true" /><span>{text.secure}</span></div></aside>
      </div>
    </section>

    <section className={styles.claritySection} id="important-note" aria-labelledby="clarity-title">
      <div className={styles.shell}><header className={styles.clarityHeading}><div><span className={styles.eyebrow}>{text.clarityKicker}</span><h2 id="clarity-title">{text.clarityTitle}</h2></div><p>{text.clarityLead}</p></header><div className={styles.clarityCards}>{text.clarityCards.map((card, index) => index < 2 ? <article key={card[1]}><span>{card[0]}</span><h3>{card[1]}</h3><p>{card[2]}</p></article> : <article className={styles.cautionCard} key={card[1]}><Info aria-hidden="true" /><div><span>{card[0]}</span><h3>{card[1]}</h3><p>{card[2]}</p></div></article>)}</div></div>
    </section>

    <section className={`${styles.shell} ${styles.contactSection}`} aria-labelledby="international-contact-title"><div><span className={styles.eyebrow}>{text.contactKicker}</span><h2 id="international-contact-title">{text.contactTitle}</h2><p>{text.contactText}</p></div><Link className={styles.contactButton} href={`/${locale}/contact`}><MessageSquareText aria-hidden="true" />{text.contactAction}<ForwardArrow aria-hidden="true" /></Link></section>
  </main>
}
