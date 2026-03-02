import { useState } from "react";
import { Search, ChevronRight, Briefcase, Sparkles } from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

const roles = [
  { id: 1, title: "SEO", median: "$77,000 median", color: "bg-purple-100", iconColor: "text-purple-500" },
  { id: 2, title: "Paid Media", median: "$92,500 median", color: "bg-pink-100", iconColor: "text-pink-500" },
  { id: 3, title: "Public Relations", median: "$115,000 median", color: "bg-yellow-100", iconColor: "text-yellow-500" },
  { id: 4, title: "Communications", median: "$146,000 median", color: "bg-emerald-100", iconColor: "text-emerald-500" },
];

const companies = [
  {
    id: 1, name: "Capital One", range: "$104,000 - $211,000",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#004977] flex items-center justify-center overflow-hidden">
        <span className="text-white text-xs font-bold leading-tight text-center px-1">Capital One</span>
      </div>
    ),
  },
  {
    id: 2, name: "Amazon", range: "$97,000 - $185,000",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#232F3E] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#FF9900]">
          <path d="M13.958 10.09c0 1.232.029 2.256-.59 3.351-.502.891-1.301 1.438-2.186 1.438-1.213 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.698-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.076-1.045-.869-1.233-1.272-1.807-2.099-1.727 1.761-2.951 2.288-5.189 2.288-2.649 0-4.711-1.637-4.711-4.908 0-2.557 1.387-4.29 3.358-5.139 1.71-.754 4.098-.891 5.923-1.099v-.41c0-.753.06-1.642-.383-2.292-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.331c-.259-.058-.548-.266-.472-.661C5.57 2.057 8.645 1 11.408 1c1.418 0 3.271.378 4.39 1.453 1.419 1.324 1.283 3.089 1.283 5.011v4.538c0 1.364.566 1.963 1.099 2.699.186.262.228.576-.009.77-.596.498-1.655 1.422-2.237 1.941l.21-.617z" />
        </svg>
      </div>
    ),
  },
  {
    id: 3, name: "dentsu international", range: "$67,000 - $213,000",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center">
        <span className="text-white text-xs font-semibold">dentsu</span>
      </div>
    ),
  },
  {
    id: 4, name: "Razorfish", range: "$77,000 - $183,000",
    logo: (
      <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center">
        <span className="text-white text-[10px] font-bold">razorfish</span>
      </div>
    ),
  },
];

const specialties = [
  { id: 1, title: "General Marketing", count: "4.2k submissions", color: "bg-purple-100", iconColor: "text-purple-500" },
  { id: 2, title: "Public Relations", count: "1.5k submissions", color: "bg-pink-100", iconColor: "text-pink-500" },
  { id: 3, title: "Product Marketing", count: "1.2k submissions", color: "bg-yellow-100", iconColor: "text-yellow-500" },
  { id: 4, title: "Growth", count: "783 submissions", color: "bg-emerald-100", iconColor: "text-emerald-500" },
  { id: 5, title: "Paid Media", count: "766 submissions", color: "bg-blue-100", iconColor: "text-blue-500" },
  { id: 6, title: "Content Marketing", count: "654 submissions", color: "bg-pink-100", iconColor: "text-pink-500" },
  { id: 7, title: "SEO", count: "521 submissions", color: "bg-orange-100", iconColor: "text-orange-500" },
  { id: 8, title: "Brand Marketing", count: "489 submissions", color: "bg-cyan-100", iconColor: "text-cyan-500" },
];

// ── Sub-components ───────────────────────────────────────────────────────────

const SearchInput = ({ placeholder }) => (
  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-500 bg-white hover:border-gray-300 cursor-pointer transition-colors w-44">
    <Search className="w-3.5 h-3.5 flex-shrink-0" />
    <span>{placeholder}</span>
  </div>
);

const SectionHeader = ({ title, searchPlaceholder }) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    <SearchInput placeholder={searchPlaceholder} />
  </div>
);

const RoleCard = ({ role }) => (
  <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-4 hover:border-gray-300 hover:shadow-sm transition-all group w-full text-left">
    <div className={`w-10 h-10 rounded-xl ${role.color} flex items-center justify-center flex-shrink-0`}>
      <Briefcase className={`w-5 h-5 ${role.iconColor}`} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-gray-900 text-sm">{role.title}</p>
      <p className="text-gray-500 text-xs">{role.median}</p>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
  </button>
);

const CompanyCard = ({ company }) => (
  <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-4 hover:border-gray-300 hover:shadow-sm transition-all group w-full text-left">
    <div className="flex-shrink-0">{company.logo}</div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-gray-900 text-sm">{company.name}</p>
      <p className="text-gray-500 text-xs">{company.range}</p>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
  </button>
);

const SpecialtyCard = ({ specialty }) => (
  <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 py-4 hover:border-gray-300 hover:shadow-sm transition-all group w-full text-left">
    <div className={`w-10 h-10 rounded-xl ${specialty.color} flex items-center justify-center flex-shrink-0`}>
      <Sparkles className={`w-5 h-5 ${specialty.iconColor}`} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-semibold text-gray-900 text-sm">{specialty.title}</p>
      <p className="text-gray-500 text-xs">{specialty.count}</p>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
  </button>
);

// ── Main Component ───────────────────────────────────────────────────────────

export default function SalaryExplorer() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Marketing Salaries for Popular Roles */}
        <section>
          <SectionHeader title="Marketing Salaries for Popular Roles" searchPlaceholder="Search titles" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>
        </section>

        {/* Top Paying Companies */}
        <section>
          <SectionHeader title="Top Paying Companies" searchPlaceholder="Search companies" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </section>

        {/* Explore by Specialty */}
        <section>
          <SectionHeader title="Explore by specialty" searchPlaceholder="Search specialties" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {specialties.map((specialty) => (
              <SpecialtyCard key={specialty.id} specialty={specialty} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}