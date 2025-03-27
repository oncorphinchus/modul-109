import React from "react";
import { ArrowLeft, CheckCircle, X, Server, Cloud, Database, Lock, Shield, RefreshCw, Download, CreditCard, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

const Variantenanalyse = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollReveal>
        <Navbar />
        
        <section className="py-24 pt-32">
          <div className="container px-4 mx-auto">
            {/* Breadcrumb and back button */}
            <div className="mb-12 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                <a href="/" className="text-azure hover:underline">Home</a>
                <span className="mx-2">/</span>
                <span>Variantenanalyse</span>
              </div>
              
              <Button 
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.location.href = "/#commission"}
              >
                <ArrowLeft size={16} />
                <span>Zurück zum Auftrag</span>
              </Button>
            </div>
            
            {/* Page header */}
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
                Detaillierte Analyse
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Variantenanalyse
              </h1>
              <p className="text-lg text-muted-foreground">
                Vergleich zwischen einer Microsoft Cloud-basierten Lösung und einer On-Premise-Lösung mit lokalem Server und NAS-Backup.
              </p>
            </div>
            
            {/* Improved Comparison table */}
            <div className="glass rounded-xl p-8 shadow-lg mb-16">
              <div className="grid grid-cols-1 gap-8">
                {/* Key aspects comparison */}
                <div className="overflow-hidden rounded-lg border border-border">
                  <div className="grid grid-cols-3">
                    <div className="bg-muted p-4 font-medium">Merkmale</div>
                    <div className="bg-azure/5 p-4 text-center font-medium text-azure">Microsoft Cloud-Lösung</div>
                    <div className="bg-gray-100 p-4 text-center font-medium text-gray-600">On-Premise-Lösung</div>
                  </div>
                  
                  {[
                    {
                      name: "Identity & Access Management",
                      cloud: "Microsoft Entra ID mit SSO und MFA",
                      onPrem: "Active Directory auf lokalem Server"
                    },
                    {
                      name: "Geräteverwaltung",
                      cloud: "Microsoft Intune mit automatischer Konfiguration",
                      onPrem: "Lokale Gruppenrichtlinien, manuelle Updates"
                    },
                    {
                      name: "Kollaboration",
                      cloud: "Microsoft 365 mit Teams, OneDrive & SharePoint",
                      onPrem: "Microsoft 365 A3 + lokale Dateiserver"
                    },
                    {
                      name: "Datenklassifizierung",
                      cloud: "Integrierte Bezeichnungen und Richtlinien",
                      onPrem: "Manuelle Kontrollen und Berechtigungen"
                    },
                    {
                      name: "Zugriff",
                      cloud: "Von überall mit Internetverbindung",
                      onPrem: "Primär im Schulnetzwerk, VPN für externe Zugriffe"
                    },
                    {
                      name: "Infrastruktur",
                      cloud: "Kein lokaler Server erforderlich",
                      onPrem: "Windows Server + NAS + Netzwerkkomponenten"
                    },
                    {
                      name: "Ausfallsicherheit",
                      cloud: "99,9% Verfügbarkeit (Microsoft SLA)",
                      onPrem: "Abhängig von lokaler Infrastruktur und Strom"
                    }
                  ].map((row, index) => (
                    <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <div className="p-4 border-t border-border font-medium">{row.name}</div>
                      <div className="p-4 border-t border-border flex items-center justify-center">
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{row.cloud}</span>
                        </div>
                      </div>
                      <div className="p-4 border-t border-border flex items-center justify-center">
                        <div className="flex items-center">
                          <span className="text-sm">{row.onPrem}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Cost comparison based on the offerte */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-center">Kostenvergleich (200 Schüler, 30 Lehrkräfte)</h2>
                  
                  <div className="overflow-hidden rounded-lg border border-border">
                    <div className="grid grid-cols-3">
                      <div className="bg-muted p-4 font-medium">Kostenart</div>
                      <div className="bg-azure/5 p-4 text-center font-medium text-azure">Microsoft Cloud-Lösung</div>
                      <div className="bg-gray-100 p-4 text-center font-medium text-gray-600">On-Premise-Lösung</div>
                    </div>
                    
                    {[
                      {
                        name: "Lizenzen - Schüler (jährlich)",
                        cloud: "CHF 6'000 (M365 A3: CHF 30 pro Schüler)",
                        onPrem: "CHF 6'000 (M365 A3: CHF 30 pro Schüler)"
                      },
                      {
                        name: "Lizenzen - Lehrkräfte (jährlich)",
                        cloud: "CHF 2'400 (M365 A3: CHF 80 pro Lehrkraft)",
                        onPrem: "CHF 2'400 (M365 A3: CHF 80 pro Lehrkraft)"
                      },
                      {
                        name: "Identitätsmanagement",
                        cloud: "CHF 16'560 (Entra ID Premium P1)",
                        onPrem: "CHF 5'000 (Windows Server CALs)"
                      },
                      {
                        name: "Server-Hardware",
                        cloud: "CHF 0",
                        onPrem: "CHF 12'000 - 18'000"
                      },
                      {
                        name: "Netzwerk-Hardware",
                        cloud: "CHF 1'900 (Router + Access Points)",
                        onPrem: "CHF 3'500 (Router + Switch + NAS)"
                      },
                      {
                        name: "Implementierungskosten",
                        cloud: "CHF 6'000 (60h à CHF 100)",
                        onPrem: "CHF 15'000 (150h à CHF 100)"
                      },
                      {
                        name: "Wartungskosten (jährlich)",
                        cloud: "CHF 2'000 - 4'000",
                        onPrem: "CHF 8'000 - 12'000"
                      },
                      {
                        name: "Hardware-Erneuerung (alle 5 Jahre)",
                        cloud: "CHF 0",
                        onPrem: "CHF 15'000 - 20'000"
                      },
                      {
                        name: "Strom & Kühlung (jährlich)",
                        cloud: "CHF 0",
                        onPrem: "CHF 2'000 - 3'000"
                      },
                      {
                        name: "5-Jahres Gesamtkosten",
                        cloud: "CHF 82'460 - 90'460",
                        onPrem: "CHF 137'000 - 177'000"
                      }
                    ].map((row, index) => (
                      <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${index === 9 ? 'font-semibold bg-gray-50' : ''}`}>
                        <div className="p-4 border-t border-border">{row.name}</div>
                        <div className="p-4 border-t border-border text-center">{row.cloud}</div>
                        <div className="p-4 border-t border-border text-center">{row.onPrem}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    *Basierend auf der Offerte Nr. 001 vom 21.03.2025 und geschätzten Kosten für die On-Premise-Lösung
                  </p>
                </div>
                
                {/* Key advantages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-azure/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-azure/20">
                        <Cloud size={24} className="text-azure" />
                      </div>
                      <h3 className="text-xl font-bold text-azure">Vorteile Cloud-Lösung</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Keine Investition in Server-Hardware nötig",
                        "Automatische Updates und Patches",
                        "Höhere Mobilität und Flexibilität",
                        "Integrierte Sicherheit und Compliance",
                        "Einfache Skalierbarkeit bei wachsender Schülerzahl"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-azure mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-gray-200">
                        <Server size={24} className="text-gray-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-700">Vorteile On-Premise</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Volle Kontrolle über eigene Infrastruktur",
                        "Unabhängigkeit von Internetverbindung",
                        "Zentralisierte lokale Datenhaltung",
                        "Keine Abhängigkeit von externen Anbietern",
                        "Potentiell höhere Performance im lokalen Netzwerk"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-gray-600 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decision reasoning */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Entscheidungsbegründung</h2>
              
              <div className="glass rounded-xl p-8 mb-8 border-l-4 border-azure">
                <p className="text-lg mb-6">
                  Für die Primarschule Orladikofen empfehlen wir die Microsoft Cloud-Lösung basierend auf:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                        <Shield size={18} className="text-azure" />
                      </div>
                      <div>
                        <h4 className="font-medium">Schutz sensibler Daten</h4>
                        <p className="text-sm text-muted-foreground">
                          Automatisierte Datenklassifizierung und Zugriffsschutz für Schülerdaten
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                        <Users size={18} className="text-azure" />
                      </div>
                      <div>
                        <h4 className="font-medium">Benutzerfreundlichkeit</h4>
                        <p className="text-sm text-muted-foreground">
                          Intuitive Nutzung auch für Lehrkräfte mit geringen IT-Kenntnissen
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                        <CreditCard size={18} className="text-azure" />
                      </div>
                      <div>
                        <h4 className="font-medium">Geringere TCO</h4>
                        <p className="text-sm text-muted-foreground">
                          Deutlich günstigere Gesamtbetriebskosten über 5 Jahre
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                        <Database size={18} className="text-azure" />
                      </div>
                      <div>
                        <h4 className="font-medium">Wartungsarmut</h4>
                        <p className="text-sm text-muted-foreground">
                          Minimaler IT-Administrationsbedarf durch automatisierte Wartung
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                        <Layers size={18} className="text-azure" />
                      </div>
                      <div>
                        <h4 className="font-medium">Modernisierung</h4>
                        <p className="text-sm text-muted-foreground">
                          Beste Grundlage für die digitale Transformation der Schule
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                        <RefreshCw size={18} className="text-azure" />
                      </div>
                      <div>
                        <h4 className="font-medium">Zukunftssicherheit</h4>
                        <p className="text-sm text-muted-foreground">
                          Kontinuierliche Updates und Erweiterungen ohne Hardware-Upgrades
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  className="bg-azure hover:bg-azure/90 text-white"
                  onClick={() => window.location.href = "/#commission"}
                >
                  Zurück zur Auftragsübersicht
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Variantenanalyse; 