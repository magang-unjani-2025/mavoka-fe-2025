import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type JobCardProps = {
  companyLogo: string;
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
    <div className="border p-4 shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="flex items-center gap-2 mb-3">
        <Image src={companyLogo} alt={company} width={48} height={48} />
      </div>

      <h3 className="text-xl text-[#25324B]">{title}</h3>
      <p className="text-xs text-[#AA999F] font-semibold mb-2">
        {positions} Posisi
      </p>
      <p className="text-[#C7C9D9]">
        {company} – {location}
      </p>

      <hr className="border-gray-200 mb-3" />

      <div className="bg-[#F9F9F9] rounded-md px-3 py-2">
        <p className="text-xs text-[#A1A5B7]">
          <span className="font-medium">Penutupan:</span>{" "}
          <span className="text-[#BA0000]">{closingDate}</span>
        </p>
      </div>

      <div className="flex justify-center w-full">
        <button
          onClick={() => router.push("/jobs/email-marketing")}
          className="bg-[#0F67B1] text-white text-sm font-medium w-full py-2 rounded-[3px] hover:opacity-90 transition mt-3 flex items-center justify-center gap-2"
        >
          Lihat Detail <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
