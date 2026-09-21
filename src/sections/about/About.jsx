import { Mail, Database, MoveUpRight } from 'lucide-react'
import { SiGithub, SiReact, SiJavascript, SiExpress, SiFigma } from 'react-icons/si'
import { FaLinkedin } from "react-icons/fa"

const tools = [
  { icon: SiReact, label: 'React' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiExpress, label: 'Express.js' },
  { icon: Database, label: 'Databases' },
  { icon: SiFigma, label: 'Figma' },
]

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-8 md:px-16 bg-bg-light dark:bg-bg-dark text-text-dark dark:text-text-light"
    >
      <div className="flex gap-8 w-full max-w-7xl mx-auto items-center">

        {/* Photo */}
        <div className="flex-none w-[30vw] relative">
          <div className="absolute -top-2.5 -left-2.5 w-full h-full bg-accent-dark rounded-md" />
          <div className="relative aspect-3/4 rounded-md overflow-hidden">
            <img
              src="/about-grad-photo.jpg"
              alt="Ace Ngaosi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent mb-4">
              About Me!
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-justify text-text-dark dark:text-text-light">
              <p>
                Hey there! I'm Alfred Christian Emmanuel Ngaosi, but most people call me Ace. I'm an IT graduate based in Baguio City, driven by genuine curiosity about how things work behind the scenes — whether that's a React frontend, a database schema, or a machine learning model working to predict the future. I build software that solves real-world problems, and I care as much about the process as the outcome: clean documentation, thoughtful architecture, and experiences that users actually enjoy.
              </p>
              <p>
                I've always chased consistency over sudden bursts of brilliance: steady effort, incremental improvement, and showing up day after day. That mindset shapes how I approach every project I take on, from the first line of code to the final touches.
              </p>
              <p>
                Outside the industry, I'm usually losing myself in music or a good game, or spending time with the people who matter most to me. If you'd like to start a conversation, feel free to reach out!
              </p>
            </div>
          </div>

          {/* Resume and Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1LKxvEnnYemySJd2LtF7N6bArttHLZXWD/view?usp=drive_link"
              target="_blank"
              className="flex items-center gap-2 px-4.5 py-2.5 rounded-lg bg-accent-dark text-bg-light text-sm font-semibold"
            >
              Check out my Resume!
              <MoveUpRight size={16} />
            </a>

            <span className="text-text-dark/30 dark:text-text-light/30 font-light text-lg">|</span>

            <div className="flex gap-2.5">
              <a href="https://github.com/eysszn" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <SiGithub size={16} className="text-text-dark dark:text-text-light" />
              </a>
              <a href="https://www.linkedin.com/in/alfred-christian-emmanuel-ngaosi/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaLinkedin size={16} className="text-text-dark dark:text-text-light" />
              </a>
              <a href="mailto:azngaosi2004@gmail.com"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail size={16} className="text-text-dark dark:text-text-light" />
              </a>
            </div>
          </div>
        </div>

        {/* Tech Toolbelt */}
        <div className="flex-none w-16 flex flex-col items-center justify-center gap-3 border border-white/10 rounded-lg py-3 px-2">
          <span
            className="text-[10px] font-semibold tracking-wider uppercase text-text-dark/60 dark:text-text-light/60"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Tools
          </span>
          <div className="flex flex-col gap-2">
            {tools.map(({ icon: Icon, label }) => (
              <div
                key={label}
                title={label}
                className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center"
              >
                <Icon size={14} className="text-accent" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}