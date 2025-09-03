import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { HiUser } from "react-icons/hi";

type JobCardProps = {
  companyLogo: string | null;
  title: string;
  company: string;
  location: string;
  positions: number;
  closingDate: string;
};

export default function JobCard({
  companyLogo,
  title,
  company,
  location,
  positions,
  closingDate,
}: JobCardProps) {
  const router = useRouter();

  return (
    <div className="border p-4 shadow-md hover:shadow-lg transition cursor-pointer h-full flex flex-col">
      {/* Konten atas (boleh panjang, akan membungkus) */}
      <h3 className="text-xl text-[#25324B] font-semibold whitespace-normal break-words">
        {title}
      </h3>
      <p className="text-xs text-[#AA999F] font-semibold mb-2">
        {positions} Posisi
      </p>

      <div className="w-12 h-12 overflow-hidden flex items-center justify-center mb-2">
        {companyLogo ? (
          <img
            src={companyLogo}
            alt={`${company} logo`}
            className="object-contain w-full h-full"
          />
        ) : (
          <HiUser className="text-black w-12 h-12" />
        )}
      </div>

      <p className="text-[#8C90A4] whitespace-normal break-words">
        <span className="font-medium text-[#5A607F]">{company}</span>
        {" — "}
        {location}
      </p>

      {/* Spacer: dorong footer ke bawah agar sejajar antar card */}
      <div className="mt-auto" />

      {/* Footer (selalu sejajar) */}
      <hr className="border-gray-200 mb-3" />

      <div className="bg-[#F9F9F9] rounded-md px-3 py-2">
        <p className="text-xs text-[#A1A5B7]">
          <span className="font-medium">Penutupan:</span>{" "}
          <span className="text-[#BA0000]">{closingDate}</span>
        </p>
      </div>

      <button
        onClick={() => router.push("/jobs/email-marketing")}
        className="bg-[#0F67B1] text-white font-medium w-full shadow-md hover:opacity-90 transition mt-3 flex items-center justify-center gap-2 py-2 rounded-md"
      >
        Lihat Detail <ArrowRight size={20} />
      </button>
    </div>
  );
}
