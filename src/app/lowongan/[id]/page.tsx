"use client";

import HeaderHome from "@/app/components/homePage/headerHomepage";
import "aos/dist/aos.css";
import Footer from "@/app/components/homePage/footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getLowonganById } from "@/services/lowongan";
import { getCompanyById } from "@/services/company";
import { Company } from "@/types/company";
import { Lowongan } from "@/types/lowongan";
import { Container } from "@/app/components/Container";
import LowonganHeader from "@/app/components/homePage/cari-lowongan/detail-lowongan/LowonganHeader";
import DetailDescription from "@/app/components/homePage/detail-role/DetailDescription";
import Persyaratan from "@/app/components/homePage/cari-lowongan/detail-lowongan/Persyaratan";
import Keuntungan from "@/app/components/homePage/cari-lowongan/detail-lowongan/Keuntungan";
import Tugas from "@/app/components/homePage/cari-lowongan/detail-lowongan/Tugas";
import LamarButton from "@/app/components/homePage/cari-lowongan/detail-lowongan/LamarButton";
import JobCard from "@/app/components/homePage/jobCard";
import { ArrowRight } from "lucide-react";

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

export default function DetailLowonganPage() {
  const { id } = useParams();
  const [lowongan, setLowongan] = useState<Lowongan | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [loadingLowongan, setLoadingLowongan] = useState(true);
  const [loadingCompany, setLoadingCompany] = useState(true);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const data = await getLowonganById(id as string);
        setLowongan(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingLowongan(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (!lowongan?.perusahaan_id) return;
    (async () => {
      try {
        const data = await getCompanyById(lowongan.perusahaan_id.toString());
        setCompany(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingCompany(false);
      }
    })();
  }, [lowongan]);

  if (loadingLowongan || loadingCompany)
    return <p className="text-center py-10">Loading...</p>;
  if (!lowongan)
    return <p className="text-center py-10">Data lowongan tidak ditemukan</p>;
  if (!company)
    return <p className="text-center py-10">Data perusahaan tidak ditemukan</p>;

  return (
    <>
      <HeaderHome />
      <main>
        <Container className="py-6">
          <LowonganHeader
            name={lowongan.judul_lowongan}
            subtitle={lowongan.perusahaan.nama_perusahaan}
          />
          <DetailDescription
            type="lowongan"
            title="Deskripsi Posisi"
            description={lowongan.deskripsi ?? "-"}
            deadline_lamaran={lowongan.deadline_lamaran ?? "-"}
            address={lowongan.lokasi_penempatan ?? "-"}
          />
          <Tugas tugas={lowongan.benefit ?? "-"} />
          {/* tambah atribut tugas di backend */}
          <Persyaratan persyaratan={lowongan.persyaratan ?? "-"} />
          <Keuntungan benefit={lowongan.benefit ?? "-"} />
          <LamarButton />
          <div className="mt-10 text-center">
            <h3>Temukan Posisi Magang Impianmu Di sini</h3>
          </div>

          {company.jobs && company.jobs.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  Lowongan <span className="text-[#0F67B1]">Aktif</span>
                </h2>

                <a
                  href="/list-perusahaan"
                  className="text-[#0F67B1] hover:underline flex items-center gap-1"
                >
                  Lihat semua lowongan <ArrowRight size={20} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {company.jobs.map((job: Job) => (
                  <JobCard
                    key={job.id}
                    id={job.id}
                    companyLogo={job.perusahaan?.logo_perusahaan ?? null}
                    title={job.judul_lowongan}
                    company={job.perusahaan.nama_perusahaan}
                    location={job.lokasi_penempatan}
                    positions={job.kuota}
                    closingDate={job.deadline_lamaran}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-5">
              Belum ada lowongan lain dari perusahaan ini
            </p>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
