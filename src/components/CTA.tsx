
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="section">
      <div className="glass rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.3),transparent_70%)]"></div>
        
        <div className="relative p-12 md:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your School's Digital Infrastructure?
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Take the first step towards a secure, collaborative, and effective technology environment for your primary school.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="button-primary flex items-center justify-center gap-2">
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="button-secondary">
                Download Guide
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <Mail className="text-azure" size={20} />
                <a href="mailto:contact@cloudedu.com" className="hover:text-azure transition-colors">
                  contact@cloudedu.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-azure" size={20} />
                <a href="tel:+123456789" className="hover:text-azure transition-colors">
                  +1 (234) 567-89
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 reveal" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Request More Information</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3 rounded-lg border border-border focus:border-azure focus:ring-1 focus:ring-azure outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 rounded-lg border border-border focus:border-azure focus:ring-1 focus:ring-azure outline-none transition"
                      placeholder="john@school.edu"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="school" className="text-sm font-medium">
                    School Name
                  </label>
                  <input
                    id="school"
                    type="text"
                    className="w-full p-3 rounded-lg border border-border focus:border-azure focus:ring-1 focus:ring-azure outline-none transition"
                    placeholder="Oakridge Primary School"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 rounded-lg border border-border focus:border-azure focus:ring-1 focus:ring-azure outline-none transition resize-none"
                    placeholder="Tell us about your school's needs..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-azure hover:bg-azure-dark text-white py-3 rounded-lg transition-all"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
