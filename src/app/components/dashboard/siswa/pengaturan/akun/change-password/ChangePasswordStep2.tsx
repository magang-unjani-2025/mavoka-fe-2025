"use client";

interface ChangePasswordStep2Props {
  newPassword: string;
  confirmPassword: string;
  setNewPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ChangePasswordStep2({
  newPassword,
  confirmPassword,
  setNewPassword,
  setConfirmPassword,
  onNext,
  onBack,
}: ChangePasswordStep2Props) {
  return (
    <>
      <p className="font-semibold mb-2">Masukkan Kata Sandi Baru</p>
      <input
        type="password"
        placeholder="Kata Sandi Baru"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="border rounded px-3 py-2 w-full text-sm"
      />
      <input
        type="password"
        placeholder="Konfirmasi Kata Sandi Baru"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border rounded px-3 py-2 w-full text-sm mt-2"
      />
      <div className="flex gap-2 mt-4">
        <button
          className="bg-[#0F67B1] text-white px-4 py-2 rounded"
          onClick={onNext}
        >
          Lanjutkan
        </button>
        <button onClick={onBack} className="border px-4 py-2 rounded">
          Kembali
        </button>
      </div>
    </>
  );
}
