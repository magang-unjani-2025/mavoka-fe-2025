// components/section/TentangMavokaSection.tsx
import Image from "next/image";
import { Container } from "@/app/components/Container";

export function SejarahMavoka() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-[101px]">
          {/* Teks di kiri */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#0061AF] mb-3">Sejarah MAVOKA</h2>
            <p className=" mb-4">
              Program Magang Vokasi SMK (MAVOKA) lahir dari kebutuhan akan sistem pemagangan yang lebih terarah dan terintegrasi bagi siswa Sekolah Menengah Kejuruan. Selama bertahun-tahun, banyak siswa SMK menghadapi tantangan dalam menemukan tempat magang yang sesuai dengan bidang keahlian mereka. Hal ini menimbulkan kesenjangan antara ilmu yang dipelajari di sekolah dengan keterampilan yang dibutuhkan di dunia kerja.
            </p>
            <p className=" mb-4">
              Menyadari pentingnya solusi, MAVOKA dibentuk sebagai wadah pemagangan terpadu yang menghubungkan SMK dengan berbagai perusahaan, industri, dan dunia usaha. Inisiatif ini bertujuan untuk memastikan setiap siswa SMK memperoleh pengalaman magang yang relevan, berkualitas, dan berstandar industri.
            </p>
            <p className="text-justify mb-4">
              Sejak awal kehadirannya, MAVOKA didesain untuk:
            </p>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Menjadi jembatan antara sekolah dan dunia kerja.</li>
              <li>Menyediakan akses yang lebih mudah bagi siswa SMK untuk menemukan peluang magang.</li>
              <li>Membekali generasi muda dengan pengalaman nyata agar siap bersaing di era global.</li>
            </ul>
            <p className="">
              Kini, MAVOKA berkembang sebagai platform pemagangan yang terus berinovasi, tidak hanya memfasilitasi magang, tetapi juga menumbuhkan jejaring antara sekolah, industri, dan talenta muda Indonesia.
            </p>
          </div>

          {/* Gambar di kanan */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/img/sejarah-mavoka.png"
              alt="Foto sejarah MAVOKA"
              width={564}
              height={314}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
