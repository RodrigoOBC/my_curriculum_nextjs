import React from 'react'

export function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="section-block">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <p className="section-copy">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}
