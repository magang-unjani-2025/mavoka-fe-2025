import JobCard from "./jobCard";
import { ArrowRight } from "lucide-react";

const jobs = [
  {
    companyLogo: "/img/logo-mavoka.png",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    positions: 5,
    closingDate: "28 Juli 2025",
  },
  {
    companyLogo: "/logos/dropbox.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    positions: 3,
    closingDate: "28 Juli 2025",
  },
    {
    companyLogo: "/logos/revolut.png",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    positions: 5,
    closingDate: "28 Juli 2025",
  },
  {
    companyLogo: "/logos/dropbox.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    positions: 3,
    closingDate: "28 Juli 2025",
  },
    {
    companyLogo: "/logos/revolut.png",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    positions: 5,
    closingDate: "28 Juli 2025",
  },
  {
    companyLogo: "/logos/dropbox.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    positions: 3,
    closingDate: "28 Juli 2025",
  },
    {
    companyLogo: "/logos/revolut.png",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    positions: 5,
    closingDate: "28 Juli 2025",
  },
  {
    companyLogo: "/logos/dropbox.png",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    positions: 3,
    closingDate: "28 Juli 2025",
  },
  // ... tambahkan job lainnya
];

export default function JobList() {
  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Daftar <span className="text-blue-600">Lowongan</span>
        </h2>
        <a href="/jobs" className="text-blue-600 hover:underline flex items-center gap-1">
          Lihat semua lowongan <ArrowRight size={20} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.slice(0, 8).map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}
