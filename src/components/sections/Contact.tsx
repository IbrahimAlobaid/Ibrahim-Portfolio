import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { socialLinks } from '../../constants/data';

const contactCards = [
  {
    icon: FiMail,
    label: 'Email',
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    external: false,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'ibrahimalobaid44',
    href: socialLinks.linkedin,
    external: true,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'IbrahimAlobid2',
    href: socialLinks.github,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding" aria-label="Contact information">
      <div className="container-max">
        <SectionHeading
          title="Let's Connect"
          subtitle="Interested in collaborating or have a project in mind? Reach out through any of these channels."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="block group"
            >
              <GlassCard className="text-center h-full group-hover:border-accent-400/30 transition-all duration-300">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-400/10 group-hover:border-accent-400/30 transition-colors">
                    <card.icon className="text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      {card.label}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-accent-300 transition-colors flex items-center justify-center gap-1">
                      {card.value}
                      {card.external && <FiExternalLink size={12} />}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
