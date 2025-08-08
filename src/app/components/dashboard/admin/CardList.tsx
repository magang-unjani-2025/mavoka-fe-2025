"use client";

import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import {
  StatistikPerusahaan,
  StatistikLpk,
  StatistikSekolah,
  StatistikSiswa,
} from "@/lib/api-statistik";

type CardItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export default function CardList() {
  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [perusahaan, lpk, sekolah, siswa] = await Promise.all([
          StatistikPerusahaan(),
          StatistikLpk(),
          StatistikSekolah(),
          StatistikSiswa(),
        ]);

        const data: CardItem[] = [
          {
            id: 1,
            title: "Total Perusahaan Terdaftar",
            description: `${perusahaan.total_perusahaan ?? 0}`,
            imageUrl: "/img/admin/Icon_perusahaan.svg",
          },
          {
            id: 2,
            title: "Total Lembaga Pelatihan Terdaftar",
            description: `${lpk.total_lembaga_pelatihan ?? 0}`,
            imageUrl: "/img/admin/Icon_lpk.svg",
          },
          {
            id: 3,
            title: "Total Sekolah Terdaftar",
            description: `${sekolah.total_sekolah ?? 0}`,
            imageUrl: "/img/admin/Icon_sekolah.svg",
          },
          {
            id: 4,
            title: "Total Siswa Terdaftar",
            description: `${siswa.total_siswa ?? 0}`,
            imageUrl: "/img/admin/Icon_siswa.svg",
          },
        ];

        setCards(data);
      } catch (error) {
        console.error("Gagal ambil data statistik:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <StatCard
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}
