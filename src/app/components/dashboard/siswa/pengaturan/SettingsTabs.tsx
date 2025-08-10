// "use client";

// import { useState } from "react";
// import ProfileHeader from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileHeader";
// import ProfileAvatar from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileAvatar";
// import ProfileView from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileView";
// import ProfileForm from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileForm";

// export default function SettingsTabs() {
//   const [activeTab, setActiveTab] = useState<"dataDiri" | "akun" | "sekolah">(
//     "dataDiri"
//   );

//   const [form, setForm] = useState({
//     fullName: "Lisa Mariana Treynggar Amsori",
//     schoolName: "SMK Negeri 1 Yogyakarta",
//     profilePic: "",
//     email: "Lisaaja@gmail.com",
//     gender: "Perempuan",
//     birthDate: "2025-07-12",
//     phone: "0821345566",
//     address: "Gamping",
//     city: "Bojonggede",
//     province: "Jawa Bagian Barat",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <div className="flex border-b border-gray-300">
//         <button
//           className={`px-4 py-2 font-semibold ${
//             activeTab === "dataDiri"
//               ? "border-b-2 border-[#0F67B1] text-[#0F67B1] bg-[#0F67B1]/5"
//               : "text-gray-600 hover:text-[#0F67B1]"
//           }`}
//           onClick={() => setActiveTab("dataDiri")}
//         >
//           Data Diri
//         </button>
//         <button
//           className={`px-4 py-2 font-semibold ${
//             activeTab === "akun"
//               ? "border-b-2 border-[#0F67B1] text-[#0F67B1] bg-[#0F67B1]/5"
//               : "text-gray-600 hover:text-[#0F67B1]"
//           }`}
//           onClick={() => setActiveTab("akun")}
//         >
//           Akun
//         </button>
//         <button
//           className={`px-4 py-2 font-semibold ${
//             activeTab === "sekolah"
//               ? "border-b-2 border-[#0F67B1] text-[#0F67B1] bg-[#0F67B1]/5"
//               : "text-gray-600 hover:text-[#0F67B1]"
//           }`}
//           onClick={() => setActiveTab("sekolah")}
//         >
//           Sekolah
//         </button>
//       </div>
//       <div className="bg-white rounded-lg shadow-sm p-6 overflow-auto max-h-[calc(100vh-150px)] ">
//         <div>
//           {activeTab === "dataDiri" && (
//             <>
//               <ProfileHeader />
//               <ProfileAvatar src={form.profilePic} name={form.fullName} />
//               <ProfileView form={form} />
//               {/* <ProfileForm form={form} handleChange={handleChange} /> */}
//             </>
//           )}

//           {activeTab === "akun" && (
//             <div className="text-gray-700">
//               <h2 className="text-xl font-semibold mb-4">Pengaturan Akun</h2>
//               <p>Konten pengaturan akun akan ditampilkan di sini.</p>
//             </div>
//           )}

//           {activeTab === "sekolah" && (
//             <div className="text-gray-700">
//               <h2 className="text-xl font-semibold mb-2">Informasi Sekolah</h2>
//               <p>Konten informasi sekolah akan ditampilkan di sini.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


"use client";
import { useState } from "react";
import ProfileHeader from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileHeader";
import ProfileAvatar from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileAvatar";
import ProfileView from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileView";
import ProfileForm from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileForm";

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState<"dataDiri" | "akun" | "sekolah">("dataDiri");
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    fullName: "Lisa Mariana Treynggar Amsori",
    schoolName: "SMK Negeri 1 Yogyakarta",
    profilePic: "",
    email: "Lisaaja@gmail.com",
    gender: "Perempuan",
    birthDate: "2025-07-12",
    phone: "0821345566",
    address: "Gamping",
    city: "Bojonggede",
    province: "Jawa Bagian Barat",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // nanti kalau ada API, panggil di sini
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        {["dataDiri", "akun", "sekolah"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab
                ? "border-b-2 border-[#0F67B1] text-[#0F67B1] bg-[#0F67B1]/5"
                : "text-gray-600 hover:text-[#0F67B1]"
            }`}
            onClick={() => setActiveTab(tab as typeof activeTab)}
          >
            {tab === "dataDiri" && "Data Diri"}
            {tab === "akun" && "Akun"}
            {tab === "sekolah" && "Sekolah"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm p-6 overflow-auto max-h-[calc(100vh-150px)]">
        {activeTab === "dataDiri" && (
          <>
            <ProfileHeader onEdit={() => setIsEditing(true)} />
            <ProfileAvatar src={form.profilePic} name={form.fullName} />

            {!isEditing && <ProfileView form={form} />}

            {isEditing && (
              <>
                <ProfileForm form={form} handleChange={handleChange} />

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-2 rounded-md bg-[#0F67B1] text-white hover:bg-blue-800"
                  >
                    Simpan
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {activeTab === "akun" && <p>Pengaturan Akun</p>}
        {activeTab === "sekolah" && <p>Informasi Sekolah</p>}
      </div>
    </>
  );
}

