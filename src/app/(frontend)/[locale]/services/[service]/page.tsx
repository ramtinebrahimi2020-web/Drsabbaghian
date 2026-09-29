import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, locales } from '@/lib/siteContent'
import { localeAlternates } from '@/lib/seo'
import { KneeReplacementDetail } from './KneeReplacementDetail'
import { ArthroscopyDetail } from './ArthroscopyDetail'

const copy = {
  fa: { kicker:'خدمات تخصصی',title:'تعویض مفصل زانو',lead:'آشنایی عمومی با ارزیابی، تصمیم‌گیری و مسیر مراقبت در جراحی تعویض مفصل زانو.',sections:[['این خدمت چه زمانی بررسی می‌شود؟','زمانی که درد و محدودیت عملکرد ادامه‌دار باشد، پزشک با بررسی شرح حال، معاینه، تصاویر و درمان‌های پیشین گزینه‌های ممکن را مرور می‌کند.'],['ارزیابی پیش از تصمیم‌گیری','تصمیم جراحی تنها با یک علامت یا تصویر گرفته نمی‌شود و شرایط عمومی، نیازهای فرد و انتظارهای واقع‌بینانه نیز اهمیت دارند.'],['آمادگی و پیگیری','جزئیات آمادگی، مدت بستری و توان‌بخشی بر اساس وضعیت هر بیمار تعیین می‌شود.']],note:'اطلاعات این صفحه عمومی است و به معنای مناسب‌بودن این درمان برای هر فرد نیست.',cta:'هماهنگی ارزیابی' },
  en: { kicker:'Specialized services',title:'Knee replacement',lead:'General information about assessment, decision-making, and the care pathway for knee replacement surgery.',sections:[['When may this service be considered?','When pain and functional limitations persist, the physician reviews the history, examination, imaging, and previous treatments before discussing options.'],['Assessment before a decision','A surgical decision is not based on a single symptom or image. General health, individual needs, and realistic expectations also matter.'],['Preparation and follow-up','Preparation, hospital stay, and rehabilitation are planned according to each patient’s circumstances.']],note:'This page provides general information and does not mean this treatment is suitable for every person.',cta:'Arrange an evaluation' },
  ar: { kicker:'الخدمات التخصصية',title:'استبدال مفصل الركبة',lead:'معلومات عامة عن التقييم واتخاذ القرار ومسار الرعاية في جراحة استبدال مفصل الركبة.',sections:[['متى قد تُدرس هذه الخدمة؟','عند استمرار الألم والقيود الوظيفية يراجع الطبيب التاريخ المرضي والفحص والصور والعلاجات السابقة قبل مناقشة الخيارات.'],['التقييم قبل القرار','لا يعتمد القرار الجراحي على عرض أو صورة واحدة، بل تُراعى الصحة العامة واحتياجات المريض والتوقعات الواقعية.'],['الاستعداد والمتابعة','تُحدد تفاصيل الاستعداد والإقامة والتأهيل وفق حالة كل مريض.']],note:'معلومات هذه الصفحة عامة ولا تعني أن هذا العلاج مناسب لكل شخص.',cta:'تنسيق التقييم' },
}
const arthroscopyMeta = {
  fa: { title: 'آرتروسکوپی و آسیب‌های ورزشی زانو', description: 'آشنایی با ارزیابی آسیب‌های داخل زانو، نقش آرتروسکوپی و مسیر بازتوانی.' },
  en: { title: 'Knee Arthroscopy and Sports Injuries', description: 'General guidance on assessing injuries inside the knee, the role of arthroscopy, and rehabilitation.' },
  ar: { title: 'تنظير الركبة والإصابات الرياضية', description: 'معلومات عامة عن تقييم الإصابات داخل الركبة ودور التنظير ومسار التأهيل.' },
}
export function generateStaticParams(){return locales.flatMap(locale=>[{locale,service:'knee-replacement'},{locale,service:'knee-arthroscopy'}])}
export async function generateMetadata({params}:{params:Promise<{locale:string;service:string}>}):Promise<Metadata>{const {locale,service}=await params;if(!isLocale(locale))return {};if(service==='knee-arthroscopy')return {...arthroscopyMeta[locale],alternates:localeAlternates(locale,`services/${service}`)};return service==='knee-replacement'?{title:copy[locale].title,description:copy[locale].lead,alternates:localeAlternates(locale,`services/${service}`)}:{}}
export default async function ServicePage({params}:{params:Promise<{locale:string;service:string}>}){const {locale,service}=await params;if(!isLocale(locale))notFound();if(service==='knee-arthroscopy')return <ArthroscopyDetail locale={locale} />;if(service==='knee-replacement')return <KneeReplacementDetail locale={locale} content={copy[locale]} />;notFound()}
