import CompanyCard from "./companyCard";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    logo: "/img/logo-fit-academy.png",
    name: "Fitinline",
    positions: 357,
    detailLink: "/company/fitinline",
  },
  {
    logo: "/logos/bri.png",
    name: "Bank BRI",
    positions: 312,
    detailLink: "/company/bri",
  },
  {
    logo: "/logos/gojek.png",
    name: "Gojek",
    positions: 297,
    detailLink: "/company/gojek",
  },
  {
    logo: "/logos/video.png",
    name: "Video & Animation",
    positions: 247,
    detailLink: "/company/video-animation",
  },
    {
    logo: "/img/logo-fit-academy.png",
    name: "Fitinline",
    positions: 357,
    detailLink: "/company/fitinline",
  },
  {
    logo: "/logos/bri.png",
    name: "Bank BRI",
    positions: 312,
    detailLink: "/company/bri",
  },
  {
    logo: "/logos/gojek.png",
    name: "Gojek",
    positions: 297,
    detailLink: "/company/gojek",
  },
  {
    logo: "/logos/video.png",
    name: "Video & Animation",
    positions: 247,
    detailLink: "/company/video-animation",
  },
  // ... tambahkan data lain
];

export default function CompanyList() {
  return (
    <section className="bg-blue-100 py-10">
      <div className="max-w-[1154px] mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            List <span className="text-blue-700">Perusahaan</span>
          </h2>

        <a href="/companies" className="text-blue-600 hover:underline flex items-center gap-1">
          Lihat semua lowongan <ArrowRight size={20} />
        </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.slice(0, 8).map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
}
