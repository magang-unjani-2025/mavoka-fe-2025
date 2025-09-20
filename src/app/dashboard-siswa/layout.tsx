import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";

export default function DashboardSiswaLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout2 role="siswa">
      {children}
    </DashboardLayout2>
  );
}
