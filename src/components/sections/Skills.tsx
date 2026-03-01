import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { SkillBadge } from '../ui/SkillBadge';
import { skillCategories } from '../../constants/data';

export function Skills() {
  return (
    <section id="skills" className="section-padding" aria-label="Technical skills">
      <div className="container-max">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to build production AI systems"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-400/10">
                    <category.icon className="text-accent-400" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <SkillBadge key={skill} name={skill} index={j} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
