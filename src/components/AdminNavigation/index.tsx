'use client'

import {
  BookOpenText,
  FileText,
  Files,
  GalleryHorizontalEnd,
  Images,
  Inbox,
  LayoutDashboard,
  MapPin,
  Menu,
  PanelBottom,
  Stethoscope,
  Tags,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import './index.scss'

const navigationGroups = [
  {
    label: 'محتوای اصلی سایت',
    items: [
      { href: '/admin/collections/pages', icon: Files, label: 'صفحه‌های سایت' },
      { href: '/admin/collections/services', icon: Stethoscope, label: 'خدمات تخصصی' },
      { href: '/admin/collections/locations', icon: MapPin, label: 'مطب و مراکز مراجعه' },
    ],
  },
  {
    label: 'مجله سلامت',
    items: [
      { href: '/admin/collections/posts', icon: BookOpenText, label: 'مقاله‌ها' },
      { href: '/admin/collections/categories', icon: Tags, label: 'دسته‌بندی مقاله‌ها' },
    ],
  },
  {
    label: 'تصاویر و فایل‌ها',
    items: [
      { href: '/admin/collections/gallery-items', icon: GalleryHorizontalEnd, label: 'گالری تصاویر' },
      { href: '/admin/collections/media', icon: Images, label: 'کتابخانه رسانه' },
    ],
  },
  {
    label: 'فرم‌ها و پیام‌ها',
    items: [
      { href: '/admin/collections/forms', icon: FileText, label: 'فرم‌های سایت' },
      { href: '/admin/collections/form-submissions', icon: Inbox, label: 'پیام‌های دریافتی' },
    ],
  },
  {
    label: 'تنظیمات و دسترسی',
    items: [
      { href: '/admin/globals/header', icon: Menu, label: 'منوی بالای سایت' },
      { href: '/admin/globals/footer', icon: PanelBottom, label: 'پاورقی سایت' },
      { href: '/admin/collections/users', icon: Users, label: 'کاربران پنل' },
    ],
  },
] as const

const AdminNavigation = () => {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <div className="beginner-nav" dir="rtl">
      <Link
        aria-current={pathname === '/admin' ? 'page' : undefined}
        className={`beginner-nav__home${pathname === '/admin' ? ' beginner-nav__link--active' : ''}`}
        href="/admin"
      >
        <LayoutDashboard aria-hidden="true" size={19} strokeWidth={1.8} />
        <span>
          <strong>پیشخوان</strong>
          <small>شروع و دسترسی سریع</small>
        </span>
      </Link>

      {navigationGroups.map((group) => (
        <section className="beginner-nav__group" key={group.label}>
          <h2>{group.label}</h2>
          <div className="beginner-nav__links">
            {group.items.map((item) => {
              const active = isActive(item.href)
              const Icon = item.icon

              return (
                <Link
                  aria-current={active ? 'page' : undefined}
                  className={`beginner-nav__link${active ? ' beginner-nav__link--active' : ''}`}
                  href={item.href}
                  key={item.href}
                >
                  <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

export default AdminNavigation
