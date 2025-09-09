type ProfileHeaderProps = {
  role: "sekolah" | "perusahaan" | "lpk" | "siswa";
};

export default function ProfileHeader({ role }: ProfileHeaderProps) {
  const roleTexts: Record<
    ProfileHeaderProps["role"],
    { title: string; desc: string }
  > = {
    sekolah: {
      title: "Data Sekolah",
      desc: "Pastikan data sekolah terisi dengan benar untuk mempermudah proses pemberkasan.",
    },
    perusahaan: {
      title: "Data Perusahaan",
      desc: "Pastikan data perusahaan terisi dengan benar agar siswa lebih mudah mengenal perusahaan Anda.",
    },
    lpk: {
      title: "Data Lembaga Pelatihan",
      desc: "Pastikan data LPK terisi dengan benar untuk mendukung proses kolaborasi.",
    },
    siswa: {
      title: "Data Siswa",
      desc: "Pastikan data diri terisi dengan benar untuk mempermudah proses magang.",
    },
  };

  const { title, desc } = roleTexts[role];

  return (
    <div className="flex items-center justify-between border-b pb-4 mb-6">
      <div>
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
