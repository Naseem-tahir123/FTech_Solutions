import { Circle, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const footer = { Company:[['About','/about'],['Services','/services'],['Projects','/projects'],['Contact','/contact']], Services:[['Artificial Intelligence','/services#ai'],['Web Development','/services#web'],['iOS Development','/services#ios'],['Android Development','/services#android'],['Cybersecurity','/services#security']] }

export default function Footer(){return <footer><div className="container footer-grid">
  <div className="footer-brand"><BrandLogo/><p>We design and build reliable digital products that solve real business problems.</p><div className="socials" aria-label="Social media placeholders"><span title="LinkedIn placeholder"><Circle/></span><span title="Instagram placeholder"><Circle/></span><span title="GitHub placeholder"><Circle/></span></div></div>
  {Object.entries(footer).map(([title,items])=><div key={title}><h3>{title}</h3><ul>{items.map(([label,to])=><li key={label}><Link to={to}>{label}</Link></li>)}</ul></div>)}
  <div><h3>Contact</h3><ul className="contact-list"><li><a href="mailto:hello@fatechnologies.com">hello@fatechnologies.com</a></li><li><a href="tel:+000000000000">+00 000 000 0000</a></li><li>Your City, Country</li></ul><Link to="/contact" className="footer-talk">Start a conversation <ArrowUpRight size={16}/></Link></div>
  </div><div className="container footer-bottom"><span>© 2026 FA Technologies. All rights reserved.</span><div><span>Privacy policy</span><span>Terms & conditions</span></div></div></footer>}
