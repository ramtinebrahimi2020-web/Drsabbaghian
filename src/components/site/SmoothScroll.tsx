'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: { offset: -80 },
      autoRaf: true,
      autoToggle: true,
      allowNestedScroll: true,
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.82,
    })

    return () => lenis.destroy()
  }, [])

  return null
}
