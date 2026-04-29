"use client"
import { useRef } from 'react'
import useScrollReveal from '../lib/useScrollReveal'
import { portfolioData } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function About(){
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} data-revealed="false" className="grid gap-6 md:grid-cols-2 items-center">
      <div className="space-y-4">
        <SectionHeading
          eyebrow="Profile"
          title="About"
          subtitle="Professional, confident, and solution-driven engineering mindset."
        />
        <p className="text-muted">{portfolioData.personal.summary}</p>
        <p className="text-muted">
          I focus on backend architecture, API reliability, and practical AI features that improve
          real products and real user outcomes.
        </p>
      </div>
      <div>
        <div className="card-surface p-6 soft-gradient-border">
          <h3 className="font-medium">Personal Details</h3>
          <dl className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted">
            <div><strong>Location:</strong> {portfolioData.personal.location}</div>
            <div><strong>Phone:</strong> {portfolioData.personal.phone}</div>
            <div><strong>Email:</strong> {portfolioData.personal.email}</div>
          </dl>
        </div>
      </div>
    </div>
  )
}
