import { Bot, Code2, ShieldCheck, Smartphone, Sparkles } from 'lucide-react'

export default function TechVisual(){return <div className="tech-visual" aria-label="Connected digital technology system" role="img">
  <div className="visual-grid"/><div className="visual-glow"/>
  <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
  <div className="core"><Sparkles/><span>FA</span><small>ENGINE</small></div>
  <div className="float-card fc-one"><Bot/><span>Intelligence<small>Adaptive systems</small></span></div>
  <div className="float-card fc-two"><Code2/><span>Web<small>Scalable products</small></span></div>
  <div className="float-card fc-three"><ShieldCheck/><span>Security<small>Built in</small></span></div>
  <div className="float-card fc-four"><Smartphone/><span>Mobile<small>Native experiences</small></span></div>
</div>}
