
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatarUrl?: string;
  delay: number;
}

const Testimonial = ({ content, name, role, avatarUrl, delay }: TestimonialProps) => (
  <Card className="reveal" style={{ animationDelay: `${delay}ms` }}>
    <CardContent className="p-8">
      <div className="mb-6 inline-flex p-2 rounded-full bg-azure/10">
        <Quote size={20} className="text-azure" />
      </div>
      <p className="mb-6 text-lg text-foreground/90 italic">{content}</p>
      <div className="flex items-center">
        <Avatar className="mr-4 h-12 w-12">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      content: "The transition to cloud infrastructure has transformed how our students collaborate. They now seamlessly work together on projects regardless of where they are.",
      name: "Sarah Johnson",
      role: "Principal, Oakridge Primary",
      delay: 100,
    },
    {
      content: "The security features give me peace of mind knowing our students' data is protected. And the Surface devices are perfect for young learners with their touch screens.",
      name: "Michael Chen",
      role: "IT Coordinator",
      delay: 300,
    },
    {
      content: "My students love using the M365 apps for their projects. It's made teaching more interactive and engaging, especially for collaborative activities.",
      name: "Elizabeth Taylor",
      role: "Year 4 Teacher",
      delay: 500,
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16 reveal">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-azure/10 text-azure font-medium text-sm">
          Success Stories
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Trusted by Leading Primary Schools
        </h2>
        <p className="text-lg text-muted-foreground">
          Hear from educators and administrators who have transformed their schools with our cloud infrastructure solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            content={testimonial.content}
            name={testimonial.name}
            role={testimonial.role}
            delay={testimonial.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
