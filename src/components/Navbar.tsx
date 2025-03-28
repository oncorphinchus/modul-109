import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Define navigation items to maintain consistency using useMemo
  const navItems = useMemo(() => [
    { id: "commission", label: "Auftrag" },
    { id: "architecture", label: "Architektur" },
    { id: "kernfunktionen", label: "Kernfunktionen" },
    { id: "datenschutz", label: "Datenschutz" },
    { id: "sicherheit", label: "Sicherheit" },
    { id: "bereitstellung", label: "Bereitstellung" },
    { id: "variantenanalyse", label: "Variantenanalyse", isPage: true }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 10);
      
      // Check which section is in view for active state
      if (isHomePage) {
        const sections = navItems
          .filter(item => !item.isPage)
          .map(item => document.getElementById(item.id))
          .filter(Boolean);

        let current = "";
        
        for (const section of sections) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id") || "";
            break;
          }
        }
        
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, navItems]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileNav = document.getElementById('mobile-nav');
      const mobileButton = document.getElementById('mobile-menu-button');
      
      if (isMenuOpen && mobileNav && !mobileNav.contains(event.target) && 
          mobileButton && !mobileButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getHref = (sectionId, isPage = false) => {
    if (isPage) return `/${sectionId}`;
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  const isActive = (id, isPage = false) => {
    if (isPage) return location.pathname === `/${id}`;
    return activeSection === id;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12",
        isScrolled
          ? "py-2 sm:py-3 bg-white/90 backdrop-blur-lg shadow-sm"
          : "py-4 sm:py-6 bg-transparent"
      )}
      style={{ height: 'var(--header-height)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="flex items-center">
          <a 
            href="/" 
            className="flex items-center transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-azure/40 focus:ring-offset-2 rounded-lg"
            aria-label="ICT-Werk Home"
          >
            <img src="/images/ILV_Logo.png" alt="" className="h-8 sm:h-10 mr-2 sm:mr-3" />
            <div className="text-azure-dark font-bold text-xl sm:text-2xl md:text-3xl">ICT-Werk</div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={getHref(item.id, item.isPage)}
              className={cn(
                "text-foreground/80 hover:text-azure transition-colors duration-200 font-medium relative py-2",
                isActive(item.id, item.isPage) && "text-azure"
              )}
              aria-current={isActive(item.id, item.isPage) ? "page" : undefined}
            >
              {item.label}
              {isActive(item.id, item.isPage) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-azure rounded-full transform transition-transform duration-200" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-foreground p-2 rounded-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-azure/40"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden fixed top-[var(--header-height)] left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col py-2 px-6 max-h-[calc(100vh-var(--header-height))] overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={getHref(item.id, item.isPage)}
              className={cn(
                "py-3 px-2 text-foreground/80 hover:text-azure transition-colors border-b border-gray-100 last:border-0 font-medium flex justify-between items-center",
                isActive(item.id, item.isPage) && "text-azure"
              )}
              onClick={toggleMenu}
              aria-current={isActive(item.id, item.isPage) ? "page" : undefined}
            >
              <span>{item.label}</span>
              {isActive(item.id, item.isPage) ? (
                <span className="w-1.5 h-1.5 rounded-full bg-azure"></span>
              ) : (
                <ChevronDown size={16} className="text-muted-foreground" />
              )}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Overlay for mobile menu when opened */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 animate-fade-in" 
          aria-hidden="true"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
