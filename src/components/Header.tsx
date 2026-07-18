import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const overHero = !isScrolled;
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
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="logo-button"
            onClick={() => handleLinkClick("home")}
            className="flex items-center group cursor-pointer"
          >
            <Logo variant={overHero ? "dark" : "light"} />
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
                overHero
                  ? "text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-brand-600 hover:bg-slate-50"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white max-h-[80vh] overflow-y-auto">
          {/* Home */}
          <button
            onClick={() => handleLinkClick("home")}
            className={`w-full text-left px-4 py-3 rounded-xl font-display font-bold text-sm tracking-wide transition-colors cursor-pointer block ${
              currentPage === "home" ? "text-brand-700 bg-brand-50" : "text-slate-600 hover:text-brand-600 hover:bg-slate-50"
            }`}
          >
            Home
          </button>

          {/* Treatments Sub-List */}
          <div className="px-4 py-2 space-y-1 bg-slate-50/50 rounded-xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-1">
              Treatments
            </span>
            {treatmentItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer block ${
                  currentPage === item.id ? "text-brand-600 bg-brand-50" : "text-slate-500 hover:text-brand-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Other Nav Items */}
          {mainNavItems.slice(1).map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-display font-bold text-sm tracking-wide transition-colors cursor-pointer block ${
                  isActive ? "text-brand-700 bg-brand-50" : "text-slate-600 hover:text-brand-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-100">
            <button
              id="mobile-header-cta"
              onClick={() => handleLinkClick("contact")}
              className="w-full justify-center bg-brand-600 hover:bg-brand-700 text-white font-display font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-xl shadow-lg shadow-brand-100 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
            >
              <span>Submit Trial Case</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
