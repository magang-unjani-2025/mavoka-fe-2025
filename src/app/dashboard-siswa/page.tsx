import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";
import CardUtama from "@/app/components/dashboard/siswa/CardUtama";

export default function DashboardSiswa() {
  return (
    <DashboardLayout2 role="siswa">
      <CardUtama></CardUtama>
    </DashboardLayout2>
  );
}
