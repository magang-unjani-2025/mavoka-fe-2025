"use client";

interface ChangePasswordStep1Props {
  oldPassword: string;
  setOldPassword: (value: string) => void;
  onNext: () => void;
  onCancel: () => void;
}

export default function ChangePasswordStep1({
  oldPassword,
  setOldPassword,
  onNext,
  onCancel,
}: ChangePasswordStep1Props) {
  return (
    <>
      <p className="font-semibold mb-2">Masukkan Kata Sandi Lama</p>
      <input
        type="password"
        placeholder="Kata Sandi Lama"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        className="border rounded px-3 py-2 w-full text-sm"
      />
      <div className="flex gap-2 mt-4">
        <button
          className="bg-[#0F67B1] text-white px-4 py-2 rounded"
          onClick={onNext}
        >
          Lanjutkan
        </button>
        <button onClick={onCancel} className="border px-4 py-2 rounded">
          Batal
        </button>
      </div>
    </>
  );
}
