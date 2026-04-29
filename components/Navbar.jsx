"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [active, setActive] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (pathname !== '/') {
      setActive(pathname.replace('/', '') || 'home')
      return
    }

    const onScroll = () => {
      const sections = nav.map((n) => document.getElementById(n.id))
      const mid = window.innerHeight / 2.1
      for (const section of sections) {
        if (!section) continue
        const rect = section.getBoundingClientRect()
        if (rect.top <= mid && rect.bottom >= mid) {
          setActive(section.id)
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <nav className="section-shell flex items-center justify-between py-3">
        <Link href="/" className="text-white font-semibold tracking-wide">
          ASMA BANU I
        </Link>

        <button
          type="button"
          className="md:hidden btn-ghost text-xs"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden md:flex gap-5 items-center text-sm text-muted">
          {nav.map((item) => {
            const href = item.id === 'home' ? '/' : `/#${item.id}`
            const isActive = active === item.id

            return (
              <li key={item.id}>
                <Link
                  href={href}
                  className={`pb-1 border-b ${
                    isActive
                      ? 'text-white border-accent'
                      : 'border-transparent hover:text-white hover:border-white/30'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black/70 px-4 pb-3 md:hidden">
          <ul className="flex flex-col gap-2 pt-3">
            {nav.map((item) => {
              const href = item.id === 'home' ? '/' : `/#${item.id}`
              return (
                <li key={item.id}>
                  <Link
                    href={href}
                    className="block rounded-md px-2 py-2 text-sm text-slate-200 hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
