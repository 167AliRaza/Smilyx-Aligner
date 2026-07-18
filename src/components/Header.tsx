import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { motionEase } from "./motionPresets";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const treatmentItems = [
    { label: "Invisalign", id: "invisalign" },
    { label: "Kids Orthodontics", id: "kids-ortho" },
    { label: "Adult Orthodontics", id: "adult-ortho" },
  ];

  const mainNavItems = [
    { label: "Home", id: "home" },
    { label: "How We Treat", id: "how-we-treat" },
    { label: "About Us", id: "about-us" },
    { label: "Blogs", id: "blogs" },
    { label: "FAQs", id: "faqs" },
  ];

  const isTreatmentActive = treatmentItems.some(item => item.id === currentPage);

  // Every page opens with a dark hero → header is transparent on a dark image at rest, use light content.
  const overHero = !isScrolled && !isOpen;
  const navBase =
    "px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-full";
  const navIdle = overHero
    ? "text-white/80 hover:text-white hover:bg-white/10"
    : "text-slate-500 hover:text-brand-600 hover:bg-slate-50";
  const navActive = overHero ? "text-white bg-white/15" : "text-brand-600 bg-brand-50";

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? "bg-slate-900 border-b border-white/10 py-4"
          : isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
            : "bg-transparent py-5"
      }`}
    >
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="logo-button"
            onClick={() => handleLinkClick("home")}
            className="flex items-center group cursor-pointer"
          >
            <Logo variant={overHero || isOpen ? "dark" : "light"} />
          </button>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {/* Home Link */}
            <button
              onClick={() => handleLinkClick("home")}
              className={`${navBase} ${currentPage === "home" ? navActive : navIdle}`}
            >
              Home
            </button>

            {/* Treatments Dropdown */}
            <div className="relative group/dropdown">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center space-x-1 ${navBase} ${isTreatmentActive ? navActive : navIdle}`}
              >
                <span>Treatments</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Floating Menu */}
              <div
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`absolute left-0 mt-1 w-56 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 transition-all duration-200 origin-top-left ${
                  isDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                } group-hover/dropdown:opacity-100 group-hover/dropdown:scale-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto`}
              >
                {treatmentItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left px-5 py-3 font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer hover:bg-brand-50 hover:text-brand-600 ${
                      currentPage === item.id ? "text-brand-600 bg-brand-50" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Other links */}
            {mainNavItems.slice(1).map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative ${navBase} ${isActive ? navActive : navIdle}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="header-cta-button"
              onClick={() => handleLinkClick("contact")}
              className="bg-brand-600 hover:bg-brand-700 text-white font-display font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center space-x-2 cursor-pointer"
            >
              <span>Submit Trial Case</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                overHero || isOpen
                  ? "text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-brand-600 hover:bg-slate-50"
              }`}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            className="lg:hidden fixed inset-0 z-10 bg-white pt-[76px] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.22, ease: motionEase }}
          >
            <motion.nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto px-5 pt-6 pb-5"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.34, ease: motionEase }}
            >
              <div className="space-y-1">
                {mainNavItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`min-h-12 w-full text-left px-4 py-3 rounded-xl font-display font-bold text-base tracking-wide transition-colors cursor-pointer block ${
                        isActive
                          ? "text-brand-800 bg-brand-50"
                          : "text-slate-700 hover:text-brand-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 rounded-2xl bg-slate-50 px-4 py-4">
                <span className="font-display text-xs uppercase tracking-wider text-slate-500 font-bold block mb-2">
                  Treatments
                </span>
                <div className="space-y-1">
                  {treatmentItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`min-h-11 w-full text-left px-3 py-2.5 rounded-xl font-display text-sm font-bold transition-colors cursor-pointer block ${
                        currentPage === item.id
                          ? "text-brand-800 bg-white"
                          : "text-slate-600 hover:text-brand-700 hover:bg-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.nav>

            <div className="border-t border-slate-100 bg-white px-5 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
              <button
                id="mobile-header-cta"
                onClick={() => handleLinkClick("contact")}
                className="min-h-12 w-full justify-center bg-brand-600 hover:bg-brand-700 text-white font-display font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-xl transition-all duration-200 flex items-center space-x-2 cursor-pointer"
              >
                <span>Submit Trial Case</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
