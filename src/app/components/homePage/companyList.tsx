"use client";

import { useEffect, useState } from "react";
import CompanyCard from "./companyCard";
import { ArrowRight } from "lucide-react";

type Perusahaan = {
  id: number;
  nama_perusahaan: string;
  logo_perusahaan: string | null;
  status_verifikasi: string;
};

export default function CompanyList() {
  const [companies, setCompanies] = useState<Perusahaan[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user/show-akun/perusahaan");
        const json = await response.json();
        const verified = json.data.filter((item: Perusahaan) => item.status_verifikasi === "Terverifikasi");
        setCompanies(verified);
      } catch (error) {
        console.error("Gagal mengambil data perusahaan:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <section className="bg-blue-100 py-10">
      <div className="max-w-[1154px] mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            List <span className="text-blue-700">Perusahaan</span>
          </h2>

          <a href="/list-perusahaan" className="text-blue-600 hover:underline flex items-center gap-1">
            Lihat semua lowongan <ArrowRight size={20} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 gap-6">
          {companies.slice(0, 8).map((company) => (
            <CompanyCard
              key={company.id}
              logo={company.logo_perusahaan || null}
              name={company.nama_perusahaan}
              detailLink={`/company/${company.nama_perusahaan.toLowerCase().replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
