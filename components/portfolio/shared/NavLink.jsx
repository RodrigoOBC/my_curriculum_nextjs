import React from 'react'

export function NavLink({ href, children }) {
  return (
    <a className="nav-link" href={href}>
      {children}
    </a>
  )
}
