import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Ambience from './components/Ambience'

const titles={
  '/':'FA Technologies | AI, Web & Mobile Development',
  '/about':'About | FA Technologies',
  '/services':'Technology Services | FA Technologies',
  '/projects':'Projects | FA Technologies',
  '/contact':'Start a Project | FA Technologies',
}

export default function App(){const {pathname}=useLocation();useEffect(()=>{document.title=titles[pathname]||titles['/']},[pathname]);return <div className="site-shell"><Ambience/><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/projects" element={<Projects/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/></div>}
