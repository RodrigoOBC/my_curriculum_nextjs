import React from 'react'

import { Card } from '../shared/Card.jsx'

export function TagGroup({ title, items }) {
  return (
    <Card>
      <h3>{title}</h3>
      <div className="tag-row">
        {items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </Card>
  )
}
