import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Languages from '../components/Languages'
import Contact from '../components/Contact'

export default function Home(){
  return (
    <>
      <section id="home" className="section-pad  md:pt-8 lg:pt-1">
        <Hero />
      </section>

      <section id="about" className="section-pad">
        <div className="section-shell">
          <About />
        </div>
      </section>

      <section id="skills" className="section-pad bg-transparent">
        <div className="section-shell">
          <Skills />
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="section-shell">
          <Projects />
        </div>
      </section>

      <section id="education" className="section-pad">
        <div className="section-shell">
          <Education />
        </div>
      </section>

      <section id="certifications" className="section-pad">
        <div className="section-shell">
          <Certifications />
        </div>
      </section>

      <section id="languages" className="section-pad">
        <div className="section-shell">
          <Languages />
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="section-shell">
          <Contact />
        </div>
      </section>
    </>
  )
}
