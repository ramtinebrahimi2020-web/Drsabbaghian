import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, ChevronLeft, ChevronRight, Clock3, Info, ShieldCheck } from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import { ArticleShare } from './ArticleShare'
import styles from './ArticleDetailFa.module.css'

const copy = {
  fa: {
    home: 'صفحه اصلی', journal: 'مجله سلامت', topic: 'تعویض مفصل زانو', category: 'تعویض مفصل زانو و لگن',
    title: 'چه زمانی بررسی تعویض مفصل زانو مطرح می‌شود؟',
    dek: 'راهنمایی عمومی درباره نشانه‌هایی که ممکن است ارزیابی تخصصی را مطرح کنند و اطلاعاتی که پیش از انتخاب مسیر درمان باید کنار هم قرار گیرند.',
    initials: 'دص', author: 'دکتر علیرضا صباغیان', role: 'متخصص جراحی استخوان و مفاصل', readTime: 'حدود ۶ دقیقه مطالعه', reviewed: 'بازبینی تخصصی',
    coverAlt: 'آماده‌سازی تجهیزات جراحی زانو در محیط درمانی', coverCaption: 'تصمیم درمانی پس از کنار هم قرار دادن شرح حال، معاینه، تصاویر و نیازهای حرکتی فرد شکل می‌گیرد.',
    tocTitle: 'در این مقاله', toc: ['پاسخ کوتاه', 'نشانه‌های قابل بررسی', 'ارزیابی تخصصی', 'شکل‌گیری تصمیم', 'آمادگی برای مراجعه'],
    lead: 'درد زانو و محدودیت حرکت می‌توانند علت‌های متفاوتی داشته باشند. مطرح‌شدن ارزیابی تعویض مفصل به معنی تصمیم قطعی برای جراحی نیست؛ این ارزیابی فرصتی است برای بررسی دقیق علت علائم، مرور درمان‌های انجام‌شده و گفت‌وگو درباره گزینه‌های ممکن.',
    quote: 'زمان بررسی تخصصی معمولاً وقتی مطرح می‌شود که درد و کاهش عملکرد ادامه‌دار باشد، زندگی روزمره را تحت تأثیر قرار دهد و پاسخ به درمان‌های قبلی کافی نباشد.',
    signalsTitle: 'چه نشانه‌هایی ممکن است ارزیابی تخصصی را مطرح کنند؟',
    signalsIntro: 'هیچ علامت منفردی تعیین‌کننده نیست. پزشک شدت و مدت علائم را همراه با اثری که بر خواب، راه‌رفتن، بالا رفتن از پله و انجام کارهای روزمره گذاشته‌اند بررسی می‌کند.',
    signalsListIntro: 'موارد زیر از موضوعاتی هستند که ممکن است در گفت‌وگوی اولیه مطرح شوند:',
    signals: [['درد مداوم یا رو به افزایش', 'که فعالیت روزمره یا استراحت شبانه را مختل می‌کند.'], ['کاهش توان حرکتی', 'مانند محدودشدن پیاده‌روی، دشواری در برخاستن یا استفاده از پله.'], ['پاسخ ناکافی به درمان‌های پیشین', 'پس از طی‌کردن مسیر درمانی متناسب با شرایط فرد.'], ['تغییر در استقلال روزمره', 'و نیاز فزاینده به کمک برای انجام فعالیت‌های معمول.']],
    imaging: 'شدت تغییرات در تصویر رادیولوژی همیشه با میزان درد یکسان نیست. به همین دلیل، تصاویر پزشکی بدون شرح حال و معاینه به‌تنهایی مبنای انتخاب درمان قرار نمی‌گیرند.',
    assessmentTitle: 'در ارزیابی تخصصی چه چیزهایی بررسی می‌شوند؟',
    assessmentOne: 'جلسه ارزیابی با شناخت الگوی درد و محدودیت آغاز می‌شود. زمان شروع علائم، فعالیت‌هایی که دشوار شده‌اند، درمان‌های قبلی و هدف فرد از بازگشت به حرکت، تصویر روشن‌تری از مسئله ایجاد می‌کنند.',
    examTitle: 'معاینه و تصاویر چه نقشی دارند؟', examText: 'در معاینه، دامنه حرکت، پایداری، راستای اندام و محل ایجاد درد بررسی می‌شود. رادیوگرافی یا سایر تصاویر مرتبط نیز در کنار این یافته‌ها تفسیر می‌شوند. این ترکیب کمک می‌کند ارتباط میان تغییرات ساختاری و علائمی که بیمار تجربه می‌کند بهتر سنجیده شود.',
    medicalTip: 'نکته پزشکی', medicalTipText: 'وجود درد شدید یا یک یافته تصویربرداری به‌تنهایی به معنی مناسب‌بودن تعویض مفصل برای هر فرد نیست.',
    decisionTitle: 'تصمیم درمانی چگونه شکل می‌گیرد؟', decisionOne: 'تصمیم نهایی حاصل گفت‌وگو میان بیمار و پزشک است. در این گفت‌وگو، فایده‌ها و محدودیت‌های هر گزینه، وضعیت عمومی سلامت، نیازهای حرکتی و انتظارهای واقع‌بینانه مرور می‌شوند.', decisionTwo: 'برای بعضی افراد ادامه درمان غیرجراحی همچنان انتخاب مناسب‌تری است. برای گروهی دیگر، پس از تکمیل ارزیابی و در نظر گرفتن شرایط فردی، جراحی می‌تواند به‌عنوان یکی از گزینه‌ها مطرح شود. هدف این فرایند رسیدن به تصمیمی روشن است که فقط به یک علامت، سن یا تصویر وابسته نباشد.',
    questionsTitle: 'چه پرسش‌هایی به تصمیم بهتر کمک می‌کنند؟', questions: ['علائم تا چه اندازه فعالیت‌های مهم زندگی را محدود کرده‌اند؟', 'کدام درمان‌ها امتحان شده‌اند و پاسخ به آن‌ها چگونه بوده است؟', 'از درمان چه تغییر واقع‌بینانه‌ای انتظار می‌رود؟', 'وضعیت عمومی سلامت چه اثری بر انتخاب و برنامه درمان دارد؟'],
    preparationTitle: 'برای جلسه ارزیابی چه همراه داشته باشیم؟', preparationOne: 'مدارک کامل‌تر به گفت‌وگویی منظم‌تر کمک می‌کنند. بهتر است تصاویر و گزارش‌های پزشکی پیشین، فهرست داروهای مصرفی و خلاصه‌ای از درمان‌هایی مانند فیزیوتراپی، تزریق یا جراحی قبلی همراه شما باشد.', preparationTwo: 'همچنین فعالیت‌هایی را که به علت مشکل زانو محدود شده‌اند یادداشت کنید. بیان نمونه‌های مشخص، مانند میزان مسافت قابل‌پیاده‌روی یا دشواری در استفاده از پله، به ارزیابی اثر واقعی علائم کمک می‌کند.',
    about: 'درباره این مطلب', disclaimer: 'این مقاله برای آموزش عمومی تهیه شده و جایگزین معاینه، تشخیص یا توصیه درمانی متناسب با شرایط فردی نیست.', tagsLabel: 'برچسب‌ها:', tags: ['زانو', 'تعویض مفصل', 'آموزش بیمار'],
    continue: 'ادامه مطالعه', relatedTitle: 'اطلاعات تکمیلی درباره مسیر درمان', relatedText: 'برای آشنایی با ارزیابی، آمادگی و پیگیری تعویض مفصل زانو می‌توانید راهنمای خدمت را ببینید.', relatedLink: 'مطالعه راهنمای تعویض مفصل زانو',
  },
  en: {
    home: 'Home', journal: 'Health journal', topic: 'Knee replacement', category: 'Knee and hip replacement',
    title: 'When may knee replacement evaluation be considered?',
    dek: 'General guidance on symptoms that may prompt a specialist assessment and the information considered before choosing a treatment path.',
    initials: 'AS', author: 'Dr. Alireza Sabbaghian', role: 'Orthopaedic surgeon', readTime: 'About 6 minutes', reviewed: 'Clinically reviewed',
    coverAlt: 'Knee surgery equipment being prepared in a clinical setting', coverCaption: 'Treatment decisions bring together the history, examination, imaging, and the patient’s movement needs.',
    tocTitle: 'In this article', toc: ['A short answer', 'Symptoms to consider', 'Specialist assessment', 'How decisions are made', 'Preparing for a visit'],
    lead: 'Knee pain and reduced movement can have many causes. Considering a knee replacement assessment does not mean that surgery has already been chosen. It is an opportunity to understand the symptoms, review previous care, and discuss the available options.',
    quote: 'A specialist assessment may be considered when pain and loss of function persist, affect everyday life, and have not improved enough with previous treatment.',
    signalsTitle: 'What symptoms may prompt a specialist assessment?',
    signalsIntro: 'No single symptom determines the answer. The duration and severity of symptoms are considered together with their effect on sleep, walking, stairs, and everyday activities.',
    signalsListIntro: 'Topics commonly discussed during an initial consultation include:',
    signals: [['Persistent or increasing pain', 'that interferes with daily activity or sleep.'], ['Reduced mobility', 'such as limited walking, difficulty standing up, or using stairs.'], ['Insufficient response to previous care', 'after an appropriate course of treatment for the individual.'], ['Loss of everyday independence', 'and a growing need for help with routine activities.']],
    imaging: 'The degree of change on an X-ray does not always match the amount of pain. Imaging is therefore interpreted alongside the history and examination rather than used alone to select treatment.',
    assessmentTitle: 'What is reviewed during a specialist assessment?',
    assessmentOne: 'The assessment begins with the pattern of pain and limitation. When symptoms began, which activities have become difficult, previous treatment, and the patient’s goals all help build a clearer clinical picture.',
    examTitle: 'What roles do examination and imaging play?', examText: 'The examination reviews movement, stability, limb alignment, and where pain occurs. Radiographs or other relevant images are interpreted alongside these findings to understand how structural changes relate to the symptoms being experienced.',
    medicalTip: 'Medical note', medicalTipText: 'Severe pain or an imaging finding alone does not mean knee replacement is appropriate for every person.',
    decisionTitle: 'How is a treatment decision made?', decisionOne: 'The final decision develops through discussion between the patient and physician. The benefits and limitations of each option, general health, movement needs, and realistic expectations are reviewed together.', decisionTwo: 'For some people, continued non-surgical care remains the more suitable choice. For others, surgery may become an option after a complete assessment. The aim is a clear decision that does not depend on one symptom, age, or image alone.',
    questionsTitle: 'Which questions support a better decision?', questions: ['How much do the symptoms limit activities that matter to you?', 'Which treatments have been tried, and how did you respond?', 'What realistic change do you expect from treatment?', 'How might your general health affect the choice and treatment plan?'],
    preparationTitle: 'What should you bring to an assessment?', preparationOne: 'Complete records support a more structured discussion. Bring previous medical images and reports, a current medication list, and a summary of care such as physiotherapy, injections, or earlier surgery.', preparationTwo: 'It also helps to note the activities limited by the knee problem. Specific examples, such as walking distance or difficulty on stairs, make the everyday effect of symptoms easier to assess.',
    about: 'About this article', disclaimer: 'This article provides general education and does not replace an examination, diagnosis, or medical advice tailored to an individual.', tagsLabel: 'Topics:', tags: ['Knee', 'Joint replacement', 'Patient education'],
    continue: 'Continue reading', relatedTitle: 'More about the treatment pathway', relatedText: 'Read the service guide for more information about assessment, preparation, and follow-up for knee replacement.', relatedLink: 'Read the knee replacement guide',
  },
  ar: {
    home: 'الصفحة الرئيسية', journal: 'مجلة الصحة', topic: 'استبدال مفصل الركبة', category: 'استبدال مفصل الركبة والورك',
    title: 'متى قد يُطرح تقييم استبدال مفصل الركبة؟',
    dek: 'دليل عام حول الأعراض التي قد تستدعي تقييماً تخصصياً والمعلومات التي تُراجع قبل اختيار مسار العلاج.',
    initials: 'عص', author: 'الدكتور عليرضا صباغيان', role: 'اختصاصي جراحة العظام والمفاصل', readTime: 'نحو 6 دقائق للقراءة', reviewed: 'مراجعة تخصصية',
    coverAlt: 'تجهيز معدات جراحة الركبة في بيئة علاجية', coverCaption: 'يتشكل القرار العلاجي بعد جمع السيرة المرضية والفحص والصور واحتياجات المريض الحركية.',
    tocTitle: 'في هذه المقالة', toc: ['إجابة مختصرة', 'أعراض تستحق التقييم', 'التقييم التخصصي', 'اتخاذ القرار', 'الاستعداد للمراجعة'],
    lead: 'قد تكون لألم الركبة ومحدودية الحركة أسباب متعددة. طرح تقييم استبدال المفصل لا يعني اتخاذ قرار الجراحة؛ بل هو فرصة لفهم الأعراض ومراجعة العلاجات السابقة ومناقشة الخيارات المتاحة.',
    quote: 'قد يُطرح التقييم التخصصي عندما يستمر الألم وتراجع الوظيفة ويؤثرا في الحياة اليومية من دون تحسن كافٍ بعد العلاجات السابقة.',
    signalsTitle: 'ما الأعراض التي قد تستدعي تقييماً تخصصياً؟',
    signalsIntro: 'لا يحدد عرض واحد القرار. تُراجع مدة الأعراض وشدتها إلى جانب تأثيرها في النوم والمشي وصعود الدرج والأنشطة اليومية.',
    signalsListIntro: 'من الموضوعات التي قد تُناقش في المراجعة الأولية:',
    signals: [['ألم مستمر أو متزايد', 'يعيق النشاط اليومي أو الراحة الليلية.'], ['تراجع القدرة على الحركة', 'مثل محدودية المشي أو صعوبة النهوض أو استخدام الدرج.'], ['استجابة غير كافية للعلاجات السابقة', 'بعد اتباع مسار علاجي يناسب حالة المريض.'], ['تراجع الاستقلال في الحياة اليومية', 'والحاجة المتزايدة إلى المساعدة في الأنشطة المعتادة.']],
    imaging: 'لا تتطابق شدة التغيرات في صورة الأشعة دائماً مع مقدار الألم. لذلك تُفسر الصور إلى جانب السيرة المرضية والفحص ولا تُستخدم وحدها لاختيار العلاج.',
    assessmentTitle: 'ما الذي يُراجع خلال التقييم التخصصي؟',
    assessmentOne: 'يبدأ التقييم بفهم نمط الألم والقيود الحركية. ويساعد وقت بداية الأعراض والأنشطة التي أصبحت صعبة والعلاجات السابقة وأهداف المريض في تكوين صورة سريرية أوضح.',
    examTitle: 'ما دور الفحص والصور الطبية؟', examText: 'يُراجع في الفحص مدى الحركة وثبات المفصل واستقامة الطرف وموضع الألم. وتُفسر الأشعة أو الصور الأخرى إلى جانب هذه النتائج لفهم العلاقة بين التغيرات البنيوية والأعراض.',
    medicalTip: 'ملاحظة طبية', medicalTipText: 'لا يعني الألم الشديد أو وجود نتيجة في الصور أن استبدال المفصل مناسب لكل مريض.',
    decisionTitle: 'كيف يُتخذ القرار العلاجي؟', decisionOne: 'يتشكل القرار النهائي من خلال الحوار بين المريض والطبيب. وتُراجع فوائد كل خيار وحدوده والحالة الصحية العامة والاحتياجات الحركية والتوقعات الواقعية.', decisionTwo: 'قد يكون استمرار العلاج غير الجراحي أنسب لبعض المرضى، بينما قد تصبح الجراحة خياراً لآخرين بعد اكتمال التقييم. والهدف قرار واضح لا يعتمد على عرض أو عمر أو صورة واحدة.',
    questionsTitle: 'ما الأسئلة التي تساعد على اتخاذ قرار أفضل؟', questions: ['إلى أي مدى تحد الأعراض من الأنشطة المهمة لك؟', 'ما العلاجات التي جُربت وكيف كانت الاستجابة؟', 'ما التغيير الواقعي المتوقع من العلاج؟', 'كيف قد تؤثر الصحة العامة في الاختيار وخطة العلاج؟'],
    preparationTitle: 'ما الذي يُنصح بإحضاره إلى التقييم؟', preparationOne: 'تساعد السجلات الكاملة على نقاش أكثر تنظيماً. أحضر الصور والتقارير السابقة وقائمة الأدوية الحالية وملخصاً للعلاجات مثل العلاج الطبيعي أو الحقن أو العمليات السابقة.', preparationTwo: 'ومن المفيد أيضاً تدوين الأنشطة التي قيدتها مشكلة الركبة. تساعد الأمثلة المحددة، مثل مسافة المشي أو صعوبة صعود الدرج، على تقييم أثر الأعراض في الحياة اليومية.',
    about: 'حول هذه المقالة', disclaimer: 'تقدم هذه المقالة معلومات تثقيفية عامة ولا تغني عن الفحص أو التشخيص أو المشورة الطبية الفردية.', tagsLabel: 'الموضوعات:', tags: ['الركبة', 'استبدال المفصل', 'تثقيف المريض'],
    continue: 'تابع القراءة', relatedTitle: 'معلومات إضافية عن مسار العلاج', relatedText: 'اقرأ دليل الخدمة للتعرف إلى التقييم والاستعداد والمتابعة في استبدال مفصل الركبة.', relatedLink: 'قراءة دليل استبدال مفصل الركبة',
  },
} as const

const ids = ['overview', 'signals', 'assessment', 'decision', 'preparation']

export function ArticleDetail({ locale }: { locale: Locale }) {
  const text = copy[locale]
  const NextIcon = locale === 'en' ? ChevronRight : ChevronLeft
  return <main className={`${styles.page} ${locale === 'en' ? styles.ltr : styles.rtl}`}>
    <article>
      <header className={styles.articleHeader}><div className={styles.wide}>
        <nav className={styles.breadcrumb} aria-label={text.topic}><Link href={`/${locale}`}>{text.home}</Link><span>/</span><Link href={`/${locale}/journal`}>{text.journal}</Link><span>/</span><span>{text.topic}</span></nav>
        <div className={styles.headerGrid}>
          <div className={styles.headerCopy}>
            <Link className={styles.category} href={`/${locale}/journal`}>{text.category}</Link><h1>{text.title}</h1><p className={styles.dek}>{text.dek}</p>
            <div className={styles.articleInfo}><div className={styles.author}><span className={styles.authorMark}>{text.initials}</span><span><strong>{text.author}</strong><small>{text.role}</small></span></div><div className={styles.readingMeta}><span><Clock3 aria-hidden="true" />{text.readTime}</span><span><ShieldCheck aria-hidden="true" />{text.reviewed}</span></div></div>
            <ArticleShare title={text.title} locale={locale} compact />
          </div>
          <figure className={styles.cover}><div className={styles.coverMedia}><Image src="/images/gallery/knee-replacement-workflow.webp" alt={text.coverAlt} fill sizes="(max-width: 800px) 100vw, 45vw" priority /></div><figcaption>{text.coverCaption}</figcaption></figure>
        </div>
      </div></header>

      <div className={`${styles.wide} ${styles.readingLayout}`}>
        <aside className={styles.contents} aria-label={text.tocTitle}><span><BookOpen aria-hidden="true" />{text.tocTitle}</span>{text.toc.map((item, index) => <a href={`#${ids[index]}`} key={item}>{item}</a>)}</aside>
        <div className={styles.prose}>
          <p className={styles.lead} id="overview">{text.lead}</p><blockquote><p>{text.quote}</p></blockquote>
          <section id="signals"><h2>{text.signalsTitle}</h2><p>{text.signalsIntro}</p><p>{text.signalsListIntro}</p><ul>{text.signals.map(item => <li key={item[0]}><strong>{item[0]}</strong> {item[1]}</li>)}</ul><p>{text.imaging}</p></section>
          <section id="assessment"><h2>{text.assessmentTitle}</h2><p>{text.assessmentOne}</p><h3>{text.examTitle}</h3><p>{text.examText}</p><aside className={styles.inlineNote}><Info aria-hidden="true" /><p><strong>{text.medicalTip}</strong>{text.medicalTipText}</p></aside></section>
          <section id="decision"><h2>{text.decisionTitle}</h2><p>{text.decisionOne}</p><p>{text.decisionTwo}</p><h3>{text.questionsTitle}</h3><ul>{text.questions.map(item => <li key={item}>{item}</li>)}</ul></section>
          <section id="preparation"><h2>{text.preparationTitle}</h2><p>{text.preparationOne}</p><p>{text.preparationTwo}</p></section>
          <aside className={styles.disclaimer}><Info aria-hidden="true" /><div><strong>{text.about}</strong><p>{text.disclaimer}</p></div></aside>
          <footer className={styles.articleFooter}><div className={styles.tags}><span>{text.tagsLabel}</span>{text.tags.map(tag => <Link href={`/${locale}/journal`} key={tag}>{tag}</Link>)}</div><ArticleShare title={text.title} locale={locale} /></footer>
        </div>
        <aside className={styles.shareRail}><ArticleShare title={text.title} locale={locale} /></aside>
      </div>
    </article>
    <section className={styles.afterArticle} aria-labelledby="continue-reading"><div className={styles.narrow}><span>{text.continue}</span><h2 id="continue-reading">{text.relatedTitle}</h2><p>{text.relatedText}</p><Link href={`/${locale}/services/knee-replacement`}>{text.relatedLink}<NextIcon aria-hidden="true" /></Link></div></section>
  </main>
}
