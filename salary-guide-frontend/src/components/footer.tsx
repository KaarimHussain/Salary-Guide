const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <rect width="24" height="24" rx="3" fill="currentColor" opacity="0.9" />
    <path
      d="M6.5 9.5h2.5v8H6.5v-8zm1.25-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11 9.5h2.4v1.1h.03c.33-.63 1.15-1.3 2.37-1.3 2.54 0 3.2 1.67 3.2 3.84V17.5H16.5v-3.73c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97V17.5H11V9.5z"
      fill="white"
    />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.012 2.25h6.944l4.262 5.634 5.026-5.634zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className="w-full font-sans"
      style={{
        background: "linear-gradient(135deg, #0a2e1e 0%, #1a5c35 50%, #0d3d22 100%)",
      }}
    >
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-xl tracking-tight">
            SalaryGuide™
          </h3>
          <p className="text-green-200 text-sm leading-relaxed opacity-80 max-w-xs">
            Transparent salary data for marketing professionals. Compare by role, location, experience, and more.
          </p>
          <button
            className="mt-2 w-fit flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white text-white text-sm font-medium hover:bg-white hover:text-green-900 transition-all"
          >
            Share your salary →
          </button>
        </div>

        {/* Salary Data */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm">Salary Data</h4>
          <ul className="flex flex-col gap-3">
            {["Browse by Role", "Browse by Company", "Browse by Location"].map((link) => (
              <li key={link}>
                <a href="#" className="text-green-200 text-sm opacity-80 hover:opacity-100 hover:text-white transition-all">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {["SalaryGuide Pro", "About Us", "Careers", "Contact Us"].map((link) => (
              <li key={link}>
                <a href="#" className="text-green-200 text-sm opacity-80 hover:opacity-100 hover:text-white transition-all">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm">Socials</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#" className="flex items-center gap-2.5 text-green-200 text-sm opacity-80 hover:opacity-100 hover:text-white transition-all">
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2.5 text-green-200 text-sm opacity-80 hover:opacity-100 hover:text-white transition-all">
                <XIcon />
                Twitter
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white border-opacity-10" />

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-green-200 text-xs opacity-70">
          © 2025 SalaryGuide. All rights reserved.
        </p>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {["Privacy Policy", "Terms of Service", "Refund Policy", "Contact"].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-2">
              <a href="#" className="text-green-200 text-xs opacity-70 hover:opacity-100 hover:text-white transition-all">
                {item}
              </a>
              {i < arr.length - 1 && (
                <span className="text-green-200 opacity-40 text-xs">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}