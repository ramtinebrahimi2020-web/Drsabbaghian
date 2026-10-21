import Image from 'next/image'
import React from 'react'

import './index.scss'

export const AdminLogo: React.FC = () => (
  <div className="admin-brand admin-brand--logo" dir="rtl">
    <Image src="/brand/logo-fa.svg" alt="دکتر علیرضا صباغیان" width={224} height={84} priority />
  </div>
)

export const AdminIcon: React.FC = () => (
  <div
    className="admin-brand admin-brand--icon"
    aria-label="دکتر علیرضا صباغیان"
    role="img"
  >
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 4.5h6v4.6h4.5v5.8H15v4.6H9v-4.6H4.5V9.1H9V4.5Z" fill="currentColor" />
    </svg>
  </div>
)
