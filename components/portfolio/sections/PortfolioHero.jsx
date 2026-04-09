import React from 'react'

import { HighlightCard } from '../cards/HighlightCard.jsx'

export function PortfolioHero({ profile, highlights }) {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy-column">
          <p className="eyebrow hero-tag">
            {profile.currentRole} | {profile.specialization}
          </p>
          <div className="hero-top-row">
            <div className="hero-title-box">
              <h1 className="hero-title">
                Olá, eu sou o <span className="hero-name">Rodrigo Cabral</span>, sou especialista em testes automatizados com <span className="hero-name">Playwright</span>
              </h1>
            </div>

            <HighlightCard title="Quick Highlights" items={highlights} className="highlight-main hero-highlights" />
          </div>

          <p className="hero-copy">{profile.bio}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Hire Me
            </a>
            <a className="button button-secondary" href={`mailto:${profile.contact.email}`}>
              Email
            </a>
          </div>

          <p className="hero-location">
            {profile.location} &nbsp;|&nbsp; {profile.availability}
          </p>
        </div>
      </div>
    </section>
  )
}
