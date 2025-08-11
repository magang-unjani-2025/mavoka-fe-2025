"use client";
import { useState } from "react";

interface EditUsernameModalProps {
  isOpen: boolean;
  currentUsername: string;
  onClose: () => void;
  onSave: (newUsername: string) => void;
}

export default function EditUsernameModal({
  isOpen,
  currentUsername,
  onClose,
  onSave,
}: EditUsernameModalProps) {
  const [username, setUsername] = useState(currentUsername);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white rounded-[50px] shadow-lg p-6 w-[535px] h-[233px] border-[5px] border-[#0F67B1] flex flex-col justify-center">
        <p className="font-semibold mb-4">Ubah Username Anda</p>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border mb-4 focus:outline-none focus:ring-1 focus:ring-[#0F67B1] rounded-[5px] px-3 py-2 text-sm"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            onClick={() => {
              onSave(username);
              onClose();
            }}
            className="bg-[#0F67B1] text-white hover:opacity-80"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
