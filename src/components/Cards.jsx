import { ArrowUpRight, Check, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ServiceCard({service,index}){const Icon=service.icon;return <article className="service-card" id={service.id}>
  <div className="service-top"><div className="service-icon"><Icon/></div><span>0{index+1}</span></div><h3>{service.title}</h3><p>{service.description}</p>
  <ul>{service.capabilities.slice(0,4).map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul><Link to={`/services#${service.id}`}>Explore service <ArrowUpRight size={17}/></Link>
</article>}

export function ProjectVisual({theme,name}){return <div className={`project-visual ${theme}`} role="img" aria-label={`Abstract product interface for ${name}`}><div className="pv-top"><i/><i/><i/></div><div className="pv-side"/><div className="pv-chart"><i/><i/><i/><i/><i/></div><div className="pv-card"><span/><b/><b/></div></div>}

export function ProjectCard({project}){return <article className="project-card"><ProjectVisual {...project}/><div className="project-info"><div className="project-category">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-meta"><div>{project.tech.map(t=><span key={t}>{t}</span>)}</div><Link to="/contact" aria-label={`Discuss a project like ${project.name}`}><ArrowUpRight/></Link></div></div></article>}

export function Testimonial({item}){return <figure className="quote-card"><Quote/><blockquote>“{item.quote}”</blockquote><figcaption><span>{item.name}</span><small>{item.role}</small></figcaption></figure>}
