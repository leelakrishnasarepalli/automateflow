const tools = [
  { name: "Power Automate", category: "Power Platform", logo: "/logos/power-automate.png" },
  { name: "Power Apps", category: "Power Platform", logo: "/logos/power-apps.png" },
  { name: "Power Pages", category: "Power Platform", logo: "/logos/power-pages.png" },
  { name: "Power BI", category: "Power Platform", logo: "/logos/power-bi.png" },
  { name: "n8n", category: "Automation", logo: "/logos/n8n.png" },
  { name: "Zapier", category: "Automation", logo: "/logos/zapier.png" },
  { name: "Make.com", category: "Automation", logo: "/logos/make.png" },
  { name: "BuildShip", category: "Development", logo: "/logos/buildship.png" },
  { name: "Appsmith", category: "Development", logo: "/logos/appsmith.png" },
  { name: "Budibase", category: "Development", logo: "/logos/budibase.png" },
  { name: "Airtable", category: "Database", logo: "/logos/airtable.png" },
  { name: "VectorShift", category: "AI", logo: "/logos/vectorshift.png" },
  { name: "RelevanceAI", category: "AI", logo: "/logos/relevanceai.png" },
  { name: "StackAI", category: "AI", logo: "/logos/stackai.png" },
  { name: "PyTorch", category: "AI", logo: "/logos/pytorch.png" }
];

const ToolLogos = () => {
  return (
    <section className="py-16 px-6 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-muted-foreground">
            Powered by Industry-Leading Tools
          </h3>
        </div>
        
        <div className="relative overflow-hidden">
          {/* First row - scrolling right */}
          <div className="flex gap-8 animate-scroll-right mb-8">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`right-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-card rounded-xl border border-border flex flex-col items-center justify-center gap-2 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="text-3xl font-bold text-primary" style={{ display: 'none' }}>
                  {tool.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="text-sm font-semibold text-center px-2">
                  {tool.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {tool.category}
                </div>
              </div>
            ))}
          </div>

          {/* Second row - scrolling left */}
          <div className="flex gap-8 animate-scroll-left">
            {[...tools.slice().reverse(), ...tools.slice().reverse()].map((tool, index) => (
              <div
                key={`left-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-card rounded-xl border border-border flex flex-col items-center justify-center gap-2 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="text-3xl font-bold text-primary" style={{ display: 'none' }}>
                  {tool.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="text-sm font-semibold text-center px-2">
                  {tool.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {tool.category}
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/30 via-secondary/30 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/30 via-secondary/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ToolLogos;
