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
import SkillCard from './SkillCard';

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
  const firstRow = categories.slice(0, 3);
  const secondRow = categories.slice(3);

  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader>Skills</SectionHeader>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-stretch md:flex-row gap-4">
            {firstRow.map((cat) => (
              <div key={cat.label} className="flex flex-1">
                <SkillCard {...cat} skillIcons={skillIcons} />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-stretch md:flex-row justify-center gap-4">
            {secondRow.map((cat) => (
              <div key={cat.label} className="flex w-full md:w-[calc((100%-3rem)/3)]">
                <SkillCard {...cat} skillIcons={skillIcons} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}