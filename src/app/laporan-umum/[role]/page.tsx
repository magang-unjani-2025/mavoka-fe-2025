import DashboardLayout from "@/app/components/dashboard/layout"; 
import DataTable, { RoleType } from "@/app/components/admin/DataTable";

export default function LaporanDetail() {
  const role: RoleType = "Sekolah";

  return (
    <DashboardLayout>
      <div className="ml-5 mt-2 mr-5">
        <h1 className="font-bold text-[#0F67B1]">SELAMAT DATANG</h1>
        <p className="text-[#A3A3A3] mb-10">
          Hi, Minvo. Selamat datang kembali di MAVOKA Admin Dashboard!
        </p>
        <DataTable role={role} />
      </div>
    </DashboardLayout>
  );
}
