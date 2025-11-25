import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ToolLogos from "@/components/ToolLogos";
import Portfolio from "@/components/Portfolio";
import GitHubProjects from "@/components/GitHubProjects";
//import CTA from "@/components/CTA";
import Scheduling from "@/components/Scheduling";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Padding to account for fixed navigation */}
        <Hero />
        <div id="services">
          <Services />
        </div>
        <ToolLogos />
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="company">
          <GitHubProjects />
        </div>
        {/* <div id="cta">
          <CTA />
        </div> */}
        <div id="schedule">
          <Scheduling />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
