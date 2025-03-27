import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getHref = (sectionId) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/images/ILV_Logo.png" alt="ICT-Werk Logo" className="h-10 mr-3" />
            <div className="text-azure-dark font-bold text-3xl">ICT-Werk</div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href={getHref("commission")}
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Auftrag
          </a>
          <a
            href={getHref("architecture")}
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Architektur
          </a>
          <a
            href={getHref("kernfunktionen")}
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Kernfunktionen
          </a>
          <a
            href={getHref("datenschutz")}
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Datenschutz
          </a>
          <a
            href={getHref("implementation")}
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Implementierung
          </a>
          <a
            href="/variantenanalyse"
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Variantenanalyse
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in-down">
          <a
            href={getHref("commission")}
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Auftrag
          </a>
          <a
            href={getHref("architecture")}
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Architektur
          </a>
          <a
            href={getHref("kernfunktionen")}
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Kernfunktionen
          </a>
          <a
            href={getHref("datenschutz")}
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Datenschutz
          </a>
          <a
            href={getHref("implementation")}
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Implementierung
          </a>
          <a
            href="/variantenanalyse"
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Variantenanalyse
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
