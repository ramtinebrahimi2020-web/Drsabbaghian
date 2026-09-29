import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, BookOpen, Building2,
  CalendarDays, GraduationCap, HeartHandshake, MapPin, MessageCircle, Microscope, ShieldCheck,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './AboutProfile.module.css'

const profileCopy = {
  fa: {
    breadcrumb: ['صفحه اصلی', 'درباره پزشک'], heroKicker: 'آشنایی با پزشک', name: ['دکتر علیرضا', 'صباغیان'],
    role: 'متخصص جراحی استخوان و مفاصل', lead: 'با سابقه فعالیت تخصصی از سال ۱۳۷۶، با تمرکز بر جراحی زانو، تعویض مفصل و آسیب‌های ورزشی زانو.',
    appointment: 'هماهنگی مراجعه', journeyAction: 'مسیر حرفه‌ای', registration: 'شماره نظام پزشکی',
    portraitAlt: 'پرتره دکتر علیرضا صباغیان', portraitLabel: 'تجربه، دانش و توجه به بیمار', focusLabel: 'تمرکز حرفه‌ای', focus: 'جراحی زانو و تعویض مفصل',
    navLabel: 'در این صفحه', nav: ['رویکرد درمانی', 'سوابق و فعالیت علمی', 'تجربه جراحی', 'حوزه‌های فعالیت'],
    approachKicker: 'رویکرد حرفه‌ای', approachTitle: ['هر بیمار،', 'شرایط و نیازهای خودش را دارد.'],
    approachText: 'شناخت دقیق شرایط بیمار، گفت‌وگوی روشن درباره گزینه‌ها و درنظرگرفتن نیازهای فردی، بخش اصلی مسیر تصمیم‌گیری درمانی است.',
    principles: [
      ['شناخت دقیق شرایط', 'توجه به شرح حال، معاینه و نیازهای فردی در مسیر ارزیابی.'],
      ['گفت‌وگوی روشن', 'توضیح گزینه‌های درمان و پاسخ به پرسش‌ها برای تصمیم‌گیری آگاهانه.'],
      ['مراقبت متناسب با هر فرد', 'درنظرگرفتن شرایط و انتظارهای بیمار در برنامه‌ریزی درمان.'],
    ],
    journeyKicker: 'مسیر حرفه‌ای', journeyTitle: ['از آموزش پزشکی', 'تا تجربه در جراحی مفاصل'],
    milestones: [
      ['۱۳۶۹', 'آغاز مسیر پزشکی', 'فارغ‌التحصیلی در رشته پزشکی عمومی.'],
      ['۱۳۷۶', 'فعالیت تخصصی در ارتوپدی', 'آغاز فعالیت تخصصی در جراحی استخوان و مفاصل، با تمرکز بر جراحی زانو و تعویض مفصل.'],
      ['۴ سال', 'تجربه دانشگاهی و آموزش', 'فعالیت در دانشگاه علوم پزشکی زنجان و مشارکت در آموزش پزشکی.'],
      ['اکنون', 'ادامه فعالیت بالینی', 'فعالیت در بیمارستان لاله و بیمارستان تهران کلینیک؛ عضو هیئت‌مدیره بیمارستان لاله.'],
    ],
    hospitalHistory: 'سابقه جراحی در بیمارستان‌های لاله، تهران کلینیک و ولیعصر',
    scienceLabel: 'آموزش و دانش تخصصی', scienceTitle: ['در امتداد تجربه،', 'همراه با فعالیت علمی'],
    trainingLabel: 'دوره تکمیلی', training: 'دوره فلوشیپ جراحی زانو', trainingPlace: 'اتریش', membershipsLabel: 'عضویت‌های علمی',
    memberships: ['انجمن جراحان ارتوپدی ایران', 'انجمن جراحان زانوی ایران'],
    scienceFacts: [['۲۰ کنگره', 'حضور در حدود ۲۰ کنگره خارجی'], ['۳ پایان‌نامه', 'راهنمایی پایان‌نامه‌های دکتری']], scienceNote: 'سابقه سخنرانی در کنگره‌های سالانه ارتوپدی',
    experienceKicker: 'تجربه در عمل', experienceTitle: 'تجربه جراحی در یک نگاه', experienceSource: 'بر اساس اطلاعات ثبت‌شده تا سال ۱۴۰۵',
    stats: [['بیش از', '۲٬۰۰۰', 'تعویض مفصل زانو'], ['بیش از', '۸۰۰', 'تعویض مفصل لگن'], ['بیش از', '۱٬۰۰۰', 'آرتروسکوپی زانو'], ['حدود', '۶۰', 'جراحی رویژن زانو']],
    fieldsKicker: 'حوزه‌های اصلی فعالیت', fieldsTitle: 'تمرکز بر سلامت و حرکت مفاصل', servicesLink: 'آشنایی با خدمات',
    fields: [
      ['۰۱ / تعویض مفصل', 'مفصل زانو و لگن', 'ارزیابی و جراحی تعویض مفصل، با توجه به شرایط و نیاز هر بیمار.', 'مشاهده حوزه تخصصی'],
      ['۰۲ / آرتروسکوپی', 'آسیب‌های ورزشی زانو', 'بررسی مشکلات داخل مفصل و آسیب‌های لیگامانی زانو.', 'مشاهده حوزه تخصصی'],
    ],
    visitKicker: 'ارتباط و مراجعه', visitTitle: ['برای قدم بعدی،', 'با پذیرش هماهنگ کنید.'], visitText: 'اطلاعات تماس، نشانی مطب و راهنمای مراجعه در صفحه تماس در دسترس شماست.', visitAction: 'اطلاعات مطب و هماهنگی مراجعه',
    locations: [['مطب دکتر صباغیان', 'تهران، خیابان ولیعصر، بالاتر از خیابان ظفر', 'یکشنبه و سه‌شنبه · ساعت ۱۴ تا ۱۹'], ['محل‌های فعالیت بیمارستانی', 'بیمارستان لاله و بیمارستان تهران کلینیک', 'زمان و محل مراجعه با پذیرش هماهنگ می‌شود.']],
  },
  en: {
    breadcrumb: ['Home', 'About the physician'], heroKicker: 'Meet the physician', name: ['Dr. Alireza', 'Sabbaghian'],
    role: 'Orthopaedic surgeon', lead: 'In specialist practice since 1997, with a focus on knee surgery, joint replacement, and sports-related knee injuries.',
    appointment: 'Arrange a consultation', journeyAction: 'Professional journey', registration: 'Medical registration no.',
    portraitAlt: 'Portrait of Dr. Alireza Sabbaghian', portraitLabel: 'Experience, knowledge, and attention to each patient', focusLabel: 'Professional focus', focus: 'Knee surgery and joint replacement',
    navLabel: 'On this page', nav: ['Care approach', 'Background and scientific work', 'Surgical experience', 'Fields of practice'],
    approachKicker: 'Professional approach', approachTitle: ['Each patient has individual', 'circumstances and needs.'],
    approachText: 'A clear understanding of each patient’s condition, an open discussion of options, and individual needs guide the care-planning process.',
    principles: [
      ['Careful assessment', 'Medical history, examination, and individual needs are considered during assessment.'],
      ['Clear discussion', 'Options are explained and questions addressed to support informed decisions.'],
      ['Individual care planning', 'Each plan considers the patient’s circumstances and realistic expectations.'],
    ],
    journeyKicker: 'Professional journey', journeyTitle: ['From medical education', 'to experience in joint surgery'],
    milestones: [
      ['1990', 'Beginning in medicine', 'Graduated in general medicine.'],
      ['1997', 'Specialist orthopaedic practice', 'Began specialist work in orthopaedics, with a focus on knee surgery and joint replacement.'],
      ['4 years', 'University and teaching experience', 'Worked at Zanjan University of Medical Sciences and contributed to medical education.'],
      ['Today', 'Ongoing clinical practice', 'Currently practising at Laleh Hospital and Tehran Clinic Hospital; member of the board of Laleh Hospital.'],
    ],
    hospitalHistory: 'Surgical experience at Laleh Hospital, Tehran Clinic Hospital, and Valiasr Hospital',
    scienceLabel: 'Specialist education and knowledge', scienceTitle: ['Experience supported', 'by scientific activity'],
    trainingLabel: 'Advanced training', training: 'Knee surgery fellowship programme', trainingPlace: 'Austria', membershipsLabel: 'Scientific memberships',
    memberships: ['Iranian Orthopaedic Association', 'Iranian Knee Surgeons Association'],
    scienceFacts: [['20 congresses', 'Attendance at approximately 20 international congresses'], ['3 theses', 'Supervision of three doctoral theses']], scienceNote: 'Presentations at annual orthopaedic congresses',
    experienceKicker: 'Experience in practice', experienceTitle: 'Surgical experience at a glance', experienceSource: 'Based on records provided up to 2026',
    stats: [['More than', '2,000', 'Knee replacements'], ['More than', '800', 'Hip replacements'], ['More than', '1,000', 'Knee arthroscopy procedures'], ['Approx.', '60', 'Revision knee procedures']],
    fieldsKicker: 'Main fields of practice', fieldsTitle: 'A focus on joint health and movement', servicesLink: 'Explore services',
    fields: [
      ['01 / Joint replacement', 'Knee and hip joints', 'Assessment and joint replacement surgery, based on each patient’s condition and needs.', 'View specialist field'],
      ['02 / Arthroscopy', 'Sports-related knee injuries', 'Assessment of intra-articular and ligament injuries of the knee.', 'View specialist field'],
    ],
    visitKicker: 'Contact and visits', visitTitle: ['For the next step,', 'contact the coordination team.'], visitText: 'Contact details, the clinic address, and visit information are available on the contact page.', visitAction: 'Clinic details and visit coordination',
    locations: [['Dr. Sabbaghian’s clinic', 'Valiasr Street, above Zafar Street, Tehran', 'Sunday and Tuesday · 14:00–19:00 Tehran time'], ['Hospital practice', 'Laleh Hospital and Tehran Clinic Hospital', 'The time and location are confirmed by the coordination team.']],
  },
  ar: {
    breadcrumb: ['الصفحة الرئيسية', 'عن الطبيب'], heroKicker: 'تعرّف إلى الطبيب', name: ['الدكتور علي رضا', 'صباغيان'],
    role: 'اختصاصي جراحة العظام والمفاصل', lead: 'يمارس تخصصه منذ عام 1997 مع تركيز على جراحة الركبة واستبدال المفاصل وإصابات الركبة الرياضية.',
    appointment: 'تنسيق المراجعة', journeyAction: 'المسيرة المهنية', registration: 'رقم التسجيل الطبي',
    portraitAlt: 'صورة الدكتور علي رضا صباغيان', portraitLabel: 'الخبرة والمعرفة والاهتمام بالمريض', focusLabel: 'التركيز المهني', focus: 'جراحة الركبة واستبدال المفاصل',
    navLabel: 'في هذه الصفحة', nav: ['النهج العلاجي', 'الخلفية والنشاط العلمي', 'الخبرة الجراحية', 'مجالات العمل'],
    approachKicker: 'النهج المهني', approachTitle: ['لكل مريض', 'ظروفه واحتياجاته الخاصة.'],
    approachText: 'فهم حالة المريض بدقة ومناقشة الخيارات بوضوح ومراعاة الاحتياجات الفردية هي عناصر أساسية في التخطيط للعلاج.',
    principles: [
      ['فهم الحالة بدقة', 'تُراعى السيرة المرضية والفحص والاحتياجات الفردية أثناء التقييم.'],
      ['نقاش واضح', 'تُشرح الخيارات ويُجاب عن الأسئلة لدعم اتخاذ قرار واعٍ.'],
      ['رعاية تناسب كل مريض', 'تُراعى ظروف المريض وتوقعاته الواقعية عند التخطيط للعلاج.'],
    ],
    journeyKicker: 'المسيرة المهنية', journeyTitle: ['من التعليم الطبي', 'إلى الخبرة في جراحة المفاصل'],
    milestones: [
      ['1990', 'بداية المسيرة الطبية', 'التخرج في الطب العام.'],
      ['1997', 'الممارسة التخصصية في جراحة العظام', 'بدء الممارسة التخصصية مع التركيز على جراحة الركبة واستبدال المفاصل.'],
      ['4 سنوات', 'الخبرة الجامعية والتعليم', 'العمل في جامعة زنجان للعلوم الطبية والمشاركة في التعليم الطبي.'],
      ['حالياً', 'استمرار العمل السريري', 'يمارس عمله حالياً في مستشفى لاله ومستشفى طهران كلينيك، وهو عضو مجلس إدارة مستشفى لاله.'],
    ],
    hospitalHistory: 'خبرة جراحية في مستشفيات لاله وطهران كلينيك وولي عصر',
    scienceLabel: 'التعليم والمعرفة التخصصية', scienceTitle: ['خبرة ممتدة', 'ونشاط علمي مستمر'],
    trainingLabel: 'تدريب متقدم', training: 'برنامج زمالة في جراحة الركبة', trainingPlace: 'النمسا', membershipsLabel: 'العضويات العلمية',
    memberships: ['الجمعية الإيرانية لجراحة العظام', 'الجمعية الإيرانية لجراحي الركبة'],
    scienceFacts: [['20 مؤتمراً', 'حضور نحو 20 مؤتمراً دولياً'], ['3 رسائل', 'الإشراف على ثلاث رسائل دكتوراه']], scienceNote: 'محاضرات ومشاركات في المؤتمرات السنوية لجراحة العظام',
    experienceKicker: 'الخبرة العملية', experienceTitle: 'الخبرة الجراحية في لمحة', experienceSource: 'وفق المعلومات المسجلة حتى عام 2026',
    stats: [['أكثر من', '2,000', 'استبدال مفصل الركبة'], ['أكثر من', '800', 'استبدال مفصل الورك'], ['أكثر من', '1,000', 'تنظير الركبة'], ['نحو', '60', 'جراحة تصحيحية للركبة']],
    fieldsKicker: 'مجالات العمل الرئيسية', fieldsTitle: 'التركيز على صحة المفاصل وحركتها', servicesLink: 'التعرّف إلى الخدمات',
    fields: [
      ['01 / استبدال المفصل', 'مفصل الركبة والورك', 'تقييم الحالة وجراحة استبدال المفصل وفق احتياجات كل مريض.', 'عرض المجال التخصصي'],
      ['02 / تنظير الركبة', 'إصابات الركبة الرياضية', 'تقييم المشكلات داخل المفصل وإصابات أربطة الركبة.', 'عرض المجال التخصصي'],
    ],
    visitKicker: 'التواصل والمراجعة', visitTitle: ['للخطوة التالية،', 'تواصل مع فريق التنسيق.'], visitText: 'تتوفر معلومات الاتصال وعنوان العيادة ودليل المراجعة في صفحة التواصل.', visitAction: 'معلومات العيادة وتنسيق المراجعة',
    locations: [['عيادة الدكتور صباغيان', 'طهران، شارع وليعصر، أعلى شارع ظفر', 'الأحد والثلاثاء · من 14:00 إلى 19:00'], ['مواقع العمل في المستشفيات', 'مستشفى لاله ومستشفى طهران كلينيك', 'يؤكد فريق التنسيق موعد المراجعة ومكانها.']],
  },
} as const

const principleIcons = [Microscope, MessageCircle, HeartHandshake]
const fieldImages = ['/images/services/knee-replacement-atlas.png', '/images/services/knee-anatomy-atlas.png']
const sectionIds = ['care-approach', 'professional-journey', 'surgical-experience', 'practice-fields']

export function AboutProfile({ locale }: { locale: Locale }) {
  const copy = profileCopy[locale]
  const Arrow = locale === 'en' ? ArrowRight : ArrowLeft
  const DiagonalArrow = locale === 'en' ? ArrowUpRight : ArrowUpLeft

  return <main className={`${styles.page} ${locale === 'en' ? styles.ltr : styles.rtl}`} data-locale={locale} id="about-profile">
    <section className={styles.hero} aria-labelledby="about-title"><div className={styles.shell}>
      <nav className={styles.breadcrumb} aria-label={copy.breadcrumb[1]}><Link href={`/${locale}`}>{copy.breadcrumb[0]}</Link><span aria-hidden="true">/</span><span aria-current="page">{copy.breadcrumb[1]}</span></nav>
      <div className={styles.heroGrid}>
        <div className={styles.intro}><span className={styles.eyebrow}>{copy.heroKicker}</span><h1 id="about-title">{copy.name[0]}<br /><span>{copy.name[1]}</span></h1><p className={styles.role}>{copy.role}</p><p className={styles.lead}>{copy.lead}</p>
          <div className={styles.actions}><Link className={styles.primaryButton} href={`/${locale}/contact`}><CalendarDays aria-hidden="true" />{copy.appointment}<Arrow aria-hidden="true" /></Link><a className={styles.secondaryButton} href="#professional-journey">{copy.journeyAction}<ArrowDown aria-hidden="true" /></a></div>
          <div className={styles.registration}><ShieldCheck aria-hidden="true" /><span>{copy.registration} <strong dir="ltr">{locale === 'fa' ? '۳۱۲۴۲' : '31242'}</strong></span></div>
        </div>
        <figure className={styles.portrait}><div className={styles.portraitBackdrop} aria-hidden="true" /><span className={styles.portraitLabel} aria-hidden="true">{copy.portraitLabel}</span><Image src="/images/portraits/dr-sabbaghian-navy-suit.png" alt={copy.portraitAlt} fill sizes="(max-width: 760px) 92vw, (max-width: 1100px) 44vw, 520px" quality={90} preload className={styles.portraitImage} /><figcaption className={styles.portraitCaption}><span>{copy.focusLabel}</span><strong>{copy.focus}</strong><DiagonalArrow aria-hidden="true" /></figcaption></figure>
      </div>
      <nav className={styles.sectionNav} aria-label={copy.navLabel}><span>{copy.navLabel}</span>{copy.nav.map((label, index) => <a href={`#${sectionIds[index]}`} key={label}>{label}</a>)}</nav>
    </div></section>

    <section id="care-approach" className={`${styles.shell} ${styles.section}`} aria-labelledby="approach-title"><div className={styles.approachHeading}><div><span className={styles.eyebrow}>{copy.approachKicker}</span><h2 id="approach-title">{copy.approachTitle[0]}<br />{copy.approachTitle[1]}</h2></div><p>{copy.approachText}</p></div>
      <div className={styles.principles}>{copy.principles.map(([title, text], index) => { const Icon = principleIcons[index]; return <article className={styles.principle} key={title}><div className={styles.principleTop}><Icon aria-hidden="true" /><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></div><h3>{title}</h3><p>{text}</p></article> })}</div>
    </section>

    <section id="professional-journey" className={styles.journeySection} aria-labelledby="journey-title"><div className={`${styles.shell} ${styles.journeyGrid}`}><div><span className={styles.eyebrow}>{copy.journeyKicker}</span><h2 id="journey-title">{copy.journeyTitle[0]}<br />{copy.journeyTitle[1]}</h2>
      <ol className={styles.timeline}>{copy.milestones.map(([label, title, text]) => <li key={label}><span className={styles.milestoneLabel} dir="auto">{label}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol><p className={styles.hospitalHistory}>{copy.hospitalHistory}</p></div>
      <aside className={styles.science} aria-labelledby="science-title"><div className={styles.scienceHeading}><GraduationCap aria-hidden="true" /><span>{copy.scienceLabel}</span></div><h3 id="science-title">{copy.scienceTitle[0]}<br />{copy.scienceTitle[1]}</h3><div className={styles.fellowship}><span>{copy.trainingLabel}</span><strong>{copy.training}</strong><span>{copy.trainingPlace}</span></div><div className={styles.memberships}><h4>{copy.membershipsLabel}</h4>{copy.memberships.map(item => <p key={item}><ShieldCheck aria-hidden="true" />{item}</p>)}</div><div className={styles.scienceFacts}>{copy.scienceFacts.map(([value, text]) => <div key={value}><strong dir="auto">{value}</strong><p>{text}</p></div>)}</div><p className={styles.scienceNote}><BookOpen aria-hidden="true" />{copy.scienceNote}</p></aside>
    </div></section>

    <section id="surgical-experience" className={styles.experienceSection} aria-labelledby="experience-title"><div className={styles.shell}><div className={styles.experienceHeading}><div><span className={styles.eyebrow}>{copy.experienceKicker}</span><h2 id="experience-title">{copy.experienceTitle}</h2></div><p>{copy.experienceSource}</p></div><dl className={styles.stats}>{copy.stats.map(([qualifier, value, title]) => <div key={title}><dt>{title}</dt><dd><span>{qualifier}</span><strong dir="ltr">{value}</strong></dd></div>)}</dl></div></section>

    <section id="practice-fields" className={`${styles.shell} ${styles.section}`} aria-labelledby="fields-title"><div className={styles.sectionHeading}><div><span className={styles.eyebrow}>{copy.fieldsKicker}</span><h2 id="fields-title">{copy.fieldsTitle}</h2></div><Link className={styles.textLink} href={`/${locale}/services`}>{copy.servicesLink}<Arrow aria-hidden="true" /></Link></div><div className={styles.fields}>{copy.fields.map(([label, title, text, action], index) => <Link className={styles.field} href={`/${locale}/services#service-0${index + 1}`} key={title}><div className={styles.fieldImage}><Image src={fieldImages[index]} alt="" fill sizes="(max-width: 420px) 100px, 150px" quality={90} /></div><div><span className={styles.fieldNumber}>{label}</span><h3>{title}</h3><p>{text}</p><span className={styles.fieldAction}>{action}<DiagonalArrow aria-hidden="true" /></span></div></Link>)}</div></section>

    <section className={`${styles.shell} ${styles.visitSection}`} aria-labelledby="visit-title"><div className={styles.visitIntro}><span className={styles.eyebrow}>{copy.visitKicker}</span><h2 id="visit-title">{copy.visitTitle[0]}<br />{copy.visitTitle[1]}</h2><p>{copy.visitText}</p><Link className={styles.primaryButton} href={`/${locale}/contact`}>{copy.visitAction}<Arrow aria-hidden="true" /></Link></div><div className={styles.locations}>{copy.locations.map(([title, text, meta], index) => { const Icon = index === 0 ? MapPin : Building2; return <div className={styles.location} key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p><span>{meta}</span></div></div> })}</div></section>
  </main>
}
