import { motion } from 'framer-motion';
import { FiBriefcase, FiGlobe, FiAward } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { aboutSummary } from '../../constants/data';
import { useInView } from '../../hooks/useInView';

const stats = [
  { icon: FiBriefcase, label: 'Years Experience', value: '3+' },
  { icon: FiAward, label: 'Professional Roles', value: '6+' },
  { icon: FiGlobe, label: 'Languages Spoken', value: '2' },
];

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding" aria-label="About me">
      <div className="container-max">
        <SectionHeading
          title="About Me"
          subtitle="Bridging cutting-edge AI research with production-grade systems"
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-400/30 to-primary-500/30 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-accent-400/20">
                <img
                  src="/profile.jpg"
                  alt="Ibrahim Alobaid — AI Systems Engineer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={288}
                  height={288}
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              {aboutSummary}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              {stats.map((stat, i) => (
                <GlassCard key={i} className="text-center p-4 sm:p-5">
                  <stat.icon className="mx-auto text-accent-400 mb-2" size={22} />
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
