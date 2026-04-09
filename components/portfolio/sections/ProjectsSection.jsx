import React from 'react'

import { Section } from '../shared/Section.jsx'
import { RepoCard } from '../cards/RepoCard.jsx'
import { ArticleCard } from '../cards/ArticleCard.jsx'

export function ProjectsSection({ repositories, articles }) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Projetos"
      description="Artigos e repositórios que mostram o raciocínio, o processo e a execução."
    >
      <div className="projects-grid">
        <div className="stack-list">
          {repositories.map((repo) => (
            <RepoCard
              key={repo.name}
              name={repo.name}
              language={repo.language}
              description={repo.description}
              stars={repo.stars}
            />
          ))}
        </div>

        <div className="stack-list">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              formattedDate={article.formattedDate}
              readingTime={article.readingTime}
              featured={article.featured}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
