import { Code, Server, Database, Wrench, Monitor } from 'lucide-react';
import {
  FaCss3Alt, FaDocker, FaFigma, FaGitAlt, FaGithub, FaHtml5,
  FaJava, FaJs, FaNodeJs, FaPython, FaReact, FaWordpress,
  FaApple, FaWindows, FaUbuntu, FaPhp
} from 'react-icons/fa';
import {
  SiDotnet, SiExpress, SiJsonwebtokens, SiMysql,
  SiNextdotjs, SiPostgresql, SiTailwindcss, SiVite,
} from 'react-icons/si';
import { TbApi, TbBrandVscode, TbBrandCSharp } from 'react-icons/tb';
import SectionHeader from '../../components/SectionHeader';
import SkillRow from './SkillRow';

const skillIcons = {
  FaJs, FaReact, SiNextdotjs, SiTailwindcss, FaHtml5,
  FaCss3Alt, SiVite, FaNodeJs, FaPython, SiExpress,
  FaJava, TbBrandCSharp, SiDotnet, SiJsonwebtokens, TbApi,
  FaPhp, SiPostgresql, SiMysql, FaDocker, FaGitAlt, FaGithub,
  FaFigma, FaWordpress, TbBrandVscode, FaApple, FaWindows, FaUbuntu
};

const categories = [
  {
    label: 'Frontend',
    icon: Code,
    skills: [
      { name: 'HTML', icon: 'FaHtml5' },
      { name: 'CSS', icon: 'FaCss3Alt' },
      { name: 'React', icon: 'FaReact' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Vite', icon: 'SiVite' },
    ],
  },
  {
    label: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'C#', icon: 'TbBrandCSharp' },
      { name: 'Python', icon: 'FaPython' },
      { name: 'Java', icon: 'FaJava' },
      { name: 'JWT', icon: 'SiJsonwebtokens' },
      { name: 'ASP.NET', icon: 'SiDotnet' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'REST API', icon: 'TbApi' },
      { name: 'PHP', icon: 'FaPhp' },
    ],
  },
  {
    label: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MySQL', icon: 'SiMysql' },
    ],
  },
  {
    label: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Docker', icon: 'FaDocker' },
      { name: 'Git', icon: 'FaGitAlt' },
      { name: 'GitHub', icon: 'FaGithub' },
      { name: 'Figma', icon: 'FaFigma' },
      { name: 'WordPress', icon: 'FaWordpress' },
      { name: 'VS Code', icon: 'TbBrandVscode' },
    ],
  },
  {
    label: 'Operating Systems',
    icon: Monitor,
    skills: [
      { name: 'Apple', icon: 'FaApple' },
      { name: 'Windows', icon: 'FaWindows' },
      { name: 'Ubuntu', icon: 'FaUbuntu' },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 md:py-24 sm:px-4 md:px-8 lg:px-16 scroll-mt-[var(--navbar-height)] bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader>Skills</SectionHeader>

        <ul className="border-t border-[var(--color-text-dark)]/10 dark:border-[var(--color-text-light)]/10">
          {categories.map((cat) => (
            <SkillRow key={cat.label} {...cat} skillIcons={skillIcons} />
          ))}
        </ul>

      </div>
    </section>
  )
}