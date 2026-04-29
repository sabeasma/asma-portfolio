"use client"
import { useRef } from 'react'
import useScrollReveal from '../lib/useScrollReveal'
import { portfolioData } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Skills(){
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} data-revealed="false">
      <SectionHeading
        eyebrow="Core Strengths"
        title="Skills"
        subtitle="A practical stack for building performant backend systems and AI-powered products."
      />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.skills.map((skillGroup)=> (
          <div
            key={skillGroup.group}
            className="card-surface p-4 hover:shadow-sm transition-transform transform hover:-translate-y-1"
          >
            <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-primary to-accent mb-3" />
            <h4 className="font-medium mb-3">{skillGroup.group}</h4>
            <div className="grid gap-2 grid-cols-2">
              {skillGroup.items.map((item)=> (
                <div
                  key={item}
                  className="p-2 rounded-md bg-gradient-to-br from-white/5 to-white/[0.03] hover:from-accent/20 hover:to-primary/20 transition"
                >
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
