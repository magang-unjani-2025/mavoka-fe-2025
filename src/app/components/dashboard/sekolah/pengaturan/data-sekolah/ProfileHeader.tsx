export default function ProfileHeader({ onEdit }: { onEdit: () => void }) {
  return (
    <div className="flex items-center justify-between border-b pb-4 mb-6">
      <div>
        <h3 className="font-bold text-gray-800">Data Sekolah</h3>
        <p>
          Pastikan data sekolah terisi dengan benar untuk mempermudah proses pemberkasan.
        </p>
      </div>
    </div>
  );
}
  