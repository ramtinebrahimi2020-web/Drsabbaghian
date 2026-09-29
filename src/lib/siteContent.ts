export const locales = ['fa', 'en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const localeConfig = {
  fa: { dir: 'rtl' as const, label: 'فارسی', logo: '/brand/logo-fa.svg' },
  en: { dir: 'ltr' as const, label: 'English', logo: '/brand/logo-en.svg' },
  ar: { dir: 'rtl' as const, label: 'العربية', logo: '/brand/logo-en.svg' },
}

export const content = {
  fa: {
    nav: ['صفحه اصلی', 'درباره پزشک', 'خدمات تخصصی', 'بیماران بین‌المللی', 'مجله سلامت', 'گالری', 'تماس'],
    heroKicker: 'وب‌سایت رسمی', heroTitle: 'دکتر علیرضا صباغیان', heroText: 'متخصص جراحی استخوان و مفاصل، عضو انجمن جراحان ارتوپدی ایران و انجمن جراحان زانوی ایران، با سابقه فعالیت تخصصی از سال ۱۳۷۶ و تمرکز بر جراحی زانو و تعویض مفصل.',
    appointment: 'درخواست نوبت', services: 'مشاهده خدمات', experience: 'فعالیت تخصصی در ارتوپدی از سال ۱۳۷۶', serviceKicker: 'حوزه‌های اصلی فعالیت', serviceTitle: 'خدمات تخصصی ارتوپدی', serviceText: 'اطلاعات هر خدمت با هدف آشنایی اولیه و آماده‌شدن برای گفت‌وگو با پزشک ارائه می‌شود.',
    serviceCards: [{ title: 'تعویض مفصل زانو و لگن', text: 'ارزیابی، تصمیم‌گیری درمانی و آشنایی با روند مراقبت پیش و پس از جراحی.' }, { title: 'آرتروسکوپی و آسیب‌های ورزشی زانو', text: 'بررسی آسیب‌های زانو و انتخاب مسیر درمان بر اساس شرایط و نیازهای هر فرد.' }],
    aboutKicker: 'درباره پزشک', aboutTitle: 'تجربه حرفه‌ای در کنار گفت‌وگوی روشن با بیمار', aboutText: 'دکتر علیرضا صباغیان متخصص جراحی استخوان و مفاصل هستند. معرفی سوابق و حوزه‌های فعالیت در این سایت با زبانی دقیق و بدون بزرگ‌نمایی ارائه می‌شود.', more: 'اطلاعات بیشتر',
    intlKicker: 'بیماران بین‌المللی', intlTitle: 'راهنمای هماهنگی مراجعه از خارج ایران', intlText: 'مراحل اولیه، مدارک موردنیاز و شیوه ارتباط برای بررسی درخواست مراجعه در یک مسیر مشخص توضیح داده شده است.', intlAction: 'مشاهده راهنما',
    journalKicker: 'مجله سلامت', journalTitle: 'مطالب آموزشی و بازبینی‌شده', articles: ['چه زمانی بررسی تعویض مفصل زانو مطرح می‌شود؟', 'نشانه‌های رایج آسیب رباط زانو', 'برای جلسه ارزیابی چه مدارکی همراه داشته باشیم؟'],
    contactTitle: 'برای هماهنگی مراجعه', contactText: 'درخواست نوبت از طریق مسیر رسمی معرفی‌شده توسط پزشک انجام می‌شود.',
  },
  en: {
    nav: ['Home', 'About the Physician', 'Specialized Services', 'International Patients', 'Health Journal', 'Gallery', 'Contact'],
    heroKicker: 'Official Website', heroTitle: 'Dr. Alireza Sabbaghian', heroText: 'Orthopaedic surgeon and member of the Iranian Orthopaedic Association and the Iranian Knee Surgeons Association, with specialist practice since 1997 and a focus on knee surgery and joint replacement.',
    appointment: 'Request an appointment', services: 'View services', experience: 'Specialist orthopaedic practice since 1997', serviceKicker: 'Main fields of practice', serviceTitle: 'Specialized orthopaedic services', serviceText: 'Each service page provides introductory information to help patients prepare for a clear discussion with their physician.',
    serviceCards: [{ title: 'Knee and hip joint replacement', text: 'Assessment, treatment decisions, and general information about care before and after surgery.' }, { title: 'Arthroscopy and sports knee injuries', text: 'Assessment of knee injuries and treatment planning based on each patient’s circumstances.' }],
    aboutKicker: 'About the physician', aboutTitle: 'Professional experience with clear patient communication', aboutText: 'Dr. Alireza Sabbaghian is a specialist in orthopaedic surgery. His background and fields of practice are presented here in a factual and measured manner.', more: 'Learn more',
    intlKicker: 'International patients', intlTitle: 'A clear guide for arranging care from abroad', intlText: 'Review the initial steps, required information, and communication process before planning a visit to Iran.', intlAction: 'View the guide',
    journalKicker: 'Health journal', journalTitle: 'Reviewed educational articles', articles: ['When may knee replacement evaluation be considered?', 'Common signs of knee ligament injury', 'What records should you bring to an evaluation?'],
    contactTitle: 'Arrange a consultation', contactText: 'Appointment requests continue through the official channel designated by the physician.',
  },
  ar: {
    nav: ['الرئيسية', 'عن الطبيب', 'الخدمات التخصصية', 'المرضى الدوليون', 'المجلة الصحية', 'معرض الصور', 'التواصل'],
    heroKicker: 'الموقع الرسمي', heroTitle: 'الدكتور علي رضا صباغيان', heroText: 'اختصاصي في جراحة العظام والمفاصل، وعضو في الجمعية الإيرانية لجراحة العظام والجمعية الإيرانية لجراحي الركبة، ويمارس تخصصه منذ عام 1997 مع تركيز مهني على جراحة الركبة واستبدال المفاصل.',
    appointment: 'طلب موعد', services: 'عرض الخدمات', experience: 'ممارسة تخصص جراحة العظام منذ عام 1997', serviceKicker: 'مجالات العمل الرئيسية', serviceTitle: 'خدمات جراحة العظام التخصصية', serviceText: 'تقدم صفحات الخدمات معلومات أولية تساعد المريض على الاستعداد لمناقشة واضحة مع الطبيب.',
    serviceCards: [{ title: 'استبدال مفصل الركبة والورك', text: 'التقييم واتخاذ القرار العلاجي ومعلومات عامة عن الرعاية قبل الجراحة وبعدها.' }, { title: 'تنظير المفاصل وإصابات الركبة الرياضية', text: 'تقييم إصابات الركبة واختيار المسار العلاجي وفق حالة كل مريض واحتياجاته.' }],
    aboutKicker: 'عن الطبيب', aboutTitle: 'خبرة مهنية وتواصل واضح مع المريض', aboutText: 'الدكتور علي رضا صباغيان اختصاصي في جراحة العظام والمفاصل. تُعرض خبرته ومجالات عمله هنا بلغة دقيقة ومتوازنة.', more: 'معلومات إضافية',
    intlKicker: 'المرضى الدوليون', intlTitle: 'دليل واضح لتنسيق المراجعة من خارج إيران', intlText: 'تعرّف على الخطوات الأولية والمعلومات المطلوبة وطريقة التواصل قبل التخطيط للزيارة.', intlAction: 'عرض الدليل',
    journalKicker: 'المجلة الصحية', journalTitle: 'مقالات تعليمية خاضعة للمراجعة', articles: ['متى قد يُطرح تقييم استبدال مفصل الركبة؟', 'العلامات الشائعة لإصابة أربطة الركبة', 'ما السجلات التي يُنصح بإحضارها إلى التقييم؟'],
    contactTitle: 'لتنسيق المراجعة', contactText: 'يتم طلب الموعد عبر القناة الرسمية التي يحددها الطبيب.',
  },
}

export function isLocale(value: string): value is Locale { return locales.includes(value as Locale) }
