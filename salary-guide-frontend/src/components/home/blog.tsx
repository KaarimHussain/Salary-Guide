// Blog illustration components using SVG sketches to mimic the hand-drawn style
const PromotionIllustration = () => (
  <svg viewBox="0 0 380 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="380" height="200" fill="#f0ede6" />
    {/* Background sketch lines */}
    <line x1="20" y1="180" x2="80" y2="120" stroke="#c8c0b0" strokeWidth="1" opacity="0.4" />
    <line x1="300" y1="20" x2="360" y2="80" stroke="#c8c0b0" strokeWidth="1" opacity="0.4" />
    {/* Person 1 - left figure (green) */}
    <ellipse cx="100" cy="60" rx="18" ry="20" fill="#2d6a4f" />
    <rect x="82" y="78" width="36" height="55" rx="4" fill="#2d6a4f" />
    <line x1="82" y1="90" x2="60" y2="110" stroke="#2d6a4f" strokeWidth="5" strokeLinecap="round" />
    <line x1="118" y1="90" x2="135" y2="75" stroke="#2d6a4f" strokeWidth="5" strokeLinecap="round" />
    <line x1="90" y1="133" x2="85" y2="175" stroke="#2d6a4f" strokeWidth="5" strokeLinecap="round" />
    <line x1="110" y1="133" x2="115" y2="175" stroke="#2d6a4f" strokeWidth="5" strokeLinecap="round" />
    {/* Person 2 - right figure (green outline) */}
    <ellipse cx="280" cy="65" rx="16" ry="18" fill="none" stroke="#2d6a4f" strokeWidth="2.5" />
    <rect x="264" y="81" width="32" height="50" rx="4" fill="none" stroke="#2d6a4f" strokeWidth="2.5" />
    <line x1="264" y1="93" x2="245" y2="108" stroke="#2d6a4f" strokeWidth="4" strokeLinecap="round" />
    <line x1="296" y1="93" x2="315" y2="78" stroke="#2d6a4f" strokeWidth="4" strokeLinecap="round" />
    <line x1="272" y1="131" x2="268" y2="170" stroke="#2d6a4f" strokeWidth="4" strokeLinecap="round" />
    <line x1="288" y1="131" x2="292" y2="170" stroke="#2d6a4f" strokeWidth="4" strokeLinecap="round" />
    {/* Text overlay */}
    <text x="155" y="90" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">A Marketer's</text>
    <text x="155" y="112" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">Guide on</text>
    <text x="155" y="134" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">How to Get</text>
    <text x="155" y="156" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">Promoted</text>
    {/* Underline */}
    <line x1="108" y1="162" x2="202" y2="162" stroke="#2d6a4f" strokeWidth="2.5" />
  </svg>
);

const SalaryIllustration = () => (
  <svg viewBox="0 0 380 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="380" height="200" fill="#f0ede6" />
    {/* Scattered documents/items sketch */}
    <rect x="20" y="30" width="60" height="75" rx="4" fill="none" stroke="#555" strokeWidth="2" transform="rotate(-15 50 67)" />
    <line x1="30" y1="50" x2="70" y2="50" stroke="#555" strokeWidth="1.5" transform="rotate(-15 50 67)" opacity="0.5" />
    <line x1="30" y1="60" x2="65" y2="60" stroke="#555" strokeWidth="1.5" transform="rotate(-15 50 67)" opacity="0.5" />
    <rect x="280" y="20" width="65" height="80" rx="4" fill="none" stroke="#555" strokeWidth="2" transform="rotate(12 312 60)" />
    <line x1="290" y1="40" x2="335" y2="40" stroke="#555" strokeWidth="1.5" transform="rotate(12 312 60)" opacity="0.5" />
    <rect x="290" y="115" width="55" height="70" rx="4" fill="none" stroke="#555" strokeWidth="2" transform="rotate(-8 317 150)" />
    <rect x="30" y="120" width="55" height="68" rx="4" fill="none" stroke="#555" strokeWidth="2" transform="rotate(10 57 154)" />
    {/* Pen */}
    <rect x="170" y="15" width="10" height="50" rx="3" fill="none" stroke="#333" strokeWidth="2" transform="rotate(25 175 40)" />
    <polygon points="175,60 170,75 180,75" fill="none" stroke="#333" strokeWidth="2" transform="rotate(25 175 40)" />
    {/* Circle/coin */}
    <circle cx="200" cy="155" r="22" fill="none" stroke="#555" strokeWidth="2" />
    <text x="200" y="161" textAnchor="middle" fontSize="16" fill="#555" fontFamily="serif">$</text>
    {/* Text overlay */}
    <text x="190" y="75" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">Average Salary</text>
    <text x="190" y="95" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">Increase When</text>
    <text x="190" y="115" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">Changing Jobs:</text>
    <text x="190" y="135" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">What to Expect</text>
  </svg>
);

const NegotiationIllustration = () => (
  <svg viewBox="0 0 380 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect width="380" height="200" fill="#f0ede6" />
    {/* Scattered pencils */}
    <rect x="300" y="10" width="8" height="55" rx="2" fill="none" stroke="#333" strokeWidth="2" transform="rotate(30 304 37)" />
    <rect x="50" y="140" width="8" height="55" rx="2" fill="none" stroke="#333" strokeWidth="2" transform="rotate(-20 54 167)" />
    <rect x="330" y="130" width="8" height="50" rx="2" fill="none" stroke="#333" strokeWidth="2" transform="rotate(60 334 155)" />
    {/* Clipboard */}
    <rect x="20" y="20" width="65" height="85" rx="3" fill="none" stroke="#555" strokeWidth="2" transform="rotate(-10 52 62)" />
    <rect x="38" y="14" width="28" height="12" rx="3" fill="none" stroke="#555" strokeWidth="2" transform="rotate(-10 52 62)" />
    <line x1="30" y1="45" x2="75" y2="45" stroke="#555" strokeWidth="1.2" transform="rotate(-10 52 62)" opacity="0.5" />
    <line x1="30" y1="57" x2="72" y2="57" stroke="#555" strokeWidth="1.2" transform="rotate(-10 52 62)" opacity="0.5" />
    <line x1="30" y1="69" x2="68" y2="69" stroke="#555" strokeWidth="1.2" transform="rotate(-10 52 62)" opacity="0.5" />
    {/* Required stamp box */}
    <rect x="275" y="15" width="90" height="40" rx="4" fill="none" stroke="#333" strokeWidth="2.5" />
    <text x="320" y="40" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333" fontFamily="Georgia, serif">(REQUIRED)</text>
    {/* Magnifier */}
    <circle cx="60" cy="155" r="20" fill="none" stroke="#555" strokeWidth="2.5" />
    <line x1="75" y1="168" x2="90" y2="183" stroke="#555" strokeWidth="3" strokeLinecap="round" />
    {/* Notebook bottom right */}
    <rect x="280" y="115" width="70" height="80" rx="3" fill="none" stroke="#555" strokeWidth="2" transform="rotate(5 315 155)" />
    <line x1="285" y1="135" x2="340" y2="135" stroke="#555" strokeWidth="1.2" transform="rotate(5 315 155)" opacity="0.5" />
    <line x1="285" y1="148" x2="340" y2="148" stroke="#555" strokeWidth="1.2" transform="rotate(5 315 155)" opacity="0.5" />
    {/* Text */}
    <text x="188" y="80" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">How to Answer</text>
    <text x="188" y="100" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">Salary Expectations</text>
    <text x="188" y="120" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a1a1a" fontFamily="Georgia, serif">with Confidence</text>
  </svg>
);

const posts = [
  {
    id: 1,
    title: "A Marketer's Guide on How to Get Promoted",
    excerpt: "Tired of waiting for your next career move? This guide shows you how to get promoted by proving your value, building...",
    illustration: <PromotionIllustration />,
    titleColor: "text-emerald-700",
  },
  {
    id: 2,
    title: "Average Salary Increase When Changing Jobs: What to Expect",
    excerpt: "Discover how average salary increase when changing jobs stacks up, with trends, strategies, and practical tips to...",
    illustration: <SalaryIllustration />,
    titleColor: "text-gray-900",
  },
  {
    id: 3,
    title: "How to Answer Salary Expectations With Confidence",
    excerpt: "Learn how to answer salary expectations with proven scripts and strategies. Our expert guide helps you negotiate...",
    illustration: <NegotiationIllustration />,
    titleColor: "text-gray-900",
  },
];

export default function BlogSection() {
  return (
    <section className="min-h-screen bg-white px-6 py-16 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Blog</h2>
          <a href="#" className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors">
            View all posts →
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col gap-4 group cursor-pointer">
              {/* Illustration */}
              <div className="w-full aspect-[380/200] rounded-2xl overflow-hidden">
                {post.illustration}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 px-1">
                <h3 className={`font-semibold text-base leading-snug ${post.titleColor} group-hover:opacity-80 transition-opacity`}>
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <a href="#" className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors mt-1 inline-block">
                  Read article →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}