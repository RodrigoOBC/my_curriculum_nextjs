import React from 'react'

import { Card } from '../shared/Card.jsx'

export function HighlightCard({ title, items, className = '' }) {
  return (
    <Card className={`highlight-card ${className}`.trim()}>
      <p className="eyebrow">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  )
}
