import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, CheckCircle, Mail } from "lucide-react";
import { PopupButton } from "react-calendly";
import { useState, useEffect, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

const Scheduling = () => {
  const [isBooked, setIsBooked] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      setRootElement(root);
    }
  }, []);

  const handleEventScheduled = useCallback((e: MessageEvent) => {
    if (e.data.event && e.data.event === "calendly.event_scheduled") {
      setIsBooked(true);
      toast({
        title: "Meeting Scheduled!",
        description: "Check your email for the calendar invite and meeting details.",
      });
    }
  }, [toast]);

  // Listen for Calendly events
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("message", handleEventScheduled);
      return () => {
        window.removeEventListener("message", handleEventScheduled);
      };
    }
  }, [handleEventScheduled]);

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-12 md:p-16 text-center space-y-8">
          {!isBooked ? (
            <>
              <div className="space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-primary/20 p-4">
                    <Calendar className="w-12 h-12 text-primary" />
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold">
                  Schedule a <span className="text-gradient">Consultation</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Discover how AI agents and workflow automation can enhance your operations.
                  Schedule a free consultation today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Video className="w-5 h-5 text-primary" />
                  <span>Video call</span>
                </div>
              </div>

              {rootElement && (
                <PopupButton
                  url="https://calendly.com/leela-sarepalli/30min"
                  rootElement={rootElement}
                  text="Schedule Now"
                  className="inline-flex items-center justify-center gap-2 rounded-md text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-6"
                />
              )}

              <div className="pt-4 border-t border-primary/20">
                <p className="text-sm text-muted-foreground">
                  ✨ Free 30-minute consultation • No commitment required
                </p>
              </div>
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
                  Consultation Scheduled!
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Your meeting has been confirmed.
                </p>
              </div>

              <div className="bg-background/50 rounded-xl p-6 max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold">What to expect</h3>
                <ul className="text-left space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Check your email for the calendar invite with meeting link</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>You'll receive a reminder 24 hours before the meeting</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Our team will discuss your automation needs and propose solutions</span>
                  </li>
                </ul>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => setIsBooked(false)}
              >
                Schedule Another Meeting
              </Button>
            </div>
          )}
        </div>

        {/* Additional Info Cards - Only show when not booked */}
        {!isBooked && ( 
          <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center space-y-3">
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold">Flexible Scheduling</h3>
            <p className="text-sm text-muted-foreground">
              Choose a time that works best for your schedule
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center space-y-3">
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Video className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold">Virtual Meeting</h3>
            <p className="text-sm text-muted-foreground">
              Join from anywhere via video conference
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center space-y-3">
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold">Quick Response</h3>
            <p className="text-sm text-muted-foreground">
              Get instant confirmation and calendar invite
            </p>
          </div>
        </div>
         )} 
      </div>
    </section>
  );
};

export default Scheduling;
