const features = [
  {
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/images/marketing.png",
  },
  {
    title: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/images/technology.png",
  },
  {
    title: "E-Commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/images/ecommerce.png",
  },
  {
    title: "Tax Filing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "/images/tax-filing.png",
  },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen py-30 bg-background font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
            Know Your Worth.<br className="hidden sm:block" />
            <span className="text-primary">Find Your Role.</span> Plan Your Path.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Equip yourself with the insights you need to make informed career decisions, negotiate effectively, and track your growth.
          </p>
        </div>

        {/* Alternating Features */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col gap-12 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left w-full">
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-5 shadow-sm">
                    Step 0{index + 1}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="pt-4">
                    <button className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-12 px-8">
                      Explore {feature.title}
                    </button>
                  </div>
                </div>

                {/* Image / Graphic Content */}
                <div className="flex-1 w-full relative">
                  {/* Decorative glow behind image */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[400px] bg-linear-to-tr ${isEven ? 'from-primary/20 to-secondary/20' : 'from-secondary/20 to-primary/20'} rounded-full blur-[80px] -z-10`} />

                  <div className="relative aspect-4/3 sm:aspect-video lg:aspect-5/4 rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-card group flex items-center justify-center">

                    {/* Fallback pattern in case image is missing */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/20 text-muted-foreground -z-10 transition-colors duration-500 group-hover:bg-muted/30">
                      <div className="p-4 rounded-full bg-background border border-border/50 shadow-sm mb-4">
                        <svg className="w-8 h-8 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium tracking-wide uppercase text-foreground/60">{feature.title} Display</span>
                    </div>

                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover object-center relative z-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Inner highlight overlay */}
                    <div className="absolute inset-0 border border-white/10 dark:border-black/10 rounded-2xl pointer-events-none z-10" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}