'use client'

import { useState } from 'react'

export default function DaftarPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex h-screen bg-white">
      <div className="hidden lg:flex w-1/2 bg-[#f3f6fd] items-center justify-center p-6">
        <img
          src="/img/asset2.png"
          alt="Magang Vokasi"
          className="w-200 max-w-lg"
        />
      </div>
      

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16">
        <div className="w-full max-w-md border-[5px] border-[#0F67B1] rounded-[50px] p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-2 text-black">DAFTAR</h2>

          <form className="space-y-2">
            <div>
              <label className="block text-sm text-black">Daftar Sebagai</label>
              <select className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 text-black cursor-pointer">
                <option>Siswa SMK</option>
                <option>Sekolah</option>
                <option>Perusahaan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-black">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-black">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-black">NISN</label>
              <input
                type="text"
                placeholder="NISN"
                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-black">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2"
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-black">Kata Sandi</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Kata Sandi"
                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-600"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div className="relative">
              <label className="block text-sm text-black">Masukkan Ulang Kata Sandi</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Masukkan Ulang Kata Sandi"
                className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-600"
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div className="flex items-start text-xs text-[#292D32] font-semibold">
              <input type="checkbox" className="mr-2 mt-1" />
              <span>
                Saya menyetujui syarat & ketentuan yang berlaku
              </span>
            </div>

            <button
              type="submit"
              className="mx-auto block w-45px bg-[#0F67B1] hover:bg-blue-700 text-white rounded-[6px] px-4 py-2 mt-2"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
