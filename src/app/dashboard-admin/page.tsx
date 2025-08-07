import DashboardLayout from "@/app/components/dashboard/layout";
import { Component } from "@/app/components/dashboard/admin/card";

export default function DashboardAdmin() {
  return (
    <DashboardLayout role="admin">
      <h1 className="font-bold mt-2 ml-[20px] text-[#0F67B1]">SELAMAT DATANG</h1>
      <p className="ml-[20px] text-[#A3A3A3]">Hi, Minvo. Selamat datang kembali  di MAVOKA Admin Dashboard!</p>
    </DashboardLayout>
  );
}
