//import DashboardLayout from "@/app/components/dashboard/layout";

//export default function DashboardPerusahaan() {
//  return (
//    <DashboardLayout role="perusahaan">
//      <h1 className="text-2xl font-bold mt-11 ml-[20px] text-[#0F67B1]">Selamat Datang</h1>
//      <p className="ml-[20px] text-[#A3A3A3]">Hi, Minvo. Selamat datang kembali  di MAVOKA!</p>
//    </DashboardLayout>
//  );
//}

import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";
import * as React from "react";

export default function DashboardPerusahaan() {
  return (
    <DashboardLayout2
      role="perusahaan"
      user={{
        fullName: "Kepala Perusahaan",
        orgName: "Perusahaan XYZ",
        profilePic: "",
      }}>
        <></>
    </DashboardLayout2>
  );
}

