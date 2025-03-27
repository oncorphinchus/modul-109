
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <section id="solutions" className="section bg-gradient-to-b from-white to-cloud-light">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Integrated Cloud Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Digital Transformation Journey for Primary Schools
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our comprehensive cloud infrastructure is designed to evolve with your school's needs, providing a foundation for innovative teaching and learning experiences.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                <span className="text-azure font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Identity & Access Management</h3>
                <p className="text-muted-foreground">
                  Azure AD provides secure identity management with age-appropriate access controls and simplified sign-in for young students.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                <span className="text-azure font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Device Management & Security</h3>
                <p className="text-muted-foreground">
                  Microsoft Intune ensures Surface devices are properly configured, updated, and protected for educational use.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                <span className="text-azure font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Collaborative Learning Environment</h3>
                <p className="text-muted-foreground">
                  M365 applications and OneDrive create a secure collaborative space for students and teachers to create, share, and learn together.
                </p>
              </div>
            </div>
          </div>
          
          <Button className="group button-primary">
            <span>Explore Our Implementation Guide</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="lg:w-1/2 reveal" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="glass rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Teacher helping students with Surface devices" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="glass absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-lg max-w-xs">
              <div className="flex gap-3 items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-azure/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-azure" />
                </div>
                <h4 className="font-semibold">Seamless Integration</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                All components work together to create a unified educational experience across devices and applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
