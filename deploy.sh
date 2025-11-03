#!/bin/bash

# AutomateFlow Deployment Script
echo "🚀 Deploying AutomateFlow to Production..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi

echo "✅ Build successful!"

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
  echo "📥 Vercel CLI not found. Installing..."
  npm install -g vercel
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌍 Your site should be live at https://automateflow.live"
echo ""
echo "Next steps:"
echo "1. Configure custom domain in Vercel dashboard"
echo "2. Update DNS records for automateflow.live"
echo "3. Wait for DNS propagation (1-2 hours)"
