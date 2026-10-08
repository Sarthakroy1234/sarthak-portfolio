import { lazy, Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import { PageEffects } from './components/Motion'
import Hero from './sections/Hero'
import Work from './sections/Work'
import { Intro, Capabilities, TechStack } from './sections/Capabilities'
import About from './sections/About'
import Process from './sections/Process'
import Contact from './sections/Contact'
import type { Project } from './data/portfolio'
const ProjectCaseStudy = lazy(() => import('./pages/ProjectCaseStudy'))
export default function App() {
 const [project, setProject] = useState<Project | null>(null)
 return <><a className="skip-link" href="#main">Skip to content</a><PageEffects /><Navbar /><main id="main"><Hero /><Intro /><Work onOpen={setProject} /><Capabilities /><TechStack /><About /><Process /><Contact /></main>{project && <Suspense fallback={<div className="case-loading" role="status">Loading case study…</div>}><ProjectCaseStudy project={project} onClose={() => setProject(null)} /></Suspense>}</>
}
