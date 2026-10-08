import { useRef, type PointerEvent, type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Atom, Box, Braces, Check, Code2, Cpu, Database, GitBranch, Lightbulb, MapPin, Sparkles } from 'lucide-react'
import { AnimatedText, Magnetic } from '../components/Motion'
import { profile } from '../data/portfolio'

function BuilderScene() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  function move(e: PointerEvent<HTMLDivElement>) {
    if (!ref.current || reduced || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    ref.current.style.setProperty('--px', `${((e.clientX - r.left) / r.width - 0.5) * 15}px`)
    ref.current.style.setProperty('--py', `${((e.clientY - r.top) / r.height - 0.5) * 12}px`)
  }
  const tech = [{ label: 'React', icon: Atom }, { label: 'Node.js', icon: Braces }, { label: 'Docker', icon: Box }, { label: 'AWS', icon: Cpu }, { label: 'GitHub', icon: GitBranch }, { label: 'SQL', icon: Database }, { label: 'AI', icon: Sparkles }]
  return <div className="builder-scene" ref={ref} onPointerMove={move} onPointerLeave={() => { ref.current?.style.setProperty('--px', '0px'); ref.current?.style.setProperty('--py', '0px') }} role="img" aria-label="An abstract software-building system: an idea becomes AI-assisted exploration, code, and a working product, surrounded by development technologies.">
    <div className="scene-grid" /><div className="scene-glow" />
    <div className="scene-content" aria-hidden="true">
      <div className="scene-caption"><span className="status-dot" /> FROM CONCEPT TO CREATION <span>v.01</span></div>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
      <div className="isometric-stack"><div className="iso-plane plane-bottom" /><div className="iso-plane plane-middle" /><div className="iso-plane plane-top"><div className="core-chip"><Code2 size={43} strokeWidth={1.3} /></div></div><div className="plane-line" /></div>
      {tech.map((t, i) => <div className={`floating-tech tech-${i}`} key={t.label} style={{ '--delay': `${i * -0.8}s` } as CSSProperties}><t.icon size={15} /><span>{t.label}</span></div>)}
      <div className="code-window"><div className="code-window-title"><div><i /><i /><i /></div><span>idea.tsx</span></div><code><span className="code-purple">const</span> product = <span className="code-green">build</span>({'{'}<br />&nbsp; idea: <span className="code-green">"something useful"</span>,<br />&nbsp; approach: <span className="code-green">"keep it human"</span><br />{'}'});</code></div>
      <div className="build-status"><span><Check size={12} /></span> Idea, meet possibility.</div>
      <div className="scene-workflow">{[{ icon: Lightbulb, label: 'IDEA' }, { icon: Sparkles, label: 'AI' }, { icon: Code2, label: 'CODE' }, { icon: Box, label: 'PRODUCT' }].map((s, i) => <div key={s.label} className="scene-stage"><span><s.icon size={16} /></span><small>{s.label}</small>{i !== 3 && <b>······</b>}</div>)}</div>
    </div>
  </div>
}

export default function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-main"><div className="hero-copy"><motion.p className="hero-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}><span /> SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> AI-ASSISTED PRODUCT BUILDER</motion.p>
      <h1><AnimatedText>Turning Ideas</AnimatedText><br /><AnimatedText>Into Working</AnimatedText><br /><span className="hero-accent"><AnimatedText>Software.</AnimatedText><span className="headline-period" /></span></h1>
      <motion.p className="hero-description" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}>I build modern web applications and digital products using software development, cloud technologies and AI-assisted workflows.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}><Magnetic><a href="#work" className="button button-primary">View My Work <ArrowUpRight size={17} /></a></Magnetic><Magnetic><a href="#contact" className="button button-outline">Let&apos;s Build Something <ArrowUpRight size={17} /></a></Magnetic></motion.div>
      <div className="hero-location"><MapPin size={13} /><span>Based in West Bengal, India</span><span className="location-separator" /><span className="status-dot" /><span>{profile.status}</span></div>
    </div><BuilderScene /></div>
    <div className="hero-bottom"><a href="#intro" className="scroll-hint"><span><ArrowDown size={15} /></span> SCROLL TO EXPLORE</a><span className="hero-note">Thoughtful code. Practical solutions.<ArrowDownRight size={16} /></span><span className="edition">PORTFOLIO — 2026</span></div>
  </section>
}
