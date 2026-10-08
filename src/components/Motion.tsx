import { useEffect, useRef, useState, type ReactNode, type PointerEvent } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-35px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function AnimatedText({ children }: { children: string }) {
  const reduced = useReducedMotion()
  return <span aria-label={children}>{children.split(' ').map((word, i) => <span key={i} className="word-clip" aria-hidden="true"><motion.span initial={reduced ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{word}&nbsp;</motion.span></span>)}</span>
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <Reveal className="section-heading"><div><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2></div>{description && <p className="section-description">{description}</p>}</Reveal>
}

export function Magnetic({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  function move(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse' || reduced || !ref.current) return
    const box = e.currentTarget.getBoundingClientRect()
    ref.current.style.transform = `translate(${(e.clientX - box.left - box.width / 2) * 0.07}px, ${(e.clientY - box.top - box.height / 2) * 0.1}px)`
  }
  return <div className={`magnetic ${className}`} ref={ref} onPointerMove={move} onPointerLeave={() => { if (ref.current) ref.current.style.transform = '' }}>{children}</div>
}

export function PageEffects() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 30 })
  const cursor = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)
  const reduced = useReducedMotion()
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return
    const move = (e: PointerEvent | globalThis.PointerEvent) => {
      if (!cursor.current || !(e.target instanceof Element)) return
      const project = e.target.closest('[data-cursor="view"]')
      const interactive = e.target.closest('a, button')
      cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      cursor.current.dataset.mode = project ? 'view' : interactive ? 'hover' : 'default'
      cursor.current.style.opacity = '1'
    }
    const hide = () => { if (cursor.current) cursor.current.style.opacity = '0' }
    window.addEventListener('pointermove', move)
    document.addEventListener('pointerleave', hide)
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', hide) }
  }, [reduced])
  return <><motion.div className="scroll-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} aria-hidden="true" /><div ref={cursor} className="custom-cursor" aria-hidden="true"><span>VIEW</span></div>{showTop && <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>}</>
}
