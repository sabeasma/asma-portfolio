import './globals.css'
import { Inter } from 'next/font/google'
import SiteShell from '../components/SiteShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ASMA BANU I — Backend Developer | AI Enthusiast',
  description: 'Motivated AI & Data Science student. Backend systems, scalable APIs, and AI integration.'
}

export default function RootLayout({ children }){
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
