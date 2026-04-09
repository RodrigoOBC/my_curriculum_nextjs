import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PortfolioLanding } from '../components/portfolio/PortfolioLanding.jsx'
import { buildPortfolioPageData, mockPortfolioCollections } from '../lib/portfolioData.js'

describe('PortfolioLanding', () => {
  it('renders the portfolio sections and primary value proposition', () => {
    const data = buildPortfolioPageData(mockPortfolioCollections)

    const { container } = render(<PortfolioLanding data={data} />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()

    expect(screen.getByText(/quick highlights/i)).toBeInTheDocument()
    expect(screen.getAllByText(/about me/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^skills$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/professional experience/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^projects$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/contact me/i).length).toBeGreaterThan(0)

    expect(container.querySelector('.snapshot-rail')).toBeNull()
    expect(container.querySelector('.highlight-side')).toBeNull()

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Rodrigo Cabral/i, { selector: '.hero-name' })).toBeInTheDocument()
  })
})
