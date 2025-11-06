import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
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
      // Send email notification using Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: "New Booklet Request - AI Agents & Workflows Guide",
          from_name: "AutomateFlow Website",
          email: email,
          message: `New booklet request from: ${email}\n\nRequested: Comprehensive guide to building AI agents and workflows\nTimestamp: ${new Date().toLocaleString()}\nSource: AutomateFlow Website\n\nAction Required: Send the AI Agents & Workflows booklet to this email address.`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedEmail(email);
        setIsSubmitted(true);
        setEmail("");
        toast({
          title: "Success!",
          description: "Check your email for the AI Agents & Workflows booklet!",
        });
      } else {
        throw new Error(data.message || "Failed to submit");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email us directly at leela.sarepalli@gmail.com",
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
          {!isSubmitted ? (
            <>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to <span className="text-gradient">Automate</span> Your Business?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Enter your email and receive a comprehensive booklet to get started building AI agents and workflows for your business.
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
                💼 Serving non-profits and small businesses in Canada & USA
              </p>
            </>
          ) : (
            <div className="space-y-6 py-8">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-500/20 p-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  Thank You for Your Interest!
                </h2>
                <div className="space-y-2">
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We've received your booklet request!
                  </p>
                  <div className="flex items-center justify-center gap-2 text-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">{submittedEmail}</span>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 rounded-xl p-6 max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold">What happens next?</h3>
                <ul className="text-left space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Check your inbox for the comprehensive AI Agents & Workflows booklet</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Learn step-by-step how to build and deploy AI agents for your business</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ready to implement? Schedule a consultation below to discuss your needs</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-muted-foreground">
                In the meantime, feel free to explore our{" "}
                <button
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary hover:underline font-medium"
                >
                  portfolio
                </button>
                {" "}and{" "}
                <button
                  onClick={() => {
                    const element = document.getElementById('github-projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary hover:underline font-medium"
                >
                  projects
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
