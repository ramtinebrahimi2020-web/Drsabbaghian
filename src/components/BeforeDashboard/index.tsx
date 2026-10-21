import type { ServerProps } from 'payload'
import { Gutter } from '@payloadcms/ui'
import Link from 'next/link'
import React from 'react'

import './index.scss'

type DashboardProps = Pick<ServerProps, 'payload' | 'user'>

const roleLabels: Record<string, string> = {
  admin: 'مدیر ارشد',
  editor: 'مدیر محتوا',
  'language-reviewer': 'بازبین زبان',
  'medical-reviewer': 'بازبین پزشکی',
}

const BeforeDashboard = async ({ payload, user }: DashboardProps) => {
  const [pages, services, posts, gallery, locations, draftPosts, pendingMedicalPosts] =
    await Promise.all([
      payload.count({ collection: 'pages' }),
      payload.count({ collection: 'services' }),
      payload.count({ collection: 'posts' }),
      payload.count({ collection: 'gallery-items' }),
      payload.count({ collection: 'locations' }),
      payload.count({ collection: 'posts', where: { _status: { equals: 'draft' } } }),
      payload.count({
        collection: 'posts',
        where: { 'medicalReview.status': { not_equals: 'approved' } },
      }),
    ])

  const currentUser = user as { name?: string; role?: string } | undefined
  const displayName = currentUser?.name || 'مدیر سایت'
  const role = currentUser?.role ? roleLabels[currentUser.role] || currentUser.role : ''
  const stats = [
    { href: '/admin/collections/pages', label: 'صفحه‌ها', value: pages.totalDocs },
    { href: '/admin/collections/services', label: 'خدمات تخصصی', value: services.totalDocs },
    { href: '/admin/collections/posts', label: 'مقاله‌ها', value: posts.totalDocs },
    { href: '/admin/collections/gallery-items', label: 'تصاویر گالری', value: gallery.totalDocs },
    { href: '/admin/collections/locations', label: 'مراکز مراجعه', value: locations.totalDocs },
  ]
  const primaryTasks = [
    {
      description: 'یک مقاله آموزشی تازه بنویسید و پس از بازبینی منتشر کنید.',
      href: '/admin/collections/posts/create',
      number: '۱',
      title: 'مقاله جدید بسازید',
    },
    {
      description: 'خدمات درمانی و توضیحات هر خدمت را به‌روزرسانی کنید.',
      href: '/admin/collections/services',
      number: '۲',
      title: 'خدمات را ویرایش کنید',
    },
    {
      description: 'نشانی، تلفن و لینک نوبت‌دهی مطب یا بیمارستان را بررسی کنید.',
      href: '/admin/collections/locations',
      number: '۳',
      title: 'اطلاعات مراجعه را بررسی کنید',
    },
  ]

  return (
    <Gutter className="doctor-dashboard-shell">
      <section className="doctor-dashboard" dir="rtl">
      <header className="doctor-dashboard__hero">
        <div>
          <span className="doctor-dashboard__eyebrow">پیشخوان مدیریت محتوا</span>
          <h1>سلام {displayName}</h1>
          <p>برای انجام کارهای روزمره، یکی از گزینه‌های روشن زیر را انتخاب کنید.</p>
        </div>
        {role ? <span className="doctor-dashboard__role">{role}</span> : null}
      </header>

      <section className="doctor-dashboard__start" aria-labelledby="start-heading">
        <div className="doctor-dashboard__section-heading">
          <div>
            <span className="doctor-dashboard__eyebrow">راهنمای شروع</span>
            <h2 id="start-heading">می‌خواهید چه کاری انجام دهید؟</h2>
          </div>
          <p>هر کارت شما را مستقیم به بخش موردنیاز می‌برد.</p>
        </div>
        <div className="doctor-dashboard__primary-tasks">
          {primaryTasks.map((task) => (
            <Link className="doctor-dashboard__primary-task" href={task.href} key={task.href}>
              <span className="doctor-dashboard__task-number" aria-hidden="true">
                {task.number}
              </span>
              <span>
                <strong>{task.title}</strong>
                <small>{task.description}</small>
              </span>
              <span className="doctor-dashboard__task-link">باز کردن بخش ←</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="doctor-dashboard__section-heading doctor-dashboard__section-heading--stats">
        <div>
          <span className="doctor-dashboard__eyebrow">نمای کلی</span>
          <h2>محتوای ثبت‌شده</h2>
        </div>
        <p>برای دیدن فهرست کامل، روی هر کارت بزنید.</p>
      </div>
      <div className="doctor-dashboard__stats" aria-label="آمار محتوا">
        {stats.map((stat) => (
          <Link className="doctor-dashboard__stat" href={stat.href} key={stat.href}>
            <strong>{stat.value.toLocaleString('fa-IR')}</strong>
            <span>{stat.label}</span>
          </Link>
        ))}
      </div>

      <div className="doctor-dashboard__columns">
        <section className="doctor-dashboard__panel" aria-labelledby="workflow-heading">
          <div className="doctor-dashboard__panel-heading">
            <div>
              <span className="doctor-dashboard__eyebrow">گردش کار</span>
              <h2 id="workflow-heading">نیازمند پیگیری</h2>
            </div>
            <Link href="/admin/collections/posts">مشاهده همه</Link>
          </div>
          <Link className="doctor-dashboard__task" href="/admin/collections/posts">
            <span>
              <strong>مقاله‌های پیش‌نویس</strong>
              <small>فهرست مقاله‌ها را باز کنید و ستون وضعیت را ببینید.</small>
            </span>
            <strong>{draftPosts.totalDocs.toLocaleString('fa-IR')}</strong>
          </Link>
          <Link className="doctor-dashboard__task" href="/admin/collections/posts">
            <span>
              <strong>در انتظار تأیید پزشکی</strong>
              <small>مقاله‌ها را باز کنید و وضعیت بازبینی پزشکی را بررسی کنید.</small>
            </span>
            <strong>{pendingMedicalPosts.totalDocs.toLocaleString('fa-IR')}</strong>
          </Link>
        </section>

        <section className="doctor-dashboard__panel" aria-labelledby="quick-actions-heading">
          <div className="doctor-dashboard__panel-heading">
            <div>
              <span className="doctor-dashboard__eyebrow">مدیریت سریع</span>
              <h2 id="quick-actions-heading">بخش‌های پرکاربرد</h2>
            </div>
          </div>
          <div className="doctor-dashboard__actions">
            <Link href="/admin/collections/pages">صفحه‌های سایت</Link>
            <Link href="/admin/collections/services">خدمات تخصصی</Link>
            <Link href="/admin/collections/gallery-items">گالری تصاویر</Link>
            <Link href="/admin/collections/locations">مطب و تماس</Link>
          </div>
        </section>
      </div>
      </section>
    </Gutter>
  )
}

export default BeforeDashboard
