"use client";
import { useRouter } from "next/navigation";
import { FaRegFileExcel } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

const data = [
  { no: 1, name: "Data Perusahaan Terdaftar", role: "perusahaan" },
  { no: 2, name: "Data Lembaga Pelatihan Terdaftar", role: "lembaga" },
  { no: 3, name: "Data Sekolah Terdaftar", role: "sekolah" },
  { no: 4, name: "Data Siswa Terdaftar", role: "siswa" },
];

export default function LaporanUmum() {
  const router = useRouter();

  return (
    <>
      <h2 className="text-lg font-bold mb-4">Data Pengguna</h2>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0F67B1] text-white text-center text-sm font-bold">
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3">Download</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.no}
                  onClick={() => router.push(`/laporan-umum/${item.role}`)}
                  className="hover:bg-gray-50 cursor-pointer text-sm"
                >
                  <td className="px-4 py-2 border-t text-center">{item.no}</td>
                  <td className="px-4 py-2 border-t">{item.name}</td>
                  <td className="px-4 py-2 border-t text-center">
                    <div
                      className="flex justify-center items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="bg-[#CDFFCD] hover:bg-green-500 text-[#007F00] border border-[#007F00] px-3 py-1 rounded text-xs">
                        <FaRegFileExcel className="inline mr-1" />
                        Ekspor Excel
                      </button>
                      <button className="bg-[#FFE0E0] hover:bg-red-400 text-[#D30000] border border-[#D30000] px-3 py-1 rounded text-xs">
                        <FaRegFilePdf className="inline mr-1" />
                        Ekspor PDF
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
