"use client"

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LoadingScreen from './LoadingScreen'

export default function SiteShell({ children }) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const finish = () => setShowLoader(false)

    if (typeof document !== 'undefined' && document.readyState === 'complete') {
      const timer = window.setTimeout(finish, 700)
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(finish, 1600)
    window.addEventListener('load', finish, { once: true })

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('load', finish)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_top_left,_rgba(0,180,216,0.12),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(124,58,237,0.14),_transparent_34%),linear-gradient(180deg,#050814_0%,#070b13_42%,#06080f_100%)] text-slate-100 antialiased">
      <LoadingScreen isVisible={showLoader} />
      <div className="relative flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="app-main flex-1 pt-24 sm:pt-28" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}