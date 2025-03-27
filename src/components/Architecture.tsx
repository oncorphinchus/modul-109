
import React from "react";
import { 
  Cloud, ShieldCheck, Database, Users, RefreshCw,
  Laptop, Lock, Key, FileText, BarChart
} from "lucide-react";

const Architecture = () => {
  return (
    <section id="architecture" className="section py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Technical Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cloud Infrastructure Design
          </h2>
          <p className="text-lg text-muted-foreground">
            Our end-to-end solution leverages Microsoft's cloud ecosystem to create a secure, scalable, and user-friendly environment.
          </p>
        </div>

        <div className="relative mt-20 mb-24 reveal">
          {/* Architecture Diagram */}
          <div className="glass rounded-xl p-8 shadow-lg">
            <div className="relative">
              {/* Core Cloud Platform */}
              <div className="bg-azure/5 border border-azure/20 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud size={24} className="text-azure" />
                  <h3 className="text-xl font-semibold">Microsoft Cloud Platform</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Azure AD */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Key size={20} className="text-azure" />
                      <h4 className="font-medium">Microsoft Entra ID</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Identity management with MFA and conditional access policies
                    </p>
                  </div>

                  {/* Intune */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Laptop size={20} className="text-azure" />
                      <h4 className="font-medium">Microsoft Intune</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Device management with OneDrive KFM for secure data storage
                    </p>
                  </div>

                  {/* M365 */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText size={20} className="text-azure" />
                      <h4 className="font-medium">Microsoft 365</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Exchange, Teams, SharePoint, OneDrive for collaboration
                    </p>
                  </div>

                  {/* Windows Autopilot */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <RefreshCw size={20} className="text-azure" />
                      <h4 className="font-medium">Windows Autopilot</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Zero-touch device deployment and configuration
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Layer */}
              <div className="bg-gray-50 border border-border rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={24} className="text-azure" />
                  <h3 className="text-xl font-semibold">Security & Compliance</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Data Classification */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
                    <h4 className="font-medium mb-3">Data Classification System</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-sm font-medium">Class 1: Geheim</span>
                        <span className="text-xs text-muted-foreground ml-auto">Strict access controls</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span className="text-sm font-medium">Class 2: Vertraulich</span>
                        <span className="text-xs text-muted-foreground ml-auto">Encrypted, restricted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium">Class 3: Intern</span>
                        <span className="text-xs text-muted-foreground ml-auto">Password protected</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium">Class 4: Öffentlich</span>
                        <span className="text-xs text-muted-foreground ml-auto">No restrictions</span>
                      </div>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
                    <h4 className="font-medium mb-3">Security Measures</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Lock size={16} className="text-azure mt-0.5 flex-shrink-0" />
                        <span>Multi-factor authentication for all user accounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ShieldCheck size={16} className="text-azure mt-0.5 flex-shrink-0" />
                        <span>Conditional access policies based on user role and data sensitivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database size={16} className="text-azure mt-0.5 flex-shrink-0" />
                        <span>Encrypted data storage with separation by classification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BarChart size={16} className="text-azure mt-0.5 flex-shrink-0" />
                        <span>Comprehensive audit logging and security monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* End User Experience */}
              <div className="bg-white border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={24} className="text-azure" />
                  <h3 className="text-xl font-semibold">End User Experience</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg bg-azure/5 border border-azure/20">
                    <h4 className="font-medium mb-2">Students</h4>
                    <p className="text-sm text-muted-foreground">
                      Age-appropriate interfaces, simplified sign-in, managed Surface devices
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-azure/5 border border-azure/20">
                    <h4 className="font-medium mb-2">Teachers</h4>
                    <p className="text-sm text-muted-foreground">
                      Collaborative tools, content creation, secure assessment handling
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-azure/5 border border-azure/20">
                    <h4 className="font-medium mb-2">Administrators</h4>
                    <p className="text-sm text-muted-foreground">
                      Management dashboards, reporting tools, policy controls
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
