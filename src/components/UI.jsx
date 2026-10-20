import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Button({ to='/contact', children, secondary=false, className='' }) {
  return <Link to={to} className={`button ${secondary ? 'button-secondary' : ''} ${className}`}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>
}

export function SectionHeading({ eyebrow, title, copy, center=false }) {
  return <div className={`section-heading ${center ? 'text-center mx-auto' : ''}`}>
    <div className="eyebrow"><span />{eyebrow}</div>
    <h2>{title}</h2>{copy && <p>{copy}</p>}
  </div>
}

export function PageHero({ eyebrow, title, copy }) {
  return <section className="page-hero"><div className="orb orb-one"/><div className="container relative z-10">
    <div className="eyebrow"><span />{eyebrow}</div><h1>{title}</h1><p>{copy}</p>
  </div></section>
}

export function CTA() {
  return <section className="section"><div className="container"><div className="cta-panel">
    <div><div className="eyebrow light"><span />Your next move</div><h2>Have an idea? Let’s build it.</h2><p>Tell us what you’re building, and let’s explore how technology can turn it into a scalable digital product.</p></div>
    <div className="flex flex-wrap gap-3"><Button>Start a project</Button><Button secondary>Contact us</Button></div>
  </div></div></section>
}
