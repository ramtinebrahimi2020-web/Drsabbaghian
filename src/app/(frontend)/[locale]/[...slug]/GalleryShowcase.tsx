import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowDown,
  CheckCircle2,
  Images,
  MoveUpLeft,
  MoveUpRight,
  Play,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Video,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './GalleryShowcase.module.css'

type GalleryShowcaseProps = {
  locale: Locale
  page: { kicker: string; title: string; lead: string; sections: Array<{ title: string; text: string }> }
}

const copy = {
  fa: {
    home: 'صفحه اصلی', gallery: 'گالری تصاویر', heroTop: 'نمونه‌های درمان', heroAccent: 'و مسیر بازگشت به حرکت',
    heroLead: 'آرشیوی تصویری از فرایندهای درمانی، محیط کار، توان‌بخشی و نتایج حرکتی بیماران؛ با انتشار کنترل‌شده و حفظ حریم خصوصی.',
    browse: 'مشاهده نمونه‌ها', policy: 'ضوابط انتشار', private: 'بدون نمایش هویت بیمار', mediaReady: 'آماده برای عکس و ویدیو',
    heroLabel: 'نمونه تصاویر فرایند درمان و توان‌بخشی', categoriesCount: 'دسته تخصصی\nبرای مشاهده', categories: 'دسته‌بندی',
    sectionKicker: 'نمونه‌های کاری بر اساس خدمت', sectionTitle: 'هر تصویر، بخشی از مسیر درمان', sectionLead: 'این ساختار برای اضافه‌شدن تصاویر واقعی محیط درمان، روند بهبود و ویدیوهای نتیجه بیماران طراحی شده است.',
    generatedNote: 'تصاویر فعلی برای نمایش ساختار گالری تولید شده‌اند و با دریافت محتوای واقعی و تأییدشده جایگزین یا تکمیل می‌شوند.',
    archiveKicker: 'آرشیو در حال توسعه', archiveTitle: 'عکس و ویدیو، با هدف نشان‌دادن نتیجه واقعی', archiveLead: 'برای هر خدمت می‌توان نمونه‌های واقعی پیشرفت بیمار، تمرین‌های حرکتی و توضیح کوتاه روند درمان را به این مجموعه اضافه کرد.', services: 'مشاهده خدمات تخصصی',
    photoTitle: 'عکس‌های مرحله‌ای', photoText: 'نمایش روند بهبود و عملکرد حرکتی، بدون ثبت چهره یا اطلاعات هویتی بیمار.', videoTitle: 'ویدیوهای کوتاه نتیجه', videoText: 'ثبت راه‌رفتن، دامنه حرکت یا بازگشت به فعالیت با توضیح روشن و بدون ادعای اغراق‌آمیز.',
    privacyTitle: 'حریم خصوصی، شرط اصلی انتشار', privacyText: 'هر تصویر یا ویدیوی واقعی بیمار فقط پس از دریافت رضایت روشن، حذف اطلاعات هویتی و بررسی محتوای پزشکی منتشر می‌شود. نتیجه درمان نیز برای هر بیمار متفاوت است.', count: '۴',
    stories: [
      ['تعویض مفصل زانو', 'آماده‌سازی دقیق برای جراحی مفصل', 'نمایی از محیط استریل، تجهیزات و روند حرفه‌ای آماده‌سازی پیش از جراحی.', 'فرایند درمان'],
      ['آرتروسکوپی زانو', 'درمان کم‌تهاجمی با دید مستقیم', 'ثبت تصویری از تجهیزات آرتروسکوپی و تمرکز بر دقت در مداخلات داخل مفصل.', 'اتاق عمل'],
      ['آسیب‌های ورزشی', 'ارزیابی حرکت و بازگشت کنترل‌شده', 'تمرین هدفمند و بررسی دامنه حرکت برای بازگشت ایمن‌تر به فعالیت روزمره و ورزش.', 'توان‌بخشی'],
      ['نتیجه درمان و پیگیری', 'بازگشت قدم‌به‌قدم به حرکت', 'پیگیری الگوی راه‌رفتن و اعتماد حرکتی بیمار در مسیر مراقبت پس از درمان.', 'نتیجه حرکتی'],
    ],
  },
  en: {
    home: 'Home', gallery: 'Gallery', heroTop: 'Treatment examples', heroAccent: 'and the path back to movement',
    heroLead: 'A visual archive of care processes, clinical work, rehabilitation, and patient mobility outcomes, published selectively with privacy protected.',
    browse: 'Browse examples', policy: 'Publication standards', private: 'Patient identity protected', mediaReady: 'Ready for photo and video',
    heroLabel: 'Selected treatment and rehabilitation images', categoriesCount: 'specialist categories\nto explore', categories: 'Categories',
    sectionKicker: 'Work examples by service', sectionTitle: 'Each image tells part of the care journey', sectionLead: 'This gallery is designed to grow with authentic clinical images, recovery progress, and patient outcome videos.',
    generatedNote: 'The current images illustrate the gallery structure and can be replaced or expanded with approved, authentic media.',
    archiveKicker: 'An evolving archive', archiveTitle: 'Photo and video focused on real outcomes', archiveLead: 'Each service can include approved examples of patient progress, movement exercises, and a concise account of the care journey.', services: 'Explore specialist services',
    photoTitle: 'Progress photo series', photoText: 'Show recovery and mobility while keeping faces and identifying details outside the frame.', videoTitle: 'Short outcome videos', videoText: 'Record gait, range of motion, or a return to activity with clear context and measured claims.',
    privacyTitle: 'Privacy is essential to publication', privacyText: 'Real patient media is published only with clear consent, removal of identifying information, and clinical review. Outcomes vary from one patient to another.', count: '4',
    stories: [
      ['Knee replacement', 'Precise preparation for joint surgery', 'A view of the sterile environment, instruments, and professional preparation before surgery.', 'Care process'],
      ['Knee arthroscopy', 'Minimally invasive care with a direct view', 'Arthroscopy equipment and the precision involved in work within the knee joint.', 'Operating room'],
      ['Sports knee injuries', 'Movement assessment and a controlled return', 'Targeted exercise and range-of-motion assessment for a safer return to daily life and sport.', 'Rehabilitation'],
      ['Outcomes and follow-up', 'Step by step, back to movement', 'Follow-up of gait and movement confidence during recovery after treatment.', 'Mobility outcome'],
    ],
  },
  ar: {
    home: 'الصفحة الرئيسية', gallery: 'معرض الصور', heroTop: 'نماذج من العلاج', heroAccent: 'ومسار العودة إلى الحركة',
    heroLead: 'أرشيف بصري لمسارات العلاج والعمل السريري والتأهيل والنتائج الحركية للمرضى، مع نشر منضبط وحماية الخصوصية.',
    browse: 'مشاهدة النماذج', policy: 'ضوابط النشر', private: 'حماية هوية المريض', mediaReady: 'جاهز للصور والفيديو',
    heroLabel: 'نماذج مصورة للعلاج والتأهيل', categoriesCount: 'فئات تخصصية\nللمشاهدة', categories: 'التصنيفات',
    sectionKicker: 'نماذج العمل حسب الخدمة', sectionTitle: 'كل صورة جزء من مسار العلاج', sectionLead: 'صُمم هذا المعرض لإضافة صور حقيقية من بيئة العلاج ومراحل التعافي وفيديوهات نتائج المرضى.',
    generatedNote: 'الصور الحالية توضح بنية المعرض، ويمكن استبدالها أو استكمالها بمحتوى حقيقي ومعتمد.',
    archiveKicker: 'أرشيف قيد التطوير', archiveTitle: 'صور وفيديوهات لإظهار النتائج الواقعية', archiveLead: 'يمكن إضافة نماذج معتمدة لتقدم المريض والتمارين الحركية وشرح موجز لمسار العلاج ضمن كل خدمة.', services: 'مشاهدة الخدمات التخصصية',
    photoTitle: 'صور لمراحل التعافي', photoText: 'عرض تطور التعافي والأداء الحركي من دون إظهار الوجه أو أي معلومات تكشف هوية المريض.', videoTitle: 'فيديوهات قصيرة للنتائج', videoText: 'توثيق المشي أو مدى الحركة أو العودة إلى النشاط مع شرح واضح ومن دون مبالغة في النتائج.',
    privacyTitle: 'الخصوصية شرط أساسي للنشر', privacyText: 'لا تُنشر صور أو فيديوهات المرضى الحقيقية إلا بعد موافقة واضحة وإزالة المعلومات التعريفية والمراجعة الطبية. وتختلف النتائج من مريض إلى آخر.', count: '٤',
    stories: [
      ['استبدال مفصل الركبة', 'تحضير دقيق لجراحة المفصل', 'مشهد للبيئة المعقمة والمعدات والتحضير المهني قبل الجراحة.', 'مسار العلاج'],
      ['تنظير الركبة', 'علاج محدود التدخل برؤية مباشرة', 'توثيق معدات التنظير والدقة اللازمة للتدخل داخل مفصل الركبة.', 'غرفة العمليات'],
      ['إصابات الركبة الرياضية', 'تقييم الحركة والعودة التدريجية', 'تمارين موجهة وتقييم مدى الحركة لعودة أكثر أماناً إلى الحياة اليومية والرياضة.', 'التأهيل'],
      ['النتائج والمتابعة', 'خطوة بعد خطوة نحو الحركة', 'متابعة نمط المشي والثقة بالحركة خلال مرحلة التعافي بعد العلاج.', 'نتيجة حركية'],
    ],
  },
} as const

const media = [
  { id: 'replacement', src: '/images/gallery/knee-replacement-workflow.webp', icon: Stethoscope },
  { id: 'arthroscopy', src: '/images/gallery/knee-arthroscopy-workflow.webp', icon: ScanLine },
  { id: 'sports', src: '/images/gallery/sports-knee-rehabilitation.webp', icon: Activity },
  { id: 'recovery', src: '/images/gallery/postoperative-walking-recovery.webp', icon: CheckCircle2 },
]

export function GalleryShowcase({ locale, page }: GalleryShowcaseProps) {
  const t = copy[locale]
  const DirectionIcon = locale === 'en' ? MoveUpRight : MoveUpLeft
  const stories = media.map((item, index) => ({ ...item, category: t.stories[index][0], title: t.stories[index][1], text: t.stories[index][2], meta: t.stories[index][3] }))

  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="gallery-title"><div className={styles.shell}>
      <nav className={styles.breadcrumb} aria-label={t.gallery}><Link href={`/${locale}`}>{t.home}</Link><span aria-hidden="true">/</span><span>{t.gallery}</span></nav>
      <div className={styles.heroGrid}>
        <div className={styles.intro}><span className={styles.eyebrow}>{page.kicker}</span><h1 id="gallery-title">{t.heroTop}<br /><span>{t.heroAccent}</span></h1><p className={styles.lead}>{t.heroLead}</p>
          <div className={styles.actions}><a className={styles.primaryButton} href="#service-gallery"><Images aria-hidden="true" />{t.browse}<ArrowDown aria-hidden="true" /></a><a className={styles.secondaryButton} href="#media-policy">{t.policy}<ShieldCheck aria-hidden="true" /></a></div>
          <div className={styles.assurances}><span><ShieldCheck aria-hidden="true" />{t.private}</span><span><Video aria-hidden="true" />{t.mediaReady}</span></div>
        </div>
        <div className={styles.heroVisual} aria-label={t.heroLabel}><figure className={styles.heroMain}><Image src={stories[0].src} alt={stories[0].title} fill sizes="(max-width: 760px) 90vw, 43vw" priority /></figure><figure className={styles.heroInset}><Image src={stories[3].src} alt={stories[3].title} fill sizes="(max-width: 760px) 44vw, 19vw" /></figure><div className={styles.heroBadge}><strong>{t.count}</strong><span>{t.categoriesCount.split('\n').map((line) => <span key={line}>{line}</span>)}</span></div></div>
      </div>
      <nav className={styles.sectionNav} aria-label={t.categories}><span>{t.categories}</span>{stories.map((story) => <a key={story.id} href={`#${story.id}`}>{story.category}</a>)}</nav>
    </div></section>

    <section className={`${styles.shell} ${styles.gallerySection}`} id="service-gallery" aria-labelledby="services-gallery-title"><header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{t.sectionKicker}</span><h2 id="services-gallery-title">{t.sectionTitle}</h2></div><p>{t.sectionLead}</p></header>
      <div className={styles.storyGrid}>{stories.map((story, index) => { const Icon = story.icon; return <article className={`${styles.storyCard} ${index === 0 ? styles.storyFeatured : ''}`} id={story.id} key={story.id}><div className={styles.storyImage}><Image src={story.src} alt={story.title} fill sizes={index === 0 ? '(max-width: 760px) 100vw, 62vw' : '(max-width: 760px) 100vw, 35vw'} /></div><div className={styles.storyOverlay}><div className={styles.storyMeta}><span><Icon aria-hidden="true" />{story.category}</span><small>{story.meta}</small></div><h3>{story.title}</h3><p>{story.text}</p></div></article> })}</div>
      <p className={styles.illustrationNote}>{t.generatedNote}</p>
    </section>

    <section className={styles.mediaSection} id="media-policy" aria-labelledby="media-title"><div className={`${styles.shell} ${styles.mediaGrid}`}><div className={styles.mediaIntro}><span className={styles.eyebrow}>{t.archiveKicker}</span><h2 id="media-title">{t.archiveTitle}</h2><p>{t.archiveLead}</p><Link className={styles.servicesLink} href={`/${locale}/services`}>{t.services}<DirectionIcon aria-hidden="true" /></Link></div><div className={styles.mediaCards}><article><span><Images aria-hidden="true" /></span><div><h3>{t.photoTitle}</h3><p>{t.photoText}</p></div></article><article><span><Play aria-hidden="true" /></span><div><h3>{t.videoTitle}</h3><p>{t.videoText}</p></div></article></div></div></section>
    <section className={`${styles.shell} ${styles.privacySection}`}><ShieldCheck aria-hidden="true" /><div><h2>{t.privacyTitle}</h2><p>{t.privacyText}</p></div></section>
  </main>
}
