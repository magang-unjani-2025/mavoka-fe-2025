//'use client'

//import { useState } from 'react'

//export default function DaftarPage() {
//  const [showPassword, setShowPassword] = useState(false)
//  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//  return (
//    <div className="flex h-screen bg-white">
//      <div className="hidden lg:flex w-1/2 bg-[#f3f6fd] items-center justify-center p-6">
//        <img
//          src="/img/asset2.png"
//          alt="Magang Vokasi"
//          className="w-200 max-w-lg"
//        />
//      </div>

//      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16">
//        <div className="w-full max-w-md border-[5px] border-[#0F67B1] rounded-[50px] p-6 shadow-sm">
//          <h2 className="text-2xl font-bold text-center mb-2 text-black">DAFTAR</h2>

//          <form className="space-y-2">
//            <div>
//              <label className="block text-sm text-black">Daftar Sebagai</label>
//              <select className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 text-black cursor-pointer">
//                <option>Siswa SMK</option>
//                <option>Sekolah</option>
//                <option>Perusahaan</option>
//                <option>Lembaga Pelatihan</option>
//              </select>
//            </div>

//            <div>
//              <label className="block text-sm text-black">Username</label>
//              <input
//                type="text"
//                placeholder="Username"
//                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2"
//              />
//            </div>

//            <div>
//              <label className="block text-sm text-black">Nama Lengkap</label>
//              <input
//                type="text"
//                placeholder="Nama Lengkap"
//                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2"
//              />
//            </div>

//            <div>
//              <label className="block text-sm text-black">NISN</label>
//              <input
//                type="text"
//                placeholder="NISN"
//                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2"
//              />
//            </div>

//            <div>
//              <label className="block text-sm text-black">Email</label>
//              <input
//                type="email"
//                placeholder="Email"
//                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2"
//              />
//            </div>

//            <div className="relative">
//              <label className="block text-sm text-black">Kata Sandi</label>
//              <input
//                type={showPassword ? 'text' : 'password'}
//                placeholder="Kata Sandi"
//                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 pr-10"
//              />
//              <button
//                type="button"
//                onClick={() => setShowPassword(!showPassword)}
//                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-600"
//              >
//                {showPassword ? '🙈' : '👁️'}
//              </button>
//            </div>

//            <div className="flex items-start text-xs text-[#292D32] font-semibold">
//              <input type="checkbox" className="mr-2 mt-1" />
//              <span>
//                Saya menyetujui syarat & ketentuan yang berlaku
//              </span>
//            </div>

//            <button
//              type="submit"
//              className="mx-auto block w-45px bg-[#0F67B1] hover:bg-blue-700 text-white rounded-[6px] px-4 py-2 mt-2"
//            >
//              Daftar
//            </button>
//          </form>
//        </div>
//      </div>
//    </div>
//  )
//}

"use client";

import { useState } from "react";
import FormSelector from "./formSelector";

export default function DaftarPage() {
  const [selectedRole, setSelectedRole] = useState("smk");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white overflow-x-hidden">
      {/* Kiri */}
      <div className="hidden lg:flex w-1/2 bg-white items-center justify-center p-6">
        <img
          src="/img/login&register.png"
          alt="Magang Vokasi"
          className="object-contain w-[739px] h-[708px] max-w-full max-h-[90vh]"
        />
      </div>

      {/* Kanan: Form Pendaftaran */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md border-[5px] border-[#0F67B1] rounded-[50px] p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-2 text-black">
            DAFTAR
          </h2>

          {/* Dropdown Pilih Role */}
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">
              Daftar Sebagai
            </label>
            <select
              className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
              onChange={(e) => setSelectedRole(e.target.value)}
              value={selectedRole}
            >
              <option value="smk">Siswa SMK</option>
              <option value="sekolah">Sekolah</option>
              <option value="perusahaan">Perusahaan</option>
              <option value="lembaga">Lembaga Pelatihan</option>
            </select>
          </div>

          {/* Form Sesuai Role */}
          {selectedRole && <FormSelector role={selectedRole} />}
        </div>
      </div>
    </div>
  );
}
