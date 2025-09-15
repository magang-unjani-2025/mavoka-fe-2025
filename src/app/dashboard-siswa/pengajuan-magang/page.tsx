'use client';
import StudentApplicationsTable from "@/app/components/dashboard/siswa/pengajuan-magang/table";

export default function PengajuanMagangPage() {
  return (
    <div className="p-4">
      <h3 className="mb-4">Lowongan Dilamar</h3>
      <StudentApplicationsTable data={[]} onAccept={() => {}} onReject={() => {}} />
    </div>
  );
}
