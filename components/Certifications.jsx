"use client"
import { useRef } from 'react'
import useScrollReveal from '../lib/useScrollReveal'
import { portfolioData } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Certifications(){
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} data-revealed="false">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        subtitle="Recognized certifications validating backend proficiency and AI foundations."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.certifications.map((certification)=> (
          <div key={certification} className="card-surface p-5 hover:border-white/20 transition-colors">
            <div className="text-xs text-accent uppercase tracking-[0.2em] mb-3">Oracle</div>
            <h4 className="font-medium">{certification}</h4>
            <div className="text-sm text-muted mt-3">Issued by: Oracle University</div>
          </div>
        ))}
      </div>
    </div>
  )
}
