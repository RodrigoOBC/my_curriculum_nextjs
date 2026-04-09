import { describe, expect, it } from 'vitest'
import { buildPortfolioPageData, mockPortfolioCollections } from '../lib/portfolioData.js'

describe('buildPortfolioPageData', () => {
  it('normalizes the mocked portfolio collections into page data', () => {
    const data = buildPortfolioPageData(mockPortfolioCollections)

    expect(data.profile.name).toBe('Rodrigo Cabral')
    expect(data.articles).toHaveLength(3)
    expect(data.education).toHaveLength(2)
    expect(data.experience).toHaveLength(3)
    expect(data.repositories).toHaveLength(3)
    expect(data.featuredArticle.title).toContain('QA')
  })
})
