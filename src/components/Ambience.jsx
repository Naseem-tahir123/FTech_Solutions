import { useEffect } from 'react'

export default function Ambience(){
  useEffect(()=>{
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches
    const items=document.querySelectorAll('main .section, main .page-hero, main .stats-wrap')
    if(reduce){items.forEach(item=>item.classList.add('revealed'));return}
    items.forEach(item=>item.classList.add('reveal'))
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}
    }),{threshold:.08})
    items.forEach(item=>observer.observe(item))
    const move=e=>{document.documentElement.style.setProperty('--mouse-x',`${e.clientX}px`);document.documentElement.style.setProperty('--mouse-y',`${e.clientY}px`)}
    addEventListener('pointermove',move,{passive:true})
    return()=>{observer.disconnect();removeEventListener('pointermove',move)}
  },[])
  return <div className="cursor-light" aria-hidden="true"/>
}
