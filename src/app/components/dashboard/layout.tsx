import Sidebar from "./sidebar";

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "admin" | "perusahaan" | "lpk" | "sekolah" | "siswa";
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 flex-shrink-0">
        <Sidebar role={role} />
      </div>

      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
