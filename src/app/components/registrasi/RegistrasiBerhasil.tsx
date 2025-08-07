"use client";

import { HiCheckCircle } from "react-icons/hi";

type RegistrasiBerhasilProps = {
  message: string;
  onClose: () => void;
};

export default function RegistrasiBerhasil({ message, onClose }: RegistrasiBerhasilProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 relative max-w-sm w-full shadow-lg text-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        <HiCheckCircle className="mx-auto text-green-500 text-5xl mb-2" />

        <h2 className="text-gray-900 mb-3">Berhasil</h2>
        <p className="text-[#858585]">{message}</p>
      </div>
    </div>
  );
}
