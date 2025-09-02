import { FaEdit } from "react-icons/fa";

export default function ProfileHeader({ onEdit }: { onEdit: () => void }) {
  return (
    <div className="flex items-center justify-between border-b pb-4 mb-6">
      <div>
        <h3 className="font-bold text-gray-800">Data Perusahaan</h3>
        <p>
          Pastikan data perusahaan terisi benar untuk mempermudah proses pemberkasan.
        </p>
      </div>
      <button
        onClick={onEdit}
        className="flex items-center gap-2 text-[#0F67B1] hover:text-[#116ACC] rounded-none shadow-none"
      >
        <FaEdit /> Ubah Data
      </button>
    </div>
  );
}
