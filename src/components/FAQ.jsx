import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function FAQ({items}) { const [open,setOpen]=useState(0); return <div className="faq-list">{items.map(([q,a],i)=><div className={`faq-item ${open===i?'open':''}`} key={q}><h3><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>{q}<Plus/></button></h3><div className="faq-answer"><p>{a}</p></div></div>)}</div> }
