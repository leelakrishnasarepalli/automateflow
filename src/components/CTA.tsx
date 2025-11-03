import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Store email in localStorage (can be replaced with API call)
      const existingEmails = JSON.parse(localStorage.getItem("consultationEmails") || "[]");
      existingEmails.push({
        email,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("consultationEmails", JSON.stringify(existingEmails));

      toast({
        title: "Success!",
        description: "Thank you for your interest! We'll contact you soon.",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

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
              type="email"
              placeholder="Enter your email"
              className="bg-background/50 border-primary/20 h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isSubmitting}
            />
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get Started"}
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
