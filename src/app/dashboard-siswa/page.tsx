import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";
import CardUtama from "@/app/components/dashboard/siswa/CardUtama";

export default function DashboardSiswa() {
  //const user = {
  //  fullName: "Lisa Mariana Treynggar Amsori",
  //  orgName: "SMK Negeri 1 Yogyakarta",
  //  profilePic: "", // kosong => avatar inisial
  //};

  return (
    <DashboardLayout2
      role="siswa"
      user={{ fullName: "Lisa Mariana Treynggar Amsori", orgName: "SMKN 1 Yogyakarta", profilePic: "" }}
    >
      <CardUtama></CardUtama>
    </DashboardLayout2>
  );
}
