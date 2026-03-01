import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiGlobe } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { education, volunteering, languages } from '../../constants/data';

export function Education() {
  return (
    <section id="education" className="section-padding" aria-label="Education and background">
      <div className="container-max">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation and community contributions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Degrees */}
          <div className="lg:col-span-2 space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-400/10 flex-shrink-0">
                      <FiBookOpen className="text-accent-400" size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h3>
                        {edu.current && (
                          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary-400 font-medium mt-1">{edu.institution}</p>
                      <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Volunteering */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-400/10 flex-shrink-0">
                    <FiUsers className="text-accent-400" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {volunteering.role}
                    </h3>
                    <p className="text-primary-400 font-medium mt-1">{volunteering.organization}</p>
                    <p className="text-slate-500 text-sm mt-1">{volunteering.period}</p>
                    <p className="text-slate-400 text-sm mt-2">{volunteering.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-400/10">
                  <FiGlobe className="text-accent-400" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Languages
                </h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-slate-300 font-medium">{lang.name}</span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-400/10 text-accent-300 border border-accent-400/15">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
