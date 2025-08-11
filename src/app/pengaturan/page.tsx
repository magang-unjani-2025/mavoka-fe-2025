// import SettingsTabs from "@/app/components/dashboard/siswa/pengaturan/SettingsTabs";
// import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";

// export default function PengaturanPage() {
//   return (
//     <DashboardLayout2 role="siswa">
//       <SettingsTabs></SettingsTabs>
//     </DashboardLayout2>
//   );
// }

import { redirect } from "next/navigation";

export default function PengaturanPage() {
  redirect("/pengaturan/data-diri");
}
