import React from "react";
import { 
  ShieldCheck, Database, Lock, BarChart, CheckCircle, 
  RefreshCcw, HardDrive, Server, CheckCircle2, 
  Key, Users, FileText, Clock, Archive
} from "lucide-react";
import { motion } from "framer-motion";

const Sicherheit = () => {
  return (
    <section id="sicherheit" className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Sicherheit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Umfassende Sicherheitslösung
          </h2>
          <p className="text-lg text-muted-foreground">
            Mehrschichtige Sicherheitsmaßnahmen zum Schutz sensibler Schuldaten und Systeme.
          </p>
        </div>

        {/* Main Security Measures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Security Section */}
          <motion.div 
            className="glass p-8 rounded-2xl border border-azure/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className="p-4 bg-azure/10 rounded-full mr-6">
                <ShieldCheck size={36} className="text-azure" />
              </div>
              <h3 className="text-2xl font-bold">Technische Sicherheitsmaßnahmen</h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Umfassende Sicherheitsarchitektur zum Schutz aller Daten und Benutzer vor digitalen Bedrohungen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background/70 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle size={16} className="text-azure" />
                  </div>
                  <h4 className="font-medium">Endpunktsicherheit</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-9">
                  Microsoft Defender zum Schutz vor Malware und Phishing-Angriffen auf allen Geräten.
                </p>
              </div>
              
              <div className="bg-background/70 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle size={16} className="text-azure" />
                  </div>
                  <h4 className="font-medium">Verschlüsselung</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-9">
                  End-to-End-Verschlüsselung für alle sensiblen Daten während der Übertragung und Speicherung.
                </p>
              </div>
              
              <div className="bg-background/70 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle size={16} className="text-azure" />
                  </div>
                  <h4 className="font-medium">Identitätsschutz</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-9">
                  Microsoft Entra ID mit bedingtem Zugriff und Multi-Faktor-Authentifizierung.
                </p>
              </div>
              
              <div className="bg-background/70 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                    <CheckCircle size={16} className="text-azure" />
                  </div>
                  <h4 className="font-medium">Überwachung & Compliance</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-9">
                  Kontinuierliche Sicherheitsüberwachung und detaillierte Auditprotokolle für alle Systeme.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Authentication & Access Section */}
          <motion.div 
            className="glass p-8 rounded-2xl border border-azure/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="p-4 bg-azure/10 rounded-full mr-6">
                <Lock size={36} className="text-azure" />
              </div>
              <h3 className="text-2xl font-bold">Zugangs- und Zugriffskontrolle</h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Präzise Steuerung der Zugriffsrechte basierend auf Benutzerrollen und Sensitivität der Daten.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                  <Key size={18} className="text-azure" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Multi-Faktor-Authentifizierung</h4>
                  <p className="text-sm text-muted-foreground">
                    Obligatorische Mehrfaktor-Authentifizierung für alle Mitarbeiter und Eltern, um unbefugten Zugriff zu verhindern.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                  <ShieldCheck size={18} className="text-azure" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Bedingte Zugriffspolicies</h4>
                  <p className="text-sm text-muted-foreground">
                    Präzise Zugriffskontrolle basierend auf Benutzerrolle, Gerätetyp, Standort und Datensensitivität.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                  <Database size={18} className="text-azure" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Verschlüsselter Datenspeicher</h4>
                  <p className="text-sm text-muted-foreground">
                    Mehrschichtige Verschlüsselung mit Klassifizierungsschutz für alle gespeicherten Daten in der Cloud.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-azure/10 mt-1 flex-shrink-0">
                  <BarChart size={18} className="text-azure" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Überwachung und Protokollierung</h4>
                  <p className="text-sm text-muted-foreground">
                    Vollständige Protokollierung aller Zugriffe auf sensible Daten und automatische Erkennung verdächtiger Aktivitäten.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Backup & Monitoring Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Backup & Restore Section */}
          <div className="lg:col-span-1 reveal">
            <div className="glass rounded-xl p-6 mb-8 border-l-4 border-blue-500 h-full">
              <div className="p-3 rounded-full bg-blue-500/10 inline-flex mb-4">
                <Archive size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Backup & Restore
              </h3>
              <p className="text-muted-foreground mb-6">
                Umfassende Datensicherungsstrategie mit regelmäßigen Backups und zuverlässigen Wiederherstellungsoptionen.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-blue-500/10">
                      <CheckCircle2 size={16} className="text-blue-500" />
                    </div>
                    <span>Cloud-Backup</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Automatisierte Sicherung in Microsoft OneDrive mit 3000 GB Speicherkapazität
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-blue-500/10">
                      <CheckCircle2 size={16} className="text-blue-500" />
                    </div>
                    <span>Langzeitarchivierung</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Vierteljährliche Sicherung auf 100GB Blu-ray Discs für besonders wichtige Daten
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-blue-500/10">
                      <CheckCircle2 size={16} className="text-blue-500" />
                    </div>
                    <span>Sichere Aufbewahrung</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Archivierung in einem gesicherten Tresor mit beschränktem Zugriff nur für IT-Admins
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="p-1 rounded-full bg-blue-500/10">
                      <CheckCircle2 size={16} className="text-blue-500" />
                    </div>
                    <span>Qualitätskontrolle</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-7">
                    Jährliche Stichprobenprüfung aller Backup-Medien zur Sicherstellung der Datenintegrität
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Monitoring & Logging */}
          <div className="lg:col-span-1 reveal" style={{ animationDelay: "0.2s" }}>
            <div className="glass rounded-xl p-6 mb-8 border-l-4 border-green-500 h-full">
              <div className="p-3 rounded-full bg-green-500/10 inline-flex mb-4">
                <BarChart size={24} className="text-green-500" />
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

        {/* Backup Responsibilities */}
        <div className="mb-20 reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">Verantwortlichkeiten</h3>
            <p className="text-lg text-muted-foreground">
              Klare Zuständigkeiten für den Betrieb und die Sicherheit der Systeme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl border border-azure/20">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-azure/10 rounded-xl mr-4">
                  <Users size={20} className="text-azure" />
                </div>
                <h4 className="text-lg font-bold">Data Owner</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Endbenutzer, die für ihre eigenen Daten verantwortlich sind.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>Schüler</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>Lehrer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>Schulleitung</span>
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-xl border border-azure/20">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-azure/10 rounded-xl mr-4">
                  <Server size={20} className="text-azure" />
                </div>
                <h4 className="text-lg font-bold">Systemadministrator</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Verantwortlich für Instandhaltung und Betrieb der Systeme.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>Windows 11 Geräte</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>Blu-Ray Archivierung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>OneDrive Synchronisation</span>
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-xl border border-azure/20">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-azure/10 rounded-xl mr-4">
                  <FileText size={20} className="text-azure" />
                </div>
                <h4 className="text-lg font-bold">Qualitätssicherung</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Kontinuierliche Überprüfung und Verbesserung der Systeme.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>Jährliche Stichprobenprüfung der Backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>Regelmäßige Schulungen für Benutzer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-azure mt-1" />
                  <span>Aktualisierung der Dokumentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sicherheit; 