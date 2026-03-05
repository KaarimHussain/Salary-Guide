import { useMemo } from 'react';
import Marquee from 'react-fast-marquee';

export default function BlogSection() {
  const { row1, row2 } = useMemo(() => {
    // Dynamically load all files in assets/images/blogs containing "Our-Work" in the filename
    const imageModules = import.meta.glob('../../assets/images/blogs/Our-Work*.{png,jpg,jpeg,webp}', { eager: true });
    const imageList = Object.values(imageModules).map((mod: any) => mod.default) as string[];

    // Split into two halves for the rows
    const half = Math.ceil(imageList.length / 2);
    return {
      row1: imageList.slice(0, half),
      row2: imageList.slice(half)
    };
  }, []);

  return (
    <section className="bg-background py-20 lg:py-32 font-sans overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">Our Work</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the impactful campaigns, creative solutions, and top-tier branding we've delivered for industry leaders globally.
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {row1.length > 0 && (
          <Marquee speed={40} pauseOnHover={true} direction="left" className="overflow-hidden">
            {row1.map((src, i) => (
              <div
                key={`r1-${i}`}
                className="mx-4 w-[280px] h-[200px] sm:w-[400px] sm:h-[280px] rounded-2xl overflow-hidden shadow-xl border border-border/50 group"
              >
                <img
                  src={src}
                  alt={`Our Work Sample ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        )}

        {row2.length > 0 && (
          <Marquee speed={40} pauseOnHover={true} direction="right" className="overflow-hidden">
            {row2.map((src, i) => (
              <div
                key={`r2-${i}`}
                className="mx-4 w-[280px] h-[200px] sm:w-[400px] sm:h-[280px] rounded-2xl overflow-hidden shadow-xl border border-border/50 group"
              >
                <img
                  src={src}
                  alt={`Our Work Sample ${i + row1.length + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        )}
      </div>
    </section>
  );
}