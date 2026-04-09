import React from 'react'

export function Card({ children, className = '' }) {
  return <article className={`panel ${className}`.trim()}>{children}</article>
}
