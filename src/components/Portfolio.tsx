import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Play, ExternalLink } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

const projects = [
  {
    title: "AI Document Processing System",
    description: "Automated document analysis and data extraction using AI for non-profit grant applications.",
    tags: ["AI", "Document Processing", "LandingAI"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=MFBtzeuIu_w"
  },
  {
    title: "Conversational AI Assistant",
    description: "Custom chatbot for healthcare organization handling patient inquiries 24/7.",
    tags: ["Chatbot", "VapiAI", "Healthcare"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=YGFz8sqr0iU"
  },
  {
    title: "Power Automate CRM Integration",
    description: "Complete Power Platform solution with custom workflows.",
    tags: ["Power Automate", "CRM", "Integration"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=EOS2xnGi_Ro"
  },
  {
    title: "E-commerce Automation Workflow",
    description: "n8n workflow automating inventory, pricing updates, and customer notifications.",
    tags: ["n8n", "E-commerce", "Automation"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=T4TNO7wmb78"
  },
  {
    title: "MVP Web App",
    description: "Internal tool built from idea to production in 3 hours.",
    tags: ["Lovable", "MVP", "Rapid Development"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=jekc220K8kA"
  },
  {
    title: "Rethinking How Systems Talk",
    description: "MCP server that identifies skill or experience gaps in your resume when compared with a job description",
    tags: ["MCP", "AI", "Email Automation"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=JnteMtI5nCs"
  },
  {
    title: "Airtable Database Solution",
    description: "Custom Airtable base with automation for donor management and reporting.",
    tags: ["Airtable", "Database", "Non-Profit"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=A_5jYr8vii0"
  },
  {
    title: "Playwright Test Agents",
    description: "integrate AI capabilities into end-to-end testing workflows",
    tags: ["Playwright", "Integration", "Workflow"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=jn1ejBhzcik"
  },
  {
    title: "Open-source AI Browser",
    description: "Open-source, AI-native browser that blends web navigation, automation, and local AI models",
    tags: ["AI Browser", "Open Source", "Agent Mode"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=1j4j1MSXEjw"
  }
];

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real solutions for real businesses. Explore our portfolio of automation projects and demos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card border-primary/10 hover:border-primary/20 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5">
              {/* Video Thumbnail */}
              <div
                className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo({ url: project.videoUrl, title: project.title })}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium border border-primary/20">
                    Video Demo
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              </div>
              
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            variant="outline"
            className="gap-2 border-primary/20 hover:bg-primary/10"
            onClick={() => {
              const element = document.getElementById('github-projects');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
};

export default Portfolio;
