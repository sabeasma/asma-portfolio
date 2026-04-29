"use client"
import { useRef } from 'react'
import useScrollReveal from '../lib/useScrollReveal'
import SectionHeading from './SectionHeading'
import { portfolioData } from '../data/portfolioData'

const iconClass = 'h-4 w-4 text-accent'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M10 14a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 10a4 4 0 0 1 0 6l-2 2a4 4 0 1 1-6-6l1-1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M8 4h2l2 5-2 2c1 2 3 4 5 5l2-2 5 2v2a2 2 0 0 1-2 2c-9 0-16-7-16-16a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export default function Contact(){
  const ref = useRef(null)
  useScrollReveal(ref)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`
  }

  return (
    <div ref={ref} data-revealed="false" className="grid gap-6 md:grid-cols-2">
      <div className="section-card p-6">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Contact"
          subtitle="Reach out for internships, collaborations, or engineering opportunities."
        />

        <ul className="mt-4 text-sm text-muted space-y-3">
          <li>
            <a href={`mailto:${portfolioData.personal.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <MailIcon /> {portfolioData.personal.email}
            </a>
          </li>
          <li>
            <a href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 hover:text-white">
              <PhoneIcon /> {portfolioData.personal.phone}
            </a>
          </li>
          <li>
            <a href={portfolioData.links.linkedin} className="inline-flex items-center gap-2 hover:text-white" target="_blank" rel="noreferrer">
              <LinkIcon /> LinkedIn
            </a>
          </li>
          <li>
            <a href={portfolioData.links.github} className="inline-flex items-center gap-2 hover:text-white" target="_blank" rel="noreferrer">
              <LinkIcon /> GitHub
            </a>
          </li>
          <li>
            <a href={portfolioData.links.leetcode} className="inline-flex items-center gap-2 hover:text-white" target="_blank" rel="noreferrer">
              <LinkIcon /> LeetCode
            </a>
          </li>
        </ul>
      </div>

      <form className="section-card space-y-4 p-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-sm text-slate-200">Name</label>
          <input id="name" name="name" required className="mt-1 block w-full rounded-md border border-white/20 bg-transparent p-2 outline-none focus:border-cyan-300/60" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-slate-200">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border border-white/20 bg-transparent p-2 outline-none focus:border-cyan-300/60" />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-slate-200">Message</label>
          <textarea id="message" name="message" required className="mt-1 block h-28 w-full rounded-md border border-white/20 bg-transparent p-2 outline-none focus:border-cyan-300/60" />
        </div>
        <div>
          <button type="submit" className="btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  )
}
