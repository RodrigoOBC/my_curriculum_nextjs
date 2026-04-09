import React from 'react'

import { InfoCard } from '../cards/InfoCard.jsx'
import { Section } from '../shared/Section.jsx'

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Sobre mim"
      description="Perfil, foco e contexto de trabalho em um bloco direto ao ponto."
    >
      <div className="two-column-grid">
        <InfoCard title="What I Do">
          <ul className="bullet-list">
            <li>Interfaces responsivas com hierarquia clara</li>
            <li>Componentes reutilizáveis e escaláveis</li>
            <li>Fluxos orientados a conteúdo e conversão</li>
          </ul>
        </InfoCard>
        <InfoCard title="Strengths">
          <ul className="bullet-list">
            <li>Comunicação clara e consistente</li>
            <li>Boa leitura de produto e detalhe visual</li>
            <li>Entrega guiada por testes</li>
          </ul>
        </InfoCard>
      </div>
    </Section>
  )
}
