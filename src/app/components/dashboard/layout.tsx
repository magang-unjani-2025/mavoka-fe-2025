import Sidebar from "./sidebar";

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "admin" | "perusahaan" | "lpk" | "sekolah" | "siswa";
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
