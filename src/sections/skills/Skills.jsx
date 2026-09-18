import { Code, Server, Database, Wrench } from 'lucide-react';
import {
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiDotnet,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { TbApi, TbBrandVscode, TbBrandCSharp } from 'react-icons/tb';
import SectionHeader from '../../components/SectionHeader';

const skillIcons = {
  FaJs,
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  FaHtml5,
  FaCss3Alt,
  SiVite,
  FaNodeJs,
  FaPython,
  SiExpress,
  FaJava,
  TbBrandCSharp,
  SiDotnet,
  SiJsonwebtokens,
  TbApi,
  SiPostgresql,
  SiMysql,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaWordpress,
  TbBrandVscode,
};

const categories = [
  {
    label: 'Frontend',
    icon: Code,
    skills: [
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'React', icon: 'FaReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'HTML', icon: 'FaHtml5' },
      { name: 'CSS', icon: 'FaCss3Alt' },
      { name: 'Vite', icon: 'SiVite' },
    ],
  },
  {
    label: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'Python', icon: 'FaPython' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'Java', icon: 'FaJava' },
      { name: 'C#', icon: 'TbBrandCSharp' },
      { name: 'ASP.NET', icon: 'SiDotnet' },
      { name: 'JWT', icon: 'SiJsonwebtokens' },
      { name: 'REST API', icon: 'TbApi' },
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
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-16 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader>Skills</SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map(({ label, icon: Icon, skills }) => (
            <div
              key={label}
              className="bg-black/5 dark:bg-white/5 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3.5">
                <Icon size={20} className="text-[var(--color-accent)]" />
                <span className="font-bold text-xl">{label}</span>
              </div>
              <div className="flex flex-wrap gap-3.5">
                {skills.map(({ name, icon }) => {
                  const SkillIcon = skillIcons[icon];

                  return (
                  <span
                    key={name}
                    className="flex items-center justify-between gap-3 text-[14px] bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] rounded px-2.5 py-1.5"
                  >
                    <span>{name}</span>
                    {SkillIcon && <SkillIcon  size={20} />}
                  </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}