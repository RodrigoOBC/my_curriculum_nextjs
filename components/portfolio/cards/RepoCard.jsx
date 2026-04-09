import React from 'react'

import { Card } from '../shared/Card.jsx'

export function RepoCard({ name, language, description, stars, className = '' }) {
  return (
    <Card className={`repo-card ${className}`.trim()}>
      <div className="repo-header">
        <h3>{name}</h3>
        <span>{language}</span>
      </div>
      <p>{description}</p>
      <strong>{stars} estrelas</strong>
    </Card>
  )
}
