import React from 'react'

import { Card } from '../shared/Card.jsx'

export function TimelineCard({ title, subtitle, period, description, className = '' }) {
  return (
    <Card className={className}>
      <div className="stack-row">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="stack-period">{period}</span>
      </div>
      <p>{description}</p>
    </Card>
  )
}
