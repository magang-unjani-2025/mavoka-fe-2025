"use client";

interface ChangePasswordStep3Props {
  otp: string;
  setOtp: (value: string) => void;
  onFinish: () => void;
  onBack: () => void;
}

export default function ChangePasswordStep3({
  otp,
  setOtp,
  onFinish,
  onBack,
}: ChangePasswordStep3Props) {
  return (
    <>
      <p className="font-semibold mb-2">Masukkan OTP</p>
      <input
        type="text"
        placeholder="Kode OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border rounded px-3 py-2 w-full text-sm"
      />
      <div className="flex gap-2 mt-4">
        <button
          className="bg-[#0F67B1] text-white px-4 py-2 rounded"
          onClick={onFinish}
        >
          Selesai
        </button>
        <button onClick={onBack} className="border px-4 py-2 rounded">
          Kembali
        </button>
      </div>
    </>
  );
}
