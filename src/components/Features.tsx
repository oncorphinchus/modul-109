
import React from "react";
import { 
  Shield, Users, CloudCog, Laptop, FileText, 
  Share2, Lock, RefreshCw, Database 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div 
    className="feature-card reveal" 
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="mb-6 p-4 inline-flex rounded-2xl bg-azure/10">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Shield size={32} className="text-azure" />,
      title: "Azure Active Directory",
      description: "Secure identity management with single sign-on across all school applications and services.",
      delay: 100,
    },
    {
      icon: <Laptop size={32} className="text-azure" />,
      title: "Microsoft Intune",
      description: "Simplified device management ensuring students and teachers have secure access to learning resources.",
      delay: 200,
    },
    {
      icon: <FileText size={32} className="text-azure" />,
      title: "OneDrive & SharePoint",
      description: "Secure cloud storage with easy access to documents and learning materials from any device.",
      delay: 300,
    },
    {
      icon: <Users size={32} className="text-azure" />,
      title: "Microsoft 365 Apps",
      description: "Full suite of productivity applications designed for collaborative learning and teaching.",
      delay: 400,
    },
    {
      icon: <Share2 size={32} className="text-azure" />,
      title: "Collaborative Tools",
      description: "Integrated applications for real-time collaboration between students and teachers.",
      delay: 500,
    },
    {
      icon: <Lock size={32} className="text-azure" />,
      title: "Advanced Security",
      description: "Multi-layered security approach protecting sensitive student data and school resources.",
      delay: 600,
    },
  ];

  return (
    <section id="features" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Comprehensive Cloud Infrastructure for Modern Education
        </h2>
        <p className="text-lg text-muted-foreground">
          Our integrated solutions create a secure, collaborative learning environment that grows with your school.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
