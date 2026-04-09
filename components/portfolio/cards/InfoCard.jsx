import React from 'react'

import { Card } from '../shared/Card.jsx'

export function InfoCard({ title, children, className = '' }) {
  return (
    <Card className={className}>
      <h3>{title}</h3>
      {children}
    </Card>
  )
}
