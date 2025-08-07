"use client";

import { useState } from "react";
import FormSelector from "./formSelector";
import AuthIllustration from "@/app/components/AuthIllustration";

export default function DaftarPage() {
  const [selectedRole, setSelectedRole] = useState("smk");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white overflow-x-hidden">
      <AuthIllustration />
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md border-[5px] border-[#0F67B1] rounded-[50px] pt-4 p-6 shadow-sm">
          <h2 className="font-bold text-center mb-2 text-black">
            DAFTAR
          </h2>

          <div className="mb-2">
            <p className="block text-black mb-1">
              Daftar Sebagai
            </p>
            <select
              className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
              onChange={(e) => setSelectedRole(e.target.value)}
              value={selectedRole}
            >
              <option value="smk">Siswa</option>
              <option value="sekolah">Sekolah</option>
              <option value="perusahaan">Perusahaan</option>
              <option value="lembaga">Lembaga Pelatihan</option>
            </select>
          </div>

          <div className="space-y-3">
            {selectedRole && <FormSelector role={selectedRole} />}
          </div>
        </div>
      </div>
    </div>
  );
}
