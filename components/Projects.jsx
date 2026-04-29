"use client"
import { useRef } from 'react'
import useScrollReveal from '../lib/useScrollReveal'
import { portfolioData } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import Link from 'next/link'
import { withBasePath } from '../lib/withBasePath'

export default function Projects(){
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} data-revealed="false">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        subtitle="High-impact backend and AI projects focused on real-world reliability and usability."
      />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project)=> (
          <article
            key={project.title}
            className="section-card p-5 transition-transform hover:-translate-y-1 hover:border-white/20"
          >
            <h3 className="font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              <Link className="btn-ghost inline-flex items-center justify-center" href={withBasePath('/contact')}>
                Discuss Project
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
