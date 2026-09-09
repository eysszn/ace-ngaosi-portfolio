import Navbar from './components/Navbar'
import Hero from './sections/hero/Hero'
// import About from './sections/about/About'
// import Education from './sections/education/Education'
// import Experience from './sections/experience/Experience'
// import Projects from './sections/projects/Projects'
// import Skills from './sections/skills/Skills'
// import Contact from './sections/contact/Contact'

function App(){
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-18">
        <Hero />
      </section>

      <main className="max-w-7xl mx-auto px-6 pt-24">


        {/* About Section  */}
        <section id="about" className="min-h-screen">
          {/* <About /> */}
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen">
          {/* <Education /> */}
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen">
          {/* <Experience /> */}
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          {/* <Projects /> */}
        </section>

        {/* Skills Section  */}
        <section id="skills" className="min-h-screen">
          {/* <Skills /> */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen">
          {/* <Contact /> */}
        </section>

      </main>
    </div>
  )
}
export default App
