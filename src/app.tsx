import { useState, useEffect } from 'preact/hooks'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'
import Education from './components/education'
import WorkExperience from './components/workexperience'

export function App() {
  const [currentRoute, setCurrentRoute] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      setCurrentRoute(hash || 'home')
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow container mx-auto px-0 py-0">
        {currentRoute === 'home' && <Home />}
        {currentRoute === 'about' && <About />}
        {currentRoute === 'projects' && <Projects />}
        {currentRoute === 'education' && <Education />}
        {currentRoute === 'workexperience' && <WorkExperience />}
      </main>
      <Footer />
    </div>
  )
}

