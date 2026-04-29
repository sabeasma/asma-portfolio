"use client"

import { useRef } from 'react'
import useScrollReveal from '../lib/useScrollReveal'
import { portfolioData } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Languages() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} data-revealed="false">
      <SectionHeading
        eyebrow="Communication"
        title="Languages"
        subtitle="Multilingual communication helps me collaborate effectively across diverse teams and communities."
      />
      <div className="flex flex-wrap gap-3">
        {portfolioData.languages.map((language) => (
          <span
            key={language}
            className="soft-gradient-border rounded-full px-4 py-2 text-sm text-slate-200 bg-slate-900/50 hover:scale-105 transition-transform"
          >
            {language}
          </span>
        ))}
      </div>
    </div>
  )
}
