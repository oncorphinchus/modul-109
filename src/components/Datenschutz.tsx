import React from "react";
import { FileText, CheckCircle, Shield, Database, Lock, Key, Globe, Users, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const Datenschutz = () => {
  return (
    <section id="datenschutz" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Datenschutz
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Datenklassifizierungssystem
          </h2>
          <p className="text-lg text-muted-foreground">
            Unser detailliertes Klassifizierungsmodell stellt sicher, dass jede Art von Daten angemessen geschützt wird.
          </p>
        </div>

        {/* Data Classification System */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Klasse 1: Geheim */}
            <motion.div
              className="bg-white rounded-xl p-6 border border-red-200 shadow-sm overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs">1</div>
                <h4 className="font-bold text-red-700">Geheim</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Besonders schützenswerte Daten wie Geburts­urkunden, Gesundheitsdaten, Authentifizierungsdaten und Dokumente zum Sorgerecht.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Lock size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Strenge Zugriffskontrollen</span>
                </div>
                <div className="flex items-start gap-2">
                  <Database size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Separate Speicherung</span>
                </div>
                <div className="flex items-start gap-2">
                  <EyeOff size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Offline-Archivierung (Blu-ray)</span>
                </div>
              </div>
            </motion.div>

            {/* Klasse 2: Vertraulich */}
            <motion.div
              className="bg-white rounded-xl p-6 border border-amber-200 shadow-sm overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs">2</div>
                <h4 className="font-bold text-amber-700">Vertraulich</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Personaldaten, Noten, Zeugnisse, Absenzen, Vermerke und Prüfungen von Schülern und Lehrkräften.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Lock size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Eingeschränkter Zugriff</span>
                </div>
                <div className="flex items-start gap-2">
                  <Key size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Zweifaktor-Authentifizierung</span>
                </div>
                <div className="flex items-start gap-2">
                  <Database size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Erweiterte Verschlüsselung</span>
                </div>
              </div>
            </motion.div>

            {/* Klasse 3: Intern */}
            <motion.div
              className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">3</div>
                <h4 className="font-bold text-blue-700">Intern</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Kontaktdaten von Schülern/Eltern, Schul-Mail-Adressen, Stundenpläne und Mittagstisch-Listen.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Lock size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Passwortschutz</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Nur im Schulnetzwerk</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Schulinterner Zugriff</span>
                </div>
              </div>
            </motion.div>

            {/* Klasse 4: Öffentlich */}
            <motion.div
              className="bg-white rounded-xl p-6 border border-green-200 shadow-sm overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">4</div>
                <h4 className="font-bold text-green-700">Öffentlich</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Webseite, Öffnungszeiten, Telefonnummer des Kundendienstes, Adresse und öffentliche Schultermine.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Globe size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Keine Einschränkungen</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Öffentlich zugänglich</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Freie Weitergabe</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">Compliance und Datenschutz</h3>
            <p className="text-lg text-muted-foreground">
              Einhaltung aller relevanten Datenschutzvorschriften und -standards für Bildungseinrichtungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="glass p-8 rounded-2xl border border-azure/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-azure/10 rounded-xl mr-5">
                  <FileText size={24} className="text-azure" />
                </div>
                <h4 className="text-xl font-bold">Regulatorische Compliance</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-0.5 flex-shrink-0">
                    <CheckCircle size={14} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">DSGVO-konform</p>
                    <p className="text-xs text-muted-foreground">
                      Volle Einhaltung der Datenschutz-Grundverordnung mit transparenter Datenverarbeitung
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-0.5 flex-shrink-0">
                    <CheckCircle size={14} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Länderspezifische Vorgaben</p>
                    <p className="text-xs text-muted-foreground">
                      Einhaltung der Datenschutzgesetze der Bundesländer und lokaler Bildungsbehörden
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-0.5 flex-shrink-0">
                    <CheckCircle size={14} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">ISO 27001 & 27018</p>
                    <p className="text-xs text-muted-foreground">
                      Einhaltung internationaler Standards für Informationssicherheit und Datenschutz in der Cloud
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass p-8 rounded-2xl border border-azure/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-azure/10 rounded-xl mr-5">
                  <Users size={24} className="text-azure" />
                </div>
                <h4 className="text-xl font-bold">Verwaltung und Kontrolle</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-0.5 flex-shrink-0">
                    <CheckCircle size={14} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Einwilligungsmanagement</p>
                    <p className="text-xs text-muted-foreground">
                      Einfache Verwaltung von Einwilligungen für Schüler, Eltern und Schulpersonal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-0.5 flex-shrink-0">
                    <CheckCircle size={14} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Datenschutz-Folgenabschätzung</p>
                    <p className="text-xs text-muted-foreground">
                      Umfassende Dokumentation zur Bewertung und Minimierung potenzieller Datenschutzrisiken
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-azure/10 mt-0.5 flex-shrink-0">
                    <CheckCircle size={14} className="text-azure" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Datenverwaltungsrichtlinien</p>
                    <p className="text-xs text-muted-foreground">
                      Klare Richtlinien für Datenaufbewahrung, -löschung und -aktualisierung
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz; 