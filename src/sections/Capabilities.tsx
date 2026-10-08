import { useState } from 'react'
import { ArrowUpRight, Blocks, Braces, Code2, Container, LayoutDashboard, PanelsTopLeft, Sparkles, Terminal } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/Motion'
import { exploring, skillGroups } from '../data/portfolio'

export function Intro() {
  return <section id="intro" className="intro section-shell"><Reveal className="intro-label"><p className="eyebrow"><span /> A LITTLE INTRODUCTION</p><ArrowUpRight size={33} strokeWidth={1} /></Reveal><Reveal className="intro-copy"><h2>Developer. Builder.<br /><span>Problem Solver.</span></h2><p>I&apos;m a Computer Science graduate from Lovely Professional University with hands-on experience in web development and deployment workflows.</p><p>I&apos;ve worked with ReactJS, Node.js, Docker and CI/CD, and I&apos;m interested in using AI-assisted development to move faster from ideas to functional software.</p><a href="#about" className="text-link">A little more about me <ArrowUpRight size={15} /></a></Reveal></section>
}
const capabilities = [
  { title: 'Web Applications', text: 'Modern, responsive web applications using React and JavaScript.', icon: Code2 },
  { title: 'Full-Stack Applications', text: 'Frontend, backend, APIs and database-driven applications.', icon: Blocks },
  { title: 'AI-Assisted Products', text: 'Exploring AI APIs and AI-assisted workflows to turn product ideas into prototypes.', icon: Sparkles, exploring: true },
  { title: 'Business Tools', text: 'Dashboards, internal tools and workflow-based applications.', icon: LayoutDashboard },
  { title: 'Responsive Websites', text: 'Modern responsive websites with thoughtful user experiences.', icon: PanelsTopLeft },
  { title: 'Deployment & CI/CD', text: 'Dockerized applications and automated development and deployment workflows.', icon: Container },
]
export function Capabilities() {
  return <section className="section-shell section-pad"><SectionHeading eyebrow="BUILT AROUND YOUR PROBLEM" title="What I can build." description="From the first idea to the final deployment. Practical software, with purpose." /><div className="capabilities-grid">{capabilities.map((c, i) => <Reveal key={c.title} delay={i % 3 * 0.06}><article className="capability-card"><div className="capability-top"><c.icon size={25} strokeWidth={1.3} /><span>0{i + 1}</span></div><h3>{c.title}</h3><p>{c.text}</p>{c.exploring && <span className="exploring-label">CURRENTLY EXPLORING</span>}<ArrowUpRight className="capability-arrow" size={17} /></article></Reveal>)}</div></section>
}
export function TechStack() {
  const [selected, setSelected] = useState('All technologies')
  return <section id="skills" className="section-shell section-pad"><SectionHeading eyebrow="THE TOOLKIT" title="Technologies I work with." description="A foundation in modern development. A mindset of continuous learning." /><div className="stack-filters" aria-label="Filter technologies">{['All technologies', ...skillGroups.map(g => g.name)].map(name => <button key={name} aria-pressed={selected === name} onClick={() => setSelected(name)}>{name}</button>)}</div><div className="technology-wall" aria-live="polite">{skillGroups.filter(g => selected === 'All technologies' || selected === g.name).flatMap(group => group.skills.map(skill => <div className="technology" key={skill}><span className="technology-mark">{skill === 'React.js' ? <Braces size={24} /> : skill === 'Docker' ? <Container size={24} /> : skill === 'Linux' ? <Terminal size={24} /> : skill === 'Git' ? <Code2 size={24} /> : skill.slice(0, 2)}</span><span>{skill}</span><small>{group.name}</small></div>))}</div><Reveal className="exploring-panel"><div><Sparkles size={18} /><span>Currently exploring</span><small>LEARNING, NOT CLAIMING EXPERTISE.</small></div><div className="exploring-tags">{exploring.map(s => <span key={s}>{s}<ArrowUpRight size={12} /></span>)}</div></Reveal></section>
}
