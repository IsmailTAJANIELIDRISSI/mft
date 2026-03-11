import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { languages, translations } from "../../i18n/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = t.nav.links;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "pt-4 pb-4" : "pt-8 pb-8"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-500 rounded-2xl ${
              isScrolled
                ? "bg-white/[0.03] backdrop-blur-xl border border-white/10 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                : "bg-transparent px-2 py-0"
            }`}
          >
            <a href="#" className="flex items-center gap-3 group relative z-10">
              <img
                src="/logo.png"
                alt="MFT Logo"
                className={`transition-all duration-500 drop-shadow-lg ${
                  isScrolled ? "h-9 md:h-10" : "h-11 md:h-12"
                }`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML +=
                    '<span class="font-heading font-bold text-2xl tracking-tight text-white">MFT</span>';
                }}
              />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-mft-orange to-mft-green transition-all duration-300 group-hover:w-1/2 rounded-full opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <div ref={langDropdownRef} className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all text-sm font-bold ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <span className="text-white">{languages.find((l) => l.code === language)?.name}</span>
                  <ChevronDown
                    size={12}
                    className={`text-white/70 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full mt-1 right-0 left-0 min-w-[140px] rounded-xl border border-white/10 bg-mft-dark/95 backdrop-blur-xl shadow-xl overflow-hidden z-50"
                    >
                      {languages.map((option) => (
                        <button
                          key={option.code}
                          onClick={() => {
                            setLanguage(option.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center px-3 py-2.5 text-left text-sm font-bold transition-colors ${
                            language === option.code
                              ? "bg-white/15 text-white"
                              : "text-white/70 hover:bg-white/10 hover:text-white"
                          } ${isRTL ? "flex-row-reverse text-right justify-end" : ""}`}
                        >
                          {option.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a
                href="#contact"
                className="group relative px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-mft-orange to-mft-green hover:from-mft-orange-light hover:to-mft-green transition-all duration-300 shadow-lg shadow-mft-orange/20 overflow-hidden flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.nav.quote}
                  <ChevronDown
                    size={14}
                    className={`${isRTL ? "rotate-[90deg] group-hover:-translate-x-0.5" : "rotate-[-90deg] group-hover:translate-x-0.5"} transition-transform`}
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </div>

            <button
              className="lg:hidden p-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0a0a0a]/90 z-[45] lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-6 pt-28 pb-12 min-h-screen flex flex-col">
              <nav className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                <div className="mb-8">
                  <label className="block text-white/50 text-xs font-bold uppercase tracking-wider mb-2 px-2">
                    {t.nav.language}
                  </label>
                  <div
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.03] ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value as "fr" | "en" | "ar")}
                      className="flex-1 bg-transparent border-none text-white text-sm font-bold appearance-none cursor-pointer focus:outline-none min-w-0"
                    >
                      {languages.map((option) => (
                        <option key={option.code} value={option.code} className="bg-mft-dark text-white">
                          {option.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className={`text-white/50 ${isRTL ? "rotate-90" : "rotate-[-90deg]"}`} />
                  </div>
                </div>
                <ul className="space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-3 px-6 rounded-2xl text-white/80 text-xl font-heading font-bold hover:bg-white/5 hover:text-white transition-all group border border-transparent hover:border-white/10"
                      >
                        {link.name}
                        <ChevronDown
                          size={18}
                          className={`${isRTL ? "rotate-[90deg] translate-x-4 group-hover:translate-x-0" : "rotate-[-90deg] -translate-x-4 group-hover:translate-x-0"} text-mft-orange opacity-0 group-hover:opacity-100 transition-all duration-300`}
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="pt-10"
                >
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center items-center gap-2 w-full py-4 rounded-2xl bg-mft-orange text-white font-bold tracking-wider uppercase text-sm hover:bg-mft-orange-light transition-colors shadow-lg shadow-mft-orange/20"
                  >
                    {t.nav.quote}
                    <ChevronDown size={16} className={isRTL ? "rotate-[90deg]" : "rotate-[-90deg]"} />
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
