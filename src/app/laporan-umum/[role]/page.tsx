import DashboardLayout from "@/app/components/dashboard/layout";
import DataTable from "@/app/components/admin/DataTable";
import type { RoleType } from "@/app/components/admin/DataTable";

const roleMapping: Record<string, RoleType> = {
  perusahaan: "Perusahaan",
  sekolah: "Sekolah",
  lembaga: "Lembaga Pelatihan",
  "lembaga pelatihan": "Lembaga Pelatihan",
  siswa: "Siswa",
};

export default function LaporanDetail({ params }: { params: { role: string } }) {
  const { role } = params;
  const decodedRole = decodeURIComponent(role).toLowerCase();
  const mappedRole = roleMapping[decodedRole] || "Sekolah";

  return (
    <DashboardLayout role="admin">
      <div className="ml-5 mt-2 mr-5">
        <h1 className="font-bold text-[#0F67B1]">SELAMAT DATANG</h1>
        <p className="text-[#A3A3A3] mb-10">
          Hi, Minvo. Selamat datang kembali di MAVOKA Admin Dashboard!
        </p>
        <DataTable role={mappedRole} />
      </div>
    </DashboardLayout>
  );
}

