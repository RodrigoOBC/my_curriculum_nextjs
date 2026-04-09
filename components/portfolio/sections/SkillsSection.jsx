import React from 'react'

import { TagGroup } from '../cards/TagGroup.jsx'
import { Section } from '../shared/Section.jsx'

export function SkillsSection({ skills }) {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Habilidades"
      description="Tecnologias e práticas que sustentam o trabalho no dia a dia."
    >
      <div className="skills-grid">
        <TagGroup title="Core" items={skills.core} />
        <TagGroup title="Practices" items={skills.practices} />
        <TagGroup title="Tools & Workflow" items={skills.tools} />
      </div>
    </Section>
  )
}
