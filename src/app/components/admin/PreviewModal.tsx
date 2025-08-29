"use client";

import React from "react";
import { X } from "lucide-react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: any[];
  headers: string[];
  role: string;
  onExportExcel: () => void;
  onExportPDF: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  title,
  data,
  headers,
  role,
  onExportExcel,
  onExportPDF,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[95%] max-w-6xl rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-100 px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Info Header */}
        <div className="px-6 py-4 text-center border-b">
          <h1 className="text-2xl font-bold">Laporan {role}</h1>
          <p className="text-gray-600">Alamat: Jl. Contoh No.123, Indonesia</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto max-h-[500px] px-6 py-4">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200 text-gray-700 uppercase">
              <tr>
                <th className="border px-4 py-2">No</th>
                {headers.map((header, idx) => (
                  <th key={idx} className="border px-4 py-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  {headers.map((header, idx) => (
                    <td key={idx} className="border px-4 py-2">
                      {item[header.toLowerCase()] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 px-6 py-4 border-t">
          <button
            onClick={onExportExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Ekspor Excel
          </button>
          <button
            onClick={onExportPDF}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Ekspor PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
