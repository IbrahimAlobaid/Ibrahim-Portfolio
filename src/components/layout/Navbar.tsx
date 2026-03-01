import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { navLinks } from '../../constants/data';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { cn } from '../../utils/cn';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(sectionIds);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <nav className="container-max flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-xl sm:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            IA
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    'px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    activeSection === link.href.replace('#', '')
                      ? 'text-accent-400 bg-accent-400/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="/Ibrahim_Alobaid_Resume.pdf"
            download
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              bg-gradient-to-r from-accent-500/20 to-primary-500/20
              border border-accent-400/30 text-accent-300
              hover:from-accent-500/30 hover:to-primary-500/30 hover:border-accent-400/50
              transition-all duration-200"
          >
            <FiDownload size={14} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-dark-950/95 backdrop-blur-xl border-b border-white/5"
            >
              <ul className="flex flex-col px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                        activeSection === link.href.replace('#', '')
                          ? 'text-accent-400 bg-accent-400/10'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="/Ibrahim_Alobaid_Resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-medium
                      bg-gradient-to-r from-accent-500/20 to-primary-500/20
                      border border-accent-400/30 text-accent-300
                      hover:from-accent-500/30 hover:to-primary-500/30 transition-all duration-200"
                  >
                    <FiDownload size={16} />
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
