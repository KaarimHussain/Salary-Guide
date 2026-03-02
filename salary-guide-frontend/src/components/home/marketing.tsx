const jobs = [
  {
    id: 1,
    title: "Director of Marketing",
    company: "Kings River Packing, LP",
    salary: "$120,000 - $150,000",
    workType: "On-site",
    postedAt: "8 minutes ago",
    logo: null,
    logoText: null,
    logoBg: null,
    logoImg: "KR",
    highlighted: false,
    logoComponent: (
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
        <div className="flex flex-col items-center justify-center">
          <div className="w-6 h-3 bg-orange-500 rounded-sm" />
          <span className="text-[6px] font-bold text-gray-700 mt-0.5 tracking-tight">KINGS RIVER</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Manager, Integrated Marketing",
    company: "Visa",
    salary: "$134,600 - $215,300",
    workType: "Hybrid",
    postedAt: "1 hour ago",
    highlighted: false,
    logoComponent: (
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
        <span className="text-sm font-semibold text-gray-600">V</span>
      </div>
    ),
  },
  {
    id: 3,
    title: "Office Services Support",
    company: "RR Donnelley",
    salary: "$37,440 - $41,600",
    workType: "On-site",
    postedAt: "1 hour ago",
    highlighted: true,
    logoComponent: (
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
        <span className="text-sm font-semibold text-gray-600">R</span>
      </div>
    ),
  },
  {
    id: 4,
    title: "Marketing Director — $0 Healthcare for You and Your Entire Family",
    company: "Redirect Health",
    salary: "$100,000 - $110,000",
    workType: "On-site",
    postedAt: "1 hour ago",
    highlighted: false,
    logoComponent: (
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
        <div className="flex flex-col items-center">
          <div className="flex gap-0.5">
            <div className="w-1.5 h-3 bg-blue-400 rounded-sm" />
            <div className="w-1.5 h-3 bg-blue-600 rounded-sm" />
            <div className="w-1.5 h-3 bg-blue-400 rounded-sm" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Field Marketing Events Manager",
    company: "Modern Campus",
    salary: "$60,000 - $90,000",
    workType: "Remote",
    postedAt: "2 hours ago",
    highlighted: false,
    logoComponent: (
      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 px-1">
        <div className="flex flex-col items-center leading-none">
          <span className="text-[7px] font-bold text-blue-700 tracking-tight">modern</span>
          <span className="text-[7px] font-bold text-blue-500 tracking-tight">campus</span>
        </div>
      </div>
    ),
  },
];

const WorkTypeBadge = ({ type }: { type: string }) => (
  <span className="text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1 bg-white whitespace-nowrap">
    {type}
  </span>
);

const TimeBadge = ({ time }: { time: string }) => (
  <span className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1 bg-white whitespace-nowrap">
    {time}
  </span>
);

const JobRow = ({ job }: { job: typeof jobs[0] }) => (
  <div
    className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all cursor-pointer hover:shadow-md ${job.highlighted
        ? "border-emerald-400 bg-white shadow-sm"
        : "border-gray-200 bg-white hover:border-gray-300"
      }`}
  >
    {/* Logo */}
    {job.logoComponent}

    {/* Info */}
    <div className="flex-1 min-w-0">
      <p
        className={`font-semibold text-sm truncate ${job.highlighted ? "text-emerald-600" : "text-gray-900"
          }`}
      >
        {job.title}
      </p>
      <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
        <span className="text-gray-500 text-xs">{job.company}</span>
        <span className="text-gray-300 text-xs">•</span>
        <span className="text-gray-700 text-xs font-medium">{job.salary}</span>
      </div>
    </div>

    {/* Badges */}
    <div className="flex items-center gap-2 shrink-0">
      <WorkTypeBadge type={job.workType} />
      <TimeBadge time={job.postedAt} />
    </div>
  </div>
);

export default function LatestMarketingJobs() {
  return (
    <section className="min-h-screen bg-white px-4 py-16 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Latest Marketing Jobs</h2>
          <button className="text-sm text-gray-700 border border-gray-200 rounded-xl px-4 py-2 hover:border-gray-300 hover:shadow-sm transition-all bg-white">
            Browse Jobs
          </button>
        </div>

        {/* Job List */}
        <div className="flex flex-col gap-3">
          {jobs.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
}