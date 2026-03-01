import { motion } from 'framer-motion';
import type { Project } from '../../constants/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="group glass rounded-2xl p-6 sm:p-8 glass-hover transition-all duration-300
        hover:shadow-lg hover:shadow-accent-400/10"
      style={{ perspective: '1000px' }}
    >
      <div className="space-y-5">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-accent-400 uppercase tracking-wider">
              {project.period}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent-300 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-slate-400 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400/60 mt-1.5 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full
                bg-primary-950/60 text-primary-300 border border-primary-700/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
