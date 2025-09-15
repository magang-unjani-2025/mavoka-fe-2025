"use client";

export type DetailLog = {
  date: string;
  activity?: string;
  output?: string;
  obstacle?: string;
  solution?: string;
};

export default function LogsTable({ logs }: { logs: DetailLog[] }) {
  return (
    // BORDER LUAR + SPASI ANTARA BORDER & TABEL
    <div className="rounded-xl border border-gray-300 bg-white p-3 md:p-4">
      <div className="overflow-x-auto">
        {/* BORDER TIPIS MENGELILINGI TABEL + CORNER ROUNDED */}
        <div className="min-w-[1200px] rounded-lg ring-1 ring-gray-200 overflow-hidden">
          <table className="w-full text-xs">
            <thead className="bg-[#0F67B1] text-white">
              <tr>
                {["TANGGAL", "DESKRIPSI KEGIATAN", "OUTPUT/HASIL KERJA", "HAMBATAN", "SOLUSI"].map(
                  (h, i) => (
                    <th key={i} className="px-4 py-3 text-left font-semibold">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {logs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-500 bg-white">
                    Belum ada isi laporan. Klik <b>Isi Laporan</b> untuk menambah data.
                  </td>
                </tr>
              ) : (
                logs.map((l, idx) => (
                  <tr key={idx} className="border-t border-gray-100 align-top text-xs">
                    <td className="px-4 py-3 text-gray-800 whitespace-nowrap">{l.date}</td>
                    <td className="px-4 py-3 text-gray-800">{l.activity}</td>
                    <td className="px-4 py-3 text-gray-800">{l.output}</td>
                    <td className="px-4 py-3 text-gray-800">{l.obstacle}</td>
                    <td className="px-4 py-3 text-gray-800">{l.solution}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
