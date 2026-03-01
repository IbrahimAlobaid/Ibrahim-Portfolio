import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
}

export function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 247, 243, 0.2)' }}
      className="inline-block px-4 py-2 rounded-full text-sm font-medium
        bg-gradient-to-r from-accent-950/80 to-primary-950/80
        border border-accent-700/20 text-accent-300
        hover:border-accent-500/40 hover:text-accent-200
        transition-colors duration-200 cursor-default"
    >
      {name}
    </motion.span>
  );
}
