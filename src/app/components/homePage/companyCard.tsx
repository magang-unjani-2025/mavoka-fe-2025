import Image from "next/image";
import { useRouter } from "next/navigation";

type CompanyCardProps = {
  logo: string;
  name: string;
  positions: number;
  detailLink: string;
};

export default function CompanyCard({
  logo,
  name,
  positions,
  detailLink,
}: CompanyCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(detailLink)}
      className="cursor-pointer rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition flex items-center gap-3"
    >
      <div className="p-[2px] rounded-lg"  style={{
          background: "linear-gradient(135deg, #52E5E7 2%, #130CB7 98%)",
        }}>
        <div className="bg-white rounded-lg flex items-center justify-center w-12 h-12">
          <Image src={logo} alt={name} width={32} height={32} />
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{positions} Open position</p>
      </div>
    </div>
  );
}
