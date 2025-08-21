import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiUser } from "react-icons/hi";

type CompanyCardProps = {
  logo?: string | null;
  name: string;
  detailLink: string;
};

export default function CompanyCard({
  logo,
  name,
  detailLink,
}: CompanyCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(detailLink)}
      className="cursor-pointer rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition flex items-center gap-3"
    >
      <div
        className="p-[2px] rounded-lg"
        style={{
          background: "linear-gradient(135deg, #52E5E7 2%, #130CB7 98%)",
        }}
      >
        <div className="bg-white rounded-lg flex items-center justify-center w-12 h-12">
          {logo ? (
            <Image src={logo} alt={name} width={32} height={32} />
          ) : (
            <HiUser className="w-8 h-8 text-black" />
          )}
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold">{name}</h3>
      </div>
    </div>
  );
}
