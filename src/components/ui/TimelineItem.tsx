import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiBriefcase } from 'react-icons/fi';
import type { Experience } from '../../constants/data';
import { cn } from '../../utils/cn';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex w-full"
    >
      {/* Desktop layout */}
      <div className={cn(
        'hidden lg:flex w-full items-start',
        isLeft ? 'flex-row' : 'flex-row-reverse'
      )}>
        {/* Content side */}
        <div className="w-[calc(50%-2rem)]">
          <TimelineCard
            experience={experience}
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
          />
        </div>

        {/* Center line + node */}
        <div className="flex flex-col items-center w-16 relative">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-400 to-primary-500 z-10 ring-4 ring-dark-950 shadow-lg shadow-accent-400/20" />
          {!isLast && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-accent-400/30 to-primary-500/10 min-h-[40px]" />
          )}
        </div>

        {/* Empty side */}
        <div className="w-[calc(50%-2rem)]" />
      </div>

      {/* Mobile layout */}
      <div className="flex lg:hidden w-full items-start">
        <div className="flex flex-col items-center mr-4 relative">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-400 to-primary-500 z-10 ring-4 ring-dark-950 mt-2" />
          {!isLast && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-accent-400/30 to-primary-500/10 min-h-[40px]" />
          )}
        </div>
        <div className="flex-1 pb-8">
          <TimelineCard
            experience={experience}
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
          />
        </div>
      </div>
    </motion.div>
  );
}

interface TimelineCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
}

function TimelineCard({ experience, isExpanded, onToggle }: TimelineCardProps) {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6 glass-hover transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-xl"
        aria-expanded={isExpanded}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <FiBriefcase className="text-accent-400 flex-shrink-0" size={16} />
              <span className="text-xs font-medium text-accent-400 uppercase tracking-wider">
                {experience.type}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
              {experience.role}
            </h3>
            <p className="text-primary-400 font-medium">{experience.company}</p>
            <p className="text-slate-500 text-sm mt-1">{experience.period}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-slate-400 mt-1 flex-shrink-0"
          >
            <FiChevronDown size={20} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              {experience.details.map((detail, i) => (
                <div key={i}>
                  <h4 className="text-sm font-semibold text-accent-300 mb-2">
                    {detail.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {detail.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-400/60 mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
