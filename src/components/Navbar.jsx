import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react'
import { services } from '../data/siteData'
import BrandLogo from './BrandLogo'

const links = [['/','Home'],['/about','About'],['/services','Services'],['/projects','Projects'],['/contact','Contact']]

export default function Navbar() {
  const [open,setOpen] = useState(false), [scrolled,setScrolled] = useState(false)
  const [theme,setTheme] = useState(()=>document.documentElement.dataset.theme || 'dark')
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo({top:0,behavior:'smooth'}) }, [pathname])
  useEffect(() => { const onScroll=()=>setScrolled(scrollY>16); onScroll(); addEventListener('scroll',onScroll); return()=>removeEventListener('scroll',onScroll) }, [])
  const toggleTheme=()=>setTheme(current=>{const next=current==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('fa-theme',next);return next})
  return <header className={`navbar ${scrolled ? 'navbar-scrolled':''}`}><div className="container nav-inner">
    <BrandLogo/>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([to,label])=>to==='/services'?<div className="nav-services" key={to}><NavLink to={to} className={({isActive})=>isActive?'active':''}>{label}</NavLink><div className="mega-menu"><div className="mega-intro"><small>Our expertise</small><strong>Technology that moves real work forward.</strong><Link to="/services">Explore all services <ArrowUpRight/></Link></div><div className="mega-links">{services.map(service=>{const Icon=service.icon;return <Link to={`/services#${service.id}`} key={service.id}><Icon/><span><b>{service.title}</b><small>{service.capabilities.slice(0,2).join(' · ')}</small></span><ArrowUpRight/></Link>})}</div></div></div>:<NavLink key={to} to={to} end={to==='/'} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}</nav>
    <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title={`Switch to ${theme==='dark'?'light':'dark'} mode`}>{theme==='dark'?<Sun/>:<Moon/>}</button>
    <Link to="/contact" className="nav-cta">Let’s talk <ArrowUpRight size={16}/></Link>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([to,label])=><NavLink key={to} to={to} end={to==='/' }>{label}<ArrowUpRight size={17}/></NavLink>)}</nav>}</header>
}
