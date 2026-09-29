import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CalendarCheck2,
  Check,
  ClipboardCheck,
  FileImage,
  HeartPulse,
  Info,
  ListChecks,
  MoveUpLeft,
  MoveUpRight,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './KneeReplacementDetail.module.css'

type KneeReplacementDetailProps = {
  locale: Locale
  content: { kicker: string; title: string; lead: string; sections: string[][]; note: string; cta: string }
}

const copy = {
  fa: {
    home: 'صفحه اصلی', services: 'خدمات تخصصی', heroTop: 'تعویض مفصل زانو؛', heroAccent: 'از ارزیابی تا بازگشت به حرکت', path: 'آشنایی با مسیر', personal: 'تصمیم‌گیری متناسب با شرایط فرد', stepByStep: 'بررسی مرحله‌به‌مرحله', visualLabel: 'نمای آموزشی مفصل زانو و پروتز', atlasAlt: 'نمای آموزشی مفصل زانو و پروتز تعویض مفصل', clinicalAlt: 'آماده‌سازی تجهیزات جراحی زانو در محیط استریل', treatmentPath: 'مسیر درمان', planned: 'برنامه‌ریزی‌شده', onPage: 'در این صفحه', nav: ['زمان بررسی', 'مسیر تصمیم‌گیری', 'آمادگی و پیگیری'],
    evaluationTitle: 'وقتی درد و محدودیت، زندگی روزمره را تغییر می‌دهد', evaluationPoints: [['درد مداوم', 'دردی که با فعالیت روزمره، خواب یا استقلال حرکتی تداخل دارد.'], ['محدودیت عملکرد', 'کاهش توان راه‌رفتن، بالا رفتن از پله یا انجام کارهای معمول.'], ['پاسخ ناکافی به درمان‌های پیشین', 'مرور درمان‌های غیرجراحی انجام‌شده و میزان اثر آن‌ها.']], context: 'وجود یک یا چند مورد از این نشانه‌ها به‌تنهایی به معنای نیاز قطعی به جراحی نیست؛ نتیجه معاینه، تصاویر و شرایط عمومی فرد باید در کنار هم بررسی شوند.',
    decisionTitle: 'تصمیم درمانی چگونه شکل می‌گیرد؟', stages: [['شرح حال و معاینه', 'الگوی درد، محدودیت حرکت و اثر علائم بر فعالیت‌های روزمره بررسی می‌شود.'], ['بررسی تصاویر و سوابق', 'تصاویر پزشکی و پاسخ به درمان‌های پیشین در کنار یافته‌های معاینه مرور می‌شوند.'], ['گفت‌وگو درباره گزینه‌ها', 'فایده‌ها، محدودیت‌ها و انتظارهای واقع‌بینانه برای هر مسیر درمانی توضیح داده می‌شوند.'], ['برنامه‌ریزی فردی', 'در صورت انتخاب جراحی، آمادگی، بستری و پیگیری بر اساس شرایط فرد برنامه‌ریزی می‌شود.']],
    recoveryAlt: 'تمرین راه رفتن در دوره بازتوانی پس از درمان زانو', followupGoal: 'هدف مسیر پیگیری', saferMotion: 'حرکت ایمن‌تر و عملکرد بهتر', preparationTitle: 'آمادگی پیش از درمان، پیگیری پس از آن', prepItems: [['پیش از تصمیم‌گیری', 'سوابق درمان، تصاویر پزشکی و فهرست داروهای مصرفی را همراه داشته باشید.'], ['پیش از جراحی', 'ارزیابی‌های لازم و دستورهای اختصاصی تیم درمان را دقیق دنبال کنید.'], ['پس از درمان', 'برنامه حرکت، توان‌بخشی و زمان‌های پیگیری بر اساس وضعیت شما تعیین می‌شود.']], article: 'مطالعه راهنمای ارزیابی تعویض مفصل', medicalInfo: 'اطلاعات عمومی پزشکی', next: 'قدم بعدی', ctaTitle: 'برای ارزیابی شرایط زانو هماهنگ کنید', ctaText: 'در جلسه ارزیابی، علائم، تصاویر و درمان‌های پیشین در کنار نیازهای فردی بررسی می‌شوند.', contact: 'اطلاعات تماس و مراکز مراجعه', digits: ['۰۱', '۰۲', '۰۳', '۰۴'],
  },
  en: {
    home: 'Home', services: 'Specialist services', heroTop: 'Knee replacement:', heroAccent: 'from assessment to returning to movement', path: 'Explore the pathway', personal: 'A decision based on individual needs', stepByStep: 'Step-by-step assessment', visualLabel: 'Educational view of the knee joint and implant', atlasAlt: 'Educational illustration of a knee replacement implant', clinicalAlt: 'Preparation of knee surgery equipment in a sterile setting', treatmentPath: 'Care pathway', planned: 'Planned around the patient', onPage: 'On this page', nav: ['When it is considered', 'Decision pathway', 'Preparation and follow-up'],
    evaluationTitle: 'When pain and limitation change daily life', evaluationPoints: [['Persistent pain', 'Pain that interferes with daily activity, sleep, or independent mobility.'], ['Functional limitation', 'Reduced ability to walk, climb stairs, or complete ordinary activities.'], ['Limited response to previous care', 'A review of non-surgical treatments already tried and how much they helped.']], context: 'One or more of these features does not automatically mean surgery is required. Examination findings, imaging, and general health need to be considered together.',
    decisionTitle: 'How is a treatment decision made?', stages: [['History and examination', 'The pattern of pain, movement restriction, and effect on daily activities are assessed.'], ['Imaging and record review', 'Medical images and response to previous treatment are reviewed alongside examination findings.'], ['Discussion of options', 'Benefits, limitations, and realistic expectations are explained for each available pathway.'], ['Individual planning', 'If surgery is chosen, preparation, hospital care, and follow-up are planned around the individual.']],
    recoveryAlt: 'Walking practice during rehabilitation after knee treatment', followupGoal: 'Aim of follow-up', saferMotion: 'Safer movement and better function', preparationTitle: 'Preparation before treatment, follow-up afterwards', prepItems: [['Before the decision', 'Bring previous treatment records, medical imaging, and a current medication list.'], ['Before surgery', 'Complete the required assessments and follow the care team’s individual instructions.'], ['After treatment', 'Movement, rehabilitation, and follow-up plans are set according to your progress.']], article: 'Read the knee replacement assessment guide', medicalInfo: 'General medical information', next: 'Next step', ctaTitle: 'Arrange an assessment of your knee', ctaText: 'Symptoms, imaging, previous treatment, and individual needs are reviewed together during the assessment.', contact: 'Contact details and places of care', digits: ['01', '02', '03', '04'],
  },
  ar: {
    home: 'الصفحة الرئيسية', services: 'الخدمات التخصصية', heroTop: 'استبدال مفصل الركبة؛', heroAccent: 'من التقييم إلى العودة للحركة', path: 'التعرّف على المسار', personal: 'قرار يناسب حالة المريض', stepByStep: 'تقييم خطوة بخطوة', visualLabel: 'رسم تعليمي لمفصل الركبة والزرعة', atlasAlt: 'رسم تعليمي لمفصل الركبة بعد استبداله', clinicalAlt: 'تحضير معدات جراحة الركبة في بيئة معقمة', treatmentPath: 'مسار العلاج', planned: 'مخطط حسب الحالة', onPage: 'في هذه الصفحة', nav: ['متى يُدرس العلاج', 'مسار اتخاذ القرار', 'الاستعداد والمتابعة'],
    evaluationTitle: 'عندما يغيّر الألم والقيود تفاصيل الحياة اليومية', evaluationPoints: [['ألم مستمر', 'ألم يؤثر في النشاط اليومي أو النوم أو القدرة على الحركة باستقلالية.'], ['قيود وظيفية', 'تراجع القدرة على المشي أو صعود الدرج أو أداء الأنشطة المعتادة.'], ['استجابة محدودة للعلاجات السابقة', 'مراجعة العلاجات غير الجراحية السابقة ومدى تأثيرها.']], context: 'وجود علامة واحدة أو أكثر لا يعني بالضرورة الحاجة إلى الجراحة؛ بل يجب تقييم الفحص والصور والحالة الصحية العامة معاً.',
    decisionTitle: 'كيف يتشكل القرار العلاجي؟', stages: [['التاريخ المرضي والفحص', 'يُقيّم نمط الألم وحدود الحركة وتأثير الأعراض في الأنشطة اليومية.'], ['مراجعة الصور والسجلات', 'تُراجع الصور الطبية والاستجابة للعلاجات السابقة مع نتائج الفحص.'], ['مناقشة الخيارات', 'تُشرح الفوائد والقيود والتوقعات الواقعية لكل مسار علاجي متاح.'], ['خطة فردية', 'عند اختيار الجراحة، يُخطط للاستعداد والإقامة والمتابعة وفق حالة المريض.']],
    recoveryAlt: 'تدريب على المشي خلال التأهيل بعد علاج الركبة', followupGoal: 'هدف المتابعة', saferMotion: 'حركة أكثر أماناً ووظيفة أفضل', preparationTitle: 'استعداد قبل العلاج ومتابعة بعده', prepItems: [['قبل اتخاذ القرار', 'أحضر سجلات العلاج السابقة والصور الطبية وقائمة الأدوية الحالية.'], ['قبل الجراحة', 'أكمل الفحوص المطلوبة واتبع تعليمات فريق الرعاية الخاصة بحالتك.'], ['بعد العلاج', 'تُحدد خطة الحركة والتأهيل والمتابعة وفق تطور حالتك.']], article: 'قراءة دليل تقييم استبدال مفصل الركبة', medicalInfo: 'معلومات طبية عامة', next: 'الخطوة التالية', ctaTitle: 'نسّق موعداً لتقييم حالة الركبة', ctaText: 'تُراجع الأعراض والصور والعلاجات السابقة والاحتياجات الفردية معاً خلال التقييم.', contact: 'معلومات التواصل ومراكز المراجعة', digits: ['٠١', '٠٢', '٠٣', '٠٤'],
  },
} as const

const stageIcons = [Stethoscope, FileImage, ListChecks, CalendarCheck2]

export function KneeReplacementDetail({ locale, content }: KneeReplacementDetailProps) {
  const t = copy[locale]
  const Forward = locale === 'en' ? ArrowRight : ArrowLeft
  const Diagonal = locale === 'en' ? MoveUpRight : MoveUpLeft

  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="service-title"><div className={styles.shell}>
      <nav className={styles.breadcrumb} aria-label={content.title}><Link href={`/${locale}`}>{t.home}</Link><span>/</span><Link href={`/${locale}/services`}>{t.services}</Link><span>/</span><span>{content.title}</span></nav>
      <div className={styles.heroGrid}><div className={styles.intro}><span className={styles.eyebrow}>{content.kicker}</span><h1 id="service-title">{t.heroTop}<br /><span>{t.heroAccent}</span></h1><p>{content.lead}</p><div className={styles.actions}><Link className={styles.primaryButton} href={`/${locale}/contact`}><CalendarCheck2 aria-hidden="true" />{content.cta}<Forward aria-hidden="true" /></Link><a className={styles.secondaryButton} href="#evaluation">{t.path}<ArrowDown aria-hidden="true" /></a></div><div className={styles.assurances}><span><ShieldCheck aria-hidden="true" />{t.personal}</span><span><ClipboardCheck aria-hidden="true" />{t.stepByStep}</span></div></div>
        <div className={styles.heroVisual} aria-label={t.visualLabel}><figure className={styles.atlasImage}><Image src="/images/services/knee-replacement-atlas.png" alt={t.atlasAlt} fill sizes="(max-width: 760px) 88vw, 42vw" priority /></figure><figure className={styles.clinicalImage}><Image src="/images/gallery/knee-replacement-workflow.webp" alt={t.clinicalAlt} fill sizes="(max-width: 760px) 42vw, 18vw" /></figure><div className={styles.visualBadge}><HeartPulse aria-hidden="true" /><span>{t.treatmentPath}<strong>{t.planned}</strong></span></div></div>
      </div><nav className={styles.sectionNav} aria-label={t.onPage}><span>{t.onPage}</span><a href="#evaluation">{t.nav[0]}</a><a href="#decision-path">{t.nav[1]}</a><a href="#preparation">{t.nav[2]}</a></nav>
    </div></section>

    <section className={`${styles.shell} ${styles.evaluation}`} id="evaluation" aria-labelledby="evaluation-title"><header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{content.sections[0][0]}</span><h2 id="evaluation-title">{t.evaluationTitle}</h2></div><p>{content.sections[0][1]}</p></header><div className={styles.evaluationGrid}>{t.evaluationPoints.map((point, index) => <article key={point[0]}><span>{t.digits[index]}</span><Activity aria-hidden="true" /><h3>{point[0]}</h3><p>{point[1]}</p></article>)}</div><aside className={styles.contextNote}><Info aria-hidden="true" /><p>{t.context}</p></aside></section>

    <section className={styles.pathSection} id="decision-path" aria-labelledby="path-title"><div className={styles.shell}><header className={styles.pathHeading}><div><span className={styles.eyebrow}>{content.sections[1][0]}</span><h2 id="path-title">{t.decisionTitle}</h2></div><p>{content.sections[1][1]}</p></header><div className={styles.timeline}>{t.stages.map((stage, index) => { const Icon = stageIcons[index]; return <article key={stage[0]}><div className={styles.stageTop}><span>{t.digits[index]}</span><Icon aria-hidden="true" /></div><h3>{stage[0]}</h3><p>{stage[1]}</p>{index < t.stages.length - 1 && <i aria-hidden="true" />}</article> })}</div></div></section>

    <section className={`${styles.shell} ${styles.preparation}`} id="preparation" aria-labelledby="preparation-title"><div className={styles.preparationVisual}><Image src="/images/gallery/postoperative-walking-recovery.webp" alt={t.recoveryAlt} fill sizes="(max-width: 760px) 100vw, 48vw" /><div><Activity aria-hidden="true" /><span>{t.followupGoal}</span><strong>{t.saferMotion}</strong></div></div><div className={styles.preparationCopy}><span className={styles.eyebrow}>{content.sections[2][0]}</span><h2 id="preparation-title">{t.preparationTitle}</h2><p>{content.sections[2][1]}</p><ul>{t.prepItems.map(item => <li key={item[0]}><Check aria-hidden="true" /><span><strong>{item[0]}</strong>{item[1]}</span></li>)}</ul><Link className={styles.textLink} href={`/${locale}/journal/knee-replacement-evaluation`}>{t.article}<Diagonal aria-hidden="true" /></Link></div></section>

    <section className={`${styles.shell} ${styles.medicalNote}`}><Info aria-hidden="true" /><div><h2>{t.medicalInfo}</h2><p>{content.note}</p></div></section>
    <section className={styles.cta}><div className={styles.shell}><div><span>{t.next}</span><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p></div><Link href={`/${locale}/contact`}>{t.contact}<Forward aria-hidden="true" /></Link></div></section>
  </main>
}
