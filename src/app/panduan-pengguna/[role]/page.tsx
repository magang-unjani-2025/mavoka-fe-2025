import { notFound } from "next/navigation";
import { RoleGuideDetail } from "@/app/components/homePage/panduanPengguna/RoleGuideDetail";

const roleMeta = {
  perusahaan: { title: "Panduan Perusahaan", intro: "Rangkaian langkah untuk perusahaan." },
  lpk:        { title: "Panduan Lembaga Pelatihan", intro: "Langkah khusus LPK." },
  sekolah:    { title: "Panduan Sekolah", intro: "Panduan untuk pihak sekolah." },
  siswa:      { title: "Panduan Siswa", intro: "Mulai dari pendaftaran hingga apply." },
} as const;

export default function RoleGuidePage({ params }: { params: { role: string } }) {
  const meta = roleMeta[params.role as keyof typeof roleMeta];
  if (!meta) return notFound();

  return (
    <RoleGuideDetail title={meta.title} intro={meta.intro}>
      {/* TODO: ganti dengan komponen Accordion sesuai desainmu */}
    </RoleGuideDetail>
  );
}
