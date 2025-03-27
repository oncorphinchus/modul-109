
import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-xl font-bold text-azure-dark mb-4">CloudEdu</div>
            <p className="text-muted-foreground mb-6">
              Transforming primary education through secure, collaborative cloud infrastructure solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-azure/10 text-azure hover:bg-azure/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-azure/10 text-azure hover:bg-azure/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-azure/10 text-azure hover:bg-azure/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-azure/10 text-azure hover:bg-azure/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Azure Active Directory
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Microsoft Intune
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  OneDrive for Education
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Microsoft 365 Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Surface for Education
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Implementation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Security Best Practices
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-azure transition-colors">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                123 Education Lane<br />
                Tech District<br />
                Cloud City, CC 10101
              </li>
              <li>
                <a href="mailto:contact@cloudedu.com" className="text-muted-foreground hover:text-azure transition-colors">
                  contact@cloudedu.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="text-muted-foreground hover:text-azure transition-colors">
                  +1 (234) 567-89
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} CloudEdu. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-azure transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-azure transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-azure transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
