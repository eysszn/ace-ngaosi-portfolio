import Navbar from './components/Navbar'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Education from './sections/education/Education'
import Experience from './sections/experience/Experience'
import Projects from './sections/projects/Projects'
import Skills from './sections/skills/Skills'
import Contact from './sections/contact/Contact'
import Footer from './components/Footer'

function App(){
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 pt-24">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
export default App
