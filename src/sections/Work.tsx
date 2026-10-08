import { useRef, type PointerEvent } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Activity, LayoutGrid, MoveUpRight, Plus, Terminal, Circle, ChevronRight } from 'lucide-react'
import { SectionHeading, Reveal } from '../components/Motion'
import { projects, type Project } from '../data/portfolio'

export function ProjectPreview({ kind }: { kind: Project['kind'] }) {
  return <div className={`project-preview preview-${kind}`} aria-hidden="true"><span className="concept-label">CONCEPT PREVIEW</span>
    {kind === 'fitness' && <div className="fitness-window"><div className="preview-sidebar"><Activity size={18} /><LayoutGrid size={12} /><Activity size={12} /><Circle size={12} /></div><div className="fitness-content"><div className="preview-top"><span>FIT<span className="lime">/</span>FORM</span><span className="preview-avatar">S</span></div><p className="preview-overline">A LITTLE BETTER, EVERY DAY.</p><h4>Find your rhythm<span>.</span></h4><div className="fitness-grid"><div className="activity-card"><span>Your movement</span><div className="activity-bars">{[30, 55, 42, 76, 55, 90, 64, 82, 100, 75, 90, 60].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div><small>MON <span>WED</span> FRI <span>SUN</span></small></div><div className="ring-card"><div className="fitness-ring"><Activity size={24} /></div><span>Make progress.</span><small>One day at a time.</small></div></div><div className="preview-bottom-row"><span><Plus size={11} /> A healthier everyday</span><ArrowUpRight size={13} /></div></div></div>}
    {kind === 'responsive' && <div className="responsive-window"><div className="mini-nav"><span>forma<span>®</span></span><div>Explore <span>Our approach</span> <ArrowUpRight size={9} /></div></div><div className="forma-layout"><div><span className="mini-overline">LESS, BUT CONSIDERED.</span><h4>Room for<br />a new<br /><i>perspective.</i></h4><div className="mini-pill">Explore the possibilities <ArrowUpRight size={10} /></div></div><div className="architectural-art"><div className="art-circle" /><div className="art-column col-one" /><div className="art-column col-two" /><div className="art-column col-three" /><div className="art-floor" /></div></div><div className="forma-footer">Designed for every screen. <span>01 — 03</span></div></div>}
    {kind === 'landing' && <div className="landing-window"><div className="mini-nav"><span><Plus size={12} /> orbit</span><div>Discover <span>Connect</span><MoveUpRight size={9} /></div></div><div className="orbital-art"><div /><div /><div /><span /></div><div className="landing-copy"><span className="mini-overline">AN EXPLORATION IN MOTION</span><h4>Beyond the<br /><i>ordinary.</i></h4><span className="mini-pill">Enter the experience <ArrowRight size={10} /></span></div><div className="landing-footer"><Terminal size={10} /> MADE TO MOVE <ChevronRight size={10} /></div></div>}
  </div>
}

function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: (project: Project) => void; index: number }) {
  const card = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion()
  const move = (e: PointerEvent<HTMLButtonElement>) => {
    if (reduced || e.pointerType !== 'mouse' || !card.current) return
    const box = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - box.left) / box.width
    const y = (e.clientY - box.top) / box.height
    card.current.style.setProperty('--spot-x', `${x * 100}%`)
    card.current.style.setProperty('--spot-y', `${y * 100}%`)
    card.current.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 2}deg) rotateY(${(x - 0.5) * 2}deg) translateY(-5px)`
  }
  return <Reveal delay={index * 0.07}><button ref={card} className="project-card" data-cursor="view" onPointerMove={move} onPointerLeave={() => { if (card.current) card.current.style.transform = '' }} onClick={() => onOpen(project)} aria-label={`View case study: ${project.name}`}><ProjectPreview kind={project.kind} /><div className="project-info"><p className="project-category"><span>{project.id}</span>{project.category}<ArrowUpRight size={17} /></p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="case-link">View Case Study <ArrowUpRight size={15} /></span></div></button></Reveal>
}

export default function Work({ onOpen }: { onOpen: (project: Project) => void }) {
  return <section id="work" className="section-shell section-pad"><SectionHeading eyebrow="SELECTED WORK" title="Ideas, brought to life." description="A selection of projects built to explore, solve, and make things work." /><div className="projects-grid">{projects.map((project, i) => <ProjectCard key={project.id} project={project} onOpen={onOpen} index={i} />)}</div><div className="section-footnote"><span><span className="status-dot" /> Built with curiosity. Refined through practice.</span><span>03 SELECTED PROJECTS</span></div></section>
}
