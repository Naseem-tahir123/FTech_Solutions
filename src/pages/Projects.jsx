import { projects } from '../data/siteData'
import { ProjectCard } from '../components/Cards'
import { PageHero, SectionHeading, CTA } from '../components/UI'

export default function Projects(){return <><PageHero eyebrow="Our work" title={<>Digital products with a <span>job to do.</span></>} copy="A selection of demonstration concepts across AI, web, mobile, and security—designed to show how thoughtful technology solves practical problems."/>
  <section className="section"><div className="container"><div className="project-disclaimer"><b>Concept portfolio</b><span>These fictional projects demonstrate presentation and capability. They are ready to be replaced with verified FA Technologies case studies.</span></div><div className="projects-grid projects-page">{projects.map(p=><ProjectCard key={p.id} project={p}/>)}</div></div></section>
  <section className="section project-philosophy"><div className="container split-grid"><SectionHeading eyebrow="Our measure" title="A polished interface is only the beginning."/><div><p className="lead">A strong product should make work easier, decisions clearer, and growth more manageable.</p><p>That means understanding the real workflow, designing for the people inside it, and building the technical foundation to support what comes next.</p></div></div></section><CTA/></>}
