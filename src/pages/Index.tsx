import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Commission from "@/components/Commission";
import Architecture from "@/components/Architecture";
import Kernfunktionen from "@/components/Kernfunktionen";
import Datenschutz from "@/components/Datenschutz";
import ScrollReveal from "@/components/ScrollReveal";
import Sicherheit from "@/components/Sicherheit";
import Bereitstellung from "@/components/Bereitstellung";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href') as string;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollReveal>
        <Navbar />
        <Hero />
        <Commission />
        <Architecture />
        <Kernfunktionen />
        <Datenschutz />
        <Sicherheit />
        <Bereitstellung />
      </ScrollReveal>
    </div>
  );
};

export default Index;
