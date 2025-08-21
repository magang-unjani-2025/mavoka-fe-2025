import { Card } from "flowbite-react";

type TopCardProps = {
  title: string;
  value: number;
  label: string;
};

export function TopCard({ title, value, label }: TopCardProps) {
  return (
    <Card className="shadow-none border-none">
      <div className="p-2 space-y-2">
        <h3 className="text-base">{title}</h3>
        <h1 className="text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">
          {value}
        </h1>
        <p className="font-normal text-[#B2ABBD] dark:text-gray-400">{label}</p>
        <a href="" className="text-[#0F67B1]">Lihat semua <span className="ml-1">&rarr;</span></a>
      </div>
    </Card> 
  );
}
