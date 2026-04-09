import React from 'react'

function NavLink({ href, children }) {
  return (
    <a className="nav-link" href={href}>
      {children}
    </a>
  )
}

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="section-block">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p className="section-copy">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}

function Card({ children, className = '' }) {
  return <article className={`panel ${className}`.trim()}>{children}</article>
}

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

      <section id="home" className="hero">
        <div className="hero-grid">
          <div className="hero-copy-column">
            <p className="eyebrow hero-tag">
              {data.profile.currentRole} | {data.profile.specialization}
            </p>
            <div className="hero-top-row">
              <div className="hero-title-box">
                <h1 className="hero-title">
                  Olá, eu sou o <span className="hero-name">Rodrigo Cabral</span>, sou especialista em testes automatizados com <span className="hero-name">Playwright</span>
                </h1>
              </div>

              <div className="highlight-card highlight-main hero-highlights">
                <p className="eyebrow">Quick Highlights</p>
                <ul>
                  {data.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="hero-copy">{data.profile.bio}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Hire Me
              </a>
              <a className="button button-secondary" href={`mailto:${data.profile.contact.email}`}>
                Email
              </a>
            </div>

            <p className="hero-location">
              {data.profile.location} &nbsp;|&nbsp; {data.profile.availability}
            </p>
          </div>
        </div>

      </section>

      <Section
        id="about"
        eyebrow="About Me"
        title="Sobre mim"
        description="Perfil, foco e contexto de trabalho em um bloco direto ao ponto."
      >
        <div className="two-column-grid">
          <Card>
            <h3>What I Do</h3>
            <ul className="bullet-list">
              <li>Interfaces responsivas com hierarquia clara</li>
              <li>Componentes reutilizáveis e escaláveis</li>
              <li>Fluxos orientados a conteúdo e conversão</li>
            </ul>
          </Card>
          <Card>
            <h3>Strengths</h3>
            <ul className="bullet-list">
              <li>Comunicação clara e consistente</li>
              <li>Boa leitura de produto e detalhe visual</li>
              <li>Entrega guiada por testes</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Skills"
        title="Habilidades"
        description="Tecnologias e práticas que sustentam o trabalho no dia a dia."
      >
        <div className="skills-grid">
          <Card>
            <h3>Core</h3>
            <div className="tag-row">
              {data.skills.core.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <h3>Practices</h3>
            <div className="tag-row">
              {data.skills.practices.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <h3>Tools & Workflow</h3>
            <div className="tag-row">
              {data.skills.tools.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Professional Experience"
        title="Experiência profissional"
        description="Resumo da trajetória com foco em impacto, consistência e colaboração."
      >
        <div className="stack-list">
          {data.experience.map((item) => (
            <Card key={`${item.company}-${item.period}`}>
              <div className="stack-row">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span className="stack-period">{item.period}</span>
              </div>
              <p>{item.description}</p>
            </Card>
          ))}
          {data.education.map((item) => (
            <Card key={`${item.institution}-${item.period}`} className="education-card">
              <div className="stack-row">
                <div>
                  <h3>{item.course}</h3>
                  <p>{item.institution}</p>
                </div>
                <span className="stack-period">{item.period}</span>
              </div>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Projetos"
        description="Artigos e repositórios que mostram o raciocínio, o processo e a execução."
      >
        <div className="projects-grid">
          <div className="stack-list">
            {data.repositories.map((repo) => (
              <Card key={repo.name} className="repo-card">
                <div className="repo-header">
                  <h3>{repo.name}</h3>
                  <span>{repo.language}</span>
                </div>
                <p>{repo.description}</p>
                <strong>{repo.stars} estrelas</strong>
              </Card>
            ))}
          </div>

          <div className="stack-list">
            {data.articles.map((article) => (
              <Card key={article.slug} className={article.featured ? 'featured-card' : ''}>
                <div className="card-topline">
                  <span>Article</span>
                  <span>{article.formattedDate}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact Me"
        title="Contato"
        description="Vamos conversar sobre projetos, colaboração ou novas oportunidades."
      >
        <Card className="contact-card">
          <p className="contact-text">{data.profile.contact.email}</p>
          <div className="contact-links">
            <a href={`https://${data.profile.contact.linkedin}`} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`https://${data.profile.contact.github}`} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </Card>
      </Section>
    </main>
  )
}
