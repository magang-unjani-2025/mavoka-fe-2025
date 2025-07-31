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
    <div className="border p-4 shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center gap-2 mb-3">
        <Image src={companyLogo} alt={company} width={32} height={32} />
      </div>

      <h2 className="text-xl">{title}</h2>
      <p className="text-sm text-gray-500">
        {company} – {location}
      </p>
      <p className="text-xs text-black mb-2">{positions} Posisi</p>

      <hr className="border-gray-200 mb-3" />

      <div className="bg-gray-100 rounded-md px-3 py-2">
        <p className="text-xs text-gray-600">
          <span className="font-medium">Penutupan:</span> {closingDate}
        </p>
      </div>

      <div className="flex justify-center w-full">
        <button
          onClick={() => router.push("/jobs/email-marketing")}
          className="bg-[#0F67B1] text-white text-sm font-medium px-6 py-2 rounded-lg hover:opacity-90 transition mt-3 flex items-center gap-2"
        >
          Lihat Detail <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
