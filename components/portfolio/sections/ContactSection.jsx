import React from 'react'

import { Card } from '../shared/Card.jsx'
import { Section } from '../shared/Section.jsx'

export function ContactSection({ contact }) {
  return (
    <Section
      id="contact"
      eyebrow="Contact Me"
      title="Contato"
      description="Vamos conversar sobre projetos, colaboração ou novas oportunidades."
    >
      <Card className="contact-card">
        <p className="contact-text">{contact.email}</p>
        <div className="contact-links">
          <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`https://${contact.github}`} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </Card>
    </Section>
  )
}
