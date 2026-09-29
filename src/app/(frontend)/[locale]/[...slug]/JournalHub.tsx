import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CircleDot,
  Clock3,
  FileCheck2,
  HeartPulse,
  Info,
  MoveUpLeft,
  MoveUpRight,
  ShieldCheck,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './JournalHub.module.css'

type JournalHubProps = {
  locale: Locale
  page: { kicker: string; title: string; lead: string; sections: Array<{ title: string; text: string }> }
}

const copy = {
  fa: {
    home: 'صفحه اصلی', pageName: 'مجله سلامت', title: ['مطالب آموزشی', 'و بازبینی‌شده'], featuredAction: 'مطالعه مطلب شاخص', topicsAction: 'موضوعات مجله',
    assurances: ['محتوای آموزشی پزشکی', 'شفافیت منابع و بازبینی'], imageAlt: 'نمای مفصل زانو و پروتز', featured: 'مطلب شاخص', readingTime: 'مطالعه کوتاه', category: 'تعویض مفصل زانو و لگن',
    articleTitle: 'چه زمانی بررسی تعویض مفصل زانو مطرح می‌شود؟', articleSummary: 'مروری عمومی بر عواملی که ممکن است هنگام ارزیابی درد و محدودیت عملکرد زانو بررسی شوند.', readArticle: 'مطالعه مقاله',
    onPage: 'در این صفحه', featuredNav: 'مطلب شاخص', topicsNav: 'موضوعات مجله', standardsNav: 'اصول محتوایی', topicsKicker: 'مسیر مطالعه', topicsTitle: 'مطالب را بر اساس موضوع دنبال کنید', topicsLead: 'هر بخش برای آشنایی عمومی و آماده‌شدن برای گفت‌وگویی دقیق‌تر با پزشک تنظیم می‌شود.',
    related: 'مشاهده مطلب مرتبط', moreTopics: 'مطالب تکمیلی در این موضوع', standardsKicker: 'اصول محتوایی', standardsTitle: 'مطالب چگونه ارائه می‌شوند؟', standardsLead: 'هدف این مجله، ارائه اطلاعات عمومی روشن و مسئولانه درباره سلامت مفاصل و مسیرهای ارزیابی است.',
    standards: [['زبان روشن و قابل‌فهم', 'مفاهیم پزشکی با واژه‌های ساده و بدون وعده درمانی توضیح داده می‌شوند.'], ['مرزبندی آموزش و درمان', 'هر مطلب مشخص می‌کند که اطلاعات عمومی جایگزین معاینه و توصیه فردی نیست.'], ['منابع و تاریخ بازبینی', 'منابع علمی و تاریخ بازبینی پزشکی پس از تأیید نهایی هر مقاله درج می‌شوند.']],
    noteTitle: 'یادآوری', note: 'شرایط هر فرد متفاوت است. مطالب مجله برای آموزش عمومی‌اند و تصمیم درمانی باید پس از ارزیابی پزشکی گرفته شود.', contactKicker: 'نیاز به ارزیابی فردی', contactTitle: 'برای شرایط شخصی، با پذیرش هماهنگ کنید', contactText: 'اگر پرسش شما به علائم، تصاویر پزشکی یا تصمیم درمانی شخصی مربوط است، مسیر مناسب ارزیابی از طریق پذیرش مشخص می‌شود.', contactAction: 'اطلاعات تماس و درخواست نوبت',
  },
  en: {
    home: 'Home', pageName: 'Health journal', title: ['Health education', 'reviewed with care'], featuredAction: 'Read the featured article', topicsAction: 'Journal topics',
    assurances: ['Patient education', 'Transparent sources and review'], imageAlt: 'Knee joint and replacement implant', featured: 'Featured article', readingTime: 'Short read', category: 'Knee and hip replacement',
    articleTitle: 'When may knee replacement evaluation be considered?', articleSummary: 'A general overview of factors that may be considered when assessing knee pain and functional limitations.', readArticle: 'Read the article',
    onPage: 'On this page', featuredNav: 'Featured article', topicsNav: 'Journal topics', standardsNav: 'Editorial standards', topicsKicker: 'Reading paths', topicsTitle: 'Explore articles by topic', topicsLead: 'Each section offers general education and helps patients prepare for a clearer discussion with their physician.',
    related: 'View related article', moreTopics: 'More articles in this topic', standardsKicker: 'Editorial standards', standardsTitle: 'How is the information presented?', standardsLead: 'The journal provides clear, responsible general information about joint health and assessment pathways.',
    standards: [['Clear, accessible language', 'Medical concepts are explained in plain language without making treatment promises.'], ['Education and care are distinct', 'Every article states that general information does not replace an examination or individual advice.'], ['Sources and review dates', 'Scientific sources and medical review dates are added after each article receives final approval.']],
    noteTitle: 'Reminder', note: 'Every patient’s circumstances are different. Journal articles provide general education, and treatment decisions should follow a medical assessment.', contactKicker: 'Need an individual assessment?', contactTitle: 'Contact the team about your circumstances', contactText: 'If your question concerns symptoms, medical images, or a personal treatment decision, the coordination team can direct you to the appropriate assessment pathway.', contactAction: 'Contact details and appointments',
  },
  ar: {
    home: 'الصفحة الرئيسية', pageName: 'المجلة الصحية', title: ['مقالات تعليمية', 'خاضعة للمراجعة'], featuredAction: 'قراءة المقال المميز', topicsAction: 'موضوعات المجلة',
    assurances: ['تثقيف طبي للمرضى', 'شفافية المصادر والمراجعة'], imageAlt: 'مفصل الركبة وزرعة استبدال المفصل', featured: 'مقال مميز', readingTime: 'قراءة قصيرة', category: 'استبدال مفصل الركبة والورك',
    articleTitle: 'متى قد يُطرح تقييم استبدال مفصل الركبة؟', articleSummary: 'نظرة عامة على العوامل التي قد تُراجع عند تقييم ألم الركبة والقيود الوظيفية.', readArticle: 'قراءة المقال',
    onPage: 'في هذه الصفحة', featuredNav: 'المقال المميز', topicsNav: 'موضوعات المجلة', standardsNav: 'المعايير التحريرية', topicsKicker: 'مسارات القراءة', topicsTitle: 'تصفح المقالات حسب الموضوع', topicsLead: 'يقدم كل قسم معلومات عامة تساعد المريض على الاستعداد لنقاش أوضح مع الطبيب.',
    related: 'عرض المقال المرتبط', moreTopics: 'مقالات إضافية في هذا الموضوع', standardsKicker: 'المعايير التحريرية', standardsTitle: 'كيف تُقدم المعلومات؟', standardsLead: 'تهدف المجلة إلى تقديم معلومات عامة واضحة ومسؤولة عن صحة المفاصل ومسارات التقييم.',
    standards: [['لغة واضحة ومفهومة', 'تُشرح المفاهيم الطبية بلغة مبسطة ومن دون وعود علاجية.'], ['الفصل بين التثقيف والعلاج', 'يوضح كل مقال أن المعلومات العامة لا تغني عن الفحص والمشورة الفردية.'], ['المصادر وتاريخ المراجعة', 'تُضاف المصادر العلمية وتواريخ المراجعة الطبية بعد الاعتماد النهائي لكل مقال.']],
    noteTitle: 'تذكير', note: 'تختلف ظروف كل مريض. تقدم مقالات المجلة تثقيفاً عاماً، ويجب اتخاذ القرارات العلاجية بعد التقييم الطبي.', contactKicker: 'هل تحتاج إلى تقييم فردي؟', contactTitle: 'تواصل مع فريق التنسيق بشأن حالتك', contactText: 'إذا كان سؤالك يتعلق بالأعراض أو الصور الطبية أو قرار علاجي شخصي، يوضح فريق التنسيق مسار التقييم المناسب.', contactAction: 'معلومات التواصل وطلب موعد',
  },
} as const

const topicIcons = [CircleDot, Activity, HeartPulse]
const standardIcons = [BookOpen, ShieldCheck, FileCheck2]
const faNumbers = ['۰۱', '۰۲', '۰۳', '۰۴']
const publishedFaArticles = [
  { title: 'چه زمانی بررسی تعویض مفصل زانو مطرح می‌شود؟', text: 'مروری عمومی بر نشانه‌ها، ارزیابی تخصصی و تصمیم‌گیری پیش از انتخاب مسیر درمان.', href: '/fa/journal/knee-replacement-evaluation' },
  { title: 'درد زانو چه زمانی به ارزیابی تخصصی نیاز دارد؟', text: 'نشانه‌هایی که می‌توانند گفت‌وگو با متخصص و بررسی دقیق‌تر را مفید کنند.', href: '/fa/journal/knee-pain-specialist-assessment' },
  { title: 'آرتروسکوپی زانو برای چه آسیب‌هایی بررسی می‌شود؟', text: 'نقش آرتروسکوپی در ارزیابی برخی مشکلات داخل مفصل و عوامل مؤثر بر تصمیم‌گیری.', href: '/fa/journal/knee-arthroscopy-indications' },
  { title: 'مراقبت‌های مهم پیش و پس از جراحی تعویض مفصل زانو', text: 'مروری آموزشی بر آمادگی، پیگیری و بازتوانی مرحله‌به‌مرحله.', href: '/fa/journal/knee-replacement-care' },
]

export function JournalHub({ locale, page }: JournalHubProps) {
  const text = copy[locale]
  const ForwardArrow = locale === 'en' ? ArrowRight : ArrowLeft
  const DiagonalArrow = locale === 'en' ? MoveUpRight : MoveUpLeft
  const articleHref = `/${locale}/journal/knee-replacement-evaluation`
  const topics = locale === 'fa' ? publishedFaArticles : page.sections.map((topic, index) => ({ ...topic, href: index === 0 ? articleHref : undefined }))
  return <main className={`${styles.page} ${locale === 'en' ? styles.ltr : styles.rtl}`} data-locale={locale}>
    <section className={styles.hero} aria-labelledby="journal-title">
      <div className={styles.shell}>
        <nav className={styles.breadcrumb} aria-label={text.pageName}><Link href={`/${locale}`}>{text.home}</Link><span aria-hidden="true">/</span><span>{text.pageName}</span></nav>
        <div className={styles.heroGrid}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>{page.kicker}</span><h1 id="journal-title">{text.title[0]}<br /><span>{text.title[1]}</span></h1><p className={styles.lead}>{page.lead}</p>
            <div className={styles.actions}><a className={styles.primaryButton} href="#featured-article"><BookOpen aria-hidden="true" />{text.featuredAction}<ArrowDown aria-hidden="true" /></a><a className={styles.secondaryButton} href="#journal-topics">{text.topicsAction}<ArrowDown aria-hidden="true" /></a></div>
            <div className={styles.assurances}><span><ShieldCheck aria-hidden="true" />{text.assurances[0]}</span><span><FileCheck2 aria-hidden="true" />{text.assurances[1]}</span></div>
          </div>
          <Link className={styles.featuredCard} href={articleHref} id="featured-article">
            <div className={styles.featuredImage}><Image src="/images/services/knee-replacement-atlas.png" alt={text.imageAlt} fill sizes="(max-width: 760px) 92vw, 43vw" quality={90} priority /></div>
            <div className={styles.featuredBody}><div className={styles.featuredMeta}><span>{text.featured}</span><span><Clock3 aria-hidden="true" />{text.readingTime}</span></div><strong className={styles.category}>{text.category}</strong><h2>{text.articleTitle}</h2><p>{text.articleSummary}</p><span className={styles.readLink}>{text.readArticle}<DiagonalArrow aria-hidden="true" /></span></div>
          </Link>
        </div>
        <nav className={styles.sectionNav} aria-label={text.onPage}><span>{text.onPage}</span><a href="#featured-article">{text.featuredNav}</a><a href="#journal-topics">{text.topicsNav}</a><a href="#editorial-standards">{text.standardsNav}</a></nav>
      </div>
    </section>

    <section className={`${styles.shell} ${styles.topicsSection}`} id="journal-topics" aria-labelledby="topics-title">
      <header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{text.topicsKicker}</span><h2 id="topics-title">{text.topicsTitle}</h2></div><p>{text.topicsLead}</p></header>
      <div className={styles.topics}>{topics.map((topic, index) => { const Icon = topicIcons[index % topicIcons.length]; const content = <><div className={styles.topicTop}><span>{locale === 'fa' ? faNumbers[index] : `0${index + 1}`}</span><Icon aria-hidden="true" /></div><h3>{topic.title}</h3><p>{topic.text}</p><span className={styles.topicStatus}>{topic.href ? text.related : text.moreTopics}</span></>; return topic.href ? <Link className={`${styles.topicCard} ${styles.topicLink}`} href={topic.href} key={topic.title}>{content}</Link> : <article className={styles.topicCard} key={topic.title}>{content}</article> })}</div>
    </section>

    <section className={styles.standardsSection} id="editorial-standards" aria-labelledby="standards-title"><div className={styles.shell}><header className={styles.standardsHeading}><div><span className={styles.eyebrow}>{text.standardsKicker}</span><h2 id="standards-title">{text.standardsTitle}</h2></div><p>{text.standardsLead}</p></header><div className={styles.standards}>{text.standards.map((item, index) => { const Icon = standardIcons[index]; return <article key={item[0]}><span><Icon aria-hidden="true" /></span><h3>{item[0]}</h3><p>{item[1]}</p></article> })}</div><aside className={styles.medicalNote}><Info aria-hidden="true" /><p><strong>{text.noteTitle}</strong>{text.note}</p></aside></div></section>

    <section className={`${styles.shell} ${styles.contactSection}`} aria-labelledby="journal-contact-title"><div><span className={styles.eyebrow}>{text.contactKicker}</span><h2 id="journal-contact-title">{text.contactTitle}</h2><p>{text.contactText}</p></div><Link className={styles.contactButton} href={`/${locale}/contact`}><Check aria-hidden="true" />{text.contactAction}<ForwardArrow aria-hidden="true" /></Link></section>
  </main>
}
