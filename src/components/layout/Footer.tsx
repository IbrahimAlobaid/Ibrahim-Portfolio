import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { socialLinks, navLinks } from '../../constants/data';

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-dark-950/50 backdrop-blur-sm" role="contentinfo">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              IA
            </a>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-xs">
              AI Systems Engineer building production-grade intelligent systems at the intersection of voice technology and multi-modal AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-2.5 rounded-lg glass glass-hover text-slate-400 hover:text-accent-400 transition-colors duration-200"
                aria-label="Send email"
              >
                <FiMail size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass glass-hover text-slate-400 hover:text-accent-400 transition-colors duration-200"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass glass-hover text-slate-400 hover:text-accent-400 transition-colors duration-200"
                aria-label="GitHub profile"
              >
                <FiGithub size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ibrahim Alobaid. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Built with <FiHeart size={12} className="text-accent-400" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
