import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";

const githubProjects = [
  {
    name: "Voiceover Agent",
    description: "AI voice director for product demos — a local-first Next.js app that optimizes scripts for narration, generates ElevenLabs TTS audio, stores projects in SQLite, and downloads MP3 voiceovers.",
    url: "https://github.com/leelakrishnasarepalli/personal-voiceover-agent",
    tags: ["Next.js", "ElevenLabs", "Voice AI", "SQLite"]
  },
  {
    name: "Ticket Dashboard Desktop (My Planner)",
    description: "Cross-platform Electron app that logs into a configured helpdesk page, extracts visible tickets, and renders a local Kanban dashboard with To Do, Doing, and Done columns.",
    url: "https://github.com/leelakrishnasarepalli/my-planner",
    tags: ["Electron", "TypeScript", "Kanban", "Automation"]
  },
  {
    name: "Voice Pluto (macOS Local Voice Assistant)",
    description: "Local-first macOS voice assistant using openWakeWord, faster-whisper STT, macOS TTS, and OpenAI intent parsing — with EventKit, Apple Notes, whitelist-only Chrome, timers, and launch-at-login daemon mode.",
    url: "https://github.com/leelakrishnasarepalli/voice-pluto",
    tags: ["Voice Assistant", "macOS", "Local AI", "Python"]
  },
  {
    name: "Pluto Text - Gmail Draft Chrome Extension",
    description: "Chrome Manifest V3 extension for manual long-form draft generation in browser text fields — with Gmail thread context, rewrite controls, insert/replace/append actions, and a local Ollama/OpenAI API backend.",
    url: "https://github.com/leelakrishnasarepalli/pluto-text",
    tags: ["Chrome Extension", "TypeScript", "Ollama", "Gmail"]
  },
  {
    name: "Pluto CLI",
    description: "Typer-based CLI personal productivity assistant with system diagnostics, Wi-Fi and device inspection, calendar/reminder/notes automation, YAML workflows, natural-language ask mode, and markdown memory stores.",
    url: "https://github.com/leelakrishnasarepalli/pluto",
    tags: ["CLI", "Python", "Typer", "OpenAI"]
  },
  {
    name: "WebChat Overlay (demo-codex)",
    description: "Chrome extension and local Python API that adds a floating page-aware assistant to any webpage — answering from page context with Ollama-first routing and optional OpenAI web-search fallback.",
    url: "https://github.com/leelakrishnasarepalli/demo-codex",
    tags: ["Chrome Extension", "Ollama", "Python", "Web Assistant"]
  },
  {
    name: "Demo: Web Scraping + Local LLM with Ollama",
    description: "A beginner-friendly walkthrough showing how to build a simple AI workflow using Python, web scraping, OpenAI, and a locally running LLM (Llama 3.2 via Ollama) — all inside a Jupyter Notebook in Cursor.",
    url: "https://github.com/leelakrishnasarepalli/demo-ollama",
    tags: ["Ollama", "Local LLM", "Web Scraping"]
  },
  {
    name: "Student Connect Portal",
    description: "Interactive learning platform for students in Grades 1-3, covering Math, English, and French with adaptive difficulty levels, AI-powered content generation, and comprehensive gamification.",
    url: "https://github.com/leelakrishnasarepalli/studentconnectportal",
    tags: ["AI", "Gamification", "Adaptive Difficulty", "Content Generation"]
  },
  {
    name: "AutomateFlow - AI-Powered Automation Portfolio",
    description: "Professional portfolio website showcasing AI-powered automation solutions, workflow automation projects, and rapid application development expertise.",
    url: "https://github.com/leelakrishnasarepalli/automateflow",
    tags: ["React", "TypeScript", "Vite", "shadcn/ui"]
  },
  {
    name: "Playwright Test Automation Framework with MCP Agents",
    description: "A comprehensive test automation framework for pmiloc.org using Playwright, TypeScript, and AI-powered agents (Planner, Generator, Healer) with Claude integration.",
    url: "https://github.com/leelakrishnasarepalli/playwright-mcp-agents-demo",
    tags: ["Playwright", "TypeScript", "AI Agents", "Claude"]
  },
  {
    name: "AI Profile Mentor (ResumeFlow)",
    description: "A modern resume and job application tracking platform that helps optimize resumes for job postings through AI-powered analysis. Features intelligent cover letter generation, resume improvement suggestions, and automated text extraction from PDF/DOCX files.",
    url: "https://github.com/leelakrishnasarepalli/profile-ai-mentor",
    tags: ["AI", "Resume Analysis", "Next.js", "OpenAI"]
  },
  {
    name: "Vapi AI Appointment Scheduler",
    description: "Automated voice-based appointment scheduling system powered by Vapi.ai, integrated with Google Calendar and Google Sheets.",
    url: "https://github.com/leelakrishnasarepalli/vapi-appointment-scheduler",
    tags: ["Vapi.ai", "Voice AI", "Google Calendar", "Automation"]
  },
  {
    name: "AboutMe - Personal Document Learning System",
    description: "A personal AI-powered document management and Q&A system that learns about you through your documents and provides intelligent answers to your questions.",
    url: "https://github.com/leelakrishnasarepalli/AboutMe-LandingAI",
    tags: ["AI", "Document Management", "LandingAI", "Q&A"]
  },
  {
    name: "Real Job Postings Platform",
    description: "A community-driven job board where users share and verify job postings through voting and AI-powered sentiment analysis. Built with Next.js 15, Supabase, and OpenAI.",
    url: "https://github.com/leelakrishnasarepalli/real-job-postings",
    tags: ["Next.js 15", "Supabase", "OpenAI", "Community"]
  },
  {
    name: "Leela Personal Assistant Bot",
    description: "A Telegram-based AI personal assistant powered by n8n workflows and OpenAI, capable of managing emails, calendar events, contacts, web searches, and social media posts through natural language conversations.",
    url: "https://github.com/leelakrishnasarepalli/leela-pa-bot",
    tags: ["Telegram", "n8n", "OpenAI", "Personal Assistant"]
  },
  {
    name: "Resume Gap Analyzer MCP Server",
    description: "An MCP (Model Context Protocol) server that analyzes resumes against job descriptions to identify gaps, missing keywords, and improvement opportunities using OpenAI's GPT-4o-mini.",
    url: "https://github.com/leelakrishnasarepalli/gapinmyresume-mcp",
    tags: ["MCP", "GPT-4", "Resume Analysis", "OpenAI"]
  },
  {
    name: "Movie Watchlist - Context Demo Project",
    description: "A sample project demonstrating Claude Code context file configuration with a movie watchlist application built using React, TypeScript, and Vite.",
    url: "https://github.com/leelakrishnasarepalli/MovieWatchlist",
    tags: ["React", "TypeScript", "Vite", "Claude Code"]
  },
  {
    name: "RAG Bot Resume - AI Assistant",
    description: "An intelligent chatbot built with n8n that answers questions about Leela Krishna Sarepalli's professional experience using Retrieval-Augmented Generation (RAG) with vector embeddings.",
    url: "https://github.com/leelakrishnasarepalli/Chat-with-Leela",
    tags: ["n8n", "RAG", "Vector Embeddings", "Chatbot"]
  },
  {
    name: "Auto Job Reply",
    description: "This n8n workflow monitors Gmail every minute for new emails, uses AI to determine if they're job opportunities, then auto-generates and sends personalized replies highlighting Leela's experience, certifications, and contact details. It also sends notification emails about detected job opportunities before replying.",
    url: "https://github.com/leelakrishnasarepalli/n8n-scripts",
    tags: ["n8n", "Gmail", "AI", "Email Automation"]
  }
];

const GitHubProjects = () => {
  return (
    <section id="github-projects" className="py-24 px-6 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Github className="w-4 h-4 inline mr-2" />
              Open Source Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            GitHub <span className="text-gradient">Repository</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of open-source projects and automation solutions on GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubProjects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group flex flex-col"
            >
              <div className="space-y-4 flex-grow">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Open ${project.name} repository in new tab`}
                  >
                    <ExternalLink className="w-5 h-5 pointer-events-none" />
                  </a>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="ghost"
                className="w-full mt-4 group/btn justify-between hover:bg-primary/10"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.url, "_blank");
                }}
                type="button"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View Repository
                </span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-primary/20 hover:bg-primary/10"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open("https://github.com/leelakrishnasarepalli", "_blank");
            }}
            type="button"
          >
            <Github className="w-5 h-5" />
            View All on GitHub Profile
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
