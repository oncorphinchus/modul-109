import React from "react";
import { 
  Server, Network, Globe, Users, FileText, Laptop, 
  CheckCircle, Zap, Shield, Monitor, Share2, Settings, 
  Smartphone, Download, Cloud, Key, BookOpen, Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";

const Kernfunktionen = () => {
  return (
    <section id="kernfunktionen" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
            Kernfunktionen
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Moderne Cloud-Infrastruktur für zeitgemäße Bildung
          </h2>
          <p className="text-lg text-muted-foreground">
            Unsere integrierte Lösung schafft eine sichere, kollaborative Lernumgebung, die mit Ihrer Schule mitwächst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature Card 1 */}
          <motion.div 
            className="feature-card reveal glass p-8 rounded-xl border border-azure/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 p-4 inline-flex rounded-2xl bg-azure/10">
              <Server size={32} className="text-azure" />
            </div>
            <h3 className="text-xl font-bold mb-3">Skalierbare Infrastruktur</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Zap size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Dynamische Ressourcenanpassung</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Users size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Unbegrenzte Benutzerkonten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Cloud size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Flexibler Cloud-Speicher</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div 
            className="feature-card reveal glass p-8 rounded-xl border border-azure/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 p-4 inline-flex rounded-2xl bg-azure/10">
              <Network size={32} className="text-azure" />
            </div>
            <h3 className="text-xl font-bold mb-3">Nahtlose Integration</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Monitor size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Einheitliche Benutzeroberfläche</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Share2 size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Nahtloser Datenaustausch</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Settings size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Zentrale Konfiguration</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div 
            className="feature-card reveal glass p-8 rounded-xl border border-azure/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6 p-4 inline-flex rounded-2xl bg-azure/10">
              <Globe size={32} className="text-azure" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ortsunabhängiger Zugriff</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Smartphone size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Multigeräte-Unterstützung</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Shield size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Sicherer Remote-Zugang</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Download size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Offline-Verfügbarkeit</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature Card 4 */}
          <motion.div 
            className="feature-card reveal glass p-8 rounded-xl border border-azure/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-6 p-4 inline-flex rounded-2xl bg-azure/10">
              <Users size={32} className="text-azure" />
            </div>
            <h3 className="text-xl font-bold mb-3">Benutzerorientiertes Design</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <BookOpen size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Altersgerechte Oberflächen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Lightbulb size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Intuitive Navigation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <CheckCircle size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Barrierefreier Zugang</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature Card 5 */}
          <motion.div 
            className="feature-card reveal glass p-8 rounded-xl border border-azure/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="mb-6 p-4 inline-flex rounded-2xl bg-azure/10">
              <FileText size={32} className="text-azure" />
            </div>
            <h3 className="text-xl font-bold mb-3">Produktivitätswerkzeuge</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <FileText size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Office 365 Integration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Users size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Echtzeit-Kollaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Share2 size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Vereinfachte Dateiverwaltung</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature Card 6 */}
          <motion.div 
            className="feature-card reveal glass p-8 rounded-xl border border-azure/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="mb-6 p-4 inline-flex rounded-2xl bg-azure/10">
              <Laptop size={32} className="text-azure" />
            </div>
            <h3 className="text-xl font-bold mb-3">Moderne Lerngeräte</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Settings size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Zentrale Geräteverwaltung</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Shield size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Integrierte Sicherheit</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-azure/10 mt-1">
                  <Key size={14} className="text-azure" />
                </div>
                <span className="text-sm text-muted-foreground">Automatische Konfiguration</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Kernfunktionen; 