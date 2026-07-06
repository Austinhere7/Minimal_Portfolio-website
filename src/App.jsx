import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Competitions from './components/Competitions'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Competitions />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
