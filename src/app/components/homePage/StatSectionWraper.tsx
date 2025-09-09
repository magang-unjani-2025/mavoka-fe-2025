"use client";

import { useEffect, useState } from "react";
import StatsSection from "./grafik";
import {
  StatistikPerusahaan,
  StatistikLpk,
  StatistikSekolah,
  StatistikSiswa,
} from "@/lib/api-statistik";
import { Container } from "@/app/components/Container";

export default function StatsSectionWrapper() {
  const [data, setData] = useState({
    totalCompanies: 0,
    totalTrainingCenters: 0,
    totalSchools: 0,
    totalStudents: 0,
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [perusahaan, lpk, sekolah, siswa] = await Promise.all([
          StatistikPerusahaan(),
          StatistikLpk(),
          StatistikSekolah(),
          StatistikSiswa(),
        ]);

        console.log("Data dari API:", { perusahaan, lpk, sekolah, siswa });

        setData({
          totalCompanies: perusahaan.total_perusahaan ?? 0,
          totalTrainingCenters: lpk.total_lembaga_pelatihan ?? 0,
          totalSchools: sekolah.total_sekolah ?? 0,
          totalStudents: siswa.total_siswa ?? 0,
        });
      } catch (err) {
        console.error("Gagal mengambil data statistik:", err);
      }
    };

    fetchAll();
  }, []);

  return (
    <Container className="py-8">
      <StatsSection {...data} />
    </Container>
  );
}
