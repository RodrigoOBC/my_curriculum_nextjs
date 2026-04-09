import { PortfolioLanding } from '../components/portfolio/PortfolioLanding.jsx'
import { getPortfolioPageData } from '../lib/portfolioData.js'

export const revalidate = 3600

export default async function HomePage() {
  const data = await getPortfolioPageData()

  return <PortfolioLanding data={data} />
}
