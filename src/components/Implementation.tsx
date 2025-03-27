import React from "react";
import { 
  ShieldCheck, ArrowRight, Clock, CheckCircle2, 
  AlertCircle, BarChart3, HardDrive, RefreshCcw,
  Lock, Server, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Implementation = () => {
  return (
    <section id="implementation" className="section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Technologie & Innovation
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Implementierung der modernen Cloud-Lösung
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Wir nutzen modernste Technologien für eine sichere, skalierbare und benutzerfreundliche Cloud-Infrastruktur.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Security Section */}
          <div className="lg:col-span-1 reveal">
            <div className="glass rounded-xl p-6 mb-8 border-l-4 border-azure h-full">
              <div className="p-3 rounded-full bg-azure/10 inline-flex mb-4">
                <ShieldCheck size={24} className="text-azure" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Umfassende Sicherheit
              </h3>
              <p className="text-muted-foreground mb-6">
                Mehrstufige Sicherheitsmechanismen zum Schutz sensibler Schuldaten.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">Multi-factor Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Erhöhte Zugangssicherheit für alle Benutzer
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">End-to-End Verschlüsselung</p>
                    <p className="text-sm text-muted-foreground">
                      Sichere Datenübertragung & Datenspeicherung
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">Bedingter Zugriff</p>
                    <p className="text-sm text-muted-foreground">
                      Kontextsensitive Zugriffssteuerung
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">Microsoft Defender</p>
                    <p className="text-sm text-muted-foreground">
                      Proaktiver Schutz gegen Phishing & Malware
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle2 size={16} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium">Datenklassifizierung</p>
                    <p className="text-sm text-muted-foreground">
                      Automatische Erkennung und Schutz sensibler Daten
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Monitoring & Logging */}
          <div className="lg:col-span-1 reveal" style={{ animationDelay: "0.2s" }}>
            <div className="glass rounded-xl p-6 mb-8 border-l-4 border-green-500 h-full">
              <div className="p-3 rounded-full bg-green-500/10 inline-flex mb-4">
                <BarChart3 size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Monitoring & Protokollierung
              </h3>
              <p className="text-muted-foreground mb-6">
                Umfassendes Monitoring für optimale Performance und frühzeitige Problembehebung.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-green-500/10">
                      <CheckCircle2 size={16} className="text-green-500" />
                    </div>
                    <span>Sicherheitsüberwachung</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Echtzeit-Erkennung von Bedrohungen und Sicherheitsalarmen
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-green-500/10">
                      <CheckCircle2 size={16} className="text-green-500" />
                    </div>
                    <span>Leistungsüberwachung</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Kontinuierliche Überwachung der Systemleistung und Netzwerklatenz
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-green-500/10">
                      <CheckCircle2 size={16} className="text-green-500" />
                    </div>
                    <span>Compliance-Protokollierung</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Detaillierte Audit-Logs für den Zugriff auf sensible Daten
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-green-500/10">
                      <CheckCircle2 size={16} className="text-green-500" />
                    </div>
                    <span>Berichterstattung</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Monatliche und vierteljährliche Berichte zur Systemnutzung
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* High Availability */}
          <div className="lg:col-span-1 reveal" style={{ animationDelay: "0.3s" }}>
            <div className="glass rounded-xl p-6 mb-8 border-l-4 border-purple-500 h-full">
              <div className="p-3 rounded-full bg-purple-500/10 inline-flex mb-4">
                <RefreshCcw size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Hochverfügbarkeit
              </h3>
              <p className="text-muted-foreground mb-6">
                Unsere Lösung garantiert 99,9% Verfügbarkeit mit robuster Redundanz.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-purple-500/10">
                      <CheckCircle2 size={16} className="text-purple-500" />
                    </div>
                    <span>Cloud-Redundanz</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Microsoft's globale Infrastruktur mit mehreren Rechenzentren
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-purple-500/10">
                      <CheckCircle2 size={16} className="text-purple-500" />
                    </div>
                    <span>Offline-Funktionen</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    OneDrive Offline-Sync für kontinuierliche Arbeit
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-purple-500/10">
                      <CheckCircle2 size={16} className="text-purple-500" />
                    </div>
                    <span>Backup & Wiederherstellung</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Automatisierte Backup-Lösungen mit verschiedenen Aufbewahrungsrichtlinien
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-purple-500/10">
                      <CheckCircle2 size={16} className="text-purple-500" />
                    </div>
                    <span>Notfallwiederherstellung</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Umfassender Notfallwiederherstellungsplan mit definierten Verfahren
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="group button-primary">
            <span>Detaillierte Technische Spezifikation</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
