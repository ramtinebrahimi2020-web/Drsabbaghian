import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, ChevronLeft, Clock3, Info, ShieldCheck } from 'lucide-react'
import { ArticleShare } from './ArticleShare'
import styles from './ArticleDetailFa.module.css'

export const additionalArticleSlugs = ['knee-pain-specialist-assessment', 'knee-arthroscopy-indications', 'knee-replacement-care'] as const
export type AdditionalArticleSlug = (typeof additionalArticleSlugs)[number]

type Section = { id: string; title: string; paragraphs: string[]; bullets?: string[]; note?: string }
type Article = {
  title: string; category: string; dek: string; readTime: string; cover: string; coverAlt: string; coverCaption: string
  lead: string; quote: string; sections: Section[]; tags: string[]; relatedTitle: string; relatedText: string; relatedHref: string; relatedLink: string
}

const articles: Record<AdditionalArticleSlug, Article> = {
  'knee-pain-specialist-assessment': {
    title: 'درد زانو چه زمانی به ارزیابی تخصصی نیاز دارد؟', category: 'ارزیابی درد زانو', readTime: 'حدود ۵ دقیقه مطالعه',
    dek: 'مروری عمومی بر نشانه‌هایی که می‌توانند گفت‌وگو با متخصص را مفید کنند و اطلاعاتی که در ارزیابی درد زانو کنار هم قرار می‌گیرند.',
    cover: '/images/journal/knee-pain-assessment.png', coverAlt: 'ارزیابی آرام و تخصصی زانو در فضای درمانی', coverCaption: 'الگوی درد، فعالیت‌های محدودشده و یافته‌های معاینه در کنار هم بررسی می‌شوند.',
    lead: 'درد زانو همیشه یک علت واحد ندارد. شدت درد، محل آن، زمان شروع و اثری که بر راه‌رفتن، خواب یا فعالیت‌های روزمره گذاشته است، هرکدام بخشی از تصویر را نشان می‌دهند. ارزیابی تخصصی قرار نیست به‌تنهایی نام یک درمان را مشخص کند؛ هدف آن فهم دقیق‌تر مسئله و انتخاب قدم بعدی متناسب با شرایط فرد است.',
    quote: 'زمان مراجعه فقط با شدت درد تعیین نمی‌شود؛ ادامه‌دار بودن علائم و اثر آن‌ها بر زندگی روزمره نیز اهمیت دارد.',
    sections: [
      { id: 'when', title: 'چه زمانی گفت‌وگو با متخصص می‌تواند مفید باشد؟', paragraphs: ['دردی که پس از یک آسیب مشخص شروع شده، یا در طول زمان بیشتر شده است، می‌تواند نیاز به بررسی دقیق‌تری داشته باشد. همچنین وقتی فعالیت‌هایی مانند راه‌رفتن، نشستن و برخاستن، استفاده از پله یا خواب شبانه دشوار می‌شوند، ثبت این تغییرات به تصمیم‌گیری کمک می‌کند.'], bullets: ['دردی که با وجود استراحت یا درمان‌های اولیه ادامه پیدا کرده است.', 'تورم، احساس ناپایداری یا گیرکردن مفصل که تکرار می‌شود.', 'محدودیت تازه در خم‌کردن یا صاف‌کردن زانو.', 'تغییری در میزان پیاده‌روی یا فعالیت‌هایی که پیش‌تر به‌راحتی انجام می‌شدند.'] },
      { id: 'assessment', title: 'در ارزیابی چه مواردی کنار هم دیده می‌شوند؟', paragraphs: ['شرح حال و معاینه، نقطه شروع ارزیابی هستند. پزشک درباره زمان شروع درد، موقعیت‌هایی که آن را بیشتر می‌کنند، سابقه آسیب یا جراحی و درمان‌هایی که پیش‌تر انجام شده‌اند پرسش می‌کند. معاینه نیز می‌تواند دامنه حرکت، پایداری و محل حساسیت را روشن‌تر کند.', 'رادیوگرافی یا دیگر تصاویر پزشکی زمانی معنا دارند که در کنار این یافته‌ها تفسیر شوند. یک تصویر به‌تنهایی تمام علت درد یا بهترین مسیر درمان را تعیین نمی‌کند.'] },
      { id: 'goals', title: 'هدف از ارزیابی چیست؟', paragraphs: ['پس از روشن‌شدن الگوی علائم، ممکن است ادامه مراقبت غیرجراحی، بررسی‌های تکمیلی یا گفت‌وگو درباره گزینه‌های درمانی مطرح شود. این مسیر برای همه یکسان نیست و به نوع مشکل، سطح فعالیت، وضعیت سلامت و هدف فرد از بازگشت به حرکت بستگی دارد.'], note: 'اگر درد ناگهانی و شدید، ناتوانی در تحمل وزن یا علائم نگران‌کننده‌ای دارید، مطابق راهنمایی مرکز درمانی یا خدمات فوریت‌های پزشکی اقدام کنید.' },
      { id: 'prepare', title: 'برای مراجعه چه اطلاعاتی مفید است؟', paragraphs: ['تصاویر و گزارش‌های قبلی، فهرست داروهای مصرفی و توضیح کوتاهی از درمان‌های انجام‌شده را همراه داشته باشید. یادداشت‌کردن نمونه‌های مشخص از فعالیت‌های محدودشده نیز به گفت‌وگویی روشن‌تر کمک می‌کند؛ برای مثال، مسافت قابل‌پیاده‌روی یا دشواری در استفاده از پله.'] },
    ],
    tags: ['درد زانو', 'ارزیابی تخصصی', 'آموزش بیمار'], relatedTitle: 'آشنایی بیشتر با مسیر درمان زانو', relatedText: 'در صفحه خدمات، اطلاعات عمومی درباره ارزیابی و تصمیم‌گیری در جراحی زانو و مفصل ارائه شده است.', relatedHref: '/fa/services', relatedLink: 'مشاهده خدمات تخصصی',
  },
  'knee-arthroscopy-indications': {
    title: 'آرتروسکوپی زانو برای چه آسیب‌هایی بررسی می‌شود؟', category: 'آرتروسکوپی و آسیب‌های ورزشی', readTime: 'حدود ۶ دقیقه مطالعه',
    dek: 'راهنمایی عمومی درباره نقش آرتروسکوپی در بررسی و درمان برخی مشکلات داخل مفصل زانو و عواملی که پیش از تصمیم‌گیری در نظر گرفته می‌شوند.',
    cover: '/images/journal/knee-arthroscopy-clinical.png', coverAlt: 'تجهیزات آرتروسکوپی زانو در محیط درمانی', coverCaption: 'ارزیابی آسیب زانو با کنار هم قرار دادن شرح حال، معاینه، تصاویر و هدف حرکتی فرد انجام می‌شود.',
    lead: 'آرتروسکوپی روشی است که با ابزارهای ظریف و دوربین کوچک، امکان مشاهده و انجام برخی اقدامات درون مفصل را فراهم می‌کند. مطرح‌شدن این روش به معنی مناسب‌بودن آن برای هر درد یا آسیب زانو نیست. تصمیم درباره آن پس از شناخت نوع آسیب، علائم، سطح فعالیت و پاسخ به درمان‌های دیگر شکل می‌گیرد.',
    quote: 'تصویر MRI یا عنوان یک آسیب، به‌تنهایی پاسخ نمی‌دهد که آرتروسکوپی بهترین انتخاب است یا خیر.',
    sections: [
      { id: 'role', title: 'آرتروسکوپی چه نقشی دارد؟', paragraphs: ['در بعضی مشکلات داخل مفصل، آرتروسکوپی می‌تواند به مشاهده مستقیم ساختارها و انجام اقدامات درمانی مشخص کمک کند. نوع اقدام به تشخیص و شرایط فرد بستگی دارد و هدف آن باید پیش از درمان به‌روشنی توضیح داده شود.'] },
      { id: 'injuries', title: 'چه آسیب‌هایی ممکن است در ارزیابی مطرح شوند؟', paragraphs: ['آسیب‌های ورزشی و مشکلاتی که باعث گیرکردن، ناپایداری یا محدودیت حرکت می‌شوند، از موضوعاتی هستند که ممکن است در بررسی تخصصی مطرح شوند. با این حال، وجود یک یافته در تصویر به‌تنهایی برای تصمیم‌گیری کافی نیست.'], bullets: ['برخی آسیب‌های منیسک همراه با علائم مکانیکی مشخص.', 'برخی آسیب‌های رباطی یا غضروفی که با معاینه و تصویر هم‌خوانی دارند.', 'محدودیت حرکت یا علائمی که پس از ارزیابی دقیق نیاز به بررسی بیشتری دارند.', 'شرایطی که هدف بازگشت به فعالیت یا ورزش، بخشی از برنامه درمان است.'] },
      { id: 'decision', title: 'تصمیم چگونه گرفته می‌شود؟', paragraphs: ['پزشک علائم، زمان آسیب، معاینه، تصاویر و فعالیت‌های مورد انتظار شما را کنار هم بررسی می‌کند. در بعضی شرایط، توان‌بخشی یا درمان غیرجراحی همچنان انتخاب مناسب‌تری است. در شرایط دیگر، پس از گفت‌وگو درباره فایده‌ها و محدودیت‌ها، آرتروسکوپی می‌تواند یکی از گزینه‌ها باشد.'], note: 'برنامه بازگشت به فعالیت برای همه یکسان نیست و به نوع آسیب، اقدام انجام‌شده و پاسخ بدن به توان‌بخشی بستگی دارد.' },
      { id: 'prepare', title: 'پیش از جلسه ارزیابی چه چیزهایی آماده کنید؟', paragraphs: ['گزارش و فایل تصاویر قبلی، توضیحی از زمان و نحوه آسیب و اطلاعاتی درباره ورزش یا فعالیتی که می‌خواهید به آن بازگردید، برای گفت‌وگو مفید هستند. اگر درمان‌هایی مانند فیزیوتراپی، استفاده از بریس یا تزریق انجام شده‌اند، نتیجه آن‌ها را نیز یادداشت کنید.'] },
    ],
    tags: ['آرتروسکوپی زانو', 'آسیب ورزشی', 'منیسک'], relatedTitle: 'راهنمای خدمت آرتروسکوپی زانو', relatedText: 'برای آشنایی با ارزیابی آسیب‌های داخل مفصل و مسیر بازگشت به حرکت، صفحه خدمت را ببینید.', relatedHref: '/fa/services/knee-arthroscopy', relatedLink: 'مشاهده راهنمای آرتروسکوپی',
  },
  'knee-replacement-care': {
    title: 'مراقبت‌های مهم پیش و پس از جراحی تعویض مفصل زانو', category: 'تعویض مفصل زانو', readTime: 'حدود ۷ دقیقه مطالعه',
    dek: 'مروری آموزشی بر آمادگی، پیگیری و بازتوانی پس از تعویض مفصل زانو؛ با تأکید بر اینکه برنامه هر فرد توسط تیم درمان مشخص می‌شود.',
    cover: '/images/journal/knee-replacement-rehabilitation.png', coverAlt: 'بازتوانی و تمرین راه‌رفتن در محیط فیزیوتراپی', coverCaption: 'بازگشت به حرکت فرایندی مرحله‌به‌مرحله است و برنامه آن بر اساس شرایط هر بیمار تنظیم می‌شود.',
    lead: 'مسیر تعویض مفصل زانو فقط به روز جراحی محدود نمی‌شود. آمادگی پیش از درمان، هماهنگی با تیم مراقبت و پیگیری مرحله‌به‌مرحله پس از آن، بخش مهمی از برنامه هستند. جزئیات این برنامه با توجه به وضعیت سلامت، نوع جراحی و نیازهای حرکتی هر فرد تفاوت دارد.',
    quote: 'هدف بازتوانی، پیشرفت تدریجی و ایمن است؛ سرعت بازگشت برای همه یکسان نیست.',
    sections: [
      { id: 'before', title: 'پیش از جراحی چه آمادگی‌هایی مطرح می‌شود؟', paragraphs: ['تیم درمان معمولاً سوابق پزشکی، داروها، شرایط عمومی سلامت و برنامه مراقبت در روزهای نخست را مرور می‌کند. پرسیدن سؤال درباره آمادگی منزل، همراهی خانواده یا زمان‌بندی مراجعه‌ها می‌تواند به برنامه‌ریزی دقیق‌تر کمک کند.', 'دستورهای اختصاصی درباره دارو، غذا، فعالیت یا آزمایش‌ها باید فقط از تیم درمان خودتان دریافت و دنبال شوند.'] },
      { id: 'early', title: 'روزهای نخست پس از درمان', paragraphs: ['کنترل درد، حرکت تدریجی و آشنایی با دستورهای پیگیری، محورهای اولیه مراقبت هستند. تیم درمان درباره فعالیت مجاز، مراقبت از محل جراحی و زمان مراجعه‌های بعدی راهنمایی می‌کند. پیروی از همین دستورها مهم‌تر از مقایسه روند خود با دیگران است.'], bullets: ['سؤال‌های خود را پیش از ترخیص یادداشت کنید.', 'داروها و زمان‌بندی پیگیری را مطابق نسخه و توصیه تیم درمان دنبال کنید.', 'برای حرکت و تمرین‌ها، برنامه‌ای را انجام دهید که برای شرایط شما تعیین شده است.'] },
      { id: 'rehab', title: 'بازتوانی و بازگشت به حرکت', paragraphs: ['بازتوانی به بهبود دامنه حرکت، قدرت و اعتماد به راه‌رفتن کمک می‌کند. میزان پیشرفت می‌تواند از فردی به فرد دیگر متفاوت باشد و با توجه به وضعیت اولیه، پاسخ بدن و برنامه درمان تنظیم می‌شود.', 'هدف‌گذاری‌های کوچک و قابل‌پیگیری، مانند انجام تمرین‌ها طبق برنامه یا افزایش تدریجی فعالیت بر اساس راهنمایی تیم درمان، مسیر را روشن‌تر می‌کند.'], note: 'در صورت مشاهده علائم غیرمعمول یا نگرانی درباره روند بهبودی، با تیم درمان یا مرکز تعیین‌شده تماس بگیرید و از تصمیم‌گیری خودسرانه درباره دارو یا فعالیت پرهیز کنید.' },
      { id: 'followup', title: 'پیگیری منظم چرا اهمیت دارد؟', paragraphs: ['ویزیت‌های پیگیری فرصتی برای بررسی روند بهبود، پاسخ به پرسش‌ها و تنظیم برنامه بازتوانی هستند. همراه‌داشتن فهرستی کوتاه از تغییرات، علائم یا دشواری‌های روزمره به گفت‌وگوی دقیق‌تر در این جلسات کمک می‌کند.'] },
    ],
    tags: ['تعویض مفصل زانو', 'بازتوانی', 'مراقبت پس از جراحی'], relatedTitle: 'مسیر تعویض مفصل زانو', relatedText: 'اطلاعات تکمیلی درباره ارزیابی، تصمیم‌گیری و آمادگی برای تعویض مفصل زانو در صفحه خدمت ارائه شده است.', relatedHref: '/fa/services/knee-replacement', relatedLink: 'مشاهده راهنمای تعویض مفصل',
  },
}

export function AdditionalArticleDetail({ article }: { article: AdditionalArticleSlug }) {
  const text = articles[article]
  return <main className={`${styles.page} ${styles.rtl}`}><article>
    <header className={styles.articleHeader}><div className={styles.wide}><nav className={styles.breadcrumb} aria-label={text.category}><Link href="/fa">صفحه اصلی</Link><span>/</span><Link href="/fa/journal">مجله سلامت</Link><span>/</span><span>{text.category}</span></nav><div className={styles.headerGrid}><div className={styles.headerCopy}><Link className={styles.category} href="/fa/journal">{text.category}</Link><h1>{text.title}</h1><p className={styles.dek}>{text.dek}</p><div className={styles.articleInfo}><div className={styles.author}><span className={styles.authorMark}>دص</span><span><strong>دکتر علیرضا صباغیان</strong><small>متخصص جراحی استخوان و مفاصل</small></span></div><div className={styles.readingMeta}><span><Clock3 aria-hidden="true" />{text.readTime}</span><span><ShieldCheck aria-hidden="true" />بازبینی تخصصی</span></div></div><ArticleShare title={text.title} locale="fa" compact /></div><figure className={styles.cover}><div className={styles.coverMedia}><Image src={text.cover} alt={text.coverAlt} fill sizes="(max-width: 800px) 100vw, 45vw" priority /></div><figcaption>{text.coverCaption}</figcaption></figure></div></div></header>
    <div className={`${styles.wide} ${styles.readingLayout}`}><aside className={styles.contents} aria-label="در این مقاله"><span><BookOpen aria-hidden="true" />در این مقاله</span>{text.sections.map(section => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}</aside><div className={styles.prose}><p className={styles.lead} id="overview">{text.lead}</p><blockquote><p>{text.quote}</p></blockquote>{text.sections.map(section => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}{section.note && <aside className={styles.inlineNote}><Info aria-hidden="true" /><p><strong>نکته پزشکی</strong>{section.note}</p></aside>}</section>)}<aside className={styles.disclaimer}><Info aria-hidden="true" /><div><strong>درباره این مطلب</strong><p>این مقاله برای آموزش عمومی تهیه شده و جایگزین معاینه، تشخیص یا توصیه درمانی متناسب با شرایط فردی نیست.</p></div></aside><footer className={styles.articleFooter}><div className={styles.tags}><span>برچسب‌ها:</span>{text.tags.map(tag => <Link href="/fa/journal" key={tag}>{tag}</Link>)}</div><ArticleShare title={text.title} locale="fa" /></footer></div><aside className={styles.shareRail}><ArticleShare title={text.title} locale="fa" /></aside></div>
  </article><section className={styles.afterArticle} aria-labelledby="continue-reading"><div className={styles.narrow}><span>ادامه مطالعه</span><h2 id="continue-reading">{text.relatedTitle}</h2><p>{text.relatedText}</p><Link href={text.relatedHref}>{text.relatedLink}<ChevronLeft aria-hidden="true" /></Link></div></section></main>
}

export function getAdditionalArticle(article: string) {
  return additionalArticleSlugs.includes(article as AdditionalArticleSlug) ? articles[article as AdditionalArticleSlug] : undefined
}
