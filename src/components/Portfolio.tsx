import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Play, ExternalLink } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

const projects = [
  {
    title: "Node-RED + AI integration",
    description: "The ability to connect system commands, APIs, devices, and AI—visually and instantly—makes Node-red perfect for building real-world automations.",
    tags: ["Node-RED", "AI Integration", "Automation"],
    video: true,
    videoUrl: "https://youtu.be/KTyH3QkchX0"
  },
  {
    title: "StackAI to deploy a Chatbot",
    description: "StackAI to deploy a Chatbot that can answer questions about the company and its products.",
    tags: ["StackAI", "Chatbot", "Deployment"],
    video: true,
    videoUrl: "https://youtu.be/_GDHSa6qdlA"
  },
  {
    title: "Zapier workflow connects Calendly",
    description: "Zapier workflow connects Calendly (from my website) and Todoist — handling bookings, filtering requests, setting reminders, and prioritizing leads automatically.",
    tags: ["Zapier", "Calendly", "Todoist"],
    video: true,
    videoUrl: "https://youtu.be/UKdYIFz11Co"
  },
  {
    title: "Built an agentic workflow using Make.com",
    description: "an agentic workflow using Make.com that listens to Hacker News RSS feeds for the newest AI, automation, and LLM topics — then automatically summarizes and posts them on my LinkedIn company page",
    tags: ["Make.com", "RSS", "LinkedIn"],
    video: true,
    videoUrl: "https://youtu.be/omJMx1zjwlE"
  },
  {
    title: "E-commerce Automation Workflow",
    description: "n8n workflow automating inventory, pricing updates, and customer notifications.",
    tags: ["n8n", "E-commerce", "Automation"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=T4TNO7wmb78"
  },
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
    title: "NocoBase workflow for AI-powered tools",
    description: "NocoBase is the most extensible AI-powered no-code/low-code platform for building business applications and enterprise solutions.",
    tags: ["NocoBase", "Automation", "AI-powered Tools"],
    video: true,
    videoUrl: "https://youtu.be/H60tV1tK3RU"
  },
  {
    title: "Windmill workflow for AI-powered tools",
    description: "Windmill stitches together file handling, Python logic, and AI models into a single visual workflow—making it fast to prototype, iterate, and ship AI-powered tools that can support educators, parents, and students.",
    tags: ["Windmill", "Automation", "AI-powered Tools"],
    video: true,
    videoUrl: "https://youtu.be/cdTiCIUl44E"
  },
  {
    title: "Automated Q&A workflow using Pipedream",
    description: "This is a simple example of how teams can leverage automation + vector search + AI models to deliver fast and accurate answers from internal documents.",
    tags: ["Pipedream", "Automation", "Vector Search"],
    video: true,
    videoUrl: "https://youtu.be/qrBBAGOeNrg"
  },
  {
    title: "Activepieces workflow automates CV intake",
    description: "A custom Activepieces workflow automates CV intake, AI-driven analysis, scoring, and routing to optimize early-stage hiring.",
    tags: ["Activepieces", "Automation", "CV Intake"],
    video: true,
    videoUrl: "https://youtu.be/pqXOT7tNAtM"
  },
  {
    title: "AI Agentic Workflow using Langflow, a Low-code AI builder",
    description: "In this setup, I first ingested and stored the document in a Vector Database, then built a workflow that allows users to query the PDF instantly and get accurate, context-aware answers",
    tags: ["Langflow", "Vector Database", "PDF Processing"],
    video: true,
    videoUrl: "https://youtu.be/DqW75neKnus"
  },
  {
    title: "VectorShift to build an automation pipeline",
    description: "Takes any company LinkedIn URL as input. Scrapes and compiles publicly available company information. Generates concise summaries using LLM-powered processing.",
    tags: ["VectorShift", "Automation", "Pipeline"],
    video: true,
    videoUrl: "https://youtu.be/Cbx032TTehY"
  },
  {
    title: "Relevance AI agent features",
    description: "an agent that fetches the latest job postings from a company's LinkedIn page — just say @RelevanceAI fetch me jobs from Scotiabank",
    tags: ["Relevance AI", "AI Agent", "LinkedIn"],
    video: true,
    videoUrl: "https://youtu.be/LSo1nB4drpU"
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
  },
  {
    title: "Meeting Transcription System",
    description: "A meeting transcription system that transcribes meetings and allows you to search the transcript for specific keywords.",
    tags: ["Hugging Face", "Colab", "Gradio"],
    video: true,
    videoUrl: "https://youtu.be/Js7YXweIKFI"
  },
  {
    title: "Python-based AI assistant",
    description: "Python-based AI assistant that combines LLM reasoning, tool calling, image generation, and voice output into a single interactive experience using Gradio.",
    tags: ["Python", "Gradio", " AI assistant"],
    video: true,
    videoUrl: "https://youtu.be/fyPFmS5VtiY"
  },
  {
    title: "Local AI Model + Web Scraping",
    description: "A short walkthrough demonstrating how beginners and early-stage practitioners can experiment with AI development at zero cost.",
    tags: ["Web Scraping", "Jupyter Notebook", "Ollama"],
    video: true,
    videoUrl: "https://youtu.be/ATyB3PVBVf4"
  },
  {
    title: "Power Automate CRM Integration",
    description: "Complete Power Platform solution with custom workflows.",
    tags: ["Power Automate", "CRM", "Integration"],
    video: true,
    videoUrl: "https://youtube.com/watch?v=EOS2xnGi_Ro"
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
    title: "Computer Vision Solutions on Azure",
    description: "Azure AI Vision provides a practical and well-structured set of services to analyze images and videos, extract meaningful insights, and build intelligent visual applications.",
    tags: ["Azure AI Vision", "Face Detection", "Optical Character Recognition"],
    video: true,
    videoUrl: "https://youtu.be/96nmYmyZVzk"
  },
  {
    title: "AI Information Extraction Solutions in Azure",
    description: "Azure AI brings together content understanding, document intelligence, and knowledge mining to extract structured insights from unstructured data, enabling organizations to process, enrich, and operationalize content at scale.",
    tags: ["Azure AI", "Content Understanding", "Document Intelligence"],
    video: true,
    videoUrl: "https://youtu.be/-HoIjqCOIIk"
  },
  {
    title: "AI Agents with Microsoft Foundry and Azure AI",
    description: "AI agent development on Azure, focusing on how workflows, protocols, and SDKs come together to enable interoperable, multi-agent systems.",
    tags: ["Microsoft Foundry", "Azure AI", "AI Agents"],
    video: true,
    videoUrl: "https://youtu.be/5ap7RY8VPIE"
  },
  {
    title: "Language Intelligence with Azure AI Language",
    description: "This video focuses on foundational language understanding capabilities using Azure AI Language, covering core patterns for analyzing text and extracting meaning from user input.",
    tags: ["Azure AI Language", "Language Understanding", "Text Analysis"],
    video: true,
    videoUrl: "https://youtu.be/Hvnbix6FyCs"
  },
  {
    title: "AI Agents on Azure",
    description: "This video demonstrates a structured approach to building AI agents on Azure using Microsoft Foundry, with a focus on agent design patterns, tool integration, and multi-agent coordination.",
    tags: ["Microsoft Foundry", "Azure AI", "AI Agents"],
    video: true,
    videoUrl: "https://youtu.be/CVRVmN50dH0"
  },
  {
    title: "Generative AI Applications on Azure",
    description: "This video explores the capabilities of Azure AI, focusing on generative AI applications and how they can be used to build intelligent systems.",
    tags: ["Azure AI", "Generative AI", "Applications"],
    video: true,
    videoUrl: "https://youtu.be/BPi9Lu0gjk4"
  }
];

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Get YouTube thumbnail URL (using sddefault for better compatibility)
  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/sddefault.jpg` : null;
  };

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
              <button
                type="button"
                className="w-full aspect-video relative overflow-hidden cursor-pointer bg-gradient-to-br from-primary/10 to-accent/10 border-0 p-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedVideo({ url: project.videoUrl, title: project.title });
                }}
                aria-label={`Play video: ${project.title}`}
              >
                {/* YouTube Thumbnail */}
                {getYouTubeThumbnail(project.videoUrl) && (
                  <img
                    src={getYouTubeThumbnail(project.videoUrl)!}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                    onError={(e) => {
                      // Multi-level fallback for thumbnails
                      const currentSrc = e.currentTarget.src;
                      const videoId = getYouTubeVideoId(project.videoUrl);

                      if (videoId) {
                        if (currentSrc.includes('sddefault')) {
                          // Try maxresdefault
                          e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                        } else if (currentSrc.includes('maxresdefault')) {
                          // Try hqdefault
                          e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                        } else if (currentSrc.includes('hqdefault')) {
                          // Final fallback to default
                          e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
                        } else {
                          // If all fail, hide the image to show gradient background
                          e.currentTarget.style.display = 'none';
                        }
                      }
                    }}
                  />
                )}

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg pointer-events-none">
                    <Play className="w-8 h-8 text-primary-foreground ml-1 pointer-events-none" />
                  </div>
                </div>

                {/* Video Demo badge */}
                <div className="absolute top-3 right-3 pointer-events-none z-10">
                  <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium border border-primary/20">
                    Video Demo
                  </span>
                </div>
              </button>

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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open('https://github.com/leelakrishnasarepalli?tab=repositories', '_blank');
            }}
            type="button"
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
