"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Container } from "@/app/components/Container";
import { TampilAllLowongan } from "@/lib/api-lowongan";
import JobCard from "@/app/components/homePage/jobCard";
import Pagination from "@/app/components/homePage/pagination";

type Job = {
  id: number;
  judul_lowongan: string;
  posisi: string;
  kuota: number;
  lokasi_penempatan: string;
  deadline_lamaran: string;
  perusahaan: {
    nama_perusahaan: string;
    logo_perusahaan: string | null;
  };
};

export default function CariLowonganResult() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);
  const itemsPerPage = 20;

useEffect(() => {
  const fetchJobs = async () => {
    try {
      const rawData = await TampilAllLowongan();

      const posisi = searchParams.get("posisi")?.toLowerCase() || "";
      const perusahaan = searchParams.get("perusahaan")?.toLowerCase() || "";
      const lokasi = searchParams.get("lokasi")?.toLowerCase() || "";
      const jurusan = searchParams.get("jurusan")?.toLowerCase() || "";

      const filtered = rawData.filter((job: any) => {
        return (
          (!posisi || job.posisi?.toLowerCase().includes(posisi)) &&
          (!perusahaan ||
            job.perusahaan?.nama_perusahaan
              ?.toLowerCase()
              .includes(perusahaan)) &&
          (!lokasi ||
            job.lokasi_penempatan?.toLowerCase().includes(lokasi)) &&
          (!jurusan || job.jurusan?.toLowerCase().includes(jurusan))
        );
      });

      setJobs(filtered);
    } catch (err) {
      console.error("Gagal fetch lowongan:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchJobs();
}, [searchParams]); // ✅ tambahkan ini agar filtering reaktif terhadap URL query



  const totalItems = jobs?.length || 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = jobs?.slice(startIndex, startIndex + itemsPerPage) || [];

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/cari-lowongan?${params.toString()}`);
  };

  if (!jobs || !Array.isArray(jobs)) {
    return <p className="text-center py-10">Data lowongan tidak tersedia.</p>;
  }

  return (
    <Container className="py-10">
      {loading ? (
        <p>Memuat data lowongan...</p>
      ) : currentJobs.length === 0 ? (
        <p>Tidak ada lowongan ditemukan.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6">
            {currentJobs.map((job) => (
              <JobCard
                key={job.id}
                companyLogo={job.perusahaan.logo_perusahaan}
                title={job.judul_lowongan}
                company={job.perusahaan.nama_perusahaan}
                location={job.lokasi_penempatan}
                positions={job.kuota}
                closingDate={new Date(job.deadline_lamaran).toLocaleDateString(
                  "id-ID",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Container>
  );
}
