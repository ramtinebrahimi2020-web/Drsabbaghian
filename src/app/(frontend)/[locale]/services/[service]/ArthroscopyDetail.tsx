import Image from 'next/image'
import Link from 'next/link'
import {
  Activity, ArrowDown, ArrowLeft, ArrowRight, CalendarCheck2, Check, CircleDot,
  ClipboardCheck, FileImage, Focus, Info, MoveUpLeft, MoveUpRight, ScanLine,
  ShieldCheck, Stethoscope,
} from 'lucide-react'
import type { Locale } from '@/lib/siteContent'
import styles from './ArthroscopyDetail.module.css'

const copy = {
  fa: {
    home: 'صفحه اصلی', services: 'خدمات تخصصی', service: 'آرتروسکوپی زانو',
    kicker: 'آرتروسکوپی و آسیب‌های ورزشی', heroTop: 'مشاهده دقیق مفصل؛', heroAccent: 'تصمیم هدفمند برای حرکت',
    lead: 'آشنایی عمومی با ارزیابی آسیب‌های داخل زانو، نقش آرتروسکوپی و مسیر بازگشت برنامه‌ریزی‌شده به فعالیت.',
    arrange: 'هماهنگی ارزیابی', explore: 'بررسی مسیر درمان', assuranceOne: 'ارزیابی دقیق داخل مفصل', assuranceTwo: 'انتخاب درمان بر اساس نوع آسیب',
    visualLabel: 'نمای آرتروسکوپی زانو', scopeAlt: 'تجهیزات آرتروسکوپی و مانیتور داخل مفصل زانو', anatomyAlt: 'نمای آموزشی ساختار مفصل زانو', access: 'دسترسی کم‌تهاجمی', incisions: 'با برش‌های کوچک',
    onPage: 'در این صفحه', nav: ['موارد بررسی', 'ارزیابی و تصمیم', 'بازتوانی و پیگیری'],
    indicationsKicker: 'چه زمانی مطرح می‌شود؟', indicationsTitle: 'آرتروسکوپی، بخشی از پاسخ است؛ نه نقطه شروع همه درمان‌ها',
    indicationsLead: 'بررسی آرتروسکوپی زمانی مطرح می‌شود که شرح حال، معاینه و تصاویر نشان دهند مشاهده یا درمان داخل مفصل می‌تواند در مسیر مراقبت نقش داشته باشد.',
    situations: [
      ['آسیب‌های داخل مفصل', 'بررسی مشکلاتی مانند آسیب منیسک یا برخی ضایعات غضروفی بر اساس علائم، معاینه و تصاویر.'],
      ['آسیب‌های ورزشی زانو', 'ارزیابی آسیب‌های مرتبط با فعالیت ورزشی و اثر آن‌ها بر پایداری و عملکرد مفصل.'],
      ['علائم مکانیکی مداوم', 'بررسی قفل‌شدن، گیرکردن یا محدودیت حرکتی ماندگار برای یافتن علت و انتخاب مسیر مناسب.'],
    ],
    context: 'وجود درد یا مشاهده یک یافته در MRI به‌تنهایی به معنای نیاز به آرتروسکوپی نیست. تصمیم درمان پس از تطبیق علائم، معاینه، تصاویر و نیازهای حرکتی فرد شکل می‌گیرد.',
    assessmentKicker: 'از تشخیص تا انتخاب درمان', assessmentTitle: 'چهار مرحله برای یک تصمیم دقیق‌تر', assessmentLead: 'نوع آسیب، سطح فعالیت و هدف بیمار از بازگشت به حرکت، مسیر درمان و بازتوانی را تغییر می‌دهد.',
    pathway: [
      ['گفت‌وگو و معاینه', 'نوع آسیب، زمان شروع علائم، فعالیت ورزشی و پایداری زانو بررسی می‌شود.'],
      ['تصویربرداری هدفمند', 'تصاویر پزشکی در کنار یافته‌های معاینه تفسیر می‌شوند و به‌تنهایی تعیین‌کننده نیستند.'],
      ['مقایسه مسیرهای درمان', 'درمان غیرجراحی و جراحی با توجه به نوع آسیب، نیاز فرد و هدف بازگشت به فعالیت مقایسه می‌شوند.'],
      ['برنامه درمان و بازتوانی', 'در صورت انتخاب آرتروسکوپی، برنامه جراحی و توان‌بخشی متناسب با آسیب تنظیم می‌شود.'],
    ],
    recoveryKicker: 'پس از درمان', recoveryTitle: 'بازتوانی، ادامه مسیر درمان است', recoveryLead: 'سرعت بازگشت به فعالیت برای همه یکسان نیست و به نوع آسیب، اقدام انجام‌شده، شرایط جسمی و پاسخ بدن به توان‌بخشی بستگی دارد.',
    recoveryItems: [
      ['کنترل درد و تورم', 'دستورهای اختصاصی پس از درمان و علائم نیازمند پیگیری توضیح داده می‌شوند.'],
      ['بازیابی حرکت و قدرت', 'تمرین‌ها و محدودیت‌ها متناسب با نوع آسیب و اقدام انجام‌شده تنظیم می‌شوند.'],
      ['بازگشت مرحله‌ای به ورزش', 'معیارهای عملکردی و نظر تیم درمان، زمان بازگشت را مشخص می‌کنند.'],
    ],
    article: 'مطالعه مطالب آموزشی زانو', recoveryAlt: 'ارزیابی حرکت زانو در جلسه توان‌بخشی', recoveryGoal: 'هدف بازتوانی', saferReturn: 'حرکت کنترل‌شده و بازگشت ایمن‌تر',
    prepKicker: 'برای جلسه ارزیابی', prepTitle: 'اطلاعاتی که گفت‌وگو را دقیق‌تر می‌کنند', prepLead: 'مدارک کامل‌تر به بررسی منظم‌تر کمک می‌کنند، اما تشخیص نهایی بر اساس مجموعه اطلاعات و معاینه شکل می‌گیرد.',
    prepItems: [['تصاویر پزشکی', 'MRI، رادیوگرافی و گزارش‌های مرتبط قبلی را همراه داشته باشید.'], ['سوابق درمان', 'فیزیوتراپی، داروها، تزریق‌ها یا جراحی‌های پیشین را ثبت کنید.'], ['هدف حرکتی', 'فعالیت‌هایی را که به‌دلیل مشکل زانو محدود شده‌اند، مشخص کنید.']],
    medicalInfo: 'اطلاعات عمومی پزشکی', note: 'محتوای این صفحه برای آشنایی عمومی است و جایگزین معاینه، تشخیص یا توصیه درمانی فردی نیست.',
    next: 'قدم بعدی', ctaTitle: 'برای ارزیابی آسیب زانو هماهنگ کنید', ctaText: 'شرح علائم، معاینه، تصاویر و هدف شما از بازگشت به فعالیت در کنار هم بررسی می‌شوند.', contact: 'اطلاعات تماس و مراکز مراجعه',
  },
  en: {
    home: 'Home', services: 'Specialist services', service: 'Knee arthroscopy',
    kicker: 'Knee arthroscopy and sports injuries', heroTop: 'A closer view inside the joint;', heroAccent: 'a focused plan for movement',
    lead: 'General guidance on assessing injuries inside the knee, the role of arthroscopy, and a planned return to activity.',
    arrange: 'Arrange an assessment', explore: 'Explore the care pathway', assuranceOne: 'Careful assessment inside the joint', assuranceTwo: 'Treatment guided by the type of injury',
    visualLabel: 'Knee arthroscopy view', scopeAlt: 'Arthroscopy equipment and a monitor showing the inside of the knee joint', anatomyAlt: 'Educational view of knee joint anatomy', access: 'Minimally invasive access', incisions: 'through small incisions',
    onPage: 'On this page', nav: ['When it is considered', 'Assessment and decision', 'Rehabilitation and follow-up'],
    indicationsKicker: 'When is it considered?', indicationsTitle: 'Arthroscopy can be part of the answer, but it is not the starting point for every condition',
    indicationsLead: 'Arthroscopy may be considered when the history, examination, and imaging suggest that looking inside or treating the joint could contribute to care.',
    situations: [
      ['Injuries inside the joint', 'Problems such as meniscal injuries or certain cartilage lesions are assessed alongside symptoms, examination, and imaging.'],
      ['Sports-related knee injuries', 'The effect of a sports injury on joint stability and function is assessed in relation to the patient’s activity goals.'],
      ['Persistent mechanical symptoms', 'Ongoing locking, catching, or restricted movement is assessed to identify the cause and a suitable care path.'],
    ],
    context: 'Pain or a finding on MRI alone does not necessarily mean arthroscopy is needed. A treatment decision brings together symptoms, examination, imaging, and the patient’s movement needs.',
    assessmentKicker: 'From diagnosis to a treatment choice', assessmentTitle: 'Four steps toward a more informed decision', assessmentLead: 'The type of injury, activity level, and goal for returning to movement all shape treatment and rehabilitation.',
    pathway: [
      ['Discussion and examination', 'The injury, onset of symptoms, sporting activity, and knee stability are assessed.'],
      ['Targeted imaging review', 'Medical images are interpreted alongside examination findings and do not determine treatment on their own.'],
      ['Comparing care options', 'Non-surgical and surgical options are considered in light of the injury, individual needs, and activity goals.'],
      ['Treatment and rehabilitation plan', 'If arthroscopy is selected, surgery and rehabilitation are planned around the specific injury.'],
    ],
    recoveryKicker: 'After treatment', recoveryTitle: 'Rehabilitation is part of the treatment journey', recoveryLead: 'The pace of returning to activity varies with the injury, the procedure performed, general health, and the body’s response to rehabilitation.',
    recoveryItems: [
      ['Managing pain and swelling', 'Individual aftercare instructions and symptoms that require follow-up are explained.'],
      ['Restoring movement and strength', 'Exercises and restrictions are adjusted to the injury and the procedure performed.'],
      ['A gradual return to sport', 'Functional milestones and clinical review guide the timing of return.'],
    ],
    article: 'Read knee health articles', recoveryAlt: 'Knee movement assessment during a rehabilitation session', recoveryGoal: 'Rehabilitation goal', saferReturn: 'Controlled movement and a safer return',
    prepKicker: 'For your assessment', prepTitle: 'Information that supports a clearer discussion', prepLead: 'Complete records support a structured review, while the final assessment still depends on the full clinical picture and examination.',
    prepItems: [['Medical images', 'Bring previous MRI scans, radiographs, and related reports.'], ['Treatment history', 'Note previous physiotherapy, medicines, injections, or surgery.'], ['Movement goals', 'Identify activities that have become limited because of the knee problem.']],
    medicalInfo: 'General medical information', note: 'This page is for general guidance and does not replace an examination, diagnosis, or individual medical advice.',
    next: 'Next step', ctaTitle: 'Arrange an assessment for your knee injury', ctaText: 'Your symptoms, examination, imaging, and goals for returning to activity are considered together.', contact: 'Clinic details and appointments',
  },
  ar: {
    home: 'الصفحة الرئيسية', services: 'الخدمات التخصصية', service: 'تنظير الركبة',
    kicker: 'تنظير الركبة والإصابات الرياضية', heroTop: 'رؤية أدق داخل المفصل؛', heroAccent: 'وقرار موجّه لاستعادة الحركة',
    lead: 'معلومات عامة عن تقييم الإصابات داخل الركبة ودور التنظير ومسار العودة التدريجية إلى النشاط.',
    arrange: 'تنسيق التقييم', explore: 'استعراض مسار العلاج', assuranceOne: 'تقييم دقيق داخل المفصل', assuranceTwo: 'اختيار العلاج وفق نوع الإصابة',
    visualLabel: 'منظر تنظير الركبة', scopeAlt: 'معدات تنظير المفصل وشاشة تعرض داخل مفصل الركبة', anatomyAlt: 'رسم تعليمي لتشريح مفصل الركبة', access: 'تدخل محدود', incisions: 'من خلال شقوق صغيرة',
    onPage: 'في هذه الصفحة', nav: ['متى يُبحث الخيار', 'التقييم والقرار', 'التأهيل والمتابعة'],
    indicationsKicker: 'متى قد يُطرح التنظير؟', indicationsTitle: 'قد يكون التنظير جزءاً من الحل، لكنه ليس بداية العلاج لكل حالة',
    indicationsLead: 'يُبحث تنظير الركبة عندما تشير السيرة المرضية والفحص والصور إلى أن رؤية المفصل من الداخل أو علاجه قد تسهم في مسار الرعاية.',
    situations: [
      ['إصابات داخل المفصل', 'تُقيّم مشكلات مثل إصابة الغضروف الهلالي أو بعض آفات الغضروف وفق الأعراض والفحص والصور.'],
      ['إصابات الركبة الرياضية', 'تُقيّم آثار الإصابة الرياضية في ثبات المفصل ووظيفته بحسب مستوى نشاط المريض وأهدافه.'],
      ['أعراض ميكانيكية مستمرة', 'يُبحث استمرار القفل أو التعليق أو محدودية الحركة لمعرفة السبب واختيار المسار المناسب.'],
    ],
    context: 'لا يعني الألم أو ظهور نتيجة في الرنين المغناطيسي وحدهما ضرورة إجراء التنظير. يتشكل القرار بعد جمع الأعراض ونتائج الفحص والصور واحتياجات المريض الحركية.',
    assessmentKicker: 'من التشخيص إلى اختيار العلاج', assessmentTitle: 'أربع مراحل لاتخاذ قرار أدق', assessmentLead: 'يؤثر نوع الإصابة ومستوى النشاط وهدف العودة إلى الحركة في خطة العلاج والتأهيل.',
    pathway: [
      ['الحوار والفحص', 'يُراجع نوع الإصابة وبداية الأعراض والنشاط الرياضي وثبات الركبة.'],
      ['مراجعة الصور الهادفة', 'تُفسر الصور الطبية إلى جانب نتائج الفحص ولا تحدد العلاج بمفردها.'],
      ['مقارنة خيارات العلاج', 'تُقارن الخيارات غير الجراحية والجراحية وفق الإصابة واحتياجات المريض وهدفه من العودة إلى النشاط.'],
      ['خطة العلاج والتأهيل', 'عند اختيار التنظير توضع خطة الجراحة والتأهيل بما يتناسب مع الإصابة.'],
    ],
    recoveryKicker: 'بعد العلاج', recoveryTitle: 'التأهيل امتداد لمسار العلاج', recoveryLead: 'تختلف سرعة العودة إلى النشاط بحسب نوع الإصابة والإجراء والحالة الجسدية واستجابة الجسم للتأهيل.',
    recoveryItems: [
      ['السيطرة على الألم والتورم', 'تُشرح تعليمات ما بعد العلاج والعلامات التي تستدعي المتابعة.'],
      ['استعادة الحركة والقوة', 'تُضبط التمارين والقيود وفق نوع الإصابة والإجراء الذي أُجري.'],
      ['العودة التدريجية إلى الرياضة', 'تحدد المعايير الوظيفية ومراجعة الفريق الطبي توقيت العودة.'],
    ],
    article: 'قراءة مقالات صحة الركبة', recoveryAlt: 'تقييم حركة الركبة خلال جلسة التأهيل', recoveryGoal: 'هدف التأهيل', saferReturn: 'حركة مضبوطة وعودة أكثر أماناً',
    prepKicker: 'لجلسة التقييم', prepTitle: 'معلومات تساعد على نقاش أدق', prepLead: 'تساعد السجلات الكاملة على مراجعة منظمة، بينما يعتمد التقييم النهائي على مجموع المعلومات والفحص.',
    prepItems: [['الصور الطبية', 'أحضر صور الرنين والأشعة والتقارير السابقة ذات الصلة.'], ['سجل العلاج', 'دوّن العلاج الطبيعي والأدوية والحقن أو العمليات السابقة.'], ['الهدف الحركي', 'حدد الأنشطة التي أصبحت محدودة بسبب مشكلة الركبة.']],
    medicalInfo: 'معلومات طبية عامة', note: 'محتوى هذه الصفحة للتوعية العامة ولا يغني عن الفحص أو التشخيص أو التوصية العلاجية الفردية.',
    next: 'الخطوة التالية', ctaTitle: 'نسّق تقييماً لإصابة الركبة', ctaText: 'تُراجع الأعراض والفحص والصور وهدف العودة إلى النشاط معاً.', contact: 'معلومات العيادة وطلب موعد',
  },
} as const

const situationIcons = [Focus, Activity, CircleDot]
const pathwayIcons = [Stethoscope, FileImage, ClipboardCheck, Activity]
const prepIcons = [FileImage, ClipboardCheck, Activity]

export function ArthroscopyDetail({ locale }: { locale: Locale }) {
  const text = copy[locale]
  const ForwardArrow = locale === 'en' ? ArrowRight : ArrowLeft
  const DiagonalArrow = locale === 'en' ? MoveUpRight : MoveUpLeft
  const number = (index: number) => locale === 'fa' ? `۰${index + 1}` : `0${index + 1}`

  return <main className={`${styles.page} ${locale === 'en' ? styles.ltr : styles.rtl}`} data-locale={locale}>
    <section className={styles.hero} aria-labelledby="arthroscopy-title"><div className={styles.shell}>
      <nav className={styles.breadcrumb} aria-label={text.service}><Link href={`/${locale}`}>{text.home}</Link><span>/</span><Link href={`/${locale}/services`}>{text.services}</Link><span>/</span><span>{text.service}</span></nav>
      <div className={styles.heroGrid}>
        <div className={styles.intro}><span className={styles.eyebrow}>{text.kicker}</span><h1 id="arthroscopy-title">{text.heroTop}<br /><span>{text.heroAccent}</span></h1><p>{text.lead}</p>
          <div className={styles.actions}><Link className={styles.primaryButton} href={`/${locale}/contact`}><CalendarCheck2 aria-hidden="true" />{text.arrange}<ForwardArrow aria-hidden="true" /></Link><a className={styles.secondaryButton} href="#indications">{text.explore}<ArrowDown aria-hidden="true" /></a></div>
          <div className={styles.assurances}><span><ScanLine aria-hidden="true" />{text.assuranceOne}</span><span><ShieldCheck aria-hidden="true" />{text.assuranceTwo}</span></div>
        </div>
        <div className={styles.scopeVisual} aria-label={text.visualLabel}><div className={styles.scopeRing}><Image src="/images/gallery/knee-arthroscopy-workflow.webp" alt={text.scopeAlt} fill sizes="(max-width: 760px) 86vw, 41vw" priority /></div><figure className={styles.anatomyInset}><Image src="/images/services/knee-anatomy-atlas.png" alt={text.anatomyAlt} fill sizes="(max-width: 760px) 38vw, 17vw" /></figure><div className={styles.scopeBadge}><ScanLine aria-hidden="true" /><span>{text.access}<strong>{text.incisions}</strong></span></div></div>
      </div>
      <nav className={styles.sectionNav} aria-label={text.onPage}><span>{text.onPage}</span><a href="#indications">{text.nav[0]}</a><a href="#assessment">{text.nav[1]}</a><a href="#recovery">{text.nav[2]}</a></nav>
    </div></section>

    <section className={`${styles.shell} ${styles.indications}`} id="indications" aria-labelledby="indications-title"><header className={styles.sectionHeading}><div><span className={styles.eyebrow}>{text.indicationsKicker}</span><h2 id="indications-title">{text.indicationsTitle}</h2></div><p>{text.indicationsLead}</p></header><div className={styles.situationGrid}>{text.situations.map((item, index) => { const Icon = situationIcons[index]; return <article key={item[0]}><div><Icon aria-hidden="true" /><span>{number(index)}</span></div><h3>{item[0]}</h3><p>{item[1]}</p></article> })}</div><aside className={styles.medicalContext}><Info aria-hidden="true" /><p>{text.context}</p></aside></section>

    <section className={styles.assessment} id="assessment" aria-labelledby="assessment-title"><div className={styles.shell}><header className={styles.assessmentHeading}><div><span className={styles.eyebrow}>{text.assessmentKicker}</span><h2 id="assessment-title">{text.assessmentTitle}</h2></div><p>{text.assessmentLead}</p></header><div className={styles.pathway}>{text.pathway.map((item, index) => { const Icon = pathwayIcons[index]; return <article key={item[0]}><span className={styles.pathNumber}>{number(index)}</span><div className={styles.pathIcon}><Icon aria-hidden="true" /></div><h3>{item[0]}</h3><p>{item[1]}</p></article> })}</div></div></section>

    <section className={`${styles.shell} ${styles.recovery}`} id="recovery" aria-labelledby="recovery-title"><div className={styles.recoveryCopy}><span className={styles.eyebrow}>{text.recoveryKicker}</span><h2 id="recovery-title">{text.recoveryTitle}</h2><p>{text.recoveryLead}</p><ul>{text.recoveryItems.map(item => <li key={item[0]}><Check aria-hidden="true" /><span><strong>{item[0]}</strong>{item[1]}</span></li>)}</ul><Link className={styles.textLink} href={`/${locale}/journal`}>{text.article}<DiagonalArrow aria-hidden="true" /></Link></div><div className={styles.recoveryVisual}><Image src="/images/gallery/sports-knee-rehabilitation.webp" alt={text.recoveryAlt} fill sizes="(max-width: 760px) 100vw, 47vw" priority unoptimized /><div><Activity aria-hidden="true" /><span>{text.recoveryGoal}</span><strong>{text.saferReturn}</strong></div></div></section>

    <section className={`${styles.shell} ${styles.preparation}`}><div><span className={styles.eyebrow}>{text.prepKicker}</span><h2>{text.prepTitle}</h2><p>{text.prepLead}</p></div><div className={styles.prepCards}>{text.prepItems.map((item, index) => { const Icon = prepIcons[index]; return <article key={item[0]}><Icon aria-hidden="true" /><h3>{item[0]}</h3><p>{item[1]}</p></article> })}</div></section>

    <section className={`${styles.shell} ${styles.note}`}><Info aria-hidden="true" /><div><h2>{text.medicalInfo}</h2><p>{text.note}</p></div></section>
    <section className={styles.cta}><div className={styles.shell}><div><span>{text.next}</span><h2>{text.ctaTitle}</h2><p>{text.ctaText}</p></div><Link href={`/${locale}/contact`}>{text.contact}<ForwardArrow aria-hidden="true" /></Link></div></section>
  </main>
}
