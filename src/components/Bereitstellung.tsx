import React, { useState } from "react";
import { 
  Server, Cloud, Users, Laptop, CheckCircle2, 
  ArrowRight, FileText, Database, Shield, Key, 
  Settings, PlayCircle, DownloadCloud, Wrench, ChevronRight,
  BarChart, RefreshCcw
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Bereitstellung = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubstep, setActiveSubstep] = useState(0);
  
  const setupSteps = [
    {
      title: "Tenant Setup",
      icon: <Cloud className="h-8 w-8 text-azure" />,
      description: "Einrichtung und Konfiguration des Microsoft 365 Tenants",
      substeps: [
        {
          title: "Tenant Erstellung",
          text: "Erstellung und Grundkonfiguration des Microsoft 365 Tenants für die Schule",
          image: "/images/Bereitstellung/step 1 tenant-1.png"
        }
      ]
    },
    {
      title: "Entra ID Setup",
      icon: <Users className="h-8 w-8 text-azure" />,
      description: "Einrichtung der Microsoft Entra ID (ehemals Azure AD) Benutzerstruktur",
      substeps: [
        {
          title: "Benutzerverzeichnis",
          text: "Anlegen der Benutzerkonten für Lehrer, Schüler und Administratoren",
          image: "/images/Bereitstellung/step 2-1 entra-benutzer.png"
        },
        {
          title: "Gruppen & Rollen",
          text: "Erstellen von Benutzergruppen für Klassen, Fachbereiche und Administratoren",
          image: "/images/Bereitstellung/step 2-2 entra-gruppen.png"
        },
        {
          title: "Lizenz-Zuweisung",
          text: "Zuweisung der Microsoft 365 Lizenzen an Benutzer oder Gruppen",
          image: "/images/Bereitstellung/step 2-2 lizenz zuweisung.png"
        }
      ]
    },
    {
      title: "Zugriffssicherheit",
      icon: <Key className="h-8 w-8 text-azure" />,
      description: "Konfiguration der Sicherheitsrichtlinien für die Zugriffskontrolle",
      substeps: [
        {
          title: "MFA-Einrichtung",
          text: "Aktivierung und Konfiguration der Multi-Faktor-Authentifizierung für Administratoren und Lehrer",
          image: "/images/Bereitstellung/step 3-1 conditional access mfa.png"
        },
        {
          title: "Bedingte Zugriffsrichtlinien",
          text: "Erstellung von bedingten Zugriffsrichtlinien für verschiedene Benutzergruppen",
          image: "/images/Bereitstellung/step 3-2 conditonal access rules.png"
        }
      ]
    },
    {
      title: "Intune-Grundlagen",
      icon: <Laptop className="h-8 w-8 text-azure" />,
      description: "Einrichtung der grundlegenden Intune-Geräteverwaltung",
      substeps: [
        {
          title: "Intune-Konfiguration",
          text: "Grundeinrichtung von Microsoft Intune für die Geräteverwaltung der Schule",
          image: "/images/Bereitstellung/step 4-1 intune-geraete.png"
        },
        {
          title: "Geräterichtlinien",
          text: "Erstellung von Geräterichtlinien für Windows-Geräte der Schule",
          image: "/images/Bereitstellung/step 4-2 intune-geraete-2.png"
        }
      ]
    },
    {
      title: "App-Bereitstellung",
      icon: <FileText className="h-8 w-8 text-azure" />,
      description: "Konfiguration und Bereitstellung von Anwendungen über Intune",
      substeps: [
        {
          title: "App hinzufügen",
          text: "Hinzufügen einer neuen Anwendung zur Bereitstellung über Intune",
          image: "/images/Bereitstellung/step 5-1 01-add-a-new-app-deployment-in-intune.jpg"
        },
        {
          title: "App-Typ auswählen",
          text: "Auswahl des entsprechenden App-Typs für die Bereitstellung",
          image: "/images/Bereitstellung/step 5-2 02-choose-app-type-to-be-deployed.jpg"
        },
        {
          title: "App-Informationen",
          text: "Eingabe der grundlegenden Informationen zur Anwendung",
          image: "/images/Bereitstellung/step 5-3 03-provide-basic-information-about-deployment.jpg"
        },
        {
          title: "Bereitstellungseinstellungen",
          text: "Konfiguration der Bereitstellungseinstellungen für die Anwendung",
          image: "/images/Bereitstellung/step 5-4 04-configure-deployment-settings-in-intune.jpg"
        },
        {
          title: "Benutzerzuweisung",
          text: "Zuweisung der Anwendung an Benutzergruppen über Intune",
          image: "/images/Bereitstellung/step 5-5 05-assign-app-deployment-via-intune-to-all-users.jpg"
        },
        {
          title: "Überprüfung & Abschluss",
          text: "Überprüfung der App-Bereitstellungsrichtlinieneinstellungen vor der Aktivierung",
          image: "/images/Bereitstellung/step 5-6 06-review-your-app-deployment-policy-settings.jpg"
        }
      ]
    },
    {
      title: "Known Folder Move",
      icon: <Database className="h-8 w-8 text-azure" />,
      description: "Konfiguration der automatischen OneDrive-Ordnersynchronisierung",
      substeps: [
        {
          title: "KFM-Richtlinie",
          text: "Erstellung einer Known Folder Move-Richtlinie für die automatische Sicherung wichtiger Benutzerordner",
          image: "/images/Bereitstellung/step 6-1 intune-kfm-1.png"
        },
        {
          title: "Ordner-Auswahl",
          text: "Auswahl der zu synchronisierenden Ordner (Dokumente, Desktop, Bilder)",
          image: "/images/Bereitstellung/step 6-2 intune-kfm-2.png"
        },
        {
          title: "Zusätzliche Einstellungen",
          text: "Konfiguration zusätzlicher OneDrive-Synchronisationseinstellungen für Schulgeräte",
          image: "/images/Bereitstellung/step 6-3 intune-kfm-3.png"
        }
      ]
    },
    {
      title: "Windows Autopilot",
      icon: <RefreshCcw className="h-8 w-8 text-azure" />,
      description: "Einrichtung der automatisierten Geräteprovisionierung",
      substeps: [
        {
          title: "Autopilot-Setup",
          text: "Erstmalige Einrichtung von Windows Autopilot für die automatische Gerätebereitstellung",
          image: "/images/Bereitstellung/step 7-1 intune-autopilot.jpg"
        },
        {
          title: "Geräteregistrierung",
          text: "Registrierung von Geräte-Hardware-IDs in Autopilot für die Zero-Touch-Bereitstellung",
          image: "/images/Bereitstellung/step 7-2 intune-autopilot-2.jpg"
        },
        {
          title: "Autopilot-Profil",
          text: "Erstellung und Konfiguration eines Autopilot-Bereitstellungsprofils",
          image: "/images/Bereitstellung/step 7-3 intune-autopilot-3.jpg"
        }
      ]
    },
    {
      title: "Monitoring",
      icon: <BarChart className="h-8 w-8 text-azure" />,
      description: "Einrichtung von Überwachungs- und Berichtstools",
      substeps: [
        {
          title: "Azure Monitor",
          text: "Implementierung von Azure Monitor zur Überwachung der Cloud-Infrastruktur",
          image: "/images/Bereitstellung/step 8 azure monitor.png"
        }
      ]
    }
  ];

  const handleSubstepClick = (index) => {
    setActiveSubstep(index);
  };

  return (
    <section id="bereitstellung" className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Implementierungsplan
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Schritt-für-Schritt Bereitstellung
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Ein strukturierter Plan für die erfolgreiche Implementierung der Cloud-Infrastruktur von der Planung bis zum Betrieb.
          </p>
        </div>

        {/* Main Phase Navigation */}
        <div className="relative mb-8 md:mb-12">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10 hidden md:block"></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:flex md:flex-nowrap md:justify-between">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.button
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer mb-2 md:mb-3
                    ${activeStep === index ? 'bg-azure text-white' : 'bg-gray-100 text-gray-500'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  onClick={() => {
                    setActiveStep(index);
                    setActiveSubstep(0);
                  }}
                  aria-label={`Wähle Schritt ${index + 1}: ${step.title}`}
                >
                  {step.icon}
                </motion.button>
                <p className={`text-xs sm:text-sm font-medium text-center ${activeStep === index ? 'text-azure' : 'text-gray-500'}`}>
                  {index + 1}. {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="glass p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-12 md:mb-16 overflow-hidden relative" style={{ minHeight: "500px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`step-${activeStep}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mb-6 md:mb-8"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-azure">
                {activeStep + 1}. {setupSteps[activeStep].title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                {setupSteps[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Substep Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-background/80 rounded-xl p-4 md:p-5 border border-border">
                <h4 className="font-bold mb-3 md:mb-4 text-gray-700">Teilschritte</h4>
                <ul className="space-y-2 md:space-y-3">
                  {setupSteps[activeStep].substeps.map((substep, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleSubstepClick(idx)}
                        className={`w-full text-left p-2 md:p-3 rounded-lg flex items-start gap-3 transition-all duration-200
                          ${activeSubstep === idx ? 'bg-azure/10 text-azure' : 'hover:bg-gray-100'}`}
                        aria-pressed={activeSubstep === idx}
                      >
                        <div className={`p-1 rounded-full flex-shrink-0 mt-0.5 transition-colors duration-200 ${activeSubstep === idx ? 'bg-azure/20' : 'bg-gray-100'}`}>
                          {activeSubstep === idx ? (
                            <CheckCircle2 className="h-4 w-4 text-azure" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{substep.title}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Substep Details with Image */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 border border-border shadow-sm h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`substep-${activeStep}-${activeSubstep}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                      {setupSteps[activeStep].substeps[activeSubstep].title}
                    </h4>
                    <p className="text-muted-foreground mb-4 md:mb-6">
                      {setupSteps[activeStep].substeps[activeSubstep].text}
                    </p>
                    
                    {setupSteps[activeStep].substeps[activeSubstep].image && (
                      <div className="rounded-lg overflow-hidden border border-gray-200 mt-4 mb-6 shadow-sm">
                        <img
                          src={setupSteps[activeStep].substeps[activeSubstep].image}
                          alt={setupSteps[activeStep].substeps[activeSubstep].title}
                          className="p-2 max-h-[300px] sm:max-h-[350px] md:max-h-[450px] w-auto mx-auto object-contain" 
                          loading="lazy"
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6 md:mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setActiveSubstep(Math.max(0, activeSubstep - 1))}
                    disabled={activeSubstep === 0}
                    className="transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4 py-2"
                    aria-label="Vorheriger Schritt"
                  >
                    <span className="hidden sm:inline">Vorheriger</span> Schritt
                  </Button>
                  
                  {activeSubstep < setupSteps[activeStep].substeps.length - 1 ? (
                    <Button
                      className="bg-azure hover:bg-azure/90 transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4 py-2"
                      onClick={() => setActiveSubstep(Math.min(setupSteps[activeStep].substeps.length - 1, activeSubstep + 1))}
                      aria-label="Nächster Schritt"
                    >
                      <span className="hidden sm:inline">Nächster</span> Schritt
                    </Button>
                  ) : activeStep < setupSteps.length - 1 ? (
                    <Button
                      className="bg-azure hover:bg-azure/90 transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4 py-2"
                      onClick={() => {
                        setActiveStep(activeStep + 1);
                        setActiveSubstep(0);
                      }}
                      aria-label="Nächste Phase"
                    >
                      Nächste Phase
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      className="transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4 py-2"
                    >
                      Bereitstellung abgeschlossen
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bereitstellung; 