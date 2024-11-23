import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Tools', href: '#tools' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionId = section.getAttribute('id') || '';
      
      if (scrollPosition >= sectionTop) {
        setActiveSection(sectionId);
      }
    });

    if (scrollPosition < 50) {
      setActiveSection('home');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto w-[95%] max-w-7xl ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]' 
        : 'bg-white/50 backdrop-blur-sm'
    } rounded-2xl`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="relative inline-flex items-center text-2xl sm:text-3xl font-serif font-bold bg-gradient-to-r from-coral-500 via-purple-500 to-coral-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QT
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                  activeSection === item.href.substring(1)
                    ? 'text-coral-500'
                    : 'text-gray-700 hover:text-coral-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-coral-500 via-purple-500 to-coral-500"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-gray-700"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 bg-current ${
              isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''
            }`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 bg-current ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <div className={`w-6 h-0.5 transition-all duration-300 bg-current ${
              isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
            }`} />
          </button>

          {/* Mobile Menu */}
          <div 
            id="mobile-menu"
            className={`md:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            } bg-white rounded-xl shadow-lg overflow-hidden`}
          >
            <div className="py-2 px-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.substring(1));
                  }}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-coral-500 bg-gray-50'
                      : 'text-gray-700 hover:text-coral-500 hover:bg-gray-50'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
