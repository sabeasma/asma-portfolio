"use client"
import { useRef } from 'react'
import useScrollReveal from '../lib/useScrollReveal'
import { portfolioData } from '../data/portfolioData'
import { withBasePath } from '../lib/withBasePath'

export default function Hero(){
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      data-revealed="false"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: `url('${withBasePath('/assets/pattern-grid.svg')}')`, backgroundSize: '220px' }}
      />
      <div className="section-shell relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="section-kicker">Backend Developer | AI Enthusiast</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              {portfolioData.personal.name}
            </h1>
            <p className="mt-5 text-xl md:text-2xl text-slate-200">{portfolioData.personal.title}</p>
            <p className="section-copy mt-6 mx-auto text-base md:text-lg lg:mx-0">
              {portfolioData.personal.tagline}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a href="#projects" className="btn-primary inline-flex items-center gap-3">
                View Projects
              </a>
              <a href="#contact" className="btn-ghost inline-flex items-center gap-3">
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-4 text-left md:p-5">
              <div className="rounded-[1.5rem] overflow-hidden bg-slate-900/70">
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4 sm:p-6">
                  <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[1.5rem] bg-slate-950">
                    <img
                      src={withBasePath('/assets/profile-photo.jpg')}
                      alt="ASMA BANU I"
                      className="h-full w-full object-cover object-top"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none'
                        const fallback = event.currentTarget.nextElementSibling
                        if (fallback) fallback.style.display = 'flex'
                      }}
                    />
                    <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-slate-900 to-accent/20 text-center">
                      <div>
                        <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl font-bold tracking-[0.3em] text-white">
                          AI
                        </div>
                        <p className="text-sm text-slate-300">Profile photo placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Removed Location and Focus per design request - keeps card simpler */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
