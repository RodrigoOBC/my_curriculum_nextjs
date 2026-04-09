import React from 'react'

import { NavLink } from './shared/NavLink.jsx'
import { PortfolioHero } from './sections/PortfolioHero.jsx'
import { AboutSection } from './sections/AboutSection.jsx'
import { SkillsSection } from './sections/SkillsSection.jsx'
import { ExperienceSection } from './sections/ExperienceSection.jsx'
import { ProjectsSection } from './sections/ProjectsSection.jsx'
import { ContactSection } from './sections/ContactSection.jsx'

export function PortfolioLanding({ data }) {
  return (
    <main className="portfolio-shell">
      <nav className="top-nav" aria-label="Primary">
        <a className="brand" href="#home">
          Rodrigo.
        </a>
        <div className="nav-links">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>

      <PortfolioHero profile={data.profile} highlights={data.highlights} />
      <AboutSection />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experience={data.experience} education={data.education} />
      <ProjectsSection repositories={data.repositories} articles={data.articles} />
      <ContactSection contact={data.profile.contact} />
    </main>
  )
}
