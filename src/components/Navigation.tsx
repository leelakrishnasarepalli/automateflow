import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-gradient">
            AutomateFlow
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('company')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Company
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              size="sm"
              onClick={() => scrollToSection('schedule')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('company')}
              className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Company
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
            <Button
              size="sm"
              onClick={() => scrollToSection('schedule')}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Book a Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
