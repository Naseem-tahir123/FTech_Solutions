import { Link } from 'react-router-dom'

export default function BrandLogo({ compact=false }){
  return <Link to="/" className="brand-logo" aria-label="FA Technologies home">
    <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-hidden="true">
      <path className="mark-frame" d="M18 4h28l14 14v28L46 60H18L4 46V18L18 4Z"/>
      <path className="mark-f" d="M16 17h22l-4 8H25v6h8l-4 8h-4v10h-9V17Z"/>
      <path className="mark-a" d="m40 18 12 31h-9l-2.2-6H32l3.2-8h3l-2.4-7 4.2-10Z"/>
      <circle cx="49" cy="15" r="3" className="mark-node"/>
    </svg>
    {!compact&&<span className="brand-name"><b>FA</b><span>Technologies</span></span>}
  </Link>
}
