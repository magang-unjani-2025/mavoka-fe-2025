"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/app/components/Container";
import { TampilAllLowongan } from "@/lib/api-lowongan";
import { FaTimes } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

interface LowonganItem {
  posisi: string;
  perusahaan: string;
  lokasi_penempatan: string;
  jurusan: string;
}

export function SearchLowonganBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lowongan, setLowongan] = useState<LowonganItem[]>([]);
  const [form, setForm] = useState({
    posisi: "",
    perusahaan: "",
    lokasi: "",
    jurusan: "",
  });
  const [suggestions, setSuggestions] = useState({
    posisi: [] as string[],
    perusahaan: [] as string[],
    lokasi: [] as string[],
    jurusan: [] as string[],
  });
  const [showDropdown, setShowDropdown] = useState({
    posisi: false,
    perusahaan: false,
    lokasi: false,
    jurusan: false,
  });

  useEffect(() => {
    TampilAllLowongan().then((res) => {
      const rawData = res?.data;
      if (!Array.isArray(rawData)) return;

      setLowongan(rawData);

      setSuggestions({
        posisi: unique(rawData.map((d) => d.posisi)),
        perusahaan: unique(rawData.map((d) => d.perusahaan)),
        lokasi: unique(rawData.map((d) => d.lokasi_penempatan)),
        jurusan: unique(rawData.map((d) => d.jurusan || "")), // aman kalau jurusan undefined
      });
    });
  }, []);

  function unique(arr: string[]) {
    return Array.from(new Set(arr.filter(Boolean)));
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setShowDropdown((prev) => ({ ...prev, [field]: true }));
  }

  function handleSelect(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setShowDropdown((prev) => ({ ...prev, [field]: false }));
  }

  function handleClear(field: keyof typeof form) {
    const updatedForm = { ...form, [field]: "" };
    setForm(updatedForm);
    setShowDropdown((prev) => ({ ...prev, [field]: false }));

    // update query string juga agar data langsung berubah
    const query = new URLSearchParams();
    Object.entries(updatedForm).forEach(([key, value]) => {
      if (value) query.set(key, value);
    });
    router.push("/lowongan?" + query.toString());
  }

  function handleSearch() {
    const query = new URLSearchParams();
    Object.entries(form).forEach(([key, value]) => {
      if (value) query.set(key, value);
    });
    router.push("/lowongan?" + query.toString());
  }

  function renderInput(field: keyof typeof form, placeholder: string) {
    return (
      <div className="relative w-full">
        <input
          type="text"
          value={form[field]}
          placeholder={placeholder}
          onChange={(e) => handleChange(field, e.target.value)}
          onFocus={() =>
            setShowDropdown((prev) => ({ ...prev, [field]: true }))
          }
          className="w-full min-w-0 h-[35px] text-sm py-2 px-3 border border-[#E3E3E3] rounded-[5px] 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             placeholder:text-gray-400 text-black"
        />

        {form[field] && (
          <button
            type="button"
            onClick={() => handleClear(field)}
            className="absolute right-2 top-1.5 text-gray-600 shadow-none"
          >
            <FaTimes size={12} />
          </button>
        )}

        {showDropdown[field] && form[field] && (
          <ul className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md border border-gray-200 bg-white text-sm shadow-md">
            {suggestions[field]
              .filter((item) =>
                item.toLowerCase().includes(form[field].toLowerCase())
              )
              .slice(0, 5)
              .map((item) => (
                <li
                  key={item}
                  onMouseDown={() => handleSelect(field, item)}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                >
                  {item}
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <Container className="py-2">
      <div className="w-full border border-[#D9D9D9] rounded-[10px] shadow px-6 py-5 overflow-hidden">
        <div className="flex flex-wrap tablet:flex-nowrap items-center justify-between gap-3">
          <div className="flex flex-1 gap-3 flex-wrap tablet:flex-nowrap">
            {renderInput("posisi", "Posisi")}
            {renderInput("perusahaan", "Perusahaan")}
            {renderInput("lokasi", "Lokasi")}
            {renderInput("jurusan", "Jurusan")}
          </div>
          <button
            onClick={handleSearch}
            className="flex-shrink-0 bg-[#0F67B1] hover:bg-[#0F67B1]/80 text-white rounded-[8px] w-[55px] h-[55px] flex items-center justify-center"
          >
            <BiSearchAlt size={50} />
          </button>
        </div>
      </div>
    </Container>
  );
}
