# AutomateFlow - AI-Powered Automation Portfolio

[![Live Website](https://img.shields.io/badge/Live-automateflow.live-orange)](https://automateflow.live)
[![GitHub](https://img.shields.io/badge/GitHub-automateflow-blue)](https://github.com/leelakrishnasarepalli/automateflow)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Professional portfolio website showcasing AI-powered automation solutions, workflow automation projects, and rapid application development expertise.

## 🌐 Live Demo

Visit the live website: **[automateflow.live](https://automateflow.live)**

## 📋 About

AutomateFlow is a comprehensive portfolio showcasing expertise in:

- **AI Agents**: Conversational AI assistants, chatbots, and intelligent automation
- **Agentic Workflows**: Power Automate, n8n, Zapier, Make.com integration
- **Rapid App Development**: MVP creation using no-code/low-code platforms

## ✨ Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🎥 Interactive YouTube video showcase
- 📱 Mobile-friendly navigation
- 🔗 GitHub projects integration
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📊 Dynamic statistics display
- 🌓 Clean, professional UI
- 📅 Integrated Calendly scheduling for consultations
- 📧 Automated booklet delivery via email
- 🔄 Zapier integration for workflow automation

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Zod
- **Routing**: React Router v6
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/leelakrishnasarepalli/automateflow.git

# Navigate to project directory
cd automateflow

# Install dependencies
npm install

# Set up environment variables (see Configuration section below)
cp .env.example .env
# Edit .env and add your Web3Forms access key

# Start development server
npm run dev
```

The development server will start at `http://localhost:8080`

### Configuration

#### Email Notifications Setup

The contact form uses Web3Forms for email notifications. To set it up:

1. **Sign up for Web3Forms** (100% free, unlimited emails):

   - Visit [web3forms.com](https://web3forms.com)
   - Sign up with your email
   - Verify your email address
   - Copy your Access Key from the dashboard

2. **Configure Environment Variables**:

   ```bash
   # Copy the example file
   cp .env.example .env

   # Edit .env and add your access key
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. **Test the Form**:
   - Start the dev server: `npm run dev`
   - Fill out the email form and click "Get Started"
   - You should receive an email notification at your registered email

**Note**: The `.env` file is git-ignored to protect your API key. For deployment on Vercel, add the environment variable in your Vercel project settings.

#### Calendly Integration Setup

The website includes an integrated Calendly scheduling system for consultations:

1. **Setup Instructions**: See detailed guide in `docs/CALENDLY_SETUP.md`
2. **Features**:

   - Popup-based meeting scheduler
   - Zapier automation triggers when meetings are booked
   - Success state with meeting confirmation details
   - Automated task creation in your todo list

3. **Configuration**:
   - Update Calendly URL in `src/components/Scheduling.tsx`
   - Configure Zapier integration for post-booking automation
   - Customize booking confirmation messages

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
automateflow/
├── public/
│   ├── logos/              # Tool and technology logos
│   └── icons8-star-color-glass-96.png
├── src/
│   ├── components/
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Navigation.tsx # Top navigation bar
│   │   ├── Hero.tsx       # Landing section
│   │   ├── Services.tsx   # Services showcase
│   │   ├── ToolLogos.tsx  # Technology logos
│   │   ├── Portfolio.tsx  # Video portfolio
│   │   ├── GitHubProjects.tsx # GitHub projects
│   │   ├── CTA.tsx        # Call-to-action with booklet delivery
│   │   ├── Scheduling.tsx # Calendly scheduling integration
│   │   ├── Footer.tsx     # Footer with links
│   │   └── VideoModal.tsx # YouTube video player
│   ├── pages/
│   │   ├── Index.tsx      # Main page
│   │   └── NotFound.tsx   # 404 page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── main.tsx           # App entry point
├── docs/                  # Documentation (gitignored)
│   ├── CALENDLY_SETUP.md  # Calendly & Zapier setup guide
│   └── DEPLOYMENT.md      # Deployment instructions
├── CLAUDE.md              # Claude Code guidelines
└── vercel.json            # Vercel configuration
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Quick Deploy Script:**

   ```bash
   ./deploy.sh
   ```

2. **Manual Deploy:**

   ```bash
   npm run build
   vercel --prod
   ```

3. **GitHub Integration:**
   - Connect repository to Vercel
   - Auto-deploy on push to `main` branch

For detailed deployment instructions, see [DEPLOYMENT.md](docs/DEPLOYMENT.md)

### Custom Domain Setup

To use with `automateflow.live`:

1. Add domain in Vercel dashboard
2. Configure DNS records:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## 📊 Project Highlights

- **1000+ Workflows** built and deployed
- **10,000+ Hours** of automation experience
- **9 Video Demos** showcasing real projects
- **10 GitHub Projects** with detailed documentation

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Leela Krishna Sarepalli**

- GitHub: [@leelakrishnasarepalli](https://github.com/leelakrishnasarepalli)
- LinkedIn: [leelakrishnasarepalli](https://www.linkedin.com/in/leelakrishnasarepalli/)
- Email: leela.sarepalli@gmail.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ Star this repo if you find it helpful!

**Last Updated**: 2025-11-05
