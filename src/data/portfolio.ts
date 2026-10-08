export const profile = {
  name: 'Sarthak Roy',
  email: 'sarthakroy209@email.com',
  phone: '+91-7029406825',
  location: 'Bankura, West Bengal, India',
  status: 'Always learning. Always building.',
  github: '', // Add your public GitHub profile URL here.
  linkedin: '', // Add your public LinkedIn profile URL here.
}

// A public Formspree endpoint can be added here; never put a Resend API key in the frontend.
// To use Resend or another secret-bearing provider, submit to your own server endpoint.
export const contactEndpoint = ''

export type Project = {
  id: string
  name: string
  category: string
  description: string
  tags: string[]
  kind: 'fitness' | 'responsive' | 'landing'
  workflow: string[]
  goal: string
}

export const projects: Project[] = [
  {
    id: '01', name: 'Comprehensive Fitness App', category: 'FULL-STACK DEVELOPMENT',
    description: 'A fitness-focused application developed with ReactJS and Node.js, with structured Docker and CI/CD workflows.',
    tags: ['ReactJS', 'Node.js', 'Docker', 'CI/CD'], kind: 'fitness',
    workflow: ['Frontend', 'Backend', 'Database / API', 'Docker', 'CI/CD'],
    goal: 'Build a fitness-focused application using a connected frontend and backend, supported by structured development workflows.',
  },
  {
    id: '02', name: 'Fully Responsive Website', category: 'WEB DEVELOPMENT',
    description: 'A responsive web application focused on UI/UX, responsive presentation and SQL data integration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL'], kind: 'responsive',
    workflow: ['UI', 'JavaScript', 'SQL integration'],
    goal: 'Create a responsive web experience with attention to presentation, user experience and SQL data integration.',
  },
  {
    id: '03', name: 'Animated Website Landing Page', category: 'FRONTEND & INTERACTION',
    description: 'A responsive animated landing page focused on visual presentation, interaction and frontend implementation.',
    tags: ['HTML', 'CSS', 'JavaScript'], kind: 'landing',
    workflow: ['Layout', 'Styling', 'Interaction', 'Responsive presentation'],
    goal: 'Explore responsive frontend implementation through an animated, visually focused landing page.',
  },
]

export const skillGroups = [
  { name: 'Languages', skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL'] },
  { name: 'Frameworks', skills: ['React.js'] },
  { name: 'Development & DevOps', skills: ['Git', 'Docker', 'Jenkins', 'GitHub Actions'] },
  { name: 'Cloud & Systems', skills: ['AWS', 'Linux'] },
  { name: 'Design', skills: ['Figma'] },
]
export const exploring = ['AI-assisted development', 'AI APIs', 'Rapid prototyping', 'Vibe coding', 'AI product development']
export const processSteps = [
  { title: 'Understand', text: 'Start with the problem. Listen, ask questions, and make the requirements clear.', icon: '01' },
  { title: 'Plan', text: 'Break the idea into practical features and a focused, achievable scope.', icon: '02' },
  { title: 'Design', text: 'Shape the user experience and interface around the people using it.', icon: '03' },
  { title: 'Build', text: 'Develop the frontend, backend and integrations, one considered piece at a time.', icon: '04' },
  { title: 'Test', text: 'Find issues, check assumptions and validate that the software works.', icon: '05' },
  { title: 'Deploy', text: 'Bring the product online with appropriate deployment and CI/CD workflows.', icon: '06' },
  { title: 'Iterate', text: 'Listen to feedback and keep improving what matters.', icon: '07' },
]
