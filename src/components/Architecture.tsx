import React, { useState } from "react";
import { 
  Cloud, ShieldCheck, Database, Users, RefreshCw,
  Laptop, Lock, Key, FileText, BarChart, Server,
  CheckCircle, ArrowRight, Network, Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Architecture = () => {
  const [activeTab, setActiveTab] = useState('identitaet');
  const [activeUserGroup, setActiveUserGroup] = useState('schueler');

  return (
    <section id="architecture" className="section py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Technische Architektur
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cloud-Infrastruktur Design
          </h2>
          <p className="text-lg text-muted-foreground">
            Unsere Komplettlösung nutzt das Cloud-Ökosystem von Microsoft, um eine sichere, skalierbare und benutzerfreundliche Lernumgebung zu schaffen.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button 
              variant={activeTab === 'identitaet' ? 'default' : 'outline'} 
              className={activeTab === 'identitaet' ? 'bg-azure hover:bg-azure/90' : ''}
              onClick={() => setActiveTab('identitaet')}
            >
              <Key className="w-4 h-4 mr-2" />
              Identitätsverwaltung
            </Button>
            <Button 
              variant={activeTab === 'geraete' ? 'default' : 'outline'} 
              className={activeTab === 'geraete' ? 'bg-azure hover:bg-azure/90' : ''}
              onClick={() => setActiveTab('geraete')}
            >
              <Laptop className="w-4 h-4 mr-2" />
              Geräteverwaltung
            </Button>
            <Button 
              variant={activeTab === 'zusammenarbeit' ? 'default' : 'outline'} 
              className={activeTab === 'zusammenarbeit' ? 'bg-azure hover:bg-azure/90' : ''}
              onClick={() => setActiveTab('zusammenarbeit')}
            >
              <Users className="w-4 h-4 mr-2" />
              Zusammenarbeit
            </Button>
          </div>

          {/* Tab Content */}
          <motion.div 
            className="glass rounded-xl p-8 shadow-lg"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            key={activeTab}
          >
            {activeTab === 'identitaet' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <div className="bg-azure/10 p-4 rounded-xl flex justify-center items-center h-40">
                    <Key size={64} className="text-azure" />
                  </div>
                </div>
                <div className="col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Microsoft Entra ID</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Die zentrale Identitätsplattform für die sichere Verwaltung von Benutzerkonten und Zugriff auf alle Schulsysteme.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Single Sign-On</p>
                        <p className="text-sm text-muted-foreground">
                          Einmaliges Anmelden für alle Schulanwendungen und -dienste
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Multi-Faktor-Authentifizierung</p>
                        <p className="text-sm text-muted-foreground">
                          Erhöhte Sicherheit durch zusätzliche Verifizierungsschritte
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Rollenbasierte Zugriffssteuerung</p>
                        <p className="text-sm text-muted-foreground">
                          Präzise Berechtigungen für Schüler, Lehrer und Verwaltung
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Bedingter Zugriff</p>
                        <p className="text-sm text-muted-foreground">
                          Zugriffskontrolle basierend auf Benutzer, Gerät und Standort
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'geraete' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <div className="bg-azure/10 p-4 rounded-xl flex justify-center items-center h-40">
                    <Laptop size={64} className="text-azure" />
                  </div>
                </div>
                <div className="col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Microsoft Intune & Windows Autopilot</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Umfassende Geräteverwaltungslösung für die effiziente Bereitstellung und Sicherung aller Schulgeräte.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Zero-Touch Bereitstellung</p>
                        <p className="text-sm text-muted-foreground">
                          Automatisierte Gerätekonfiguration ohne IT-Eingriff
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Known Folder Move (KFM)</p>
                        <p className="text-sm text-muted-foreground">
                          Automatische Synchronisierung wichtiger Benutzerordner
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Sicherheitsrichtlinien</p>
                        <p className="text-sm text-muted-foreground">
                          Zentrale Durchsetzung von Sicherheitsrichtlinien auf allen Geräten
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">App-Verteilung</p>
                        <p className="text-sm text-muted-foreground">
                          Einfache Bereitstellung der benötigten Anwendungen für Lerngruppen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'zusammenarbeit' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <div className="bg-azure/10 p-4 rounded-xl flex justify-center items-center h-40">
                    <Users size={64} className="text-azure" />
                  </div>
                </div>
                <div className="col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Microsoft 365 & Teams</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Umfassende Produktivitäts- und Kommunikationslösungen für effektives Lehren und Lernen.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Microsoft Teams</p>
                        <p className="text-sm text-muted-foreground">
                          Virtuelle Klassenzimmer, Videokonferenzen und Chat
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">OneDrive & SharePoint</p>
                        <p className="text-sm text-muted-foreground">
                          Sichere Dateispeicherung und gemeinsame Dokumentenbearbeitung
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Office Anwendungen</p>
                        <p className="text-sm text-muted-foreground">
                          Word, Excel, PowerPoint für die Erstellung von Unterrichtsmaterialien
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1">
                        <CheckCircle size={16} className="text-azure" />
                      </div>
                      <div>
                        <p className="font-medium">Classroom Tools</p>
                        <p className="text-sm text-muted-foreground">
                          Spezielle Bildungsanwendungen für interaktives Lernen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <div className="relative mt-20 mb-24 reveal">
          {/* End User Experience */}
          <div className="bg-white border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users size={24} className="text-azure" />
              <h3 className="text-xl font-semibold">Endbenutzererfahrung</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-azure/5 border border-azure/20">
                <h4 className="font-medium mb-2">Schüler</h4>
                <p className="text-sm text-muted-foreground">
                  Altersgerechte Lernplattformen, vereinfachtes Anmelden, verwaltete Surface-Geräte
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-azure/5 border border-azure/20">
                <h4 className="font-medium mb-2">Lehrer</h4>
                <p className="text-sm text-muted-foreground">
                  Kollaborationstools, Inhaltserstellung, sicherer Datenaustausch
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-azure/5 border border-azure/20">
                <h4 className="font-medium mb-2">Schulleitung</h4>
                <p className="text-sm text-muted-foreground">
                  Management-Dashboards, Berichtswerkzeuge, Richtliniensteuerung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
