import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

interface CompanyCardProps {
  logo: string;
  name: string;
  address: string;
  detailHref: string;
}

export default function CompanyCard({
  logo,
  name,
  address,
  detailHref,
}: CompanyCardProps) {
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition">
      {/* Logo */}
      <div className="flex justify-center items-center h-20 mb-3">
        <Image
          src={logo}
          alt={name}
          width={120}
          height={60}
          className="object-contain max-h-16"
        />
      </div>

      {/* Nama */}
      <h3 className="font-semibold text-sm text-[#0F67B1]">{name}</h3>

      {/* Alamat */}
      <div className="flex items-start gap-1 text-xs text-gray-500 mt-1 flex-1">
        <IoLocationSharp className="text-[#0F67B1] mt-0.5" />
        <span>{address}</span>
      </div>

      {/* Tombol detail */}
      <a
        href={detailHref}
        className="mt-3 text-center text-sm bg-[#0F67B1] text-white rounded-md px-3 py-1 hover:bg-opacity-80 transition"
      >
        Detail
      </a>
    </div>
  );
}
