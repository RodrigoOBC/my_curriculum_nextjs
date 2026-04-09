import React from 'react'

import { Section } from '../shared/Section.jsx'
import { TimelineCard } from '../cards/TimelineCard.jsx'

export function ExperienceSection({ experience, education }) {
  return (
    <Section
      id="experience"
      eyebrow="Professional Experience"
      title="Experiência profissional"
      description="Resumo da trajetória com foco em impacto, consistência e colaboração."
    >
      <div className="stack-list">
        {experience.map((item) => (
          <TimelineCard
            key={`${item.company}-${item.period}`}
            title={item.role}
            subtitle={item.company}
            period={item.period}
            description={item.description}
          />
        ))}

        {education.map((item) => (
          <TimelineCard
            key={`${item.institution}-${item.period}`}
            title={item.course}
            subtitle={item.institution}
            period={item.period}
            description={item.description}
            className="education-card"
          />
        ))}
      </div>
    </Section>
  )
}
