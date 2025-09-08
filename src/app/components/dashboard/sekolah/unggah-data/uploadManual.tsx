'use client';

import React, { useState } from 'react';
import SuccessModal from '@/app/components/registrasi/PopupBerhasil';

type FormState = {
  nama: string;
  nisn: string;
  kelas: string;
  jurusan: string;
  tahunAjaran: string;
  email: string;
};

const initialState: FormState = {
  nama: '',
  nisn: '',
  kelas: '',
  jurusan: '',
  tahunAjaran: '',
  email: '',
};

const UploadManual: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [showSuccess, setShowSuccess] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const missing = Object.values(formData).some((v) => !String(v).trim());
    if (missing) {
      alert('Semua kolom harus diisi!');
      return;
    }

    // TODO: kirim ke endpoint ketika tersedia
    setShowSuccess(true);
  };

  const inputCls =
    'mt-1 w-full rounded-md border border-[#B7B7B7] px-3 py-2 text-sm outline-none ' +
    'placeholder:text-[#858585] focus:ring-2 focus:ring-blue-200 focus:border-blue-400';

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#1C1C1C]">Data Siswa</h2>
        <p className="text-sm text-gray-500">
          Pastikan informasi data siswa terisi dengan benar.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Form */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="nama" className="block text-sm font-medium text-[#1C1C1C]">
            Nama Siswa
          </label>
          <input
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={onChange}
            placeholder="Masukkan nama siswa..."
            className={inputCls}
            required
          />
        </div>

        <div>
          <label htmlFor="nisn" className="block text-sm font-medium text-[#1C1C1C]">
            NISN
          </label>
          <input
            id="nisn"
            name="nisn"
            value={formData.nisn}
            onChange={onChange}
            placeholder="Masukkan NISN"
            className={inputCls}
            required
          />
        </div>

        <div>
          <label htmlFor="kelas" className="block text-sm font-medium text-[#1C1C1C]">
            Kelas
          </label>
          <input
            id="kelas"
            name="kelas"
            value={formData.kelas}
            onChange={onChange}
            placeholder="Masukkan kelas"
            className={inputCls}
            required
          />
        </div>

        <div>
          <label htmlFor="jurusan" className="block text-sm font-medium text-[#1C1C1C]">
            Jurusan
          </label>
          <input
            id="jurusan"
            name="jurusan"
            value={formData.jurusan}
            onChange={onChange}
            placeholder="Masukkan jurusan"
            className={inputCls}
            required
          />
        </div>

        <div>
          <label htmlFor="tahunAjaran" className="block text-sm font-medium text-[#1C1C1C]">
            Tahun Ajaran
          </label>
          <input
            id="tahunAjaran"
            name="tahunAjaran"
            value={formData.tahunAjaran}
            onChange={onChange}
            placeholder="Masukkan tahun ajaran"
            className={inputCls}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C]">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Masukkan Email"
            className={inputCls}
            required
          />
        </div>

        {/* Tombol kanan bawah – gaya disamakan dengan Excel */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-[5px] bg-[#0F67B1] text-white"
          >
            Unggah
          </button>
        </div>
      </form>

      {/* Success modal – pola pemanggilan disamakan */}
      <SuccessModal
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          setFormData(initialState);
        }}
        title="Berhasil"
        message="Data Siswa yang Anda inputkan berhasil diunggah!"
        duration={2500} // ⬅️ sama seperti Excel
        // primaryText tidak diisi → tidak menampilkan tombol
      />
    </div>
  );
};

export default UploadManual;
