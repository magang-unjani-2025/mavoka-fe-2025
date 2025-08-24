// components/section/TentangMavokaSection.tsx
import Image from "next/image";
import { Container } from "@/app/components/Container";

export function TentangMavokaSection() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="grid gap-10 tablet:grid-cols-2 tablet:items-center">
          {/* Logo MAVOKA */}
          <div className="flex justify-center tablet:justify-start">
            <Image
              src="/img/logo-mavoka.png" // ganti sesuai path kamu
              alt="Logo MAVOKA"
              width={270}
              height={107}
              className="w-40 tablet:w-52 desktop:w-60 h-auto"
              priority
            />
          </div>

          {/* Teks deskripsi */}
          <div className="text-black space-y-5">
            <p>
              <strong>Magang Vokasi SMK (MAVOKA)</strong> adalah sistem pemagangan terintegrasi yang
              dirancang khusus untuk siswa Sekolah Menengah Kejuruan (SMK). Program ini menjadi
              jembatan bagi pelajar SMK untuk mengaplikasikan pengetahuan dan keterampilan yang telah
              dipelajari di sekolah dengan praktik langsung di dunia industri dan perusahaan.
            </p>
            <p>
              Melalui MAVOKA, siswa SMK akan memperoleh pengalaman nyata dalam lingkungan kerja
              profesional, memahami budaya kerja industri, serta mengasah kompetensi sesuai bidang
              keahliannya. Dengan demikian, mereka tidak hanya siap menghadapi dunia kerja setelah
              lulus, tetapi juga mampu berkontribusi langsung dalam peningkatan kualitas tenaga kerja
              Indonesia.
            </p>
            <p>
              Pengalaman yang diperoleh melalui program MAVOKA menjadi bekal penting dalam membangun
              karier, membuka peluang kerja lebih luas, serta menumbuhkan semangat inovasi dan
              profesionalisme untuk masa depan yang lebih gemilang.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
