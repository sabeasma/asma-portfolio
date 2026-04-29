"use client"
import { useRef } from 'react'
import useScrollReveal from '../lib/useScrollReveal'
import { portfolioData } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Education(){
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} data-revealed="false">
      <SectionHeading
        eyebrow="Academics"
        title="Education"
        subtitle="Strong academic grounding in AI and data systems with consistent performance."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card-surface p-6 soft-gradient-border">
          <div className="text-xs tracking-[0.2em] uppercase text-accent mb-3">Schooling</div>
          <h3 className="text-xl font-semibold mb-1">{portfolioData.education.higherSecondary.level}</h3>
          <p className="text-muted">{portfolioData.education.higherSecondary.school}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/5 border border-white/15 px-3 py-1">
              Score: {portfolioData.education.higherSecondary.score}
            </span>
          </div>
        </div>

        <div className="card-surface p-6 soft-gradient-border">
          <div className="text-xs tracking-[0.2em] uppercase text-accent mb-3">Degree</div>
          <h3 className="text-xl font-semibold mb-1">{portfolioData.education.degree}</h3>
          <p className="text-muted">{portfolioData.education.institute}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/5 border border-white/15 px-3 py-1">
              {portfolioData.education.years}
            </span>
            <span className="rounded-full bg-white/5 border border-white/15 px-3 py-1">
              CGPA: {portfolioData.education.cgpa}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
