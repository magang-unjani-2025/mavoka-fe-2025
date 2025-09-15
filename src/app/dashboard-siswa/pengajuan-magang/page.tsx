'use client';
import StudentApplicationsTable from "@/app/components/dashboard/siswa/pengajuan-magang/table";
import { dummyApplications } from "@/app/data/dummyApplications";

export default function PengajuanMagangPage() {
    const handleAccept = (id: string) => {
    console.log("Accepted:", id);
  };

  const handleReject = (id: string) => {
    console.log("Rejected:", id);
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Lowongan Dilamar</h3>
      <StudentApplicationsTable
        data={dummyApplications}
        onAccept={handleAccept}
        onReject={handleReject}
      />
    </div>
  );
}
