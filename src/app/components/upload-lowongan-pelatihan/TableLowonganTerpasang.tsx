// "use client";
// import React, { useState } from "react";
// import { FaRegEdit } from "react-icons/fa";
// import ConfirmModal from "./ConfirmModal";
// import FormAktifkanModal from "./FormAktifkanModal";
// import TambahBranch from "./TambahBranch";
// import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
// import {
//   dataPerusahaanUnggah,
//   LowonganPerusahaan,
// } from "@/app/data/dataPerusahaanUnggah";
// import { dataLpkUnggah, LowonganLpk } from "@/app/data/dataLpkUnggah";

// type Role = "perusahaan" | "lpk";

// export default function TableLowonganTerpasang({ role }: { role: Role }) {
//   const [data, setData] = useState<(LowonganPerusahaan | LowonganLpk)[]>(
//     role === "perusahaan" ? dataPerusahaanUnggah : dataLpkUnggah
//   );

//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;

//   const sortedData =
//     role === "perusahaan"
//       ? [...(data as LowonganPerusahaan[])].sort((a, b) => {
//           if (a.status === "Aktif" && b.status !== "Aktif") return -1;
//           if (a.status !== "Aktif" && b.status === "Aktif") return 1;
//           return 0;
//         })
//       : data;

//   const currentData = sortedData.slice(startIndex, startIndex + rowsPerPage);

//   const [showConfirm, setShowConfirm] = useState(false);
//   const [showFormAktifkan, setShowFormAktifkan] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [actionType, setActionType] = useState<
//     "Aktifkan" | "Nonaktifkan" | null
//   >(null);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const [showTambahBranch, setShowTambahBranch] = useState(false);

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handleAktifkan = (index: number) => {
//     if (role === "perusahaan") {
//       const updated = [...(data as LowonganPerusahaan[])];
//       updated[startIndex + index].status = "Aktif";
//       setData(updated as any);
//     }
//   };

//   const handleNonaktifkan = (index: number) => {
//     if (role === "perusahaan") {
//       const updated = [...(data as LowonganPerusahaan[])];
//       updated[startIndex + index].status = "Tidak";
//       setData(updated as any);
//     }
//   };

//   return (
//     <div>
//       <div className="overflow-auto rounded-xl border border-gray-200">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-[#0F67B1] text-white text-center text-xs font-bold">
//               <th className="px-4 py-3">NO</th>
//               {role === "perusahaan" ? (
//                 <>
//                   <th className="px-4 py-3">POSISI</th>
//                   <th className="px-4 py-3">DESKRIPSI</th>
//                   <th className="px-4 py-3">KUOTA</th>
//                   <th className="px-4 py-3">CAPAIAN PEMBELAJARAN</th>
//                   <th className="px-4 py-3">STATUS</th>
//                   <th className="px-4 py-3">AKSI STATUS</th>
//                 </>
//               ) : (
//                 <>
//                   <th className="px-4 py-3">NAMA PELATIHAN</th>
//                   <th className="px-4 py-3">DESKRIPSI</th>
//                   <th className="px-4 py-3">KATEGORI</th>
//                   <th className="px-4 py-3">CAPAIAN PEMBELAJARAN</th>
//                   <th className="px-4 py-3">BATCH</th>
//                 </>
//               )}
//               <th className="px-4 py-3">DETAIL</th>
//               <th className="px-4 py-3">AKSI</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((item: any, index: number) => (
//               <tr
//                 key={item.id}
//                 className="hover:bg-gray-50 text-xs text-center"
//               >
//                 <td className="px-4 py-2 border-t">{startIndex + index + 1}</td>

//                 {role === "perusahaan" ? (
//                   <>
//                     <td className="px-4 py-2 border-t text-left">
//                       {item.posisi}
//                     </td>
//                     <td className="px-4 py-2 border-t text-left">
//                       {item.deskripsi}
//                     </td>
//                     <td className="px-4 py-2 border-t">{item.kuota}</td>
//                     <td className="px-4 py-2 border-t text-left">
//                       {item.capaian}
//                     </td>
//                     <td className="px-4 py-2 border-t">
//                       <span
//                         className={`inline-flex items-center gap-2 px-3 py-1 rounded-full whitespace-nowrap ${
//                           item.status === "Aktif"
//                             ? "bg-green-200 text-green-800"
//                             : "bg-red-200 text-red-800"
//                         }`}
//                       >
//                         <span
//                           className={`w-2 h-2 rounded-full ${
//                             item.status === "Aktif"
//                               ? "bg-green-800 text-green-800"
//                               : "bg-red-800 text-red-800"
//                           }`}
//                         ></span>
//                         {item.status}
//                       </span>
//                     </td>
//                     <td className="px-4 py-2 border-t text-center">
//                       {item.status === "Aktif" ? (
//                         <button
//                           onClick={() => {
//                             setSelectedIndex(index);
//                             setActionType("Nonaktifkan");
//                             setShowConfirm(true);
//                           }}
//                           className="px-2 py-1 rounded-[5px] bg-red-700 text-white hover:bg-red-800 transition"
//                         >
//                           Nonaktifkan
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => {
//                             setSelectedIndex(index);
//                             setActionType("Aktifkan");
//                             setShowConfirm(true);
//                           }}
//                           className="px-2 py-1 rounded-[5px] bg-green-600 text-white hover:bg-green-700 transition"
//                         >
//                           Aktifkan
//                         </button>
//                       )}
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td className="px-4 py-2 border-t text-left">
//                       {item.namaPelatihan}
//                     </td>
//                     <td className="px-4 py-2 border-t text-left">
//                       {item.deskripsi}
//                     </td>
//                     <td className="px-4 py-2 border-t">{item.kategori}</td>
//                     <td className="px-4 py-2 border-t text-left">
//                       {item.capaian}
//                     </td>
//                     <td className="px-4 py-2 border-t">
//                       <button
//                         onClick={() => setShowTambahBranch(true)}
//                         className="px-2 py-1 rounded-[5px] bg-[#0F67B1] text-white hover:bg-[#0c599b] transition"
//                       >
//                         + Tambah Batch
//                       </button>
//                     </td>
//                   </>
//                 )}

//                 {/* Detail & Aksi umum */}
//                 <td className="px-4 py-2 border-t">
//                   <button className="px-3 py-1 rounded-full bg-[#0F67B1] text-white hover:bg-[#0c599b] transition">
//                     Detail
//                   </button>
//                 </td>
//                 <td className="px-4 py-2 border-t flex justify-center">
//                   <button className="flex items-center text-[#0F67B1] shadow-none border-none">
//                     <FaRegEdit />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="py-2 px-3 flex items-center gap-4 mt-2 text-xs rounded-b-xl justify-end">
//         <div className="flex items-center gap-2">
//           <span>Rows per page:</span>
//           <select
//             value={rowsPerPage}
//             onChange={(e) => {
//               setRowsPerPage(Number(e.target.value));
//               setCurrentPage(1);
//             }}
//             className="text-xs border border-gray-300 rounded px-2 py-1 text-gray-700"
//           >
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={20}>20</option>
//           </select>
//         </div>

//         <div className="flex items-center gap-2">
//           <span>
//             {startIndex + 1}-{Math.min(startIndex + rowsPerPage, data.length)}{" "}
//             of {data.length}
//           </span>
//           <div className="flex gap-2">
//             <button
//               onClick={handlePrev}
//               disabled={currentPage === 1}
//               className={`px-2 py-1 rounded bg-white ${
//                 currentPage === 1
//                   ? "text-gray-300 cursor-not-allowed"
//                   : "text-gray-800 hover:bg-gray-200"
//               }`}
//             >
//               &lt;
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={currentPage === totalPages}
//               className={`px-2 py-1 rounded bg-white ${
//                 currentPage === totalPages
//                   ? "text-gray-300 cursor-not-allowed"
//                   : "text-gray-800 hover:bg-gray-200"
//               }`}
//             >
//               &gt;
//             </button>
//           </div>
//         </div>
//         {role === "perusahaan" && (
//           <>
//             <ConfirmModal
//               open={showConfirm}
//               onClose={() => setShowConfirm(false)}
//               message={
//                 actionType === "Nonaktifkan"
//                   ? "Apakah Anda yakin ingin menonaktifkan lowongan ini?"
//                   : "Apakah Anda yakin ingin mengaktifkan lowongan ini?"
//               }
//               onConfirm={() => {
//                 if (selectedIndex !== null) {
//                   if (actionType === "Nonaktifkan") {
//                     handleNonaktifkan(selectedIndex);
//                     setSuccessMessage("Lowongan berhasil dinonaktifkan!");
//                     setShowSuccess(true);
//                   } else if (actionType === "Aktifkan") {
//                     setShowFormAktifkan(true);
//                   }
//                 }
//                 setShowConfirm(false);
//               }}
//             />

//             <SuccessModal
//               open={showSuccess}
//               title="Berhasil"
//               message={successMessage}
//               onClose={() => setShowSuccess(false)}
//             />

//             <FormAktifkanModal
//               open={showFormAktifkan}
//               onClose={() => setShowFormAktifkan(false)}
//               onSubmit={(formData) => {
//                 if (selectedIndex !== null) {
//                   handleAktifkan(selectedIndex);
//                 }
//                 setShowFormAktifkan(false);
//               }}
//             />
//           </>
//         )}
//         {role === "lpk" && (
//           <TambahBranch
//             open={showTambahBranch}
//             onClose={() => setShowTambahBranch(false)}
//             onSubmit={(data) => {
//               console.log("Data batch baru:", data);
//               setShowTambahBranch(false);
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import ConfirmModal from "./ConfirmModal";
import FormAktifkanModal from "./FormAktifkanModal";
import TambahBranch from "./TambahBranch";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
import {
  dataPerusahaanUnggah,
  LowonganPerusahaan,
} from "@/app/data/dataPerusahaanUnggah";
import { dataLpkUnggah, LowonganLpk } from "@/app/data/dataLpkUnggah";
import Pagination from "@/app/components/dashboard/Pagination";

type Role = "perusahaan" | "lpk";

export default function TableLowonganTerpasang({ role }: { role: Role }) {
  const [data, setData] = useState<(LowonganPerusahaan | LowonganLpk)[]>(
    role === "perusahaan" ? dataPerusahaanUnggah : dataLpkUnggah
  );

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;

  const sortedData =
    role === "perusahaan"
      ? [...(data as LowonganPerusahaan[])].sort((a, b) => {
          if (a.status === "Aktif" && b.status !== "Aktif") return -1;
          if (a.status !== "Aktif" && b.status === "Aktif") return 1;
          return 0;
        })
      : data;

  const currentData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const [showConfirm, setShowConfirm] = useState(false);
  const [showFormAktifkan, setShowFormAktifkan] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [actionType, setActionType] = useState<
    "Aktifkan" | "Nonaktifkan" | null
  >(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [showTambahBranch, setShowTambahBranch] = useState(false);

  const handleAktifkan = (index: number) => {
    if (role === "perusahaan") {
      const updated = [...(data as LowonganPerusahaan[])];
      updated[startIndex + index].status = "Aktif";
      setData(updated as any);
    }
  };

  const handleNonaktifkan = (index: number) => {
    if (role === "perusahaan") {
      const updated = [...(data as LowonganPerusahaan[])];
      updated[startIndex + index].status = "Tidak";
      setData(updated as any);
    }
  };

  return (
    <div>
      <div className="overflow-auto rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0F67B1] text-white text-center text-xs font-bold">
              <th className="px-4 py-3">NO</th>
              {role === "perusahaan" ? (
                <>
                  <th className="px-4 py-3">POSISI</th>
                  <th className="px-4 py-3">DESKRIPSI</th>
                  <th className="px-4 py-3">KUOTA</th>
                  <th className="px-4 py-3">CAPAIAN PEMBELAJARAN</th>
                  <th className="px-4 py-3">STATUS</th>
                  <th className="px-4 py-3">AKSI STATUS</th>
                </>
              ) : (
                <>
                  <th className="px-4 py-3">NAMA PELATIHAN</th>
                  <th className="px-4 py-3">DESKRIPSI</th>
                  <th className="px-4 py-3">KATEGORI</th>
                  <th className="px-4 py-3">CAPAIAN PEMBELAJARAN</th>
                  <th className="px-4 py-3">BATCH</th>
                </>
              )}
              <th className="px-4 py-3">DETAIL</th>
              <th className="px-4 py-3">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item: any, index: number) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 text-xs text-center"
              >
                <td className="px-4 py-2 border-t">{startIndex + index + 1}</td>

                {role === "perusahaan" ? (
                  <>
                    <td className="px-4 py-2 border-t text-left">
                      {item.posisi}
                    </td>
                    <td className="px-4 py-2 border-t text-left">
                      {item.deskripsi}
                    </td>
                    <td className="px-4 py-2 border-t">{item.kuota}</td>
                    <td className="px-4 py-2 border-t text-left">
                      {item.capaian}
                    </td>
                    <td className="px-4 py-2 border-t">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full whitespace-nowrap ${
                          item.status === "Aktif"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.status === "Aktif"
                              ? "bg-green-800"
                              : "bg-red-800"
                          }`}
                        ></span>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 border-t text-center">
                      {item.status === "Aktif" ? (
                        <button
                          onClick={() => {
                            setSelectedIndex(index);
                            setActionType("Nonaktifkan");
                            setShowConfirm(true);
                          }}
                          className="px-2 py-1 rounded-[5px] bg-red-700 text-white hover:bg-red-800 transition"
                        >
                          Nonaktifkan
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedIndex(index);
                            setActionType("Aktifkan");
                            setShowConfirm(true);
                          }}
                          className="px-2 py-1 rounded-[5px] bg-green-600 text-white hover:bg-green-700 transition"
                        >
                          Aktifkan
                        </button>
                      )}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-2 border-t text-left">
                      {item.namaPelatihan}
                    </td>
                    <td className="px-4 py-2 border-t text-left">
                      {item.deskripsi}
                    </td>
                    <td className="px-4 py-2 border-t">{item.kategori}</td>
                    <td className="px-4 py-2 border-t text-left">
                      {item.capaian}
                    </td>
                    <td className="px-4 py-2 border-t">
                      <button
                        onClick={() => setShowTambahBranch(true)}
                        className="px-2 py-1 rounded-[5px] bg-[#0F67B1] text-white hover:bg-[#0c599b] transition"
                      >
                        + Tambah Batch
                      </button>
                    </td>
                  </>
                )}

                {/* Detail & Aksi umum */}
                <td className="px-4 py-2 border-t">
                  <button className="px-3 py-1 rounded-full bg-[#0F67B1] text-white hover:bg-[#0c599b] transition">
                    Detail
                  </button>
                </td>
                <td className="px-4 py-2 border-t flex justify-center">
                  <button className="flex items-center text-[#0F67B1] shadow-none border-none">
                    <FaRegEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Ganti dengan komponen Pagination */}
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onPageChange={(p) => setCurrentPage(p)}
        perPage={rowsPerPage}
        onPerPageChange={(n) => {
          setRowsPerPage(n);
          setCurrentPage(1);
        }}
        perPageOptions={[5, 10, 20]}
      />

      {/* Modal bagian perusahaan */}
      {role === "perusahaan" && (
        <>
          <ConfirmModal
            open={showConfirm}
            onClose={() => setShowConfirm(false)}
            message={
              actionType === "Nonaktifkan"
                ? "Apakah Anda yakin ingin menonaktifkan lowongan ini?"
                : "Apakah Anda yakin ingin mengaktifkan lowongan ini?"
            }
            onConfirm={() => {
              if (selectedIndex !== null) {
                if (actionType === "Nonaktifkan") {
                  handleNonaktifkan(selectedIndex);
                  setSuccessMessage("Lowongan berhasil dinonaktifkan!");
                  setShowSuccess(true);
                } else if (actionType === "Aktifkan") {
                  setShowFormAktifkan(true);
                }
              }
              setShowConfirm(false);
            }}
          />

          <SuccessModal
            open={showSuccess}
            title="Berhasil"
            message={successMessage}
            onClose={() => setShowSuccess(false)}
          />

          <FormAktifkanModal
            open={showFormAktifkan}
            onClose={() => setShowFormAktifkan(false)}
            onSubmit={(formData) => {
              if (selectedIndex !== null) {
                handleAktifkan(selectedIndex);
              }
              setShowFormAktifkan(false);
            }}
          />
        </>
      )}

      {/* Modal bagian lpk */}
      {role === "lpk" && (
        <TambahBranch
          open={showTambahBranch}
          onClose={() => setShowTambahBranch(false)}
          onSubmit={(data) => {
            console.log("Data batch baru:", data);
            setShowTambahBranch(false);
          }}
        />
      )}
    </div>
  );
}
