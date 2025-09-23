import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { HiUser } from "react-icons/hi";
import { useMemo, useState } from "react";

type JobCardProps = {
  id: number | string; // ⬅️ tambahin id
  companyLogo: string | null;
  title: string;
  company: string;
  location: string;
  positions: number;
  closingDate: string;
};

export default function JobCard({
  id,
  companyLogo,
  title,
  company,
  location,
  positions,
  closingDate,
}: JobCardProps) {
  const router = useRouter();
  const [imgError, setImgError] = useState(false);

  const normalizedLogo = useMemo(() => {
    if (!companyLogo) return null;
    let src = companyLogo.trim();
    // if already absolute http(s) leave
    if (!/^https?:\/\//i.test(src)) {
      if (!src.startsWith('/')) src = '/' + src;
      if (/^\/(logos|storage)\//.test(src)) {
        const base = (process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:8000').replace(/\/$/, '');
        src = base + src;
      }
    }
    return src;
  }, [companyLogo]);

  return (
    <div className="border p-4 shadow-md hover:shadow-lg transition cursor-pointer h-full flex flex-col">
      {/* Header (title + positions) gets fixed vertical space so the rest of the card aligns across rows */}
      <div className="mb-2 min-h-[80px] flex flex-col">
        <h3
          className="text-xl text-[#25324B] font-semibold whitespace-normal break-words"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2, // clamp to 2 lines so very long titles do not stretch card
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {title}
        </h3>
        <p className="text-xs text-[#AA999F] font-semibold mt-1">{positions} Posisi</p>
      </div>

      <div className="w-12 h-12 overflow-hidden flex items-center justify-center mb-2">
        {normalizedLogo && !imgError ? (
          <img
            src={normalizedLogo}
            alt={`${company} logo`}
            className="object-contain w-full h-full"
            onError={() => setImgError(true)}
            loading="lazy"
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

      <div className="mt-auto" />

      <hr className="border-gray-200 mb-3" />

      <div className="bg-[#F9F9F9] rounded-md px-3 py-2">
        <p className="text-xs text-[#A1A5B7]">
          <span className="font-medium">Penutupan:</span>{" "}
          <span className="text-[#BA0000]">{closingDate}</span>
        </p>
      </div>

      <button
        onClick={() => router.push(`/lowongan/${id}`)}
        className="bg-[#0F67B1] text-white font-medium w-full shadow-md hover:opacity-90 transition mt-3 flex items-center justify-center gap-2 py-2 rounded-md"
      >
        Lihat Detail <ArrowRight size={20} />
      </button>
    </div>
  );
}
