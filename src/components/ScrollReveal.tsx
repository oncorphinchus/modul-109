
import React, { useEffect } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll(".reveal");
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // How much of the element needs to be visible
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    // Run once on mount to reveal elements already in view
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollReveal;
