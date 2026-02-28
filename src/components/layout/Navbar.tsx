import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Formations', href: '#formation' },
    { name: 'Équipements', href: '#equipement' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-mft-dark/95 backdrop-blur-md shadow-lg py-4 border-b border-white/10' 
            : 'bg-transparent py-8'
        }`}
      >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="MFT Logo" 
            className="h-14 md:h-16 transition-all duration-300 drop-shadow-md"
            onError={(e) => {
              // Fallback text if logo doesn't load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML += '<span class="font-heading font-bold text-xl tracking-tight">MFT</span>';
            }}
          />
        </a>

        {/* Desktop Menu - Pill */}
        <div className="hidden md:flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5 pl-6 shadow-sm">
          <ul className="flex items-center gap-6 lg:gap-8 mr-4 lg:mr-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-mft-orange text-white/90 hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 bg-mft-orange text-white hover:bg-orange-600 shadow-lg shadow-mft-orange/20"
          >
            Demander un devis →
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-mft-dark z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden overflow-y-auto ${
          mobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-6 right-6 p-2 text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl font-heading font-semibold hover:text-mft-orange transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-4 rounded-full bg-mft-orange text-white font-bold text-lg hover:bg-mft-orange-light transition-colors"
            >
              Demander un devis
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
