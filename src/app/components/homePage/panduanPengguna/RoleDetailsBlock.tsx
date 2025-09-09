"use client";

import { Container } from "@/app/components/Container";
import { AccordionUtama } from "@/app/components/homePage/panduanPengguna/dropDown/AccordionUtama";
import type { RoleKey, GuideData } from "@/types/panduan";
import { getRoleGuides } from "@/lib/roleMapPanduan";

// ...imports
type Props = { roleKey: RoleKey; embedded?: boolean };

export function RoleDetailsBlock({ roleKey, embedded = false }: Props) {
  const meta = {
    perusahaan: {
      introTitle: "Informasi mengenai Panduan Perusahaan",
      intro:
        "Panduan Perusahaan ini disusun untuk memberikan informasi dan arahan yang jelas mengenai penggunaan platform Mavoka, khususnya bagi mitra perusahaan. Kami memahami pentingnya transparansi, kemudahan, dan kejelasan dalam setiap langkah penggunaan layanan, sehingga melalui panduan ini Anda dapat menemukan jawaban atas pertanyaan umum, memahami kebijakan privasi, serta mengetahui tata cara berinteraksi di dalam platform.\n\n" +
        "Panduan ini diharapkan dapat membantu Anda menavigasi setiap fitur dengan lebih mudah, sehingga pengalaman menggunakan Mavoka menjadi lebih efektif, nyaman, dan bermanfaat.",
      sectionTitle: "Panduan Perusahaan",
    },
    lpk: {
      introTitle: "Informasi mengenai Panduan LPK",
      intro:
        "Panduan Lembaga pelatihan ini disusun untuk memberikan informasi dan arahan yang jelas mengenai penggunaan platform Mavoka, khususnya bagi Lembaga pelatihan. Dengan adanya panduan ini, lembaga dapat lebih mudah mengelola program pelatihan, terhubung dengan siswa maupun sekolah, serta memastikan setiap kegiatan berjalan sesuai standar yang ditetapkan.\n\n" +
        "Panduan ini diharapkan dapat menjadi referensi praktis dalam mendukung pengembangan kompetensi siswa melalui kerja sama yang profesional dan berkelanjutan.",
      sectionTitle: "Panduan LPK",
    },
    sekolah: {
      introTitle: "Informasi mengenai Panduan Sekolah",
      intro:
        "Panduan sekolah ini disusun untuk memberikan informasi dan arahan yang jelas kepada pihak sekolah dalam memanfaatkan platform Mavoka sebagai sarana penghubung antara siswa, perusahaan, dan lembaga pelatihan.\n\n" +
        "Panduan ini diharapkan dapat menjadi referensi praktis sekolah agar dapat lebih mudah mengawasi kegiatan magang, memfasilitasi kerja sama, serta memastikan proses belajar siswa berjalan sesuai dengan kurikulum dan kebutuhan industri.",
      sectionTitle: "Panduan Sekolah",
    },
    siswa: {
      introTitle: "Informasi mengenai Panduan Siswa",
      intro:
        "Panduan siswa ini disusun untuk memberikan informasi dan arahan yang jelas bagi siswa dalam memanfaatkan platform Mavoka untuk proses pendaftaran, pelamaran, hingga monitoring kegiatan magang.\n\n" +
        "Panduan ini diharapkan dapat membantu siswa menavigasi setiap fitur dengan mudah sehingga proses magang menjadi lebih terarah dan produktif.",
      sectionTitle: "Panduan Siswa",
    },
  }[roleKey];

  const guides: GuideData[] = getRoleGuides(roleKey);
  const introParts = meta.intro.split("\n\n");

  return (
    <>
      {/* Intro */}
      <div className="border-b border-black/10 p-6 text-center">
        <h3 className="mb-2 font-semibold text-[#0F67B1]">{meta.introTitle}</h3>
        <div className="space-y-2 text-sm leading-relaxed text-black/80">
          {introParts.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Judul section */}
      <div className="border-b border-black/10 px-6 py-4">
        <h4 className="text-center font-semibold">{meta.sectionTitle}</h4>
      </div>

      {/* Accordion Utama */}
      <div className="px-6 py-5">
        <AccordionUtama data={guides} role={roleKey} />
      </div>
    </>
  );
}
