//"use client";

//import * as React from "react";

//type Props = {
//  open: boolean;
//  onClose: () => void;
//  onConfirm: () => void;
//  title?: string;
//  description?: string;
//};

//export default function ConfirmLogoutDialog({
//  open,
//  onClose,
//  onConfirm,
//  title = "Anda yakin ingin keluar dari akun?",
//  description,
//}: Props) {
//  // Close on ESC
//  React.useEffect(() => {
//    if (!open) return;
//    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//    window.addEventListener("keydown", onKey);
//    return () => window.removeEventListener("keydown", onKey);
//  }, [open, onClose]);

//  if (!open) return null;

//  return (
//    <div className="fixed inset-0 z-50">
//      {/* Overlay */}
//      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

//      {/* Dialog */}
//      <div className="absolute inset-0 flex items-center justify-center p-4">
//        <div
//          role="dialog"
//          aria-modal="true"
//          className="w-full max-w-md rounded-[28px] border-2 border-[#0F67B1] bg-white shadow-xl"
//        >
//          <div className="p-8 text-center">
//            <h2 className="text-xl font-semibold leading-snug">{title}</h2>
//            {description ? (
//              <p className="mt-2 text-sm text-gray-600">{description}</p>
//            ) : null}

//            <div className="mt-8 flex items-center justify-center gap-3">
//              <button
//                onClick={onClose}
//                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//              >
//                Tidak
//              </button>
//              <button
//                onClick={onConfirm}
//                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//              >
//                Ya
//              </button>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//}

"use client";

import * as React from "react";
import { FiLogOut } from "react-icons/fi"; // icon logout

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmLogoutDialog({
  open,
  onClose,
  onConfirm,
}: Props) {
  // Close on ESC
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Dialog */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className="w-full max-w-md rounded-xl border-2 border-[#0F67B1] bg-white shadow-xl"
        >
          <div className="p-8 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <FiLogOut className="text-[#BA0000]" size={48} />
            </div>

            {/* Title */}
            <p className="font-semibold text-[#858585]">Apakah Anda Yakin Ingin Keluar ?</p>

            {/* Buttons */}
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                onClick={onConfirm}
                className="flex items-center justify-center h-11 w-36 rounded-md border border-[#0F67B1] text-red-500 font-semibold hover:bg-50 transition"
              >
                Keluar
              </button>
              <button
                onClick={onClose}
                className="flex items-center justify-center h-11 w-48 rounded-md bg-[#0F67B1] text-white font-semibold hover:bg-[#0f67b1]/80 transition"
              >
                Tetap Dalam Aplikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
