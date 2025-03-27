
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="mr-2 text-azure-dark font-bold text-3xl">CloudEdu</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#solutions"
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Solutions
          </a>
          <a
            href="#testimonials"
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-azure transition-colors font-medium"
          >
            Contact
          </a>
          <Button 
            className="ml-4 bg-azure hover:bg-azure-dark text-white rounded-full px-6"
          >
            Get Started
          </Button>
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
            href="#features"
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Features
          </a>
          <a
            href="#solutions"
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Solutions
          </a>
          <a
            href="#testimonials"
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-azure py-2 transition-colors font-medium"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <Button 
            className="mt-2 bg-azure hover:bg-azure-dark text-white rounded-full"
          >
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
