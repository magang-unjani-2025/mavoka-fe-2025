import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";

export default function DashboardSiswaLayout({ children }: { children: React.ReactNode }) {
  const user = { fullName: "Lisa Mariana Treynggar Amsori", orgName: "SMKN 1 Yogyakarta", profilePic: "" };
  return (
    <DashboardLayout2 role="siswa" user={user}>
      {children}
    </DashboardLayout2>
  );
}
