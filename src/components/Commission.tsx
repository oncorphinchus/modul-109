
import React from "react";
import { ArrowRight, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Commission = () => {
  return (
    <section id="commission" className="section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 reveal">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-red-500/10 text-red-500 font-medium text-sm">
              The Challenge
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The School's Commission
            </h2>
            <div className="glass p-8 rounded-xl mb-8 border-l-4 border-red-500">
              <p className="text-lg italic text-muted-foreground mb-6">
                "Our primary school needs a comprehensive cloud infrastructure that supports digital transformation and enables effective collaborative work while ensuring secure data exchange. We require a solution that scales with our growth and protects sensitive student information."
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">1</span>
                  </div>
                  <p className="text-muted-foreground">
                    Support for modern digital learning tools and collaborative platforms
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">2</span>
                  </div>
                  <p className="text-muted-foreground">
                    Secure environment for handling sensitive student data according to classifications
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">3</span>
                  </div>
                  <p className="text-muted-foreground">
                    Easy-to-manage device fleet with appropriate access controls
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">4</span>
                  </div>
                  <p className="text-muted-foreground">
                    Reliable infrastructure with minimal downtime and technical support
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 reveal" style={{ animationDelay: "0.3s" }}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
              Our Proposal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              CloudEdu Solution
            </h2>
            <div className="glass p-8 rounded-xl mb-8 border-l-4 border-azure">
              <p className="text-lg text-muted-foreground mb-6">
                After careful analysis of the school's requirements, we've designed a comprehensive Microsoft cloud-based solution that addresses all key concerns while providing room for future growth.
              </p>
              
              <div className="flex flex-col space-y-6 mb-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-azure" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Security-First Approach</h3>
                    <p className="text-muted-foreground">
                      Built with data classification and protection at its core, ensuring compliance with educational data regulations.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                    <FileText size={20} className="text-azure" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Integrated Microsoft Platform</h3>
                    <p className="text-muted-foreground">
                      A unified solution combining Azure AD, Intune, OneDrive, and M365 apps to create a seamless experience.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="group button-primary w-full">
                <span>View Full Solution Details</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commission;
