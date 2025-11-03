import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-12 md:p-16 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="text-gradient">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how AI agents and workflow automation can transform your operations. 
              Book a free consultation today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-background/50 border-primary/20 h-12"
            />
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            💼 Serving non-profits and small businesses worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
