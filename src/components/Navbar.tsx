import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Magnetic } from './Motion'

const links = ['Home', 'Work', 'Skills', 'About', 'Process', 'Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24)
    scroll()
    window.addEventListener('scroll', scroll, { passive: true })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-15% 0px -65% 0px' })
    links.forEach(link => { const el = document.getElementById(link.toLowerCase()); if (el) observer.observe(el) })
    return () => { window.removeEventListener('scroll', scroll); observer.disconnect() }
  }, [])
  useEffect(() => {
    if (!open) return
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', key)
    return () => document.removeEventListener('keydown', key)
  }, [open])
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><nav className="navbar" aria-label="Main navigation">
    <a className="wordmark" href="#home" onClick={() => setOpen(false)}>SARTHAK<span>.</span></a>
    <div className="desktop-nav">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} className={active === link.toLowerCase() ? 'active' : ''} aria-current={active === link.toLowerCase() ? 'location' : undefined}>{link}</a>)}</div>
    <Magnetic className="nav-cta"><a className="button button-small button-outline" href="#contact">Let&apos;s Build <ArrowUpRight size={15} /></a></Magnetic>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </nav><AnimatePresence>{open && <motion.div id="mobile-nav" className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>{links.map((link, i) => <motion.a key={link} href={`#${link.toLowerCase()}`} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link}<ArrowUpRight size={19} /></motion.a>)}</motion.div>}</AnimatePresence></header>
}
