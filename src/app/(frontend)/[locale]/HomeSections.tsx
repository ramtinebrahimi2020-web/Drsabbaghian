import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  ClipboardCheck,
  FileText,
  Globe2,
  HeartPulse,
  ScanSearch,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './HomeSectionsFa.module.css'

const homeContent = {
  fa: {
    servicesKicker: 'حوزه‌های اصلی فعالیت',
    servicesTitle: 'مراقبت تخصصی برای حرکت بهتر',
    servicesLead: 'هر مسیر درمان با ارزیابی دقیق و درک نیازهای فرد آغاز می‌شود. اطلاعات خدمات برای آشنایی اولیه و آمادگی پیش از مراجعه ارائه شده‌اند.',
    allServices: 'مشاهده همه خدمات',
    services: [
      { title: 'تعویض مفصل زانو و لگن', text: 'ارزیابی شرایط، تصمیم‌گیری آگاهانه و آشنایی با مسیر مراقبت پیش و پس از درمان.', alt: 'نمای آموزشی مفصل زانو و پروتز', image: '/images/services/knee-replacement-atlas.png', href: 'knee-replacement' },
      { title: 'آرتروسکوپی و آسیب‌های ورزشی زانو', text: 'بررسی آسیب‌های داخل مفصل و انتخاب مسیر درمان بر اساس نوع آسیب و هدف حرکتی فرد.', alt: 'تجهیزات تخصصی آرتروسکوپی زانو', image: '/images/services/knee-arthroscopy-clinical.png', href: 'knee-arthroscopy' },
    ],
    serviceDetails: 'اطلاعات کامل خدمت',
    profileKicker: 'درباره پزشک',
    profileTitle: 'تجربه تخصصی در کنار تصمیم‌گیری روشن',
    profileText: 'دکتر علیرضا صباغیان متخصص جراحی استخوان و مفاصل و عضو انجمن جراحان ارتوپدی ایران و انجمن جراحان زانوی ایران هستند. تمرکز حرفه‌ای ایشان بر جراحی زانو، تعویض مفصل و ارزیابی آسیب‌های ورزشی است.',
    doctorAlt: 'دکتر علیرضا صباغیان، متخصص جراحی استخوان و مفاصل',
    registrationLabel: 'شماره نظام پزشکی', registrationNumber: '۳۱۲۴۲',
    stats: [['جراحی زانو و مفصل', 'حوزه تمرکز تخصصی'], ['گفت‌وگوی روشن با بیمار', 'توضیح گزینه‌ها و مسیر درمان']],
    profilePoints: ['ارزیابی مبتنی بر شرح حال، معاینه و تصاویر', 'گفت‌وگوی روشن درباره گزینه‌ها و انتظارهای درمان', 'برنامه مراقبت متناسب با شرایط هر فرد'],
    aboutAction: 'آشنایی بیشتر با پزشک',
    careKicker: 'مسیر مراجعه', careTitle: 'از ارزیابی تا برنامه مراقبت',
    careLead: 'هدف، رسیدن به تصمیمی سنجیده است که شرایط پزشکی، سطح فعالیت و نیازهای فردی را در کنار هم در نظر بگیرد.',
    careSteps: [
      ['گفت‌وگو و ارزیابی', 'شرح حال، معاینه، تصاویر و اثر علائم بر زندگی روزمره در کنار هم بررسی می‌شوند.'],
      ['بررسی گزینه‌ها', 'مسیرهای ممکن، محدودیت‌ها و انتظارهای واقع‌بینانه با زبان روشن مرور می‌شوند.'],
      ['برنامه مراقبت', 'آمادگی، درمان و پیگیری متناسب با شرایط هر بیمار برنامه‌ریزی می‌شود.'],
    ],
    numbers: ['۰۱', '۰۲', '۰۳'],
    medicalNoteTitle: 'یادآوری پزشکی', medicalNote: 'مناسب‌بودن هر روش درمانی پس از ارزیابی فردی مشخص می‌شود و اطلاعات سایت جایگزین معاینه نیست.',
    internationalKicker: 'بیماران بین‌المللی', internationalTitle: 'راهنمای مرحله‌به‌مرحله مراجعه از خارج ایران',
    internationalText: 'مدارک اولیه، شیوه ارتباط و مراحل هماهنگی پیش از سفر در یک مسیر روشن توضیح داده شده‌اند.', internationalAction: 'مشاهده راهنمای مراجعه',
    journalKicker: 'مجله سلامت', journalTitle: 'مطالب روشن برای تصمیم‌های آگاهانه', journalLead: 'مفاهیم پزشکی با زبان ساده و بدون وعده درمان توضیح داده می‌شوند.', journalAction: 'مشاهده مجله سلامت',
    featureMeta: 'تعویض مفصل زانو · حدود ۶ دقیقه مطالعه', featureTitle: 'چه زمانی بررسی تعویض مفصل زانو مطرح می‌شود؟',
    featureText: 'مروری عمومی بر نشانه‌ها، ارزیابی تخصصی و عواملی که پیش از انتخاب مسیر درمان بررسی می‌شوند.', featureAction: 'مطالعه مقاله', featureAlt: 'آماده‌سازی جراحی زانو در محیط درمانی',
    articles: [
      ['راهنمای مراجعه', 'برای جلسه ارزیابی چه مدارکی همراه داشته باشیم؟', 'فهرستی کوتاه برای آماده‌کردن تصاویر، سوابق و اطلاعات پزشکی.'],
      ['سلامت زانو', 'آشنایی با ارزیابی آسیب‌های ورزشی زانو', 'چرا نوع آسیب، سطح فعالیت و هدف بازگشت به ورزش اهمیت دارند؟'],
    ],
    contactKicker: 'هماهنگی مراجعه', contactTitle: 'اطلاعات تماس و مراکز مراجعه', contactText: 'نشانی مراکز، مسیرهای تماس و اطلاعات لازم برای هماهنگی را مشاهده کنید.', contactAction: 'مشاهده اطلاعات تماس',
  },
  en: {
    servicesKicker: 'Main fields of practice',
    servicesTitle: 'Specialist care for better movement',
    servicesLead: 'Every care pathway begins with a careful assessment and an understanding of the individual. These service pages offer useful context before a consultation.',
    allServices: 'View all services',
    services: [
      { title: 'Knee and hip replacement', text: 'Understand the assessment, shared decision process, and care pathway before and after treatment.', alt: 'Educational view of a knee joint and implant', image: '/images/services/knee-replacement-atlas.png', href: 'knee-replacement' },
      { title: 'Arthroscopy and sports knee injuries', text: 'Assessment of problems inside the joint and treatment planning based on the injury and movement goals.', alt: 'Specialist knee arthroscopy equipment', image: '/images/services/knee-arthroscopy-clinical.png', href: 'knee-arthroscopy' },
    ],
    serviceDetails: 'Full service information',
    profileKicker: 'About the physician',
    profileTitle: 'Specialist experience with clear decisions',
    profileText: 'Dr. Alireza Sabbaghian is an orthopaedic surgeon and a member of the Iranian Orthopaedic Association and the Iranian Knee Surgeons Association. His practice focuses on knee surgery, joint replacement, and the assessment of sports injuries.',
    doctorAlt: 'Dr. Alireza Sabbaghian, orthopaedic surgeon',
    registrationLabel: 'Medical registration number', registrationNumber: '31242',
    stats: [['Knee and joint surgery', 'Specialist field of practice'], ['Clear patient communication', 'Options and the care pathway explained']],
    profilePoints: ['Assessment based on history, examination, and imaging', 'A clear discussion of options and realistic expectations', 'A care plan shaped around each individual'],
    aboutAction: 'Learn more about the physician',
    careKicker: 'Your care pathway', careTitle: 'From assessment to a care plan',
    careLead: 'The aim is a considered decision that brings together the medical findings, activity level, and individual priorities.',
    careSteps: [
      ['Consultation and assessment', 'History, examination, imaging, and the effect of symptoms on daily life are considered together.'],
      ['Reviewing the options', 'Possible pathways, limitations, and realistic expectations are discussed in clear language.'],
      ['Planning your care', 'Preparation, treatment, and follow-up are planned around the needs of each patient.'],
    ],
    numbers: ['01', '02', '03'],
    medicalNoteTitle: 'Medical note', medicalNote: 'The suitability of any treatment is determined after an individual assessment. Website information does not replace a clinical examination.',
    internationalKicker: 'International patients', internationalTitle: 'A step-by-step guide to arranging care from abroad',
    internationalText: 'The initial records, communication process, and coordination steps before travel are explained in one clear pathway.', internationalAction: 'View the patient guide',
    journalKicker: 'Health journal', journalTitle: 'Clear information for informed decisions', journalLead: 'Medical topics are explained in plain language without making promises about treatment.', journalAction: 'Explore the health journal',
    featureMeta: 'Knee replacement · About 6 minutes', featureTitle: 'When may a knee replacement assessment be considered?',
    featureText: 'A general guide to symptoms, specialist assessment, and the factors reviewed before choosing a treatment pathway.', featureAction: 'Read the article', featureAlt: 'Knee surgery preparation in a clinical setting',
    articles: [
      ['Preparing for a visit', 'What should you bring to an assessment?', 'A short checklist for preparing imaging, medical records, and relevant health information.'],
      ['Knee health', 'Understanding the assessment of sports knee injuries', 'Why do the injury, activity level, and return-to-sport goal all matter?'],
    ],
    contactKicker: 'Arrange a visit', contactTitle: 'Contact details and clinic locations', contactText: 'Find clinic addresses, contact channels, and the information needed to arrange a visit.', contactAction: 'View contact information',
  },
  ar: {
    servicesKicker: 'مجالات العمل الرئيسية',
    servicesTitle: 'رعاية تخصصية لحركة أفضل',
    servicesLead: 'يبدأ كل مسار علاجي بتقييم دقيق وفهم احتياجات المريض. وتوفر صفحات الخدمات معلومات أولية مفيدة قبل المراجعة.',
    allServices: 'عرض جميع الخدمات',
    services: [
      { title: 'استبدال مفصل الركبة والورك', text: 'التعرف على التقييم واتخاذ القرار ومسار الرعاية قبل العلاج وبعده.', alt: 'رسم تعليمي لمفصل الركبة والمفصل الصناعي', image: '/images/services/knee-replacement-atlas.png', href: 'knee-replacement' },
      { title: 'تنظير المفاصل وإصابات الركبة الرياضية', text: 'تقييم إصابات داخل المفصل واختيار المسار العلاجي وفق نوع الإصابة والهدف الحركي.', alt: 'معدات متخصصة لتنظير مفصل الركبة', image: '/images/services/knee-arthroscopy-clinical.png', href: 'knee-arthroscopy' },
    ],
    serviceDetails: 'التفاصيل الكاملة للخدمة',
    profileKicker: 'عن الطبيب',
    profileTitle: 'خبرة تخصصية وقرار علاجي واضح',
    profileText: 'الدكتور علي رضا صباغيان اختصاصي في جراحة العظام والمفاصل وعضو في الجمعية الإيرانية لجراحة العظام والجمعية الإيرانية لجراحي الركبة. يتركز عمله المهني على جراحة الركبة واستبدال المفاصل وتقييم الإصابات الرياضية.',
    doctorAlt: 'الدكتور علي رضا صباغيان، اختصاصي جراحة العظام والمفاصل',
    registrationLabel: 'رقم التسجيل الطبي', registrationNumber: '٣١٢٤٢',
    stats: [['جراحة الركبة والمفاصل', 'مجال التركيز التخصصي'], ['تواصل واضح مع المريض', 'شرح الخيارات ومسار العلاج']],
    profilePoints: ['تقييم يستند إلى التاريخ الطبي والفحص والصور', 'مناقشة واضحة للخيارات والتوقعات الواقعية', 'خطة رعاية تناسب ظروف كل مريض'],
    aboutAction: 'المزيد عن الطبيب',
    careKicker: 'مسار المراجعة', careTitle: 'من التقييم إلى خطة الرعاية',
    careLead: 'الهدف هو الوصول إلى قرار مدروس يجمع بين الحالة الطبية ومستوى النشاط واحتياجات المريض.',
    careSteps: [
      ['الاستشارة والتقييم', 'تُراجع القصة المرضية والفحص والصور وتأثير الأعراض في الحياة اليومية معاً.'],
      ['مراجعة الخيارات', 'تُناقش المسارات الممكنة والقيود والتوقعات الواقعية بلغة واضحة.'],
      ['خطة الرعاية', 'يتم تنظيم التحضير والعلاج والمتابعة بما يناسب حالة كل مريض.'],
    ],
    numbers: ['٠١', '٠٢', '٠٣'],
    medicalNoteTitle: 'تنبيه طبي', medicalNote: 'تتحدد ملاءمة أي علاج بعد تقييم فردي، ولا تغني معلومات الموقع عن الفحص السريري.',
    internationalKicker: 'المرضى الدوليون', internationalTitle: 'دليل خطوة بخطوة لتنسيق المراجعة من خارج إيران',
    internationalText: 'تُشرح المستندات الأولية وطريقة التواصل وخطوات التنسيق قبل السفر ضمن مسار واضح.', internationalAction: 'عرض دليل المراجعة',
    journalKicker: 'المجلة الصحية', journalTitle: 'معلومات واضحة لقرارات واعية', journalLead: 'تُشرح المفاهيم الطبية بلغة مبسطة ومن دون تقديم وعود علاجية.', journalAction: 'استكشاف المجلة الصحية',
    featureMeta: 'استبدال مفصل الركبة · نحو ٦ دقائق', featureTitle: 'متى قد يُطرح تقييم استبدال مفصل الركبة؟',
    featureText: 'دليل عام حول الأعراض والتقييم التخصصي والعوامل التي تُراجع قبل اختيار المسار العلاجي.', featureAction: 'قراءة المقال', featureAlt: 'التحضير لجراحة الركبة في بيئة علاجية',
    articles: [
      ['الاستعداد للمراجعة', 'ما المستندات التي ينبغي إحضارها إلى جلسة التقييم؟', 'قائمة موجزة لإعداد الصور والسجلات والمعلومات الطبية ذات الصلة.'],
      ['صحة الركبة', 'فهم تقييم إصابات الركبة الرياضية', 'لماذا يؤثر نوع الإصابة ومستوى النشاط وهدف العودة إلى الرياضة في التقييم؟'],
    ],
    contactKicker: 'تنسيق المراجعة', contactTitle: 'معلومات التواصل ومواقع العيادات', contactText: 'اطلع على عناوين العيادات ووسائل التواصل والمعلومات اللازمة لتنسيق المراجعة.', contactAction: 'عرض معلومات التواصل',
  },
} as const

const careIcons = [Stethoscope, ScanSearch, ClipboardCheck] as const
const serviceIcons = [HeartPulse, Activity] as const
const articleIcons = [FileText, Activity] as const

export function HomeSections({ locale }: { locale: Locale }) {
  const text = homeContent[locale]
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft
  const DiagonalArrow = locale === 'en' ? ArrowUpRight : ArrowUpLeft

  return <div className={styles.page}>
    <section className={`${styles.shell} ${styles.services}`} aria-labelledby="home-services-title">
      <header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{text.servicesKicker}</span><h2 id="home-services-title">{text.servicesTitle}</h2></div><div><p>{text.servicesLead}</p><Link href={`/${locale}/services`}>{text.allServices}<Arrow aria-hidden="true" /></Link></div></header>
      <div className={styles.serviceGrid}>{text.services.map((service, index) => { const Icon = serviceIcons[index]; return <Link className={styles.serviceCard} href={`/${locale}/services/${service.href}`} key={service.href}><div className={styles.serviceImage}><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className={styles.serviceBody}><span className={styles.serviceIndex}>{text.numbers[index]}</span><span className={styles.serviceIcon}><Icon aria-hidden="true" /></span><h3>{service.title}</h3><p>{service.text}</p><span className={styles.cardLink}>{text.serviceDetails}<DiagonalArrow aria-hidden="true" /></span></div></Link> })}</div>
    </section>

    <section className={styles.profile} aria-labelledby="home-profile-title"><div className={`${styles.shell} ${styles.profileGrid}`}>
      <figure className={styles.profileVisual}><Image src="/images/portraits/dr-sabbaghian-navy-suit.png" alt={text.doctorAlt} fill sizes="(max-width: 760px) 100vw, 42vw" /><figcaption><ShieldCheck aria-hidden="true" /><span>{text.registrationLabel}<strong>{text.registrationNumber}</strong></span></figcaption></figure>
      <div className={styles.profileCopy}><span className={styles.eyebrow}>{text.profileKicker}</span><h2 id="home-profile-title">{text.profileTitle}</h2><p>{text.profileText}</p><div className={styles.profileStats}>{text.stats.map(([title, label]) => <div key={title}><strong>{title}</strong><span>{label}</span></div>)}</div><ul>{text.profilePoints.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul><Link className={styles.primaryLink} href={`/${locale}/about`}>{text.aboutAction}<Arrow aria-hidden="true" /></Link></div>
    </div></section>

    <section className={styles.carePath} aria-labelledby="home-care-title"><div className={styles.shell}><header className={styles.careHeading}><div><span className={styles.eyebrow}>{text.careKicker}</span><h2 id="home-care-title">{text.careTitle}</h2></div><p>{text.careLead}</p></header><ol>{text.careSteps.map(([title, description], index) => { const Icon = careIcons[index]; return <li key={title}><div><span>{text.numbers[index]}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p></li> })}</ol><aside><ShieldCheck aria-hidden="true" /><p><strong>{text.medicalNoteTitle}</strong>{text.medicalNote}</p></aside></div></section>

    <section className={`${styles.shell} ${styles.international}`} aria-labelledby="home-international-title"><span className={styles.globe}><Globe2 aria-hidden="true" /></span><div><span>{text.internationalKicker}</span><h2 id="home-international-title">{text.internationalTitle}</h2><p>{text.internationalText}</p></div><Link href={`/${locale}/international-patients`}>{text.internationalAction}<Arrow aria-hidden="true" /></Link></section>

    <section className={styles.journal} aria-labelledby="home-journal-title"><div className={styles.shell}><header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{text.journalKicker}</span><h2 id="home-journal-title">{text.journalTitle}</h2></div><div><p>{text.journalLead}</p><Link href={`/${locale}/journal`}>{text.journalAction}<Arrow aria-hidden="true" /></Link></div></header><div className={styles.journalGrid}><Link className={styles.featureArticle} href={`/${locale}/journal/knee-replacement-evaluation`}><div className={styles.articleImage}><Image src="/images/gallery/knee-replacement-workflow.webp" alt={text.featureAlt} fill sizes="(max-width: 760px) 100vw, 55vw" /></div><div><span>{text.featureMeta}</span><h3>{text.featureTitle}</h3><p>{text.featureText}</p><span className={styles.cardLink}>{text.featureAction}<DiagonalArrow aria-hidden="true" /></span></div></Link><div className={styles.articleList}>{text.articles.map(([category, title, description], index) => { const Icon = articleIcons[index]; return <article key={title}><Icon aria-hidden="true" /><div><span>{category}</span><h3>{title}</h3><p>{description}</p></div></article> })}</div></div></div></section>

    <section className={styles.contact} aria-labelledby="home-contact-title"><div className={styles.shell}><div><span className={styles.contactIcon}><CalendarDays aria-hidden="true" /></span><div><span>{text.contactKicker}</span><h2 id="home-contact-title">{text.contactTitle}</h2><p>{text.contactText}</p></div></div><Link href={`/${locale}/contact`}>{text.contactAction}<Arrow aria-hidden="true" /></Link></div></section>
  </div>
}
