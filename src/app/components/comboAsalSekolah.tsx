import { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

const sekolahList = [
  "SMK Negeri 1",
  "SMK Negeri 2",
  "SMK Swasta",
  "SMK Informatika",
  "SMK Pertanian",
];

type Props = {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
};

export default function ComboAsalSekolah({ register, setValue }: Props) {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = sekolahList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (value: string) => {
    setSearch(value);
    setValue("asalSekolah", value);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <label className="block text-sm text-black mb-1">Asal Sekolah</label>
      <input
        type="text"
        {...register("asalSekolah")}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
        placeholder="Ketik nama sekolah..."
        className="w-full border text-xs mb-1 rounded-[6px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
      />
      {showDropdown && search && (
        <ul className="absolute z-10 bg-white border w-full rounded shadow text-xs max-h-40 overflow-y-auto">
          {filtered.map((item, idx) => (
            <li
              key={idx}
              onMouseDown={() => handleSelect(item)}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-gray-400 italic">Tidak ditemukan</li>
          )}
        </ul>
      )}
    </div>
  );
}
