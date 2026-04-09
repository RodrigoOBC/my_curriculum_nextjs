const profile = {
  name: 'Rodrigo Cabral',
  role: 'TechLead de QA & Quality Automation',
  currentRole: 'TechLead de QA',
  specialization: 'Estratégia de testes, Playwright e qualidade em escala',
  location: 'Brasil',
  intro: 'Olá, eu sou o Rodrigo Cabral, TechLead de QA focado em estratégia, automação e qualidade em escala.',
  bio: 'Eu lidero iniciativas de qualidade desde a definição da estratégia de testes até a sustentação de pipelines confiáveis. Atuo com Playwright, coaching técnico e melhoria contínua para acelerar entregas com segurança.',
  availability: 'Disponível para novos projetos',
  stack: ['Playwright', 'TypeScript', 'CI/CD', 'Docker', 'Observability'],
  focus: 'Estratégia de QA, automação E2E, qualidade em pipelines e mentoria técnica.',
  contact: {
    email: 'rodrigo@example.com',
    linkedin: 'linkedin.com/in/rodrigo-cabral',
    github: 'github.com/rodrigocabral',
  },
}

export const mockPortfolioCollections = {
  profile,
  Article: [
    {
      title: 'Como estruturar uma estratégia de QA para times de produto',
      slug: 'estrategia-qa-times-produto',
      excerpt: 'Uma visão prática sobre camadas de teste, risco de produto e governança de qualidade.',
      publishedAt: '2026-03-12',
      readingTime: '6 min',
      featured: true,
    },
    {
      title: 'Playwright na prática para Tech Leads de QA',
      slug: 'playwright-techlead-qa',
      excerpt: 'Como escalar automação com padrões, estrutura de suíte e feedback rápido.',
      publishedAt: '2026-02-19',
      readingTime: '4 min',
      featured: false,
    },
    {
      title: 'Como reduzir flakiness em pipelines CI',
      slug: 'reduzir-flakiness-ci',
      excerpt: 'Técnicas para estabilizar execuções, tratar retries e melhorar confiabilidade.',
      publishedAt: '2026-01-28',
      readingTime: '5 min',
      featured: false,
    },
  ],
  Educatio: [
    {
      institution: 'Universidade Federal',
      course: 'Análise e Desenvolvimento de Sistemas',
      period: '2019 — 2022',
      description: 'Base sólida em software, arquitetura web e construção de produtos digitais.',
    },
    {
      institution: 'Formação Contínua',
      course: 'Design Systems e Frontend Moderno',
      period: '2023 — atual',
      description: 'Estudo contínuo em composição visual, performance e padrões do App Router.',
    },
  ],
  Experience: [
    {
      company: 'Studio Digital',
      role: 'TechLead de QA',
      period: '2024 — atual',
      description: 'Lidero a estratégia de qualidade, padrões de automação e evolução do pipeline de testes.',
    },
    {
      company: 'Produto SaaS',
      role: 'Senior QA Automation Engineer',
      period: '2022 — 2024',
      description: 'Estruturei suites E2E, reduzi flakiness e apoiei times com boas práticas de teste.',
    },
    {
      company: 'Freelance',
      role: 'QA Consultant',
      period: '2020 — 2022',
      description: 'Consultoria em qualidade, automação básica e definição de processos para pequenos times.',
    },
  ],
  Repositories: [
    {
      name: 'qa-playwright-kit',
      description: 'Base para automação E2E com Playwright, fixtures e padrões de organização.',
      language: 'TypeScript',
      stars: 42,
    },
    {
      name: 'test-strategy-blueprint',
      description: 'Templates para estratégia de QA, matriz de risco e definição de cobertura.',
      language: 'Markdown',
      stars: 31,
    },
    {
      name: 'ci-quality-gates',
      description: 'Regras e checks para manter qualidade consistente em pipelines CI.',
      language: 'YAML',
      stars: 18,
    },
  ],
  skills: {
    core: ['Playwright', 'TypeScript', 'CI/CD', 'Docker'],
    practices: ['QA Strategy', 'Test Pyramid', 'TDD', 'Observability'],
    tools: ['Vitest', 'Testing Library', 'pnpm', 'GitHub Actions'],
  },
  highlights: [
    'Liderança técnica em qualidade e automação',
    'Estratégia de testes orientada a risco',
    'Pipelines estáveis com feedback rápido',
  ],
}

function normalizeArticle(article) {
  return {
    ...article,
    formattedDate: new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(article.publishedAt)),
  }
}

export function buildPortfolioPageData(collections) {
  const source = collections ?? mockPortfolioCollections
  const articles = (source.Article ?? []).map(normalizeArticle)
  const education = source.Educatio ?? source.Education ?? []
  const experience = source.Experience ?? []
  const repositories = source.Repositories ?? []
  const featuredArticle = articles.find((article) => article.featured) ?? articles[0] ?? null

  return {
    profile: source.profile ?? profile,
    articles,
    education,
    experience,
    repositories,
    featuredArticle,
    skills: source.skills ?? mockPortfolioCollections.skills,
    highlights: source.highlights ?? mockPortfolioCollections.highlights,
  }
}

export async function getPortfolioPageData() {
  return buildPortfolioPageData(mockPortfolioCollections)
}
