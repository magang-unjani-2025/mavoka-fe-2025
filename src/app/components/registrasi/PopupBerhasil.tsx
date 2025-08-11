//"use client";

//import { HiCheckCircle } from "react-icons/hi";

//type RegistrasiBerhasilProps = {
//  message: string;
//  onClose: () => void;
//};

//export default function RegistrasiBerhasil({ message, onClose }: RegistrasiBerhasilProps) {
//  return (
//    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
//      <div className="bg-white rounded-lg p-6 relative max-w-sm w-full shadow-lg text-center">
//        <button
//          onClick={onClose}
//          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl font-bold"
//        >
//          &times;
//        </button>

//        <HiCheckCircle className="mx-auto text-green-500 text-5xl mb-2" />

//        <h2 className="text-gray-900 mb-3">Berhasil</h2>
//        <p className="text-[#858585]">{message}</p>
//      </div>
//    </div>
//  );
//}

// components/registrasi/PopupBerhasil.tsx
"use client";
import { HiCheckCircle } from "react-icons/hi";

type Props = {
  open: boolean;
  title?: string;
  message?: React.ReactNode;
  onClose: () => void;
  primaryText?: string;      // kalau TIDAK diisi -> tidak menampilkan tombol
  showCloseIcon?: boolean;   // tampilkan ikon silang optional
};

export default function SuccessModal({
  open,
  title = "Berhasil",
  message,
  onClose,
  primaryText,
  showCloseIcon = false,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl ring-2 ring-[#0F67B1]">
        {showCloseIcon && (
          <button
            onClick={onClose}
            className="shadow-none rounded-none absolute right-3 top-3 text-2xl leading-none text-gray-500 hover:text-gray-700"
            aria-label="Tutup"
          >
            &times;
          </button>
        )}

        <HiCheckCircle className="mx-auto mb-3 text-6xl text-green-500" />
        <h2 className="mb-2 text-gray-900">{title}</h2>
        {message && <p className="mb-5 text-gray-500">{message}</p>}

        {primaryText && (
          <button
            onClick={onClose}
            className="mx-auto block w-full rounded-full bg-[#0F67B1] px-4 py-2.5 text-white hover:bg-blue-700"
          >
            {primaryText}
          </button>
        )}
      </div>
    </div>
  );
}
