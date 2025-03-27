
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Cloud, ShieldCheck, Users } from "lucide-react";

const Hero = () => {
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent)]"></div>
      
      {/* Floating Clouds Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={cloudRef} className="absolute top-[20%] left-[10%] opacity-30 animate-float">
          <Cloud size={64} className="text-azure-light" />
        </div>
        <div className="absolute top-[40%] right-[15%] opacity-20 animate-float" style={{ animationDelay: "1s" }}>
          <Cloud size={48} className="text-azure" />
        </div>
        <div className="absolute bottom-[30%] left-[20%] opacity-10 animate-float" style={{ animationDelay: "2s" }}>
          <Cloud size={56} className="text-azure-dark" />
        </div>
      </div>
      
      <div className="section z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Enterprise IT Solutions Provider
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Secure <span className="text-azure">Education Infrastructure</span> for Digital Growth
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg text-balance">
            We design, implement and maintain Microsoft cloud solutions that transform primary schools into modern, secure digital learning environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="button-primary">
              Request a Consultation
            </Button>
            <Button variant="outline" className="button-secondary">
              View Our Case Studies
            </Button>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-azure/10">
                <Users size={20} className="text-azure" />
              </div>
              <span className="font-medium">Microsoft Partner</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-azure/10">
                <ShieldCheck size={20} className="text-azure" />
              </div>
              <span className="font-medium">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 reveal" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="glass rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Students collaborating with Surface notebooks" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-lg">
              <Cloud size={32} className="text-azure" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-lg">
              <ShieldCheck size={32} className="text-azure" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
