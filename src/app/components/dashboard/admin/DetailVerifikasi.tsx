import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";

export function DetailVerifikasi() {
  const data = [
    {
      img: "/img/admin/Icon_perusahaan.svg",
      nama: "Perusahaan",
      sudah: 12,
      belum: 3,
    },
    {
      img: "/img/admin/Icon_lpk.svg",
      nama: "Lembaga Pelatihan",
      sudah: 8,
      belum: 5,
    },
    {
      img: "/img/admin/Icon_sekolah.svg",
      nama: "Sekolah",
      sudah: 20,
      belum: 1,
    },
  ];

  return (
    <div className="overflow-x-auto">
     <Table className="[&_*]:px-2">
        <TableBody className="divide-y">
          {data.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className="w-20">
                <Image
                  src={item.img}
                  alt={item.nama}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </TableCell>
              <TableCell className="font-medium text-black">
                {item.nama}
              </TableCell>
              <TableCell className="text-center text-black">
                <div className="text-lg font-bold">{item.sudah}</div>
                <div className="text-xs text-[#C4BECC]">Sudah diverifikasi</div>
              </TableCell>
              <TableCell className="text-center text-black">
                <div className="text-lg font-bold">{item.belum}</div>
                <div className="text-xs text-[#C4BECC]">Belum diverifikasi</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <a href="" className="text-[#0F67B1]">
                    Lihat Semua
                  </a>
                  <HiOutlineArrowRight className="text-[#0F67B1]" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
