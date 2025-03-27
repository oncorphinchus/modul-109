import React, { useState } from "react";
import { ArrowRight, FileText, Shield, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Commission = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <section id="commission" className="section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 reveal">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-red-500/10 text-red-500 font-medium text-sm">
              Die Herausforderung
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Der Auftrag der Schule
            </h2>
            <div className="glass p-8 rounded-xl mb-8 border-l-4 border-red-500">
              <p className="text-lg italic text-muted-foreground mb-6">
"Unsere Grundschule benötigt eine umfassende Cloud-Infrastruktur, die die digitale Transformation unterstützt und eine effektive Zusammenarbeit ermöglicht, während gleichzeitig ein sicherer Datenaustausch gewährleistet wird. Wir benötigen eine Lösung, die mit unserem Wachstum skaliert und sensible Schülerdaten schützt."
              </p>
              <div className="flex flex-col space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">1</span>
                  </div>
                  <p className="text-muted-foreground">
                  Unterstützung moderner digitaler Lernwerkzeuge und Kollaborationsplattformen
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">2</span>
                  </div>
                  <p className="text-muted-foreground">
                  Sichere Umgebung für den Umgang mit sensiblen Schülerdaten gemäß Klassifizierungen
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">3</span>
                  </div>
                  <p className="text-muted-foreground">
                  Einfach zu verwaltende Geräteflotte mit angemessenen Zugriffskontrollen
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">4</span>
                  </div>
                  <p className="text-muted-foreground">
                  Zuverlässige Infrastruktur mit minimalen Ausfallzeiten und technischem Support
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 reveal" style={{ animationDelay: "0.3s" }}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
              Unser Vorschlag
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ICT-Werk Lösung
            </h2>
            <div className="glass p-8 rounded-xl mb-8 border-l-4 border-azure">
              <p className="text-lg text-muted-foreground mb-6">
              Nach sorgfältiger Analyse der Anforderungen der Schule haben wir eine umfassende Microsoft Cloud-basierte Lösung entwickelt, die alle wichtigen Anforderungen erfüllt und Raum für zukünftiges Wachstum bietet.
              </p>
              
              <div className="flex flex-col space-y-6 mb-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-azure" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sicherheitsorientierte Herangehensweise</h3>
                    <p className="text-muted-foreground">
                      Mit Datenklassifizierung und -schutz im Mittelpunkt, die Compliance mit den Bildungsdatenschutzvorschriften gewährleistet.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-azure/10 flex items-center justify-center flex-shrink-0">
                    <FileText size={20} className="text-azure" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Integrierte Microsoft Plattform</h3>
                    <p className="text-muted-foreground">
                      Eine einheitliche Lösung, die Microsoft Entra ID, Intune, OneDrive und M365 Apps zu einem reibungslosen Erlebnis vereint.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="group bg-azure hover:bg-azure/90 text-white w-full"
                onClick={() => window.location.href = '/variantenanalyse'}
              >
                <span>Variantenanalyse</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Improved Projektablaufplan */}
        <div className="mt-24 reveal" style={{ animationDelay: "0.2s" }}>
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-azure/10 text-azure font-medium text-sm">
              Projektablaufplan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schrittweise Umsetzung
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unser strukturierter Projektablaufplan unterteilt das Vorhaben in mehrere Arbeitspakete für eine effiziente und übersichtliche Durchführung.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            {/* Timeline Navigation */}
            <div className="flex justify-between items-center mb-12 relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10"></div>
              
              {[0, 1, 2, 3].map((step) => (
                <div 
                  key={step}
                  className="relative"
                  onClick={() => handleStepClick(step)}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all ${activeStep >= step ? 'bg-azure text-white' : 'bg-gray-100 text-gray-400'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {activeStep > step ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : (
                      <span className="text-xl font-bold">{step + 1}</span>
                    )}
                  </motion.div>
                  
                  <div className={`absolute mt-2 -translate-x-1/2 left-1/2 whitespace-nowrap font-medium text-sm ${activeStep >= step ? 'text-azure' : 'text-gray-400'}`}>
                    {["Analyse", "Konzepte", "Umsetzung", "Abschluss"][step]}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Step Details */}
            <motion.div 
              className="glass rounded-xl p-8 shadow-lg overflow-hidden"
              animate={{ height: 'auto' }}
              transition={{ duration: 0.5 }}
            >
              {activeStep === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="hidden md:block">
                    <div className="w-20 h-20 rounded-full bg-azure/10 flex items-center justify-center">
                      <Calendar size={36} className="text-azure" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">Ausgangslage analysieren</h3>
                      <span className="text-sm font-normal text-muted-foreground bg-azure/10 text-azure px-3 py-1 rounded-full">1 Tag</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      In der ersten Phase führen wir eine umfassende Analyse der bestehenden Infrastruktur und der Anforderungen durch, um ein vollständiges Verständnis der Situation zu erlangen.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Erfassung des aktuellen IST-Zustands der Infrastruktur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Detaillierte Dokumentation der Anforderungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Erarbeitung von passenden Lösungsvarianten</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
              
              {activeStep === 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="hidden md:block">
                    <div className="w-20 h-20 rounded-full bg-azure/10 flex items-center justify-center">
                      <FileText size={36} className="text-azure" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">Konzepte und Offerte erstellen</h3>
                      <span className="text-sm font-normal text-muted-foreground bg-azure/10 text-azure px-3 py-1 rounded-full">1-2 Tage</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Basierend auf der Analyse entwickeln wir detaillierte Konzepte und eine transparente Offerte, die alle Anforderungen abdeckt.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Erstellung eines umfassenden Betriebskonzepts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Entwicklung eines maßgeschneiderten Sicherheits- und Datenschutzkonzepts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Ausarbeitung einer detaillierten Offerte mit Kostentransparenz</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
              
              {activeStep === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="hidden md:block">
                    <div className="w-20 h-20 rounded-full bg-azure/10 flex items-center justify-center">
                      <Shield size={36} className="text-azure" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">Technische Umsetzung</h3>
                      <span className="text-sm font-normal text-muted-foreground bg-azure/10 text-azure px-3 py-1 rounded-full">1 Tag</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Die effiziente Implementierung der Microsoft Cloud-Infrastruktur gemäß den erarbeiteten Konzepten und Anforderungen.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Einrichtung der Microsoft Entra ID und Benutzerstruktur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Konfiguration von Microsoft Intune für die Geräteverwaltung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Ausführliche Dokumentation aller Konfigurationen</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
              
              {activeStep === 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6"
                >
                  <div className="hidden md:block">
                    <div className="w-20 h-20 rounded-full bg-azure/10 flex items-center justify-center">
                      <CheckCircle size={36} className="text-azure" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">Projektabschluss</h3>
                      <span className="text-sm font-normal text-muted-foreground bg-azure/10 text-azure px-3 py-1 rounded-full">Laufend</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Die professionelle Übergabe des Projekts mit allen erforderlichen Unterlagen und Schulungsmaterialien.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Erstellung einer detaillierten Abschlusspräsentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Übergabe aller Dokumentationen und Anleitungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="p-1 rounded-full bg-azure/10 mt-1">
                          <CheckCircle size={14} className="text-azure" />
                        </div>
                        <span className="text-sm text-muted-foreground">Angebot für fortlaufenden Support und Wartung</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Commission;
