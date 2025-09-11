"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/registrasi/input";
import Button from "@/app/components/registrasi/button";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

export default function FormLupaSandi() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // ⬇️ MOCK: seolah-olah kirim OTP ke email (tidak call API)
    await new Promise((r) => setTimeout(r, 800));

    setSending(false);
    setOpen(true); // tampilkan popup sukses
  };

  const handleClose = () => {
    setOpen(false);
    router.push(
      `/lupa-kataSandi/otp-lupaSandi?email=${encodeURIComponent(email)}`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold text-center text-black">
          Lupa Kata sandi
        </h2>
        <p className="text-sm text-center text-gray-400">
          Masukan email Anda untuk memverifikasi proses
        </p>

        <div>
          <label className="block text-sm text-black mb-1">Email</label>
          <Input
            type="email"
            placeholder="emailanda@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-full"
          disabled={sending}
        >
          {sending ? "Mengirim..." : "Kirim"}
        </Button>
      </form>
      <SuccessModal
        open={open}
        title="Berhasil"
        message={
          <>
            Selamat kode sudah dikirim ke email Anda.
            <br />
            Silakan periksa email Anda.
          </>
        }
        onClose={handleClose}
      />
    </>
  );
}
