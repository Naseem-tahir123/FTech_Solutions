import { BrainCircuit, Code2, Apple, Smartphone, ShieldCheck } from 'lucide-react'

export const services = [
  { id:'ai', title:'Artificial Intelligence', short:'AI', icon:BrainCircuit, description:'Build intelligent solutions that automate processes, improve decisions, and create smarter digital experiences.', capabilities:['AI applications','Workflow automation','Machine learning','Generative AI','AI assistants','Intelligent data processing','Knowledge search','Predictive insights'] },
  { id:'web', title:'Web Development', short:'Web', icon:Code2, description:'Create fast, scalable web applications and digital platforms designed around real business requirements.', capabilities:['Business websites','Web applications','SaaS platforms','E-commerce','Custom solutions','API integration','Customer portals','Legacy modernization'] },
  { id:'ios', title:'iOS Development', short:'iOS', icon:Apple, description:'Build polished, reliable iOS applications with modern user experiences and scalable architecture.', capabilities:['iPhone applications','iPad applications','UI/UX implementation','API integration','Performance optimization','App Store preparation','Product discovery','App modernization'] },
  { id:'android', title:'Android Development', short:'Android', icon:Smartphone, description:'Develop modern Android applications designed for performance, usability, and sustainable growth.', capabilities:['Native Android apps','Cross-platform apps','API integration','Push notifications','Performance optimization','Play Store preparation','Offline experiences','App modernization'] },
  { id:'security', title:'Cybersecurity', short:'Security', icon:ShieldCheck, description:'Protect applications, infrastructure, systems, and sensitive information from evolving security threats.', capabilities:['Security assessments','Vulnerability assessment','Application security','Network security','Security monitoring','Security best practices','Secure architecture','Remediation planning'] },
]

export const engagements = [
  { number:'01', title:'AI workflow automation', area:'Artificial Intelligence', copy:'Reduce repetitive work by connecting intelligent decisions to the tools your team already uses.' },
  { number:'02', title:'Knowledge assistants', area:'Artificial Intelligence', copy:'Help teams find reliable answers across internal documents, policies, and operational data.' },
  { number:'03', title:'Customer & partner portals', area:'Web Development', copy:'Bring services, information, and workflows together in one secure, intuitive destination.' },
  { number:'04', title:'SaaS product development', area:'Web Development', copy:'Turn a product idea into a scalable platform with a focused roadmap and maintainable foundation.' },
  { number:'05', title:'Native mobile products', area:'iOS & Android', copy:'Create dependable mobile experiences shaped around real contexts, devices, and user behavior.' },
  { number:'06', title:'Application modernization', area:'Web & Mobile', copy:'Improve an existing product’s experience, performance, and technical foundation without losing what works.' },
  { number:'07', title:'Application security review', area:'Cybersecurity', copy:'Find weaknesses, understand practical risk, and leave with a prioritized remediation plan.' },
  { number:'08', title:'Secure product architecture', area:'Cybersecurity', copy:'Make security part of the product foundation before expensive vulnerabilities reach production.' },
]

export const stats = [
  { value:'50+', label:'Projects delivered' }, { value:'20+', label:'Technology experts' },
  { value:'10+', label:'Countries served' }, { value:'5', label:'Core services' },
]

export const projects = [
  { id:'signal', name:'Signal AI Support', category:'Artificial Intelligence', description:'A context-aware support workspace that helps teams resolve customer questions with speed and consistency.', tech:['Python','OpenAI','React'], theme:'blue' },
  { id:'axis', name:'Axis Operations', category:'Web Development', description:'A unified business platform that turns complex operational data into clear, actionable workflows.', tech:['React','Node.js','TypeScript'], theme:'violet' },
  { id:'stride', name:'Stride Mobile', category:'iOS / Android', description:'A motivating fitness experience built around simple routines, progress insights, and daily momentum.', tech:['Swift','Kotlin','React Native'], theme:'cyan' },
  { id:'vault', name:'Vault Enterprise', category:'Cybersecurity / Web', description:'A secure employee portal designed around controlled access, auditability, and sensitive workflows.', tech:['OWASP','React','Node.js'], theme:'green' },
]

export const reasons = [
  ['Business-focused solutions','Every technical choice starts with the outcome it needs to support.'],
  ['Modern engineering','Maintainable technologies and practical development standards.'],
  ['Security by design','Security is considered from planning through launch.'],
  ['Built to scale','Architecture that can evolve as users and requirements grow.'],
  ['Clear communication','Direct updates, visible progress, and informed decisions.'],
  ['Long-term thinking','We build products that are ready to improve after launch.'],
]

export const process = [
  ['01','Discover','Understand the business, users, constraints, and goals.'], ['02','Plan','Define the solution, architecture, and clear roadmap.'],
  ['03','Design','Create intuitive flows and purposeful interfaces.'], ['04','Develop','Build with modern, maintainable engineering practices.'],
  ['05','Test','Verify function, performance, compatibility, and security.'], ['06','Launch & improve','Deploy confidently, learn, and iterate.'],
]

export const technologyGroups = [
  { name:'AI', items:['OpenAI','Python','TensorFlow','PyTorch'] },
  { name:'Web', items:['React','Next.js','Node.js','TypeScript'] },
  { name:'Mobile', items:['Swift','Kotlin','React Native'] },
  { name:'Security', items:['OWASP','Security testing','Network security'] },
]

export const testimonials = [
  { quote:'FA Technologies transformed our idea into a reliable digital product and kept every decision clear throughout the project.', name:'Client name', role:'Product Director · Company placeholder' },
  { quote:'The team connected the technical work to our business priorities. We always understood what was being built and why.', name:'Client name', role:'Operations Lead · Company placeholder' },
]

export const faqs = [
  ['What services does FA Technologies provide?','We focus on five areas: artificial intelligence, web development, iOS development, Android development, and cybersecurity.'],
  ['How do you approach a new project?','We begin with discovery, clarify outcomes and constraints, then define the solution, roadmap, and delivery stages before development.'],
  ['Can you build custom software?','Yes. We design and build software around a company’s users, workflows, and business requirements.'],
  ['Do you develop both iOS and Android applications?','Yes. We build native and cross-platform mobile experiences based on product needs, performance goals, and budget.'],
  ['Can you integrate AI into an existing product?','Yes. We can assess existing workflows and add AI where it creates a practical, measurable improvement.'],
  ['How do you approach cybersecurity?','Security is considered throughout planning, architecture, development, testing, and ongoing improvement—not added at the end.'],
  ['How long does a typical project take?','Timelines depend on scope, integrations, and complexity. After discovery, we provide a clear delivery plan with realistic milestones.'],
  ['How can I start a project with FA Technologies?','Send an inquiry with a short description of your goals. We’ll follow up to understand the fit and recommend a practical next step.'],
]
