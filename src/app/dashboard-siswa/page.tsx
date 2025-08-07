import DashboardLayout from "@/app/components/dashboard/layout";

export default function DashboardSiswa() {
  return (
    <DashboardLayout role="siswa">
      <h1 className="text-2xl font-bold mt-11 ml-[20px] text-[#0F67B1]">SELAMAT DATANG <span className="text-black">Siswa</span></h1>
      <p className="ml-[20px] text-[#A3A3A3]">Hi, Siswa. Selamat datang kembali di MAVOKA!</p>
    </DashboardLayout>
  );
}
