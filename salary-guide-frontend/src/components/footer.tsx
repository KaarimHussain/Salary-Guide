import { LinkedinIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  const navLinks = [
    {
      label: "Salary Data",
      links: ["Browse by Role", "Browse by Company", "Browse by Location"],
    },
    {
      label: "Product",
      links: ["SalaryGuide Pro", "Salary Report", "Job Board", "Company Intel"],
    },
    {
      label: "Company",
      links: ["About Us", "Careers", "Blog", "Contact Us"],
    },
    {
      label: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Refund Policy"],
    },
  ];

  return (
    <footer className="w-full bg-secondary font-sans overflow-hidden">

      {/* CTA Strip */}
      <div className="border-b border-secondary-foreground/10">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-secondary-foreground/50 text-xs uppercase tracking-widest mb-1">
              Ready to know your worth?
            </p>
            <h3 className="text-secondary-foreground font-bold text-xl">
              Get paid what you deserve.
            </h3>
          </div>
          <button className="shrink-0 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all">
            Share your salary →
          </button>
        </div>
      </div>

      {/* Nav Links — centered */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10">
          {navLinks.map((col) => (
            <div key={col.label} className="flex flex-col items-center gap-3">
              <h4 className="text-secondary-foreground/40 text-xs uppercase tracking-widest font-semibold">
                {col.label}
              </h4>
              <ul className="flex flex-col items-center gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-secondary-foreground/70 text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials — centered */}
        <div className="mt-10 flex justify-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-secondary-foreground/10 text-secondary-foreground/60 text-xs hover:border-primary hover:text-primary transition-all"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-secondary-foreground/10 text-secondary-foreground/60 text-xs hover:border-primary hover:text-primary transition-all"
          >
            <TwitterIcon />
            Twitter
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-secondary-foreground/10" />

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-secondary-foreground/30 text-xs">
          © 2025 SalaryGuide. All rights reserved.
        </p>
        <p className="text-secondary-foreground/30 text-xs">
          Built for marketers. Powered by transparency.
        </p>
      </div>

      {/* MASSIVE WATERMARK */}
      <div className="relative w-full flex items-end justify-center overflow-hidden h-32 sm:h-44 md:h-56">
        <span
          className="select-none whitespace-nowrap font-black uppercase leading-none text-secondary-foreground/5"
          style={{
            fontSize: "clamp(5rem, 18vw, 12rem)",
            letterSpacing: "-0.03em",
            transform: "translateY(18%)",
          }}
        >
          SalaryGuide
        </span>
      </div>

    </footer>
  );
}