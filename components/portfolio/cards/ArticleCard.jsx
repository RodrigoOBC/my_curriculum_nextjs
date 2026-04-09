import React from 'react'

import { Card } from '../shared/Card.jsx'

export function ArticleCard({ title, excerpt, formattedDate, readingTime, featured = false }) {
  return (
    <Card className={featured ? 'featured-card' : ''}>
      <div className="card-topline">
        <span>Article</span>
        <span>{formattedDate}</span>
        <span>{readingTime}</span>
      </div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </Card>
  )
}
