import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">AutomateFlow</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered automation consulting for non-profits and small businesses.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  AI Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Agentic Workflows
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Demo Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('schedule');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Consulting
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('github-projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('schedule');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/leelakrishnasarepalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/company/cloud-solutions-diy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:leela.sarepalli@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024-2025 AutomateFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
