import { Container } from "@/app/components/Container";

export const VisiMisi = () => {
  return (
    <section id="visimisi" className="py-12 bg-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[#0061AF] font-bold mb-4">VISI</h3>
          <p className=" text-black font-semibold">
            Menjadi platform pemagangan vokasi terintegrasi bagi siswa SMK di Indonesia
            untuk mencetak generasi muda yang terampil, berdaya saing, dan siap menghadapi
            tantangan dunia kerja modern.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-[#0061AF] font-bold mb-4 text-center">MISI</h3>
          <ol className="list-decimal list-inside space-y-2 max-w-4xl mx-auto text-sm font-semibold text-black">
            <li>
              Menghubungkan siswa SMK dengan perusahaan dan industri melalui sistem pemagangan yang terstruktur dan relevan.
            </li>
            <li>
              Meningkatkan kompetensi siswa SMK dengan pengalaman kerja nyata sesuai bidang keahlian masing-masing.
            </li>
            <li>
              Mendorong kolaborasi antara sekolah, pemerintah, dan dunia industri untuk menciptakan ekosistem vokasi yang berkesinambungan.
            </li>
            <li>
              Mempersiapkan lulusan SMK agar memiliki keterampilan, etos kerja, dan profesionalisme yang sesuai standar dunia kerja.
            </li>
            <li>
              Mengembangkan talenta muda Indonesia agar mampu berkontribusi bagi kemajuan bangsa di tingkat nasional maupun global.
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
};
