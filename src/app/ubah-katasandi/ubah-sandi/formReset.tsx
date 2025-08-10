"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "@/app/components/registrasi/button";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

export default function NewPasswordPage() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") ?? "";

  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd.length < 6) {
      alert("Kata sandi minimal 6 karakter");
      return;
    }
    if (pwd !== confirm) {
      alert("Kata sandi tidak sama");
      return;
    }

    setSaving(true);

    // ⬇️ MOCK: seolah menyimpan password baru (tanpa API)
    await new Promise((r) => setTimeout(r, 800));

    setSaving(false);
    setOpen(true); // tampilkan popup sukses
  };

  const handleClose = () => {
    setOpen(false);
    router.replace("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="w-full max-w-md border-[5px] border-[#0F67B1] rounded-[50px] p-6 shadow-sm">
        <h2 className="text-xl font-bold text-center text-black">Ubah Kata Sandi</h2>
        <p className="text-center text-sm text-gray-500 mb-4">
          {email ? `Untuk akun: ${email}` : "Masukkan kata sandi baru Anda"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-black mb-1">Kata Sandi Baru</label>
            <input
              type="password"
              className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Ulangi Kata Sandi</label>
            <input
              type="password"
              className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F67B1]"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full rounded-full" disabled={saving}>
            {saving ? "Menyimpan..." : "Perbarui Kata Sandi"}
          </Button>
        </form>
      </div>

      <SuccessModal
        open={open}
        title="Kata Sandi Diperbarui"
        message="Kata sandi Anda berhasil diperbarui. Silakan masuk kembali."
        onClose={handleClose}
      />
    </div>
  );
}
