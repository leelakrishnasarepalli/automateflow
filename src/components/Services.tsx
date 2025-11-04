import { Bot, Workflow, Globe, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Build intelligent conversational AI assistants, chatbots for personal or company use, and AI document processing applications. From smart replies using PyTorch to complete automation.",
    features: ["Conversational AI Assistants", "Smart Reply Systems", "Document Processing", "Custom Chatbots", "Object Detection Apps"],
    buttonText: "View Our Work",
    linkTo: "portfolio"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Expert automation using Power Automate, n8n, Zapier, Make.com, BuildShip and more. Connect your apps, automate data flows, and eliminate manual processes.",
    features: ["Power Platform Suite", "n8n & Zapier Integration", "Make.com & BuildShip", "Custom Workflows", "API Orchestration"],
    buttonText: "View Projects",
    linkTo: "github-projects"
  },
  {
    icon: Globe,
    title: "Rapid App Development",
    description: "Build MVPs and internal tools in hours using Power Apps, Power Pages, Appsmith, Budibase, Airtable, VectorShift, RelevanceAI, and StackAI.",
    features: ["Idea to MVP in Hours", "No-Code/Low-Code Apps", "Power BI Dashboards", "Airtable Databases", "Custom Web Apps"],
    buttonText: "Get Started",
    linkTo: "cta"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end automation solutions designed for non-profits and small businesses
          </p>
          <div className="pt-4">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              💡 1-to-1 Consulting under Citizen Developer Program
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 bg-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group flex flex-col h-full">
                <div className="space-y-6 flex-grow flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    onClick={() => {
                      const element = document.getElementById(service.linkTo);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {service.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
