import type { Locale } from './siteContent'

type InfoPage = {
  kicker: string
  title: string
  lead: string
  sections: Array<{
    title: string
    text: string
    items?: string[]
    phones?: string[]
    mapEmbedUrl?: string
    mapUrl?: string
  }>
}

export const pageContent: Record<Locale, Record<string, InfoPage>> = {
  fa: {
    about: { kicker: 'درباره پزشک', title: 'دکتر علیرضا صباغیان', lead: 'متخصص جراحی استخوان و مفاصل، با سابقه فعالیت تخصصی در ارتوپدی از سال ۱۳۷۶ و تمرکز بر جراحی زانو و تعویض مفصل.', sections: [
      { title: 'رویکرد حرفه‌ای', text: 'شناخت دقیق شرایط بیمار، گفت‌وگوی روشن درباره گزینه‌ها و درنظرگرفتن نیازهای فردی، بخش اصلی مسیر تصمیم‌گیری درمانی است.' },
      { title: 'حوزه‌های اصلی فعالیت', text: 'تمرکز حرفه‌ای بر جراحی تعویض مفصل زانو و لگن و درمان‌های آرتروسکوپی و آسیب‌های ورزشی زانو است.', items: ['تعویض مفصل زانو و لگن', 'آرتروسکوپی زانو', 'آسیب‌های ورزشی زانو'] },
      { title: 'سوابق حرفه‌ای', text: 'فارغ‌التحصیل پزشکی عمومی در سال ۱۳۶۹ و فعال در حوزه تخصصی ارتوپدی از سال ۱۳۷۶؛ دارای چهار سال سابقه فعالیت در دانشگاه علوم پزشکی زنجان و سابقه جراحی در بیمارستان‌های لاله، تهران کلینیک و ولیعصر.', items: ['فعالیت فعلی در بیمارستان لاله و بیمارستان تهران کلینیک', 'عضو هیئت‌مدیره بیمارستان لاله'] },
      { title: 'عضویت‌ها و فعالیت‌های علمی', text: 'عضو انجمن جراحان ارتوپدی ایران و انجمن جراحان زانوی ایران؛ دارای سابقه سخنرانی در کنگره‌های سالانه ارتوپدی، حضور در حدود ۲۰ کنگره خارجی و راهنمایی سه پایان‌نامه دکتری.', items: ['گذراندن دوره فلوشیپ جراحی زانو در اتریش', 'چهار سال فعالیت آموزشی در دانشگاه علوم پزشکی زنجان'] },
      { title: 'تجربه جراحی', text: 'بر اساس اطلاعات ثبت‌شده تا سال ۱۴۰۵، بیش از ۲٬۰۰۰ عمل تعویض مفصل زانو، بیش از ۸۰۰ عمل تعویض مفصل لگن و بیش از ۱٬۰۰۰ عمل آرتروسکوپی زانو انجام شده است.', items: ['حدود ۶۰ عمل جراحی رویژن زانو'] },
    ] },
    services: { kicker: 'خدمات تخصصی', title: 'خدمات جراحی استخوان و مفاصل', lead: 'اطلاعات اولیه درباره دو حوزه محوری فعالیت و خدمات تکمیلی مرتبط.', sections: [
      { title: 'تعویض مفصل زانو و لگن', text: 'ارزیابی درد و محدودیت عملکرد، بررسی گزینه‌های درمانی و آشنایی با مسیر عمومی مراقبت پیش و پس از جراحی.', items: ['تعویض مفصل زانو', 'تعویض مفصل لگن', 'بررسی جراحی مجدد مفصل'] },
      { title: 'آرتروسکوپی و آسیب‌های ورزشی زانو', text: 'بررسی آسیب‌های لیگامانی و مشکلات داخل مفصل و انتخاب روش درمان بر اساس معاینه و نیاز هر فرد.', items: ['آسیب رباط صلیبی', 'آسیب‌های ورزشی زانو', 'آرتروسکوپی زانو'] },
    ] },
    'international-patients': { kicker: 'بیماران بین‌المللی', title: 'راهنمای هماهنگی مراجعه از خارج ایران', lead: 'این راهنما مراحل اولیه ارتباط، بررسی مدارک و برنامه‌ریزی مراجعه را توضیح می‌دهد.', sections: [
      { title: '۱. ارسال درخواست اولیه', text: 'اطلاعات تماس، شرح کوتاه مشکل و درخواست اصلی از طریق کانال رسمی ارسال می‌شود.' },
      { title: '۲. ارسال مدارک پزشکی', text: 'تصاویر، گزارش‌ها و سوابق مرتبط فقط از مسیر امن و تأییدشده تیم پذیرش دریافت می‌شوند.' },
      { title: '۳. بررسی اولیه مدارک', text: 'مدارک برای مشخص‌شدن امکان ادامه هماهنگی بررسی می‌شوند. این مرحله تشخیص قطعی یا تضمین درمان نیست.' },
      { title: '۴. هزینه و برنامه درمان', text: 'هزینه، مدت اقامت و برنامه درمان پس از ارزیابی شرایط بیمار و هماهنگی مستقیم اعلام می‌شود.' },
      { title: '۵. هماهنگی مراجعه', text: 'زمان و محل مراجعه پس از تکمیل بررسی‌ها توسط تیم پذیرش تأیید خواهد شد.' },
    ] },
    journal: { kicker: 'مجله سلامت', title: 'مطالب آموزشی و بازبینی‌شده', lead: 'مقاله‌های عمومی درباره سلامت مفاصل، آسیب‌های زانو، آمادگی درمان و مراقبت پس از آن.', sections: [
      { title: 'تعویض مفصل زانو و لگن', text: 'مطالب مرتبط با ارزیابی، آمادگی عمومی و مراقبت پس از درمان.' },
      { title: 'آرتروسکوپی و آسیب‌های زانو', text: 'آشنایی عمومی با آسیب‌های ورزشی و روند ارزیابی آن‌ها.' },
      { title: 'آمادگی و مراقبت', text: 'راهنماهای کاربردی برای پیش از مراجعه و دوره پیگیری.' },
    ] },
    gallery: { kicker: 'گالری تصاویر', title: 'نمونه‌های درمان و مسیر بازگشت به حرکت', lead: 'این بخش با تصاویر واقعی و تأییدشده از فرایند درمان و نتایج حرکتی تکمیل می‌شود.', sections: [
      { title: 'مطب و فضای مراجعه', text: 'تصاویر ورودی، پذیرش و فضای مناسب مراجعه.' },
      { title: 'دکتر در محیط حرفه‌ای', text: 'پرتره‌ها و تصاویر واقعی در محیط کار.' },
      { title: 'رویدادهای علمی', text: 'تصاویر کنگره‌ها، دوره‌ها و فعالیت‌های علمی همراه با اطلاعات معتبر.' },
    ] },
    contact: { kicker: 'تماس و مراجعه', title: 'تماس و اطلاعات مطب', lead: 'اطلاعات مطب و بیمارستان لاله به‌صورت مستقل نمایش داده شده است. نوبت پس از هماهنگی تیم پذیرش تأیید می‌شود.', sections: [
      { title: 'مطب دکتر علیرضا صباغیان', text: 'تهران، خیابان ولیعصر، بالاتر از خیابان ظفر، کوچه بهرامی، پلاک ۹۴، طبقه ۱', items: ['یکشنبه و سه‌شنبه', 'ساعت ۱۴ تا ۱۹'], phones: ['02188650372', '02188650373'], mapUrl: 'https://maps.app.goo.gl/iQMZEsHoqH9ixvdH8', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2160.57815760579!2d51.41268288147117!3d35.770228191124566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e070023ed2b63%3A0xcb4e3750da90fa72!2z2YXYt9ioINiv2qnYqtixINi52YTbjNix2LbYpyDYtdio2KfYutuM2KfZhg!5e0!3m2!1sen!2s!4v1790018485270!5m2!1sen!2s' },
      { title: 'بیمارستان فوق تخصصی لاله', text: 'تهران، شهرک غرب، بلوار فرحزادی، سیمای ایران', phones: ['02188369862', '02188369863', '02188369864', '02188369865', '02188369866'], mapUrl: 'https://maps.app.goo.gl/DSLeHBXZ5gUk9Fgo7', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.923069958133!2d51.35771377559522!3d35.75269557256419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07762c422c23%3A0xf750cc88ca6b2462!2sLaleh%20Hospital!5e0!3m2!1sen!2s!4v1790018540635!5m2!1sen!2s' },
    ] },
  },
  en: {
    about: { kicker: 'About the physician', title: 'Dr. Alireza Sabbaghian', lead: 'An orthopaedic surgeon in specialist practice since 1997, with a focus on knee surgery and joint replacement.', sections: [
      { title: 'Professional approach', text: 'A clear understanding of each patient’s condition, an open discussion of options, and individual needs guide the care-planning process.' },
      { title: 'Main fields of practice', text: 'The principal fields are knee and hip joint replacement, knee arthroscopy, and sports-related knee injuries.', items: ['Knee and hip replacement', 'Knee arthroscopy', 'Sports knee injuries'] },
      { title: 'Professional background', text: 'He graduated in general medicine in 1990 and has practised orthopaedics since 1997. His background includes four years at Zanjan University of Medical Sciences and surgical practice at Laleh Hospital, Tehran Clinic Hospital, and Valiasr Hospital.', items: ['Currently practising at Laleh Hospital and Tehran Clinic Hospital', 'Member of the board of Laleh Hospital'] },
      { title: 'Memberships and scientific activity', text: 'Member of the Iranian Orthopaedic Association and the Iranian Knee Surgeons Association, with presentations at annual orthopaedic congresses, attendance at approximately 20 international congresses, and supervision of three doctoral theses.', items: ['Completed a knee surgery fellowship programme in Austria', 'Four years of teaching activity at Zanjan University of Medical Sciences'] },
      { title: 'Surgical experience', text: 'According to records provided up to 2026, his experience includes more than 2,000 knee replacements, more than 800 hip replacements, and more than 1,000 knee arthroscopy procedures.', items: ['Approximately 60 revision knee procedures'] },
    ] },
    services: { kicker: 'Specialized services', title: 'Orthopaedic surgical services', lead: 'Introductory information about the two main fields of practice and related services.', sections: [
      { title: 'Knee and hip joint replacement', text: 'Assessment of pain and mobility, review of treatment options, and general information about care before and after surgery.', items: ['Knee replacement', 'Hip replacement', 'Revision joint assessment'] },
      { title: 'Arthroscopy and sports knee injuries', text: 'Assessment of ligament and intra-articular injuries, with treatment planning based on examination and individual needs.', items: ['Anterior cruciate ligament injury', 'Sports knee injuries', 'Knee arthroscopy'] },
    ] },
    'international-patients': { kicker: 'International patients', title: 'A guide to arranging care from abroad', lead: 'This guide explains the initial communication, medical record review, and visit-planning process.', sections: [
      { title: '1. Initial request', text: 'Send contact information, a brief description of the concern, and the main request through the official channel.' },
      { title: '2. Medical records', text: 'Relevant images, reports, and medical history are accepted only through a secure channel confirmed by the coordination team.' },
      { title: '3. Preliminary review', text: 'Records are reviewed to determine whether coordination can continue. This is not a final diagnosis or treatment guarantee.' },
      { title: '4. Cost and treatment planning', text: 'Estimated cost, length of stay, and treatment planning follow individual assessment and direct coordination.' },
      { title: '5. Visit coordination', text: 'The date and location are confirmed by the coordination team after the review is complete.' },
    ] },
    journal: { kicker: 'Health journal', title: 'Reviewed educational articles', lead: 'General information about joint health, knee injuries, preparation for treatment, and follow-up care.', sections: [
      { title: 'Knee and hip replacement', text: 'Articles about evaluation, general preparation, and care after treatment.' },
      { title: 'Arthroscopy and knee injuries', text: 'General information about sports injuries and their assessment.' },
      { title: 'Preparation and care', text: 'Practical guides for preparing for a visit and follow-up.' },
    ] },
    gallery: { kicker: 'Gallery', title: 'Treatment examples and the path back to movement', lead: 'This gallery will grow with approved images of care processes, rehabilitation, and mobility outcomes.', sections: [
      { title: 'Knee replacement', text: 'Approved images from preparation, treatment, and recovery.' },
      { title: 'Knee arthroscopy', text: 'Clinical media focused on minimally invasive knee care.' },
      { title: 'Outcomes and follow-up', text: 'Privacy-safe photos and videos documenting mobility progress.' },
    ] },
    contact: { kicker: 'Contact and visits', title: 'Contact and clinic information', lead: 'The clinic and Laleh Hospital are listed separately. Appointments are confirmed by the coordination team.', sections: [
      { title: 'Dr. Alireza Sabbaghian’s clinic', text: '1st Floor, No. 94, Bahrami Alley, above Zafar Street, Valiasr Street, Tehran', items: ['Sunday and Tuesday', '14:00 to 19:00 Tehran time'], phones: ['02188650372', '02188650373'], mapUrl: 'https://maps.app.goo.gl/iQMZEsHoqH9ixvdH8', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2160.57815760579!2d51.41268288147117!3d35.770228191124566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e070023ed2b63%3A0xcb4e3750da90fa72!2z2YXYt9ioINiv2qnYqtixINi52YTbjNix2LbYpyDYtdio2KfYutuM2KfZhg!5e0!3m2!1sen!2s!4v1790018485270!5m2!1sen!2s' },
      { title: 'Laleh Specialty Hospital', text: 'Simaye Iran, Farahzadi Boulevard, Shahrak-e Gharb, Tehran', phones: ['02188369862', '02188369863', '02188369864', '02188369865', '02188369866'], mapUrl: 'https://maps.app.goo.gl/DSLeHBXZ5gUk9Fgo7', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.923069958133!2d51.35771377559522!3d35.75269557256419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07762c422c23%3A0xf750cc88ca6b2462!2sLaleh%20Hospital!5e0!3m2!1sen!2s!4v1790018540635!5m2!1sen!2s' },
    ] },
  },
  ar: {
    about: { kicker: 'عن الطبيب', title: 'الدكتور علي رضا صباغيان', lead: 'اختصاصي جراحة العظام والمفاصل، يمارس تخصصه منذ عام 1997 مع تركيز على جراحة الركبة واستبدال المفاصل.', sections: [
      { title: 'النهج المهني', text: 'فهم حالة المريض بدقة ومناقشة الخيارات بوضوح ومراعاة الاحتياجات الفردية هي عناصر أساسية في التخطيط للعلاج.' },
      { title: 'مجالات العمل الرئيسية', text: 'تشمل مجالات العمل الرئيسية استبدال مفصل الركبة والورك وتنظير الركبة وإصابات الركبة الرياضية.', items: ['استبدال مفصل الركبة والورك', 'تنظير الركبة', 'إصابات الركبة الرياضية'] },
      { title: 'الخلفية المهنية', text: 'تخرج في الطب العام عام 1990 وبدأ ممارسة اختصاص جراحة العظام عام 1997. تشمل خبرته أربع سنوات في جامعة زنجان للعلوم الطبية والعمل الجراحي في مستشفيات لاله وطهران كلينيك وولي عصر.', items: ['يمارس عمله حالياً في مستشفى لاله ومستشفى طهران كلينيك', 'عضو مجلس إدارة مستشفى لاله'] },
      { title: 'العضويات والنشاط العلمي', text: 'عضو في الجمعية الإيرانية لجراحة العظام والجمعية الإيرانية لجراحي الركبة، وله مشاركات ومحاضرات في المؤتمرات السنوية لجراحة العظام وحضور في نحو 20 مؤتمراً دولياً، إضافة إلى الإشراف على ثلاث رسائل دكتوراه.', items: ['إتمام برنامج زمالة في جراحة الركبة في النمسا', 'أربع سنوات من النشاط التعليمي في جامعة زنجان للعلوم الطبية'] },
      { title: 'الخبرة الجراحية', text: 'وفق المعلومات المسجلة حتى عام 2026، تشمل خبرته أكثر من 2,000 عملية استبدال مفصل الركبة وأكثر من 800 عملية استبدال مفصل الورك وأكثر من 1,000 عملية تنظير للركبة.', items: ['نحو 60 عملية جراحية تصحيحية للركبة'] },
    ] },
    services: { kicker: 'الخدمات التخصصية', title: 'خدمات جراحة العظام والمفاصل', lead: 'معلومات أولية عن مجالَي العمل الرئيسيين والخدمات المرتبطة بهما.', sections: [
      { title: 'استبدال مفصل الركبة والورك', text: 'تقييم الألم والحركة ومراجعة خيارات العلاج ومعلومات عامة عن الرعاية قبل الجراحة وبعدها.', items: ['استبدال الركبة', 'استبدال الورك', 'تقييم جراحة المفصل التصحيحية'] },
      { title: 'تنظير الركبة والإصابات الرياضية', text: 'تقييم الأربطة والإصابات داخل المفصل والتخطيط للعلاج وفق الفحص واحتياجات المريض.', items: ['إصابة الرباط الصليبي', 'الإصابات الرياضية', 'تنظير الركبة'] },
    ] },
    'international-patients': { kicker: 'المرضى الدوليون', title: 'دليل تنسيق المراجعة من خارج إيران', lead: 'يوضح هذا الدليل خطوات التواصل الأولي ومراجعة الملفات الطبية والتخطيط للزيارة.', sections: [
      { title: '1. الطلب الأولي', text: 'ترسل معلومات التواصل ووصف موجز للحالة والطلب الرئيسي عبر القناة الرسمية.' },
      { title: '2. الملفات الطبية', text: 'تُستقبل الصور والتقارير والسجلات ذات الصلة عبر قناة آمنة يحددها فريق التنسيق.' },
      { title: '3. المراجعة الأولية', text: 'تُراجع الملفات لتحديد إمكانية متابعة التنسيق، ولا تعني هذه الخطوة تشخيصاً نهائياً أو ضماناً للعلاج.' },
      { title: '4. التكلفة وخطة العلاج', text: 'تُحدد التكلفة المتوقعة ومدة الإقامة والخطة بعد تقييم حالة المريض والتنسيق المباشر.' },
      { title: '5. تنسيق الزيارة', text: 'يؤكد فريق التنسيق موعد الزيارة ومكانها بعد اكتمال المراجعة.' },
    ] },
    journal: { kicker: 'المجلة الصحية', title: 'مقالات تعليمية خاضعة للمراجعة', lead: 'معلومات عامة عن صحة المفاصل وإصابات الركبة والاستعداد للعلاج والرعاية اللاحقة.', sections: [
      { title: 'استبدال مفصل الركبة والورك', text: 'مقالات عن التقييم والاستعداد العام والرعاية بعد العلاج.' },
      { title: 'تنظير الركبة وإصاباتها', text: 'معلومات عامة عن الإصابات الرياضية وتقييمها.' },
      { title: 'الاستعداد والرعاية', text: 'إرشادات عملية للاستعداد للمراجعة والمتابعة.' },
    ] },
    gallery: { kicker: 'معرض الصور', title: 'نماذج العلاج ومسار العودة إلى الحركة', lead: 'سيتوسع هذا المعرض بصور معتمدة لمسارات العلاج والتأهيل والنتائج الحركية.', sections: [
      { title: 'استبدال مفصل الركبة', text: 'صور معتمدة لمراحل التحضير والعلاج والتعافي.' },
      { title: 'تنظير الركبة', text: 'محتوى سريري يركز على العلاج محدود التدخل للركبة.' },
      { title: 'النتائج والمتابعة', text: 'صور وفيديوهات تحمي الخصوصية وتوثق تطور الحركة.' },
    ] },
    contact: { kicker: 'التواصل والمراجعة', title: 'معلومات التواصل والعيادة', lead: 'تُعرض معلومات العيادة ومستشفى لاله بشكل منفصل، ويؤكد فريق التنسيق الموعد النهائي.', sections: [
      { title: 'عيادة الدكتور علي رضا صباغيان', text: 'طهران، شارع وليعصر، أعلى شارع ظفر، زقاق بهرامي، رقم 94، الطابق الأول', items: ['الأحد والثلاثاء', 'من 14:00 إلى 19:00 بتوقيت طهران'], phones: ['02188650372', '02188650373'], mapUrl: 'https://maps.app.goo.gl/iQMZEsHoqH9ixvdH8', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2160.57815760579!2d51.41268288147117!3d35.770228191124566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e070023ed2b63%3A0xcb4e3750da90fa72!2z2YXYt9ioINiv2qnYqtixINi52YTbjNix2LbYpyDYtdio2KfYutuM2KfZhg!5e0!3m2!1sen!2s!4v1790018485270!5m2!1sen!2s' },
      { title: 'مستشفى لاله التخصصي', text: 'طهران، شهرك غرب، شارع فرحزادي، سيماي إيران', phones: ['02188369862', '02188369863', '02188369864', '02188369865', '02188369866'], mapUrl: 'https://maps.app.goo.gl/DSLeHBXZ5gUk9Fgo7', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.923069958133!2d51.35771377559522!3d35.75269557256419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07762c422c23%3A0xf750cc88ca6b2462!2sLaleh%20Hospital!5e0!3m2!1sen!2s!4v1790018540635!5m2!1sen!2s' },
    ] },
  },
}
