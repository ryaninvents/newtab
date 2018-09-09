import React from 'react'

export default function Card ({ title, href, children }) {
  return (
    <a className="card border-secondary mb-3 h-100" href={href}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
    </a>
  )
}
