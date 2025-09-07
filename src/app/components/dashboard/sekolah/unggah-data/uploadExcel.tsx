"use client";

import React, { useRef, useState } from "react";
import { saveAs } from "file-saver";
import { MdHighlightOff } from "react-icons/md";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

const TEMPLATE_URL = "/templates/Template-Unggah-Data-Siswa.xlsx";

// helper kecil utk ukuran file
const formatBytes = (bytes: number) => {
  if (!bytes && bytes !== 0) return "";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const val = (bytes / Math.pow(1024, i)).toFixed(1);
  return `${val}${["B", "KB", "MB", "GB"][i]}`;
};

const UploadExcel: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDownloadTemplate = () => {
    saveAs(TEMPLATE_URL, "Template_Data_Siswa.xls");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;

    // validasi: hanya .xls atau .xlsx
    const ok = /\.(xls|xlsx)$/i.test(f.name);
    if (!ok) {
      alert("Format file tidak valid. Harap pilih file Excel (.xls / .xlsx).");
      e.target.value = "";
      return;
    }
    setFile(f);
  };

  const handleBrowse = () => inputRef.current?.click();
  const handleRemove = () => {
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpload = () => {
    if (!file) return;
    // TODO: kirim FormData ke endpoint ketika tersedia
    setShowSuccess(true);
  };

  return (
    <div className="bg-white rounded-xl ">
      <div className="mb-4">
        <h2 className=" text-gray-900">Data Siswa</h2>
        <p className=" text-gray-500">
          Pastikan informasi data siswa terisi dengan benar.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4" />

      {/* ====== STATE: BELUM ADA FILE ====== */}
      {!file && (
        <>
          {/* Template link (klik untuk unduh) */}
          <div className="mb-6">
            <p className=" text-[#6D6D6D] mb-3">
              Tambahkan dokumen Anda, pastikan isi sesuai dengan template.
            </p>
            <button
              type="button"
              onClick={handleDownloadTemplate}
              className="flex items-center gap-2 text-sm px-0 py-0 shadow-none text-gray-700 hover:text-blue-600"
            >
              {/* Icon XLS */}
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.89629 0L19.8008 0.153365L29.7008 9.9V28.7039C29.7008 31.0787 27.6456 33 25.114 33H7.89629C5.35597 33 3.30078 31.0787 3.30078 28.7039V4.29609C3.30074 1.92128 5.35593 0 7.89629 0Z"
                  fill="#079455"
                />
                <path
                  d="M10.1477 20.603L11.4677 22.8338H11.5188L12.8452 20.603H14.408L12.4105 23.8757L14.4528 27.1484H12.8612L11.5188 24.9144H11.4677L10.1254 27.1484H8.54013L10.5888 23.8757L8.57848 20.603H10.1477ZM15.2837 27.1484V20.603H16.6676V26.0075H19.4737V27.1484H15.2837ZM23.941 22.4854C23.9154 22.2276 23.8057 22.0273 23.6118 21.8846C23.4179 21.7418 23.1547 21.6705 22.8224 21.6705C22.5965 21.6705 22.4058 21.7024 22.2503 21.7663C22.0947 21.8281 21.9754 21.9144 21.8923 22.0252C21.8113 22.136 21.7709 22.2617 21.7709 22.4023C21.7666 22.5195 21.7911 22.6218 21.8444 22.7092C21.8998 22.7965 21.9754 22.8722 22.0713 22.9361C22.1672 22.9979 22.278 23.0522 22.4037 23.0991C22.5294 23.1438 22.6636 23.1822 22.8064 23.2141L23.3944 23.3548C23.68 23.4187 23.942 23.5039 24.1807 23.6104C24.4193 23.717 24.626 23.848 24.8007 24.0036C24.9754 24.1591 25.1107 24.3423 25.2066 24.5533C25.3046 24.7642 25.3547 25.006 25.3568 25.2788C25.3547 25.6793 25.2524 26.0266 25.05 26.3207C24.8497 26.6126 24.5599 26.8395 24.1807 27.0014C23.8035 27.1612 23.3486 27.2411 22.816 27.2411C22.2876 27.2411 21.8273 27.1602 21.4353 26.9982C21.0454 26.8363 20.7407 26.5966 20.5212 26.2791C20.3039 25.9595 20.1899 25.5643 20.1792 25.0934H21.5184C21.5333 25.3129 21.5961 25.4961 21.7069 25.6431C21.8199 25.788 21.9701 25.8977 22.1576 25.9723C22.3472 26.0447 22.5613 26.081 22.8 26.081C23.0344 26.081 23.2378 26.0469 23.4104 25.9787C23.5851 25.9105 23.7204 25.8157 23.8163 25.6942C23.9122 25.5728 23.9601 25.4332 23.9601 25.2756C23.9601 25.1286 23.9165 25.005 23.8291 24.9048C23.7439 24.8047 23.6182 24.7195 23.452 24.6491C23.2879 24.5788 23.0866 24.5149 22.8479 24.4574L22.1352 24.2784C21.5834 24.1442 21.1476 23.9343 20.828 23.6488C20.5084 23.3633 20.3497 22.9787 20.3518 22.495C20.3497 22.0987 20.4552 21.7525 20.6682 21.4563C20.8834 21.1602 21.1785 20.929 21.5535 20.7628C21.9285 20.5966 22.3547 20.5135 22.8319 20.5135C23.3177 20.5135 23.7417 20.5966 24.104 20.7628C24.4683 20.929 24.7517 21.1602 24.9541 21.4563C25.1565 21.7525 25.2609 22.0955 25.2673 22.4854H23.941Z"
                  fill="white"
                />
                <path
                  d="M19.8219 6.732V0L29.7008 9.9H23.1149C20.1512 9.9 19.6847 7.788 19.8219 6.732Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </svg>
              <span className="underline">Template_Data_Siswa.xls</span>
            </button>
          </div>

          {/* Dropzone + helper + tombol dalam satu lebar */}
          <div className="w-[332px] tablet:w-[526px] desktop:w-[629px]">
            <div className="h-[196px] rounded-lg border-2 border-dashed border-[#1849D6] bg-blue-50/20 flex flex-col items-center justify-center gap-3">
              {/* Icon folder */}
              <div className="rounded-xl  p-3">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-[#1849D6]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3.75 6.75A2.25 2.25 0 016 4.5h3.379a2.25 2.25 0 011.59.659l.621.621A2.25 2.25 0 0013.171 6h4.579A2.25 2.25 0 0120 8.25v8.25A2.25 2.25 0 0117.75 18.75H6.25A2.25 2.25 0 014 16.5V6.75z" />
                </svg>
              </div>

              <input
                ref={inputRef}
                type="file"
                accept=".xls,.xlsx"
                onChange={handleFileChange}
                className="hidden"
              />

              <button
                type="button"
                onClick={handleBrowse}
                className="text-sm px-3 py-1.5 rounded-md border border-[#1849D6] text-[#1849D6] hover:bg-blue-50 shadow-sm"
              >
                Telusuri file
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Hanya mendukung file dengan format .xls
            </p>

            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={handleUpload}
                disabled={!file}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Unggah
              </button>
            </div>
          </div>
        </>
      )}

      {/* ====== STATE: SUDAH ADA FILE ====== */}
      {file && (
        <div className=" w-[332px] tablet:w-[526px] desktop:w-[629px]">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-3 flex items-center justify-between">
            {/* kiri: icon excel (sama seperti template) + nama file */}
            <div className="flex items-center gap-3">
              {/* Icon XLS */}
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.89629 0L19.8008 0.153365L29.7008 9.9V28.7039C29.7008 31.0787 27.6456 33 25.114 33H7.89629C5.35597 33 3.30078 31.0787 3.30078 28.7039V4.29609C3.30074 1.92128 5.35593 0 7.89629 0Z"
                  fill="#079455"
                />
                <path
                  d="M10.1477 20.603L11.4677 22.8338H11.5188L12.8452 20.603H14.408L12.4105 23.8757L14.4528 27.1484H12.8612L11.5188 24.9144H11.4677L10.1254 27.1484H8.54013L10.5888 23.8757L8.57848 20.603H10.1477ZM15.2837 27.1484V20.603H16.6676V26.0075H19.4737V27.1484H15.2837ZM23.941 22.4854C23.9154 22.2276 23.8057 22.0273 23.6118 21.8846C23.4179 21.7418 23.1547 21.6705 22.8224 21.6705C22.5965 21.6705 22.4058 21.7024 22.2503 21.7663C22.0947 21.8281 21.9754 21.9144 21.8923 22.0252C21.8113 22.136 21.7709 22.2617 21.7709 22.4023C21.7666 22.5195 21.7911 22.6218 21.8444 22.7092C21.8998 22.7965 21.9754 22.8722 22.0713 22.9361C22.1672 22.9979 22.278 23.0522 22.4037 23.0991C22.5294 23.1438 22.6636 23.1822 22.8064 23.2141L23.3944 23.3548C23.68 23.4187 23.942 23.5039 24.1807 23.6104C24.4193 23.717 24.626 23.848 24.8007 24.0036C24.9754 24.1591 25.1107 24.3423 25.2066 24.5533C25.3046 24.7642 25.3547 25.006 25.3568 25.2788C25.3547 25.6793 25.2524 26.0266 25.05 26.3207C24.8497 26.6126 24.5599 26.8395 24.1807 27.0014C23.8035 27.1612 23.3486 27.2411 22.816 27.2411C22.2876 27.2411 21.8273 27.1602 21.4353 26.9982C21.0454 26.8363 20.7407 26.5966 20.5212 26.2791C20.3039 25.9595 20.1899 25.5643 20.1792 25.0934H21.5184C21.5333 25.3129 21.5961 25.4961 21.7069 25.6431C21.8199 25.788 21.9701 25.8977 22.1576 25.9723C22.3472 26.0447 22.5613 26.081 22.8 26.081C23.0344 26.081 23.2378 26.0469 23.4104 25.9787C23.5851 25.9105 23.7204 25.8157 23.8163 25.6942C23.9122 25.5728 23.9601 25.4332 23.9601 25.2756C23.9601 25.1286 23.9165 25.005 23.8291 24.9048C23.7439 24.8047 23.6182 24.7195 23.452 24.6491C23.2879 24.5788 23.0866 24.5149 22.8479 24.4574L22.1352 24.2784C21.5834 24.1442 21.1476 23.9343 20.828 23.6488C20.5084 23.3633 20.3497 22.9787 20.3518 22.495C20.3497 22.0987 20.4552 21.7525 20.6682 21.4563C20.8834 21.1602 21.1785 20.929 21.5535 20.7628C21.9285 20.5966 22.3547 20.5135 22.8319 20.5135C23.3177 20.5135 23.7417 20.5966 24.104 20.7628C24.4683 20.929 24.7517 21.1602 24.9541 21.4563C25.1565 21.7525 25.2609 22.0955 25.2673 22.4854H23.941Z"
                  fill="white"
                />
                <path
                  d="M19.8219 6.732V0L29.7008 9.9H23.1149C20.1512 9.9 19.6847 7.788 19.8219 6.732Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </svg>

              <div>
                <p className=" text-gray-800">{file.name}</p>
                <p className=" text-gray-500">
                  {formatBytes(file.size)}
                </p>
              </div>
            </div>

            {/* kanan: tombol hapus */}
            <button
              type="button"
              onClick={handleRemove}
              aria-label="Hapus file"
              className="text-gray-500 hover:text-red-500 shadow-none"
            >
              <MdHighlightOff size={22} />
            </button>
          </div>

          {/* tombol unggah */}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleUpload}
              className="px-4 py-2 rounded-[5px] bg-[#0F67B1] text-white"
            >
              Unggah
            </button>
          </div>
        </div>
      )}

      <SuccessModal
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          setFile(null);
          if (inputRef.current) inputRef.current.value = "";
        }}
        title="Berhasil"
        message="Data Siswa yang Anda inputkan berhasil diunggah!"
        autoCloseMs={1500} // ⬅️ auto close ~200 ms
        // primaryText tidak diisi -> tidak ada tombol
      />
    </div>
  );
};

export default UploadExcel;
