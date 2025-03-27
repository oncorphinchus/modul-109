
import React from "react";
import { 
  ShieldCheck, ArrowRight, Clock, CheckCircle2, 
  AlertCircle, BarChart3, HardDrive, RefreshCcw
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Implementation = () => {
  return (
    <section id="implementation" className="section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Security Section */}
          <div className="reveal">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
              Network Security
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Comprehensive Security Approach
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our solution provides layered security controls to protect the school's data according to its classification requirements.
            </p>
            
            <div className="glass rounded-xl p-6 mb-8 border-l-4 border-azure">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-azure" />
                <span>Key Security Features</span>
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">Multi-factor Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Required for all staff and age-appropriate options for students
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">Data Encryption</p>
                    <p className="text-sm text-muted-foreground">
                      End-to-end encryption for all data in transit and at rest
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">Conditional Access</p>
                    <p className="text-sm text-muted-foreground">
                      Context-based access controls for different data classifications
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">Advanced Threat Protection</p>
                    <p className="text-sm text-muted-foreground">
                      Proactive protection against phishing, malware, and unauthorized access
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <Button variant="outline" className="w-full group">
              <span>View Security Whitepaper</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Implementation Steps */}
          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
              Implementation Plan
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Phased Deployment Approach
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our proven methodology ensures minimal disruption to the school's operations during implementation.
            </p>
            
            <div className="glass rounded-xl p-6 mb-8">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-azure/20 z-0"></div>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-azure flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <span>Assessment & Design</span>
                        <span className="text-xs font-normal text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full">2 Weeks</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Comprehensive analysis of current infrastructure and requirements
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-azure flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <span>Identity & Access Setup</span>
                        <span className="text-xs font-normal text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full">3 Weeks</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Azure AD configuration, security policies, and user onboarding
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-azure flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <span>Device Enrollment</span>
                        <span className="text-xs font-normal text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full">4 Weeks</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Surface device deployment with Autopilot and Intune configuration
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-azure flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <span>Training & Adoption</span>
                        <span className="text-xs font-normal text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full">Ongoing</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Comprehensive training for staff and students on using the new systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Monitoring & Logging */}
          <div className="reveal" style={{ animationDelay: "0.3s" }}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
              Monitoring & Logging
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Proactive Infrastructure Management
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive monitoring ensures optimal performance and early issue detection.
            </p>
            
            <div className="glass rounded-xl overflow-hidden mb-8">
              <div className="bg-azure p-4 text-white">
                <BarChart3 size={28} />
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Security Monitoring</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time threat detection and security alerts for unauthorized access attempts and suspicious activities
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Performance Monitoring</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuous monitoring of system performance, network latency, and application responsiveness
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Compliance Logging</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed audit logs for accessing sensitive data, ensuring compliance with privacy regulations
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Reporting</h3>
                    <p className="text-sm text-muted-foreground">
                      Monthly and quarterly reports on system usage, security incidents, and performance metrics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* High Availability */}
          <div className="reveal" style={{ animationDelay: "0.4s" }}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
              High Availability
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Always-On Learning Environment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our solution is designed to provide 99.9% uptime with robust redundancy.
            </p>
            
            <div className="glass rounded-xl overflow-hidden mb-8">
              <div className="bg-azure p-4 text-white">
                <RefreshCcw size={28} />
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Cloud Redundancy</h3>
                    <p className="text-sm text-muted-foreground">
                      Microsoft's global infrastructure provides built-in redundancy across multiple data centers
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Offline Capabilities</h3>
                    <p className="text-sm text-muted-foreground">
                      OneDrive offline sync enables continued work during temporary connectivity issues
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Disaster Recovery</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive backup and recovery procedures with regular testing and simulation
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-100">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-green-600">
                      99.9% Uptime SLA Guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-orange-200 bg-orange-50 flex items-start gap-3">
              <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-orange-700">Emergency Support</h4>
                <p className="text-sm text-orange-600">
                  24/7 emergency support available with 1-hour response time for critical issues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
