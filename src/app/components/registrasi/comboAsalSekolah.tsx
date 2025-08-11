"use client";

import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { TampilAllSekolah } from "@/lib/api-sekolah";

type Props = {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  error?: string;
};

type Sekolah = {
  id: number;
  nama_sekolah: string;
};

export default function ComboAsalSekolah({ register, setValue, error }: Props) {
  const [sekolahList, setSekolahList] = useState<Sekolah[]>([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    async function fetchSekolah() {
      try {
        const data = await TampilAllSekolah();
        const terverifikasi = data.filter(
          (item: any) => item.status_verifikasi === "Terverifikasi"
        );
        setSekolahList(terverifikasi);
      } catch (err) {
        console.error("Gagal fetch sekolah:", err);
      }
    }

    fetchSekolah();
  }, []);

  const filtered = sekolahList.filter((item) =>
    item.nama_sekolah.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (value: string) => {
    setSearch(value);
    setValue("nama_sekolah", value);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full mb-3">
      <label className="block text-sm text-black mb-1">
        Nama Sekolah <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        {...register("nama_sekolah", { required: "Nama sekolah wajib diisi" })}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
        placeholder="Nama Sekolah"
        className={`w-full border text-xs mb-1 rounded-[6px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F67B1] placeholder-gray-400 ${
          search ? "text-black" : "text-gray-400"
        } ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {showDropdown && search && (
        <ul className="absolute z-10 bg-white border w-full rounded shadow text-xs max-h-40 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <li
                key={item.id}
                onMouseDown={() => handleSelect(item.nama_sekolah)}
                className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {item.nama_sekolah}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-400 italic">Tidak ditemukan</li>
          )}
        </ul>
      )}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
