import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-block">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            ✨ AI-Powered Automation Consulting
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          Transform Your Business
          <br />
          with <span className="text-gradient">Intelligent Automation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Expert consulting for non-profits and small businesses. Build custom AI agents, 
          automate workflows, and create powerful solutions without the complexity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="gap-2 text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => {
              const element = document.getElementById('schedule');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-lg px-8 py-6 border-primary/20 hover:bg-primary/10"
            onClick={() => {
              const element = document.getElementById('portfolio');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Github className="w-5 h-5" />
            View Our Work
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gradient">1000+</div>
            <div className="text-sm text-muted-foreground">Workflows Built</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gradient">10,000+</div>
            <div className="text-sm text-muted-foreground">Hours of Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gradient">MVP</div>
            <div className="text-sm text-muted-foreground">In Hours, Not Weeks</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
